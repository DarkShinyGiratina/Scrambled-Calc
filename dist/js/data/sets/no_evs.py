import re

with open("gen9.js", "r", encoding="utf-8") as f:
    raw = f.read()

# Remove evs blocks: "evs: { ... }," (with or without trailing comma)
cleaned = re.sub(r'\s*evs:\s*\{[^}]*\},?', '', raw)

with open("gen9_evless.js", "w", encoding="utf-8") as f:
    f.write(cleaned)

print("Done.")
