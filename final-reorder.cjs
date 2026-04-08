const fs = require('fs');

const content = fs.readFileSync('src/pages/Programs.jsx', 'utf8');

// Desired final order (all cards after EEDP)
const desiredOrder = [
  'Financial Statement Analysis & Interpretation',
  'Financial Modelling',
  'Research Analyst Certification',
  'Hedge Fund Accounting & Fund Operations',
  'Certificate in Financial Reporting',
  'Certificate in Performance Management',
  'Certificate in Audit',
  'Mutual Fund Distribution and Investment Advisory',
  'Certificate in Portfolio Management',
  'Fundamentals of Financial Services',
  'Global Banking & Investment Banking Operations',
  'Alternative Investments',
  'Banking Operations, KYC & AML Compliance',
  'Certificate in Financial Markets',
  'Technical Analysis',
  'Capital Markets & Equity Derivatives',
  'Stock Market Analytics using Excel and PowerBI',
  'Python for Finance / Power BI for Finance',
  'Machine Learning for Finance',
  'Generative AI for Automation',
  'Fundamental of Digital Manufacturing',
  'Digital Marketing Basics',
  'SEO and Google Ads',
  'Social Media Marketing',
  'English - Competitive Exams',
  'Math - Competitive Exams',
  'Logic - Competitive Exams',
  'Fundamental of Industrial Communication Protocols',
  'Introduction to Industrial Robotics',
  // Remaining cards at the end
  'Cloud Application Developer',
  'Advanced Cloud Infrastructure Analyst',
  'Principles of IoT - Software Analyst',
  'Application Developer - Web & Mobile',
  'Certified Financial Fraud Investigator',
  'BASE (Business Awareness & Skill Enhancement)'
];

// Find all h3 titles
const titleRegex = /<h3 className="text-lg font-bold text-\[#3b2a1a\] mb-2">\s*(.+?)\s*<\/h3>/g;
const allTitles = [];
let match;

while ((match = titleRegex.exec(content)) !== null) {
  allTitles.push({
    title: match[1],
    position: match.index
  });
}

console.log(`Found ${allTitles.length} total cards`);

// Find EEDP
const eedpIndex = allTitles.findIndex(t => t.title === 'EEDP');
if (eedpIndex === -1) {
  console.error('EEDP not found');
  process.exit(1);
}

console.log(`EEDP at position ${eedpIndex + 1}`);

// Find end of EEDP card
const eedpTitlePos = allTitles[eedpIndex].position;
const closingPattern = '</div>\n              </div>\n              </div>';
let eedpCardEnd = content.indexOf(closingPattern, eedpTitlePos);
if (eedpCardEnd !== -1) {
  eedpCardEnd += closingPattern.length;
}

// Find modal
const modalMarker = '{/* Modal for programs without detail pages */}';
const modalPos = content.indexOf(modalMarker);

// Get sections
const beforeCards = content.substring(0, eedpCardEnd);
const afterCards = content.substring(modalPos);

// Extract all cards after EEDP by title
const cardsAfterEEDP = allTitles.slice(eedpIndex + 1);

// Build a map of title -> card block
const cardMap = new Map();

for (let i = 0; i < cardsAfterEEDP.length; i++) {
  const card = cardsAfterEEDP[i];
  const titlePos = card.position;
  
  // Find start of card (search backwards for the div or comment)
  let searchStart = Math.max(eedpCardEnd, titlePos - 500);
  let cardStart = titlePos;
  
  // Look for comment marker or div start
  const sectionBefore = content.substring(searchStart, titlePos);
  const commentMatch = sectionBefore.lastIndexOf('\n\n              {/*');
  const divMatch = sectionBefore.lastIndexOf('\n\n              <div');
  
  if (commentMatch !== -1 && commentMatch > divMatch) {
    cardStart = searchStart + commentMatch + 2; // +2 to skip the \n\n
  } else if (divMatch !== -1) {
    cardStart = searchStart + divMatch + 2;
  }
  
  // Find end of card
  let cardEnd = content.indexOf(closingPattern, titlePos);
  if (cardEnd !== -1) {
    cardEnd += closingPattern.length;
  }
  
  const cardBlock = content.substring(cardStart, cardEnd);
  
  // Only add if not already in map (avoid duplicates)
  if (!cardMap.has(card.title)) {
    cardMap.set(card.title, cardBlock);
  }
}

console.log(`Extracted ${cardMap.size} unique cards`);

// Build reordered section
let reorderedSection = '';

for (const title of desiredOrder) {
  if (cardMap.has(title)) {
    reorderedSection += '\n\n' + cardMap.get(title).trim();
  } else {
    console.warn(`Warning: "${title}" not found`);
  }
}

// Reconstruct file
const newContent = beforeCards + reorderedSection + '\n            </div>\n          </div>\n      </section>\n\n\n      ' + afterCards;

// Write file
fs.writeFileSync('src/pages/Programs.jsx', newContent, 'utf8');

console.log('\n✓ Final reordering complete!');
console.log('Please run: node analyze-cards.cjs to verify');
