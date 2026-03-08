# Contributing

## Required fields

Each tool entry must include:
- `name`
- `website` (must start with `https://`)
- `category`
- `clouds`
- `type`
- `distinct`
- `compliance`
- `curationConfidence`
- `lastReviewed` (YYYY-MM-DD)

## Allowed values

`category` values:
- `CSPM`
- `CNAPP`
- `IaC Security`
- `Secrets Scanning`
- `Container Security`
- `Compliance as Code`
- `SBOM & Supply Chain`
- `Cloud IAM Auditing`

`clouds` values:
- `AWS`
- `Azure`
- `GCP`
- `Multi`

`type` values:
- `Open Source`
- `Commercial`
- `Freemium`

`curationConfidence` values:
- `high` (official docs + clear category fit + strong community adoption)
- `medium` (known and useful, but evidence depth is moderate)
- `provisional` (new or still under validation)

## Quality bar

- Avoid duplicates
- Keep descriptions neutral and concise
- Explain a tool's distinct value in one sentence
- Prefer one tool addition per PR for clean review
- Update `lastReviewed` when materially changing an entry
