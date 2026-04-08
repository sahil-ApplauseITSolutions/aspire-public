const fs = require('fs');

const filePath = 'src/pages/Programs.jsx';
const content = fs.readFileSync(filePath, 'utf8');

// Find all h3 titles to see current order
const titleRegex = /<h3 className="text-lg font-bold text-\[#3b2a1a\] mb-2">\s*(.+?)\s*<\/h3>/g;

const titles = [];
let match;

while ((match = titleRegex.exec(content)) !== null) {
  titles.push(match[1]);
}

console.log('Current card order:');
titles.forEach((title, index) => {
  console.log(`${index + 1}. ${title}`);
});

console.log(`\nTotal cards: ${titles.length}`);

// Find EEDP position
const eedpIndex = titles.indexOf('EEDP');
console.log(`\nEEDP is at position: ${eedpIndex + 1}`);
console.log(`\nCards after EEDP:`);
titles.slice(eedpIndex + 1).forEach((title, index) => {
  console.log(`${index + 1}. ${title}`);
});
