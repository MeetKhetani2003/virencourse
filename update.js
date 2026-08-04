const fs = require('fs');
let content = fs.readFileSync('src/content/courses.ts', 'utf8');

// Add price to Course interface
content = content.replace(/export interface Course {/, 'export interface Course {\n  price?: string;');

// Replace enrollUrl for the first course
content = content.replace(
  /whatsappWith\(\s*\"Hi Viren, I\'m interested in enrolling for \'The Ultimate Blueprint of Student Success and Memory Retention Formula\'. Please guide me.\"\s*\)/g,
  '\"https://www.udemy.com/user/viren-surati/?srsltid=AfmBOopNh3GPBT9GLOzFEy5QHsFHaBIrVB_IGlNqJZ8mpcorwVIejQ2Q\"'
);

const prices = {
  'the-ultimate-blueprint-of-student-success-and-memory-retention-formula': '\"999₹\"',
  'untold-secrets': '\"FREE\"',
  'overcoming-exam-anxiety': '\"100₹\"',
  'transforming-weaknesses': '\"100₹\"',
  'achieving-success': '\"100₹\"',
  'unlock-your-memory-power': '\"499₹\"',
  'memorize-periodic-table': '\"300₹\"',
  'confident-public-speaker': '\"499₹\"',
  'mastering-public-speaking': '\"100₹\"'
};

for (const [slug, price] of Object.entries(prices)) {
  const regex = new RegExp('(slug: \"' + slug + '\",)');
  content = content.replace(regex, '\$1\n    price: ' + price + ',');
}

fs.writeFileSync('src/content/courses.ts', content);
console.log('Done!');
