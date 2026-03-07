# Awesome Cloud Guardrails

<p align="center">
  <a href="https://cloudguardrail.com"><img src="https://img.shields.io/badge/CloudGuardrail-Live%20Site-0ea5e9?style=for-the-badge" alt="CloudGuardrail Site" /></a>
  <a href="https://cloudguardrail.com/tools"><img src="https://img.shields.io/badge/Tools-Directory-22c55e?style=for-the-badge" alt="Tools Directory" /></a>
  <a href="https://github.com/g4r-tech/awesome-cloud-guardrails/pulls"><img src="https://img.shields.io/badge/PRs-Welcome-f59e0b?style=for-the-badge" alt="PRs Welcome" /></a>
</p>

> Curated cloud security tools for teams building **real guardrails** across posture, identity, runtime, IaC, and compliance.

## Why This Exists
Most lists are link dumps. This repo is a schema-driven dataset for a public directory that prioritizes signal, category clarity, and practical implementation value.

- Website: [https://cloudguardrail.com](https://cloudguardrail.com)
- Live directory: [https://cloudguardrail.com/tools](https://cloudguardrail.com/tools)
- Contribute: [Open a PR](https://github.com/g4r-tech/awesome-cloud-guardrails/pulls)

## Dataset Snapshot

| Metric | Value |
|---|---:|
| Total tools | 28 |
| Categories | 8 |
| Cloud support values in schema | 4 |
| Compliance frameworks referenced | 6 |
| Open Source tools | 24 |
| Commercial tools | 3 |
| Freemium tools | 1 |

## Allowed Schema Values

- `category`: CSPM, CNAPP, IaC Security, Secrets Scanning, Container Security, Compliance as Code, SBOM & Supply Chain, Cloud IAM Auditing
- `clouds`: AWS, Azure, GCP, Multi
- `type`: Open Source, Commercial, Freemium

## Tool Index

### CSPM (4)

| Tool | Type | Clouds | Why It Stands Out |
|---|---|---|---|
| [CloudMapper](https://github.com/duo-labs/cloudmapper) | Open Source | AWS | Visualizes AWS account relationships and attack paths for security review. |
| [Prowler](https://prowler.com) | Open Source | AWS, Azure, GCP | Large benchmark coverage with pragmatic cloud misconfiguration checks. |
| [Scout Suite](https://github.com/nccgroup/ScoutSuite) | Open Source | AWS, Azure, GCP | Multi-cloud security audit with visualized findings and drill-down. |
| [Security Monkey](https://github.com/netflix/security_monkey) | Open Source | AWS | Monitors cloud account changes and flags policy and configuration drift. |

### CNAPP (2)

| Tool | Type | Clouds | Why It Stands Out |
|---|---|---|---|
| [Prisma Cloud](https://www.paloaltonetworks.com/prisma/cloud) | Commercial | Multi | Broad CNAPP suite spanning code, runtime, and cloud posture domains. |
| [Wiz](https://www.wiz.io) | Commercial | Multi | Graph-based cloud attack path visibility across workloads and identities. |

### IaC Security (4)

| Tool | Type | Clouds | Why It Stands Out |
|---|---|---|---|
| [Checkov](https://www.checkov.io) | Open Source | AWS, Azure, GCP | Policy-as-code scanning for Terraform, Kubernetes, and CloudFormation. |
| [Snyk IaC](https://snyk.io/product/iac-security/) | Freemium | AWS, Azure, GCP | Developer-first IaC checks tightly integrated into pull request flow. |
| [Terragoat](https://github.com/bridgecrewio/terragoat) | Open Source | AWS | Deliberately vulnerable Terraform stack for testing IaC misconfiguration detection. |
| [tfsec](https://aquasecurity.github.io/tfsec/) | Open Source | AWS, Azure, GCP | Fast local Terraform static analysis with clear remediation output. |

### Secrets Scanning (2)

| Tool | Type | Clouds | Why It Stands Out |
|---|---|---|---|
| [Gitleaks](https://gitleaks.io) | Open Source | Multi | Simple, fast, and CI-friendly scanner for leaked credentials. |
| [TruffleHog](https://trufflesecurity.com/trufflehog) | Open Source | Multi | High-signal secret discovery with verified credential checks. |

### Container Security (2)

| Tool | Type | Clouds | Why It Stands Out |
|---|---|---|---|
| [Aqua Trivy](https://trivy.dev) | Open Source | Multi | Single CLI for image, filesystem, and IaC vulnerability checks. |
| [Falco](https://falco.org) | Open Source | Multi | Runtime threat detection for containers and Kubernetes workloads. |

### Compliance as Code (4)

| Tool | Type | Clouds | Why It Stands Out |
|---|---|---|---|
| [aws-nuke](https://github.com/rebuy-de/aws-nuke) | Open Source | AWS | Automates safe teardown of AWS resources to enforce clean account baselines. |
| [Cloud Custodian](https://cloudcustodian.io) | Open Source | AWS, Azure, GCP | Policy-driven cloud resource governance and automated remediation. |
| [Open Policy Agent](https://www.openpolicyagent.org) | Open Source | Multi | General-purpose policy engine used from CI to admission control. |
| [Steampipe](https://steampipe.io) | Open Source | Multi | Query cloud APIs with SQL for rapid compliance checks and dashboards. |

### SBOM & Supply Chain (2)

| Tool | Type | Clouds | Why It Stands Out |
|---|---|---|---|
| [Grype](https://github.com/anchore/grype) | Open Source | Multi | Vulnerability scanner designed to pair directly with generated SBOMs. |
| [Syft](https://github.com/anchore/syft) | Open Source | Multi | Developer-friendly SBOM generator with broad package ecosystem support. |

### Cloud IAM Auditing (8)

| Tool | Type | Clouds | Why It Stands Out |
|---|---|---|---|
| [CloudGoat](https://github.com/RhinoSecurityLabs/cloudgoat) | Open Source | AWS | Purpose-built AWS scenarios for validating detection and IAM attack-path readiness. |
| [Cloudsplaining](https://github.com/salesforce/cloudsplaining) | Open Source | AWS | Identifies risky IAM permissions and privilege-escalation patterns in AWS policies. |
| [CloudTracker](https://github.com/duo-labs/cloudtracker) | Open Source | AWS | Compares CloudTrail activity to granted IAM permissions to spot over-privileged identities. |
| [Pacu](https://github.com/RhinoSecurityLabs/pacu) | Open Source | AWS | AWS exploitation framework for testing IAM abuse paths and cloud misconfigurations. |
| [Parliament](https://github.com/duo-labs/parliament) | Open Source | AWS | Lints IAM policies to catch privilege, wildcard, and risky permission issues early. |
| [Permiso](https://permiso.io) | Commercial | AWS, Azure, GCP | Identity-centric detection focused on cloud service account abuse. |
| [PMapper](https://github.com/nccgroup/PMapper) | Open Source | AWS | Privilege escalation path analysis for AWS IAM role relationships. |
| [SkyArk](https://github.com/cyberark/SkyArk) | Open Source | AWS | Finds and assesses highly privileged AWS entities that increase account takeover risk. |

## Contribution Rules

- Follow [`schema/tools.schema.json`](schema/tools.schema.json) exactly.
- Keep entries objective, concise, and non-promotional.
- Use `https://` vendor/project URLs only.
- One tool per change is preferred for easier review.

---

Generated automatically from `data/tools.json` + `schema/tools.schema.json`.
