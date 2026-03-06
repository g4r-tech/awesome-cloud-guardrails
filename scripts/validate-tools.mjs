import fs from 'node:fs';

const data = JSON.parse(fs.readFileSync('data/tools.json', 'utf8'));

if (!Array.isArray(data) || data.length === 0) {
  console.error('tools.json must contain a non-empty array');
  process.exit(1);
}

const names = new Set();
for (const [i, item] of data.entries()) {
  if (!item?.name || !item?.website || !item?.category || !item?.clouds || !item?.type || !item?.distinct || !item?.compliance) {
    console.error(`entry[${i}] missing required fields`);
    process.exit(1);
  }
  if (!String(item.website).startsWith('https://')) {
    console.error(`entry[${i}] website must start with https://`);
    process.exit(1);
  }
  const key = String(item.name).toLowerCase().trim();
  if (names.has(key)) {
    console.error(`duplicate name: ${item.name}`);
    process.exit(1);
  }
  names.add(key);
}

console.log(`Validated ${data.length} tool entries.`);
