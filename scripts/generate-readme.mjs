import fs from 'node:fs';

const WEBSITE = 'https://cloudguardrail.com';
const TOOLS_PAGE = `${WEBSITE}/tools`;
const DATA_PATH = 'data/tools.json';
const SCHEMA_PATH = 'schema/tools.schema.json';

const tools = JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'));
const schema = JSON.parse(fs.readFileSync(SCHEMA_PATH, 'utf8'));

if (!Array.isArray(tools) || tools.length === 0) {
  throw new Error('tools.json must be a non-empty array');
}

const getSchemaEnum = (prop) => {
  const propSchema = schema?.items?.properties?.[prop];
  const enumValues = propSchema?.enum || propSchema?.items?.enum;
  return Array.isArray(enumValues) ? enumValues : [];
};

const categories = getSchemaEnum('category');
const cloudValues = getSchemaEnum('clouds');
const typeValues = getSchemaEnum('type');

const byCategory = new Map();
for (const category of categories) {
  byCategory.set(category, []);
}
for (const tool of tools) {
  if (!byCategory.has(tool.category)) {
    byCategory.set(tool.category, []);
  }
  byCategory.get(tool.category).push(tool);
}

for (const group of byCategory.values()) {
  group.sort((a, b) => a.name.localeCompare(b.name));
}

const uniqueClouds = new Set();
const uniqueCompliance = new Set();
for (const tool of tools) {
  for (const cloud of tool.clouds) uniqueClouds.add(cloud);
  for (const standard of tool.compliance) uniqueCompliance.add(standard);
}

const typeCounts = new Map(typeValues.map((type) => [type, 0]));
for (const tool of tools) {
  typeCounts.set(tool.type, (typeCounts.get(tool.type) || 0) + 1);
}

const lines = [];
lines.push('# Awesome Cloud Guardrails');
lines.push('');
lines.push('<p align="center">');
lines.push('  <a href="https://cloudguardrail.com"><img src="https://img.shields.io/badge/CloudGuardrail-Live%20Site-0ea5e9?style=for-the-badge" alt="CloudGuardrail Site" /></a>');
lines.push('  <a href="https://cloudguardrail.com/tools"><img src="https://img.shields.io/badge/Tools-Directory-22c55e?style=for-the-badge" alt="Tools Directory" /></a>');
lines.push('  <a href="https://github.com/g4r-tech/awesome-cloud-guardrails/pulls"><img src="https://img.shields.io/badge/PRs-Welcome-f59e0b?style=for-the-badge" alt="PRs Welcome" /></a>');
lines.push('</p>');
lines.push('');
lines.push('> Curated cloud security tools for teams building **real guardrails** across posture, identity, runtime, IaC, and compliance.');
lines.push('');
lines.push('## Why This Exists');
lines.push('Most lists are link dumps. This repo is a schema-driven dataset for a public directory that prioritizes signal, category clarity, and practical implementation value.');
lines.push('');
lines.push(`- Website: [${WEBSITE}](${WEBSITE})`);
lines.push(`- Live directory: [${TOOLS_PAGE}](${TOOLS_PAGE})`);
lines.push('- Contribute: [Open a PR](https://github.com/g4r-tech/awesome-cloud-guardrails/pulls)');
lines.push('');
lines.push('## Automation');
lines.push('');
lines.push('- On merges to `main` that change `data/tools.json` or `schema/tools.schema.json`, this repo triggers a deployment event in the private site repo (`g4r-tech/cloudguardrail`).');
lines.push('- The private site repo then runs its Cloudflare Pages deploy workflow and pulls fresh dataset data during build.');
lines.push('- Required secret in this public repo: `PRIVATE_REPO_DISPATCH_TOKEN` (GitHub token with access to `g4r-tech/cloudguardrail` Actions dispatch).');
lines.push('');
lines.push('## Dataset Snapshot');
lines.push('');
lines.push('| Metric | Value |');
lines.push('|---|---:|');
lines.push(`| Total tools | ${tools.length} |`);
lines.push(`| Categories | ${categories.length} |`);
lines.push(`| Cloud support values in schema | ${cloudValues.length} |`);
lines.push(`| Compliance frameworks referenced | ${uniqueCompliance.size} |`);
lines.push(`| Open Source tools | ${typeCounts.get('Open Source') || 0} |`);
lines.push(`| Commercial tools | ${typeCounts.get('Commercial') || 0} |`);
lines.push(`| Freemium tools | ${typeCounts.get('Freemium') || 0} |`);
lines.push('');
lines.push('## Allowed Schema Values');
lines.push('');
lines.push(`- \`category\`: ${categories.join(', ')}`);
lines.push(`- \`clouds\`: ${cloudValues.join(', ')}`);
lines.push(`- \`type\`: ${typeValues.join(', ')}`);
lines.push('');
lines.push('## Tool Index');
lines.push('');

for (const category of categories) {
  const toolsInCategory = byCategory.get(category) || [];
  lines.push(`### ${category} (${toolsInCategory.length})`);
  lines.push('');
  if (toolsInCategory.length === 0) {
    lines.push('_No tools listed yet._');
    lines.push('');
    continue;
  }
  lines.push('| Tool | Type | Clouds | Why It Stands Out |');
  lines.push('|---|---|---|---|');
  for (const tool of toolsInCategory) {
    const name = `[${tool.name}](${tool.website})`;
    const clouds = tool.clouds.join(', ');
    const distinct = String(tool.distinct).replace(/\|/g, '\\|');
    lines.push(`| ${name} | ${tool.type} | ${clouds} | ${distinct} |`);
  }
  lines.push('');
}

lines.push('## Contribution Rules');
lines.push('');
lines.push('- Follow [`schema/tools.schema.json`](schema/tools.schema.json) exactly.');
lines.push('- Keep entries objective, concise, and non-promotional.');
lines.push('- Use `https://` vendor/project URLs only.');
lines.push('- One tool per change is preferred for easier review.');
lines.push('');
lines.push('---');
lines.push('');
lines.push('Generated automatically from `data/tools.json` + `schema/tools.schema.json`.');

fs.writeFileSync('README.md', `${lines.join('\n')}\n`, 'utf8');
console.log(`README generated for ${tools.length} tools.`);
