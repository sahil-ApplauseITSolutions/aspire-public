const fs = require('fs');

const filePath = 'src/pages/Programs.jsx';
let content = fs.readFileSync(filePath, 'utf8');

// Desired order after EEDP
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
  'Introduction to Industrial Robotics'
];

// Find EEDP card end
const eedpTitleMatch = content.match(/<h3 className="text-lg font-bold text-\[#3b2a1a\] mb-2">\s*EEDP\s*<\/h3>/);
if (!eedpTitleMatch) {
  console.error('Could not find EEDP card');
  process.exit(1);
}

// Find the end of EEDP card (the closing </div> tags)
let eedpEndIndex = eedpTitleMatch.index;
// Find the card div that contains this h3
let cardStartIndex = content.lastIndexOf('<div', eedpEndIndex);
// Find where this card ends - look for the pattern of 3 closing divs
let searchFrom = eedpEndIndex;
let closingPattern = '</div>\n              </div>\n              </div>';
eedpEndIndex = content.indexOf(closingPattern, searchFrom) + closingPattern.length;

const beforeCards = content.substring(0, eedpEndIndex);

// Find modal section
const modalMarker = '{/* Modal for programs without detail pages */}';
const modalIndex = content.indexOf(modalMarker);
if (modalIndex === -1) {
  console.error('Could not find modal section');
  process.exit(1);
}

const afterCards = content.substring(modalIndex);

// Extract all cards between EEDP and modal
const cardsSection = content.substring(eedpEndIndex, modalIndex);

// Extract individual cards by finding each card div
const cards = [];
const cardDivPattern = /\n\n              (?:{\/\* (.+?) \*\/}\n              )?<div\s+className="bg-white rounded-xl shadow-lg overflow-hidden"[\s\S]*?<\/div>\n              <\/div>\n              <\/div>/g;

let match;
while ((match = cardDivPattern.exec(cardsSection)) !== null) {
  const fullBlock = match[0];
  // Extract title from the card
  const titleMatch = fullBlock.match(/<h3 className="text-lg font-bold text-\[#3b2a1a\] mb-2">\s*(.+?)\s*<\/h3>/);
  if (titleMatch) {
    const title = titleMatch[1];
    cards.push({ title, block: fullBlock });
  }
}

console.log(`Extracted ${cards.length} cards`);

// Create map for lookup
const cardMap = new Map();
cards.forEach(card => {
  cardMap.set(card.title, card.block);
});

// Build reordered section
let reorderedSection = '';

for (const title of desiredOrder) {
  if (cardMap.has(title)) {
    reorderedSection += cardMap.get(title);
    cardMap.delete(title);
  } else {
    console.warn(`Warning: "${title}" not found`);
  }
}

// Add remaining cards
for (const [title, block] of cardMap) {
  console.log(`Adding remaining card: ${title}`);
  reorderedSection += block;
}

// Reconstruct file
const newContent = beforeCards + reorderedSection + '\n            </div>\n          </div>\n      </section>\n\n\n      ' + afterCards;

// Write file
fs.writeFileSync(filePath, newContent, 'utf8');

console.log('✓ Reordering complete!');
