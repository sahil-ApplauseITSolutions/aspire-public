const fs = require('fs');

// Read the file
let content = fs.readFileSync('src/pages/Programs.jsx', 'utf8');

// Pattern to match button elements with onClick
const buttonPattern = /\s+<button\s+onClick=\{\(\) => setSelectedProgram\(\{[\s\S]*?\}\)\}\s+className="text-orange-500[^"]*"\s*>\s*View Details →\s*<\/button>/g;

// Remove all matching buttons
content = content.replace(buttonPattern, '');

// Write back
fs.writeFileSync('src/pages/Programs.jsx', content, 'utf8');

console.log('Removed all button-based View Details elements');
