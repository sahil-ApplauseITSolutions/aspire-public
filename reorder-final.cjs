const fs = require('fs');

const content = fs.readFileSync('src/pages/Programs.jsx', 'utf8');

// Desired order
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

// Find all h3 titles and their positions
const titleRegex = /<h3 className="text-lg font-bold text-\[#3b2a1a\] mb-2">\s*(.+?)\s*<\/h3>/g;
const titles = [];
let match;

while ((match = titleRegex.exec(content)) !== null) {
  titles.push({
    title: match[1],
    position: match.index
  });
}

console.log(`Found ${titles.length} cards total`);

// Find EEDP position
const eedpIndex = titles.findIndex(t => t.title === 'EEDP');
console.log(`EEDP is at index ${eedpIndex}`);

// Find the end of EEDP card
const eedpTitlePos = titles[eedpIndex].position;
const closingPattern = '</div>\n              </div>\n              </div>';

// Search for closing pattern AFTER eedp title position
let searchPos = eedpTitlePos;
let eedpCardEnd = content.indexOf(closingPattern, searchPos);
if (eedpCardEnd !== -1) {
  eedpCardEnd += closingPattern.length;
}

console.log(`EEDP card ends at position: ${eedpCardEnd}`);

// Find modal
const modalMarker = '{/* Modal for programs without detail pages */}';
const modalPos = content.indexOf(modalMarker);
console.log(`Modal starts at position: ${modalPos}`);

// Get everything before cards section
const beforeCards = content.substring(0, eedpCardEnd);

// Get everything after cards section  
const afterCards = content.substring(modalPos);

// Extract each card after EEDP
const cardsAfterEEDP = titles.slice(eedpIndex + 1);
console.log(`\nCards after EEDP: ${cardsAfterEEDP.length}`);

// Extract card blocks
const cardBlocks = [];

for (let i = 0; i < cardsAfterEEDP.length; i++) {
  const card = cardsAfterEEDP[i];
  const startPos = card.position;
  
  // Find the start of the card div (search backwards from title)
  let cardDivStart = startPos;
  while (cardDivStart > eedpCardEnd) {
    const substr = content.substring(cardDivStart - 100, cardDivStart);
    const divMatch = substr.lastIndexOf('<div\n                className="bg-white rounded-xl shadow-lg overflow-hidden"');
    if (divMatch !== -1) {
      cardDivStart = cardDivStart - 100 + divMatch;
      break;
    }
    cardDivStart -= 50;
  }
  
  // Find card end (search forward from title)
  let cardEnd = content.indexOf(closingPattern, startPos);
  if (cardEnd !== -1) {
    cardEnd += closingPattern.length;
  }
  
  const cardBlock = content.substring(cardDivStart, cardEnd);
  cardBlocks.push({
    title: card.title,
    block: cardBlock
  });
}

console.log(`Extracted ${cardBlocks.length} card blocks`);

// Create map
const cardMap = new Map();
cardBlocks.forEach(card => {
  cardMap.set(card.title, card.block);
});

// Build reordered section
let reorderedSection = '';

for (const title of desiredOrder) {
  if (cardMap.has(title)) {
    reorderedSection += '\n\n              ' + cardMap.get(title).trim();
    cardMap.delete(title);
  } else {
    console.warn(`Warning: "${title}" not found`);
  }
}

// Add remaining cards
for (const [title, block] of cardMap) {
  console.log(`Adding remaining card: ${title}`);
  reorderedSection += '\n\n              ' + block.trim();
}

// Reconstruct file
const newContent = beforeCards + reorderedSection + '\n            </div>\n          </div>\n      </section>\n\n\n      ' + afterCards;

// Write file
fs.writeFileSync('src/pages/Programs.jsx', newContent, 'utf8');

console.log('\n✓ Reordering complete!');
