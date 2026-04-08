const fs = require('fs');

const filePath = 'c:\\\\Workspace\\\\aspire-public\\\\src\\\\pages\\\\Programs.jsx';
let content = fs.readFileSync(filePath, 'utf8');

// Normalize to LF to avoid issues
content = content.replace(/\r\n/g, '\n');

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
    "Banking Operations, KYC & Anti–Money Laundering (AML) Compliance",
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

// We find the starting point of the cards exactly
const startMarker = '              {/* Financial Statement Analysis & Interpretation */}';
const cardsTextStart = content.indexOf(startMarker);

// And we find the exact end point of the card list container
const endMarker = '            </div>\n          </div>\n      </section>';
const cardsTextEnd = content.indexOf(endMarker, cardsTextStart);

if (cardsTextStart === -1 || cardsTextEnd === -1) {
    console.error("Could not find start or end bounds.");
    console.error("Start boundary:", cardsTextStart);
    console.error("End boundary:", cardsTextEnd);
    process.exit(1);
}

const cardsText = content.substring(cardsTextStart, cardsTextEnd);

// Split safely into pieces
const chunksRaw = ("\n" + cardsText).split('\n              {/* ');
const cards = {};

for (let i = 1; i < chunksRaw.length; i++) {
    const chunk = chunksRaw[i];
    const nameEnd = chunk.indexOf('*/}');
    let name = chunk.substring(0, nameEnd).trim();
    if (name.includes("AML")) {
        name = "Banking Operations, KYC & AML Compliance"; 
    }
    
    // Store full block
    cards[name] = '              {/* ' + chunk;
}

let newText = "";
for (let name of order) {
    let key = name;
    if (name.includes("AML")) {
        key = Object.keys(cards).find(k => k.includes("AML"));
    }
    
    if (cards[key]) {
        newText += cards[key];
    } else {
        console.error("Missing ", name);
        process.exit(1);
    }
}

const finalContent = content.substring(0, cardsTextStart) + newText + content.substring(cardsTextEnd);

fs.writeFileSync(filePath, finalContent, 'utf8');
console.log("Successfully reordered!");
