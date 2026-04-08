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

// Split the content carefully by looking for each card.
// We will look for   {/* Name */}
// and find its start and end.

let cards = {};

// We know all these exist in the file.
for (let name of order) {
    let searchName = name;
    if (name.includes("AML")) {
        searchName = "Banking Operations, KYC & AML Compliance"; // Based on view_file output!
    }
    const marker = `              {/* ${searchName} */}`;
    const startIdx = content.indexOf(marker);
    if (startIdx === -1) {
        console.error("Marker not found:", marker);
        process.exit(1);
    }
    
    // The card ends before the next `              {/* ` or before `            </div>\n          </div>\n      </section>`
    let endIdx1 = content.indexOf('              {/* ', startIdx + marker.length);
    let endIdx2 = content.indexOf('            </div>\n          </div>', startIdx);
    
    let endIdx = endIdx1;
    if (endIdx === -1 || (endIdx2 !== -1 && endIdx2 < endIdx1)) {
        endIdx = endIdx2;
    }
    
    if (endIdx === -1) {
         console.error("End not found for:", name);
         process.exit(1);
    }
    
    cards[name] = content.substring(startIdx, endIdx);
}

// Now we replace the big block of all these cards with their reordered version.
const firstCardMarker = '              {/* Financial Statement Analysis & Interpretation */}';
const startAllIdx = content.indexOf(firstCardMarker);

// Find the last card's end (which should be just before `            </div>\n          </div>`)
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
console.log("Successfully reordered using precise markers!");

