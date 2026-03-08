import fs from 'node:fs';

const data = JSON.parse(fs.readFileSync('data/tools.json', 'utf8'));
const allowedCategories = new Set([
  'CSPM',
  'CNAPP',
  'IaC Security',
  'Secrets Scanning',
  'Container Security',
  'Compliance as Code',
  'SBOM & Supply Chain',
  'Cloud IAM Auditing'
]);
const allowedClouds = new Set(['AWS', 'Azure', 'GCP', 'Multi']);
const allowedTypes = new Set(['Open Source', 'Commercial', 'Freemium']);
const allowedConfidence = new Set(['high', 'medium', 'provisional']);

if (!Array.isArray(data) || data.length === 0) {
  console.error('tools.json must contain a non-empty array');
  process.exit(1);
}

const names = new Set();
const websites = new Set();
for (const [i, item] of data.entries()) {
  if (
    !item?.name ||
    !item?.website ||
    !item?.category ||
    !item?.clouds ||
    !item?.type ||
    !item?.distinct ||
    !item?.compliance ||
    !item?.curationConfidence ||
    !item?.lastReviewed
  ) {
    console.error(`entry[${i}] missing required fields`);
    process.exit(1);
  }
  const website = String(item.website).trim();
  if (!website.startsWith('https://')) {
    console.error(`entry[${i}] website must start with https://`);
    process.exit(1);
  }
  try {
    new URL(website);
  } catch {
    console.error(`entry[${i}] website is not a valid URL`);
    process.exit(1);
  }

  const key = String(item.name).toLowerCase().trim();
  if (names.has(key)) {
    console.error(`duplicate name: ${item.name}`);
    process.exit(1);
  }
  names.add(key);

  if (websites.has(website.toLowerCase())) {
    console.error(`duplicate website: ${item.website}`);
    process.exit(1);
  }
  websites.add(website.toLowerCase());

  if (!allowedCategories.has(item.category)) {
    console.error(`entry[${i}] invalid category: ${item.category}`);
    process.exit(1);
  }
  if (!allowedTypes.has(item.type)) {
    console.error(`entry[${i}] invalid type: ${item.type}`);
    process.exit(1);
  }
  if (!allowedConfidence.has(item.curationConfidence)) {
    console.error(`entry[${i}] invalid curationConfidence: ${item.curationConfidence}`);
    process.exit(1);
  }
  if (!Array.isArray(item.clouds) || item.clouds.length === 0 || item.clouds.some((cloud) => !allowedClouds.has(cloud))) {
    console.error(`entry[${i}] invalid clouds`);
    process.exit(1);
  }
  if (!Array.isArray(item.compliance) || item.compliance.length === 0 || item.compliance.some((value) => String(value).trim().length < 2)) {
    console.error(`entry[${i}] invalid compliance`);
    process.exit(1);
  }
  const distinct = String(item.distinct).trim();
  if (distinct.length < 16 || distinct.length > 180) {
    console.error(`entry[${i}] distinct must be between 16 and 180 characters`);
    process.exit(1);
  }

  const reviewed = String(item.lastReviewed);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(reviewed) || Number.isNaN(Date.parse(reviewed))) {
    console.error(`entry[${i}] invalid lastReviewed format, expected YYYY-MM-DD`);
    process.exit(1);
  }
}

console.log(`Validated ${data.length} tool entries.`);
