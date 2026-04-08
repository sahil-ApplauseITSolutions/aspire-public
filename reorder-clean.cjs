const fs = require('fs');

const content = fs.readFileSync('src/pages/Programs.jsx', 'utf8');

// Exact desired order after EEDP (29 cards)
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
const eedpTitlePos = allTitles[eedpIndex].position;

// Find end of EEDP card
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

// Extract all cards after EEDP
const cardsAfterEEDP = allTitles.slice(eedpIndex + 1);
console.log(`Cards after EEDP: ${cardsAfterEEDP.length}`);

// Build a map of title -> card block
const cardMap = new Map();

for (let i = 0; i < cardsAfterEEDP.length; i++) {
  const card = cardsAfterEEDP[i];
  const titlePos = card.position;
  
  // Find start of card (search backwards)
  let searchStart = Math.max(eedpCardEnd, titlePos - 600);
  let cardStart = titlePos;
  
  const sectionBefore = content.substring(searchStart, titlePos);
  const commentMatch = sectionBefore.lastIndexOf('\n\n              {/*');
  const divMatch = sectionBefore.lastIndexOf('\n\n              <div');
  
  if (commentMatch !== -1 && commentMatch > divMatch) {
    cardStart = searchStart + commentMatch + 2;
  } else if (divMatch !== -1) {
    cardStart = searchStart + divMatch + 2;
  }
  
  // Find end of card
  let cardEnd = content.indexOf(closingPattern, titlePos);
  if (cardEnd !== -1) {
    cardEnd += closingPattern.length;
  }
  
  const cardBlock = content.substring(cardStart, cardEnd);
  cardMap.set(card.title, cardBlock);
}

console.log(`Extracted ${cardMap.size} unique cards`);

// Verify all desired cards exist
let allFound = true;
for (const title of desiredOrder) {
  if (!cardMap.has(title)) {
    console.error(`ERROR: Card "${title}" not found!`);
    allFound = false;
  }
}

if (!allFound) {
  console.error('Not all cards found. Aborting.');
  process.exit(1);
}

// Build reordered section
let reorderedSection = '';

for (const title of desiredOrder) {
  reorderedSection += '\n\n' + cardMap.get(title).trim();
}

// Reconstruct file
const newContent = beforeCards + reorderedSection + '\n            </div>\n          </div>\n      </section>\n\n\n      ' + afterCards;

// Write file
fs.writeFileSync('src/pages/Programs.jsx', newContent, 'utf8');

console.log('\n✓ Reordering complete!');
console.log('Cards are now in the correct order.');
