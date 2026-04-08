#!/usr/bin/env python3
import re

# Read the file
with open('src/pages/Programs.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Desired order after EEDP
desired_order = [
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
]

# Find EEDP card
eedp_match = re.search(r'<h3 className="text-lg font-bold text-\[#3b2a1a\] mb-2">\s*EEDP\s*</h3>', content)
if not eedp_match:
    print("Error: Could not find EEDP card")
    exit(1)

# Find the end of EEDP card - look backwards for the card start, then forward for card end
eedp_h3_pos = eedp_match.start()

# Find the card div that contains this h3 (search backwards)
card_start_pattern = r'<div\s+className="bg-white rounded-xl shadow-lg overflow-hidden"'
matches = list(re.finditer(card_start_pattern, content[:eedp_h3_pos]))
if not matches:
    print("Error: Could not find EEDP card start")
    exit(1)

eedp_card_start = matches[-1].start()

# Find card end (3 closing divs after the h3)
closing_pattern = r'</div>\n              </div>\n              </div>'
eedp_card_end_match = re.search(closing_pattern, content[eedp_h3_pos:])
if not eedp_card_end_match:
    print("Error: Could not find EEDP card end")
    exit(1)

eedp_card_end = eedp_h3_pos + eedp_card_end_match.end()

# Everything before the cards section
before_cards = content[:eedp_card_end]

# Find modal section
modal_marker = '{/* Modal for programs without detail pages */}'
modal_pos = content.find(modal_marker)
if modal_pos == -1:
    print("Error: Could not find modal section")
    exit(1)

# Everything after the cards section
after_cards = content[modal_pos:]

# Extract cards section
cards_section = content[eedp_card_end:modal_pos]

# Extract individual cards
# Pattern: optional comment + card div
card_pattern = r'(\n\n              (?:\{/\* .+? \*/\}\n              )?<div\s+className="bg-white rounded-xl shadow-lg overflow-hidden".*?</div>\n              </div>\n              </div>)'

cards = []
for match in re.finditer(card_pattern, cards_section, re.DOTALL):
    card_block = match.group(1)
    # Extract title
    title_match = re.search(r'<h3 className="text-lg font-bold text-\[#3b2a1a\] mb-2">\s*(.+?)\s*</h3>', card_block, re.DOTALL)
    if title_match:
        title = title_match.group(1).strip()
        cards.append({'title': title, 'block': card_block})

print(f"Extracted {len(cards)} cards")

# Create map
card_map = {card['title']: card['block'] for card in cards}

# Build reordered section
reordered = []
for title in desired_order:
    if title in card_map:
        reordered.append(card_map[title])
        del card_map[title]
    else:
        print(f"Warning: '{title}' not found")

# Add remaining cards
for title, block in card_map.items():
    print(f"Adding remaining card: {title}")
    reordered.append(block)

# Reconstruct file
new_content = before_cards + ''.join(reordered) + '\n            </div>\n          </div>\n      </section>\n\n\n      ' + after_cards

# Write file
with open('src/pages/Programs.jsx', 'w', encoding='utf-8', newline='\n') as f:
    f.write(new_content)

print("✓ Reordering complete!")
