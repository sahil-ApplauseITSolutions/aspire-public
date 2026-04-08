const fs = require('fs');

const content = fs.readFileSync('src/pages/Programs.jsx', 'utf8');

// Find EEDP card end
const eedpMatch = content.match(/<h3 className="text-lg font-bold text-\[#3b2a1a\] mb-2">\s*EEDP\s*<\/h3>/);
console.log('Found EEDP:', !!eedpMatch);

if (eedpMatch) {
  const eedpPos = eedpMatch.index;
  console.log('EEDP position:', eedpPos);
  
  // Find card end pattern after EEDP
  const closingPattern = '</div>\n              </div>\n              </div>';
  const eedpEndPos = content.indexOf(closingPattern, eedpPos) + closingPattern.length;
  console.log('EEDP card ends at:', eedpEndPos);
  
  // Find modal
  const modalPos = content.indexOf('{/* Modal for programs without detail pages */}');
  console.log('Modal starts at:', modalPos);
  
  // Extract section between
  const cardsSection = content.substring(eedpEndPos, modalPos);
  console.log('Cards section length:', cardsSection.length);
  console.log('First 500 chars of cards section:');
  console.log(cardsSection.substring(0, 500));
  
  // Try to match first card
  const firstCardMatch = cardsSection.match(/\n\n              <div\s+className="bg-white/);
  console.log('\nFound first card div:', !!firstCardMatch);
  
  if (firstCardMatch) {
    console.log('First card starts at position:', firstCardMatch.index);
    console.log('Context:', cardsSection.substring(firstCardMatch.index, firstCardMatch.index + 200));
  }
}
