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

## Before submitting

1. Add your tool to `data/tools.json` with all required fields and allowed values
2. Do not manually edit README.md—it is automatically regenerated from the dataset

## Quality bar

- Avoid duplicates
- Keep descriptions neutral and concise
- Explain a tool's distinct value in one sentence
- Prefer one tool addition per PR for clean review
