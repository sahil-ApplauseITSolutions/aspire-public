const fs = require('fs');

const filePath = 'c:\\\\Workspace\\\\aspire-public\\\\src\\\\pages\\\\Programs.jsx';
let content = fs.readFileSync(filePath, 'utf8');

const startStr = '              {/* Financial Statement Analysis & Interpretation */}';
const startIdx = content.indexOf(startStr);
if (startIdx === -1) {
    console.error("Could not find start index");
    process.exit(1);
}

// Find the end of the grid.
const endStr1 = '            </div>\n          </div>\n      </section>';
const endStr2 = '            </div>\n          </div>\n';
const endStr3 = '            </div>\n          </div>';

let endIdx = content.indexOf(endStr1, startIdx);
if (endIdx === -1) endIdx = content.indexOf(endStr2, startIdx);
if (endIdx === -1) endIdx = content.indexOf(endStr3, startIdx);
if (endIdx === -1) {
    // try finding the next closing divs
    const match = content.substring(startIdx).match(/\n            <\/div>\n          <\/div>/);
    if (match) {
        endIdx = startIdx + match.index;
    }
}

if (endIdx === -1) {
    console.error("Could not find end index");
    process.exit(1);
}

const cardsText = content.substring(startIdx, endIdx);

// We will split the cardsText by "              {/* " (exactly 14 spaces + {/* )
const cardsRaw = cardsText.split(/\n\s*\{\/\*\s*/);

const cards = {};

for (let i = 0; i < cardsRaw.length; i++) {
    const chunk = cardsRaw[i].trim();
    if (!chunk) continue;
    
    // chunk looks like "Card Name */}\n              <div..."
    const closeIdx = chunk.indexOf('*/}');
    if (closeIdx === -1) {
        console.error("Could not find */} in a chunk:", chunk.substring(0, 50));
        continue; // Or probably just part of something else
    }
    
    let name = chunk.substring(0, closeIdx).trim();
    if (name.includes("AML")) {
        name = "Banking Operations, KYC & Anti\u2013Money Laundering (AML) Compliance"; // Use exact string or normalize
    }
    
    // Restore the full text of the card
    const cardText = '              {/* ' + chunk.substring(0, closeIdx) + ' */}' + chunk.substring(closeIdx + 3);
    cards[name] = cardText.trimEnd() + '\n';
}

const order = [
    "Financial Statement Analysis & Interpretation",
    "Financial Modelling",
    "Research Analyst Certification",
    "Hedge Fund Accounting & Fund Operations",
    "Certificate in Financial Reporting",
    "Certificate in Performance Management",
    "Certificate in Audit",
    "Mutual Fund Distribution and Investment Advisory",
    "Certificate in Portfolio Management",
    "Fundamentals of Financial Services",
    "Global Banking & Investment Banking Operations",
    "Alternative Investments",
    "Banking Operations, KYC & AML Compliance",
    "Certificate in Financial Markets",
    "Technical Analysis",
    "Capital Markets & Equity Derivatives",
    "Stock Market Analytics using Excel and PowerBI",
    "Python for Finance / Power BI for Finance",
    "Machine Learning for Finance",
    "Generative AI for Automation",
    "Fundamental of Digital Manufacturing",
    "Digital Marketing Basics",
    "SEO and Google Ads",
    "Social Media Marketing",
    "English - Competitive Exams",
    "Math - Competitive Exams",
    "Logic - Competitive Exams",
    "Fundamental of Industrial Communication Protocols",
    "Introduction to Industrial Robotics"
];

let newCardsText = "";
let missing = false;

for (let name of order) {
    let keyToFind = name;
    if (name.includes("AML")) {
        // Find existing key with AML
        keyToFind = Object.keys(cards).find(k => k.includes("AML"));
    }
    
    if (cards[keyToFind]) {
        newCardsText += cards[keyToFind] + "\n";
    } else {
        console.error("Missing card:", name);
        missing = true;
    }
}

if (!missing) {
    const newContent = content.substring(0, startIdx) + newCardsText.trimEnd() + "\n" + content.substring(endIdx);
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log("Successfully reordered");
} else {
    console.error("Failed due to missing cards.");
    console.error("Available keys in parsed cards:");
    for (const key in cards) {
        console.error("  ", key);
    }
}
