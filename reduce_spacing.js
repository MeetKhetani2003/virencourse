const fs = require('fs');
const path = require('path');

// Mapping for spacing values to scale down
const scaleMap = {
  '44': '32',
  '40': '28',
  '36': '24',
  '32': '20',
  '28': '20',
  '24': '16',
  '20': '12',
  '16': '10',
  '14': '10',
  '12': '8',
  '10': '6',
};

// Regex to match tailwind spacing classes:
// Negative or positive, followed by padding/margin/gap prefixes, followed by the value.
// e.g. -mt-24, pt-36, py-24, gap-16, gap-y-20, lg:px-44
const spacingRegex = /(?:^|\s|\"|\'|\`)(-?(?:p|m|gap)(?:[xytrbl])?-)(\d+)(?:\b)/g;

function replaceInDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let updated = false;

      // We need to be careful with string replacements to preserve the preceding character 
      // (space, quote, etc).
      content = content.replace(spacingRegex, (match, prefix, value) => {
        if (scaleMap[value]) {
          updated = true;
          // match is something like " pt-44" or `"-mt-24"` or `"gap-16"`
          // prefix is `-pt-` or `pt-` or `gap-` (with the leading space/quote preserved by matching it but we actually didn't capture the leading space in the group!)
          // Ah wait, `(?:^|\s|\"|\'|\`)` is not captured. So `match` starts with it.
          // Let's rewrite the regex to capture the leading character.
          return match.replace(new RegExp(`(${prefix})${value}\\b`), `$1${scaleMap[value]}`);
        }
        return match;
      });

      if (updated) {
        fs.writeFileSync(fullPath, content);
        console.log('Updated spacing in', fullPath);
      }
    }
  }
}

replaceInDir(path.join(__dirname, 'src'));
console.log('Spacing reduction complete.');
