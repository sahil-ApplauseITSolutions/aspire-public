const fs = require('fs');

const filePath = 'c:\\\\Workspace\\\\aspire-public\\\\src\\\\pages\\\\Programs.jsx';
const content = fs.readFileSync(filePath, 'utf8');

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

// Let's dynamically find all markers
const regex = /              \{\/\* (.*?) \*\/\}/g;
let match;
const markers = {};

// Find all matches
while ((match = regex.exec(content)) !== null) {
    markers[match[1]] = match[0];
}

const cards = {};
for (let name of order) {
    let keyToFind = name;
    if (name.includes("AML")) {
        const foundKey = Object.keys(markers).find(k => k.includes("AML"));
        if (foundKey) keyToFind = foundKey;
    }
    
    if (!markers[keyToFind]) {
        console.error("Could not find comment for:", name);
        process.exit(1);
    }
    
    const markerStr = markers[keyToFind];
    const startIdx = content.indexOf(markerStr);
    
    let endIdx1 = content.indexOf('              {/* ', startIdx + markerStr.length);
    let endIdx2 = content.indexOf('            </div>\n          </div>', startIdx);
    
    let endIdx = endIdx1;
    if (endIdx === -1 || (endIdx2 !== -1 && endIdx2 < endIdx1)) {
        endIdx = endIdx2;
    }
    
    cards[name] = content.substring(startIdx, endIdx);
}

const firstCardMarker = '              {/* Financial Statement Analysis & Interpretation */}';
let startAllIdx = content.indexOf(firstCardMarker);
if (startAllIdx === -1) {
    // If not found, use global finding or other card
    startAllIdx = content.indexOf(markers["Financial Statement Analysis & Interpretation"]);
}
if (startAllIdx === -1) {
    console.error("Could not find startAllIdx");
    process.exit(1);
}

let endAllIdx = content.indexOf('            </div>\n          </div>\n      </section>', startAllIdx);
if (endAllIdx === -1) {
    endAllIdx = content.indexOf('            </div>\n          </div>', startAllIdx);
}

let newText = "";
for (let name of order) {
    newText += cards[name];
}

const newContent = content.substring(0, startAllIdx) + newText + content.substring(endAllIdx);
fs.writeFileSync(filePath, newContent, 'utf8');
console.log("Successfully reordered!");
