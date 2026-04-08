const fs = require('fs');

const filePath = 'c:\\\\Workspace\\\\aspire-public\\\\src\\\\pages\\\\Programs.jsx';
let content = fs.readFileSync(filePath, 'utf8');

const startMarker = '              {/* Financial Statement Analysis & Interpretation */}';
const startIdx = content.indexOf(startMarker);
if (startIdx === -1) {
    console.log("Start marker not found.");
    process.exit(1);
}

let endMarker = '            </div>\n          </div>\n      </section>';
let endIdx = content.indexOf(endMarker, startIdx);

if (endIdx === -1) {
    endMarker = '            </div>\n          </div>\n';
    endIdx = content.indexOf(endMarker, startIdx);
}

const cardsText = content.substring(startIdx, endIdx);

const parts = cardsText.split('              {/* ');
const parsedBlocks = {};

for (const part of parts) {
    if (!part.trim()) continue;
    
    const nameEnd = part.indexOf('*/}');
    if (nameEnd === -1) continue;
    
    const name = part.substring(0, nameEnd).trim();
    parsedBlocks[name] = '              {/* ' + part;
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

let newCardsText = "";
for (const name of order) {
    let lookupName = name;
    // Special handling for the AML block which might have a different character for hyphen
    if (!parsedBlocks[name]) {
        if (name.includes("AML")) {
            // Find the key corresponding to AML
            const keys = Object.keys(parsedBlocks);
            const amlKey = keys.find(k => k.includes("AML"));
            if (amlKey) lookupName = amlKey;
        }
    }
    
    if (parsedBlocks[lookupName]) {
        newCardsText += parsedBlocks[lookupName].replace(/\n+$/, '') + "\n\n";
    } else {
        console.log("Missing block:", name);
    }
}

const newContent = content.substring(0, startIdx) + newCardsText.replace(/\n\n$/, '') + "\n" + content.substring(endIdx);

fs.writeFileSync(filePath, newContent, 'utf8');
console.log("Successfully reordered");

