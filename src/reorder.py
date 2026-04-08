import re
import pprint

file_path = r"c:\Workspace\aspire-public\src\pages\Programs.jsx"
with open(file_path, "r", encoding="utf-8") as f:
    text = f.read()

# EEDP block ends at `              </div>\n\n              {/* Financial Statement Analysis & Interpretation */}`
# So the part to reorder starts with `              {/* Financial Statement Analysis & Interpretation */}`
# and ends with `              </div>\n            </div>` (the end of the grid)

def find_blocks(content):
    start_marker = "              {/* Financial Statement Analysis & Interpretation */}"
    start_idx = content.find(start_marker)
    if start_idx == -1:
        print("Start marker not found.")
        return
        
    # The end of the cards is marked by `            </div>\n          </div>\n      </section>`
    end_marker = "            </div>\n          </div>\n      </section>"
    end_idx = content.find(end_marker, start_idx)
    
    if end_idx == -1:
        # maybe just standard end of cards
        end_marker = "            </div>\n          </div>\n"
        end_idx = content.find(end_marker, start_idx)

    cards_text = content[start_idx:end_idx]
    
    # Split the blocks by `              {/* `
    blocks = cards_text.split("\n              {/* ")
    
    # blocks[0] is `              {/* Financial Statement Analysis & Interpretation */}`
    # but since it starts with `              {/* `, the split will give an empty string for [0] if exactly matching, 
    # but actually the first item before split might just be `              {/* ... `
    # Let's use a regex instead.
    pattern = re.compile(r"(\s*\{\/\* .*? \*\/\}\s*<div.*?</div>\s*</div>\s*</div>\s*)", re.DOTALL)
    # The div has nested divs. 
    # regex isn't great. Let's just split by `              {/* `
    
    # Actually, EEDP block has a `\n\n              {/* Financial Statement...` 
    # Let's manually list the blocks or just split carefully.
    
    parts = cards_text.split("              {/* ")
    # parts[0] is empty or whitespace
    # parts[1] is `Financial Statement Analysis & Interpretation */}\n              <div...`
    
    parsed_blocks = {}
    for part in parts:
        if not part.strip(): continue
        
        # parse name
        name_end = part.find("*/}")
        if name_end == -1: continue
        name = part[:name_end].strip()
        
        parsed_blocks[name] = "              {/* " + part
        
    order = [
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
    ]
    
    new_cards_text = ""
    for name in order:
        if name in parsed_blocks:
            new_cards_text += parsed_blocks[name].rstrip('\n') + "\n\n"
        else:
            print(f"Missing block: {name}")
    
    new_content = content[:start_idx] + new_cards_text.rstrip('\n\n') + "\n" + content[end_idx:]
    
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(new_content)
    print("Successfully reordered")

find_blocks(text)
