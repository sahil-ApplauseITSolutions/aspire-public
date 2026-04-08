const fs = require('fs');

// Read the file
const filePath = 'src/pages/Programs.jsx';
let content = fs.readFileSync(filePath, 'utf8');

// Define the desired order after EEDP (positions 9+)
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

// Extract all card blocks after EEDP
const eedpMarker = '{/* EEDP */}';
const eedpIndex = content.indexOf(eedpMarker);

if (eedpIndex === -1) {
  console.error('Could not find EEDP marker');
  process.exit(1);
}

// Find the end of EEDP card
const eedpCardStart = eedpIndex;
let eedpCardEnd = content.indexOf('</div>\n              </div>\n              </div>', eedpCardStart);
eedpCardEnd = content.indexOf('\n\n', eedpCardEnd) + 2;

const beforeEEDP = content.substring(0, eedpCardEnd);

// Find where modal section starts
const modalMarker = '{/* Modal for programs without detail pages */}';
const modalIndex = content.indexOf(modalMarker);

if (modalIndex === -1) {
  console.error('Could not find modal marker');
  process.exit(1);
}

// Extract the section between EEDP and modal
const cardsSection = content.substring(eedpCardEnd, modalIndex);
const afterModal = content.substring(modalIndex);

// Extract individual card blocks using regex
const cardRegex = /\n\n              \{\/\* (.+?) \*\/\}\n              <div[\s\S]*?<\/div>\n              <\/div>\n              <\/div>/g;

const cards = [];
let match;

while ((match = cardRegex.exec(cardsSection)) !== null) {
  const cardName = match[1];
  const cardBlock = match[0];
  cards.push({ name: cardName, block: cardBlock });
}

console.log(`Found ${cards.length} cards after EEDP`);
console.log('Card names:', cards.map(c => c.name));

// Create a map for quick lookup
const cardMap = new Map();
cards.forEach(card => {
  cardMap.set(card.name, card.block);
});

// Build the reordered cards section
let reorderedCards = '';

for (const cardName of desiredOrder) {
  if (cardMap.has(cardName)) {
    reorderedCards += cardMap.get(cardName);
    cardMap.delete(cardName); // Remove from map
  } else {
    console.warn(`Warning: Card "${cardName}" not found in file`);
  }
}

// Add any remaining cards that weren't in the desired order
for (const [name, block] of cardMap) {
  console.log(`Adding remaining card: ${name}`);
  reorderedCards += block;
}

// Reconstruct the file
const newContent = beforeEEDP + reorderedCards + '\n            </div>\n          </div>\n      </section>\n\n\n      ' + afterModal;

// Write the file
fs.writeFileSync(filePath, newContent, 'utf8');

console.log('✓ Cards reordered successfully!');
