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
| Total tools | 70 |
| Categories | 8 |
| Cloud support values in schema | 4 |
| Compliance frameworks referenced | 7 |
| Open Source tools | 61 |
| Commercial tools | 7 |
| Freemium tools | 2 |

## Allowed Schema Values

- `category`: CSPM, CNAPP, IaC Security, Secrets Scanning, Container Security, Compliance as Code, SBOM & Supply Chain, Cloud IAM Auditing
- `clouds`: AWS, Azure, GCP, Multi
- `type`: Open Source, Commercial, Freemium

## Tool Index

### CSPM (7)

| Tool | Type | Clouds | Why It Stands Out |
|---|---|---|---|
| [AWS Inventory](https://github.com/nccgroup/aws-inventory) | Open Source | AWS | Builds comprehensive cross-region AWS asset inventories for exposure and drift analysis. |
| [CloudMapper](https://github.com/duo-labs/cloudmapper) | Open Source | AWS | Visualizes AWS account relationships and attack paths for security review. |
| [CloudSploit Scans](https://github.com/cloudsploit/scans) | Open Source | AWS | Large set of AWS security checks for identifying cloud misconfigurations at scale. |
| [Prowler](https://prowler.com) | Open Source | AWS, Azure, GCP | Large benchmark coverage with pragmatic cloud misconfiguration checks. |
| [Scout Suite](https://github.com/nccgroup/ScoutSuite) | Open Source | AWS, Azure, GCP | Multi-cloud security audit with visualized findings and drill-down. |
| [Security Monkey](https://github.com/netflix/security_monkey) | Open Source | AWS | Monitors cloud account changes and flags policy and configuration drift. |
| [ZeusCloud](https://github.com/Zeus-Labs/ZeusCloud) | Open Source | AWS | Open-source CSPM that builds an asset graph and prioritizes misconfigurations by exploit-path risk. |

### CNAPP (6)

| Tool | Type | Clouds | Why It Stands Out |
|---|---|---|---|
| [Lacework](https://www.lacework.com) | Commercial | Multi | Behavior-based CNAPP detection across cloud, containers, and identities. |
| [Orca Security](https://orca.security) | Commercial | Multi | Agentless CNAPP platform focused on broad cloud asset and risk visibility. |
| [Prisma Cloud](https://www.paloaltonetworks.com/prisma/cloud) | Commercial | Multi | Broad CNAPP suite spanning code, runtime, and cloud posture domains. |
| [Sysdig Secure](https://sysdig.com/products/secure/) | Commercial | Multi | Combines cloud posture, runtime threat detection, and container vulnerability controls. |
| [Tenable Cloud Security](https://www.tenable.com/products/tenable-cloud-security) | Commercial | Multi | CNAPP offering with strong posture analytics and entitlement risk visibility. |
| [Wiz](https://www.wiz.io) | Commercial | Multi | Graph-based cloud attack path visibility across workloads and identities. |

### IaC Security (11)

| Tool | Type | Clouds | Why It Stands Out |
|---|---|---|---|
| [cdk-nag](https://github.com/cdklabs/cdk-nag) | Open Source | AWS | Applies security and compliance rules to AWS CDK constructs during development. |
| [cfn-nag](https://github.com/stelligent/cfn_nag) | Open Source | AWS | Lints CloudFormation templates to detect risky security configurations before deploy. |
| [CFripper](https://github.com/skyscanner/cfripper) | Open Source | AWS | Static analysis for CloudFormation templates that finds risky permissions and misconfigurations pre-deploy. |
| [Checkov](https://www.checkov.io) | Open Source | AWS, Azure, GCP | Policy-as-code scanning for Terraform, Kubernetes, and CloudFormation. |
| [CloudFormation Guard](https://github.com/aws-cloudformation/cloudformation-guard) | Open Source | AWS | Policy-as-code validation for CloudFormation templates to block insecure infrastructure before deployment. |
| [KICS](https://github.com/Checkmarx/kics) | Open Source | Multi | Static analysis engine for Terraform, Kubernetes, and other IaC formats. |
| [Snyk IaC](https://snyk.io/product/iac-security/) | Freemium | AWS, Azure, GCP | Developer-first IaC checks tightly integrated into pull request flow. |
| [Terragoat](https://github.com/bridgecrewio/terragoat) | Open Source | AWS | Deliberately vulnerable Terraform stack for testing IaC misconfiguration detection. |
| [Terrascan](https://github.com/tenable/terrascan) | Open Source | Multi | Policy-based IaC scanner with broad cloud provider and framework coverage. |
| [tfsec](https://aquasecurity.github.io/tfsec/) | Open Source | AWS, Azure, GCP | Fast local Terraform static analysis with clear remediation output. |
| [Yor](https://github.com/bridgecrewio/yor) | Open Source | AWS, Azure, GCP | Automatically tags IaC resources with traceability metadata to strengthen ownership and control mapping. |

### Secrets Scanning (6)

| Tool | Type | Clouds | Why It Stands Out |
|---|---|---|---|
| [detect-secrets](https://github.com/Yelp/detect-secrets) | Open Source | Multi | Pre-commit focused secret scanner with baseline workflows for noisy repositories. |
| [git-secrets](https://github.com/awslabs/git-secrets) | Open Source | Multi | Prevents committing AWS credentials and other secret patterns by hooking Git commit and history scans. |
| [GitGuardian ggshield](https://github.com/GitGuardian/ggshield) | Freemium | Multi | Developer-friendly secret detection in commits and CI pipelines with strong accuracy. |
| [Gitleaks](https://gitleaks.io) | Open Source | Multi | Simple, fast, and CI-friendly scanner for leaked credentials. |
| [shhgit](https://github.com/eth0izzle/shhgit) | Open Source | Multi | Real-time GitHub secret monitoring to quickly surface exposed credentials. |
| [TruffleHog](https://trufflesecurity.com/trufflehog) | Open Source | Multi | High-signal secret discovery with verified credential checks. |

### Container Security (7)

| Tool | Type | Clouds | Why It Stands Out |
|---|---|---|---|
| [Aqua Trivy](https://trivy.dev) | Open Source | Multi | Single CLI for image, filesystem, and IaC vulnerability checks. |
| [Clair](https://github.com/quay/clair) | Open Source | Multi | Performs static vulnerability analysis of container images using continuously ingested CVE feeds across distributions. |
| [Falco](https://falco.org) | Open Source | Multi | Runtime threat detection for containers and Kubernetes workloads. |
| [kube-bench](https://github.com/aquasecurity/kube-bench) | Open Source | Multi | Runs CIS Kubernetes benchmark checks against cluster nodes and control planes. |
| [kube-hunter](https://github.com/aquasecurity/kube-hunter) | Open Source | Multi | Performs active reconnaissance to identify exposed Kubernetes security weaknesses. |
| [Kubescape](https://github.com/kubescape/kubescape) | Open Source | Multi | Kubernetes posture scanner with framework mappings and risk prioritization guidance. |
| [Trivy Operator](https://github.com/aquasecurity/trivy-operator) | Open Source | Multi | Brings continuous vulnerability and configuration scanning into Kubernetes clusters. |
| [KubeStellar Console](https://github.com/kubestellar/console) | Open Source | Multi | Container security with supply chain security (SBOM, SLSA, Cosign) and compliance dashboards. |

### Compliance as Code (11)

| Tool | Type | Clouds | Why It Stands Out |
|---|---|---|---|
| [Automated Security Helper (ASH)](https://github.com/awslabs/automated-security-helper) | Open Source | AWS | Runs multiple code and IaC security scanners in isolated containers with one aggregated security report. |
| [aws-nuke](https://github.com/rebuy-de/aws-nuke) | Open Source | AWS | Automates safe teardown of AWS resources to enforce clean account baselines. |
| [Cloud Custodian](https://cloudcustodian.io) | Open Source | AWS, Azure, GCP | Policy-driven cloud resource governance and automated remediation. |
| [Cloud-Nuke](https://github.com/gruntwork-io/cloud-nuke) | Open Source | AWS | Deletes cloud resources at scale to enforce clean account baselines and reduce stale attack surface. |
| [CloudQuery](https://github.com/cloudquery/cloudquery) | Open Source | Multi | Extracts cloud configuration data into SQL tables for policy checks and reporting. |
| [Conftest](https://www.conftest.dev) | Open Source | Multi | Tests structured configuration files such as Kubernetes, Terraform, and Dockerfiles against OPA Rego policies. |
| [Kubewarden](https://github.com/kubewarden/kubewarden-controller) | Open Source | Multi | Admission policy framework using WebAssembly for portable Kubernetes enforcement. |
| [Kyverno](https://github.com/kyverno/kyverno) | Open Source | Multi | Kubernetes-native policy engine for enforceable guardrails and admission controls. |
| [OPA Gatekeeper](https://github.com/open-policy-agent/gatekeeper) | Open Source | Multi | Enforces OPA policies in Kubernetes through admission control with reusable constraint templates and audit reporting. |
| [Open Policy Agent](https://www.openpolicyagent.org) | Open Source | Multi | General-purpose policy engine used from CI to admission control. |
| [Steampipe](https://steampipe.io) | Open Source | Multi | Query cloud APIs with SQL for rapid compliance checks and dashboards. |

### SBOM & Supply Chain (6)

| Tool | Type | Clouds | Why It Stands Out |
|---|---|---|---|
| [Cosign](https://github.com/sigstore/cosign) | Open Source | Multi | Signs and verifies container images and artifacts to enforce trusted supply chain provenance. |
| [Dependency-Track](https://dependencytrack.org) | Open Source | Multi | Continuously analyzes SBOMs to monitor component risk across application portfolios over time. |
| [Grype](https://github.com/anchore/grype) | Open Source | Multi | Vulnerability scanner designed to pair directly with generated SBOMs. |
| [in-toto](https://in-toto.io) | Open Source | Multi | Generates cryptographic attestations for each supply chain step to detect tampering in build pipelines. |
| [OSV-Scanner](https://github.com/google/osv-scanner) | Open Source | Multi | Matches open-source dependencies against the OSV vulnerability database for accurate, actionable triage. |
| [Syft](https://github.com/anchore/syft) | Open Source | Multi | Developer-friendly SBOM generator with broad package ecosystem support. |

### Cloud IAM Auditing (16)

| Tool | Type | Clouds | Why It Stands Out |
|---|---|---|---|
| [Cartography](https://github.com/lyft/cartography) | Open Source | Multi | Graphs cloud assets and trust relationships to uncover risky access paths. |
| [cloudfox](https://github.com/bishopfox/cloudfox) | Open Source | AWS, Azure, GCP | Enumerates cloud attack paths and identity exposure from an attacker perspective for rapid triage. |
| [CloudGoat](https://github.com/RhinoSecurityLabs/cloudgoat) | Open Source | AWS | Purpose-built AWS scenarios for validating detection and IAM attack-path readiness. |
| [Cloudsplaining](https://github.com/salesforce/cloudsplaining) | Open Source | AWS | Identifies risky IAM permissions and privilege-escalation patterns in AWS policies. |
| [CloudTracker](https://github.com/duo-labs/cloudtracker) | Open Source | AWS | Compares CloudTrail activity to granted IAM permissions to spot over-privileged identities. |
| [iam-floyd](https://github.com/udondan/iam-floyd) | Open Source | AWS | Generates AWS IAM policies programmatically with a fluent interface to reduce policy authoring mistakes. |
| [IAMSpy](https://github.com/WithSecureLabs/IAMSpy) | Open Source | AWS | Analyzes IAM permissions and trust paths to surface unintended access and escalation opportunities. |
| [Pacu](https://github.com/RhinoSecurityLabs/pacu) | Open Source | AWS | AWS exploitation framework for testing IAM abuse paths and cloud misconfigurations. |
| [Parliament](https://github.com/duo-labs/parliament) | Open Source | AWS | Lints IAM policies to catch privilege, wildcard, and risky permission issues early. |
| [Peirates](https://github.com/inguardians/peirates) | Open Source | AWS | Simulates common Kubernetes-to-cloud privilege escalation paths in AWS environments. |
| [Permiso](https://permiso.io) | Commercial | AWS, Azure, GCP | Identity-centric detection focused on cloud service account abuse. |
| [PMapper](https://github.com/nccgroup/PMapper) | Open Source | AWS | Privilege escalation path analysis for AWS IAM role relationships. |
| [Policy Sentry](https://github.com/salesforce/policy_sentry) | Open Source | AWS | Builds and analyzes least-privilege IAM policies using an action and resource database model. |
| [ROADtools](https://github.com/dirkjanm/ROADtools) | Open Source | Azure | Enumerates Microsoft Entra (Azure AD) objects and relationships to map identity attack paths in tenant environments. |
| [SkyArk](https://github.com/cyberark/SkyArk) | Open Source | AWS | Finds and assesses highly privileged AWS entities that increase account takeover risk. |
| [Stratus Red Team](https://github.com/datadog/stratus-red-team) | Open Source | AWS, Azure, GCP | Executes cloud attack emulation scenarios to validate detections and incident response workflows. |

## Contribution Rules

- Follow [`schema/tools.schema.json`](schema/tools.schema.json) exactly.
- Keep entries objective, concise, and non-promotional.
- Use `https://` vendor/project URLs only.
- One tool per change is preferred for easier review.

---

Generated automatically from `data/tools.json` + `schema/tools.schema.json`.
