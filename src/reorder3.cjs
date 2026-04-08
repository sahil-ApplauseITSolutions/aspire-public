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

const cardsTextStart = content.indexOf('              {/* Financial Statement Analysis & Interpretation */}');
const cardsTextEnd = content.indexOf('            </div>\n          </div>\n      </section>', cardsTextStart);

if (cardsTextStart === -1 || cardsTextEnd === -1) {
    console.error("Could not find start or end bounds.");
    process.exit(1);
}

// Ensure cardsTextEnd captures exactly up to `            </div>\n          </div>`
const cardsText = content.substring(cardsTextStart, cardsTextEnd);

// Split safely into pieces based on `              {/* `
// Using lookahead to correctly split without chewing up chars:
// Note: we just split via `\n              {/* ` to keep things clean.
const chunksRaw = ("\n" + cardsText).split('\n              {/* ');

const cards = {};

for (let i = 1; i < chunksRaw.length; i++) {
    const chunk = chunksRaw[i];
    const nameEnd = chunk.indexOf('*/}');
    let name = chunk.substring(0, nameEnd).trim();
    if (name.includes("AML")) {
        name = "Banking Operations, KYC & AML Compliance"; 
        // Just keeping a standard name to match `order` if needed, 
        // wait, I put the exact string in order array above!
    }
    
    // We store the full text including the prefix
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
        console.log("Keys found:", Object.keys(cards));
        process.exit(1);
    }
}

// Also verify we didn't miss anything or gain extra syntax errors
// Note parsing: newText starts with `              {/* ` and ends with a `</div>\n` which is correct!
const finalContent = content.substring(0, cardsTextStart) + newText + content.substring(cardsTextEnd);

fs.writeFileSync(filePath, finalContent, 'utf8');
console.log("Successfully reordered 3 - robustly!");
