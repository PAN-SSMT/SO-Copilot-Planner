// S&O Copilot — Scope Reference Data
// Structured from Cortex Cloud / Prisma Cloud Premium Success Service Description

import type { ScopeItem } from '../types';

export const scopeReferenceData: ScopeItem[] = [
  // ============================================================
  // CONFIGURATION ASSISTANCE (Section 2.3)
  // ============================================================
  { id: 'ca-01', category: 'configuration_assistance', taskName: 'Cloud Account Onboarding', description: 'Onboard cloud service provider accounts to Cortex Cloud / Prisma Cloud.', relevantModules: ['ALL'] },
  { id: 'ca-02', category: 'configuration_assistance', taskName: 'SSO Configuration', description: 'Configure Single Sign-On for the platform.', relevantModules: ['ALL'] },
  { id: 'ca-03', category: 'configuration_assistance', taskName: 'Role-Based Access Control', description: 'Set up RBAC policies and user permissions.', relevantModules: ['ALL'] },
  { id: 'ca-04', category: 'configuration_assistance', taskName: 'Just-in-time Provisioning', description: 'Configure JIT provisioning for user access.', relevantModules: ['ALL'] },
  { id: 'ca-05', category: 'configuration_assistance', taskName: 'Agentless Scanning', description: 'Configure and enable agentless scanning across cloud workloads.', relevantModules: ['CSPM', 'CWP'] },
  { id: 'ca-06', category: 'configuration_assistance', taskName: 'Registry Scanning', description: 'Configure container registry scanning.', relevantModules: ['CWP', 'AppSec'] },
  { id: 'ca-07', category: 'configuration_assistance', taskName: 'Serverless Function Scanning', description: 'Configure scanning for serverless functions (Lambda, Cloud Functions, etc.).', relevantModules: ['CWP', 'AppSec'] },
  { id: 'ca-08', category: 'configuration_assistance', taskName: 'ASPM Onboarding', description: 'Onboard Application Security Posture Management.', relevantModules: ['ASPM'] },
  { id: 'ca-09', category: 'configuration_assistance', taskName: 'IDE Integration', description: 'Integrate security scanning into developer IDEs.', relevantModules: ['AppSec'] },
  { id: 'ca-10', category: 'configuration_assistance', taskName: 'Cortex XDR Configuration', description: 'Configure Cortex XDR for cloud environments.', relevantModules: ['XDR'] },
  { id: 'ca-11', category: 'configuration_assistance', taskName: 'Cortex XDR Agent for Cloud Installation/Deployment', description: 'Install and deploy Cortex XDR agents in cloud workloads.', relevantModules: ['XDR', 'CWP'] },
  { id: 'ca-12', category: 'configuration_assistance', taskName: 'Kubernetes Connector on Kubernetes Clusters', description: 'Deploy Kubernetes connector for cluster visibility and protection.', relevantModules: ['CWP', 'XDR'] },
  { id: 'ca-13', category: 'configuration_assistance', taskName: 'CD Pipeline Integration with CLI Tool', description: 'Integrate security scanning into CD pipelines using CLI tools.', relevantModules: ['AppSec', 'ASPM'] },

  // ============================================================
  // OPERATIONAL ASSISTANCE (Section 2.3)
  // ============================================================
  { id: 'oa-01', category: 'operational_assistance', taskName: 'Third-party Integrations', description: 'Configure integrations with third-party tools and platforms.', relevantModules: ['ALL'] },
  { id: 'oa-02', category: 'operational_assistance', taskName: 'Platform Concept Overview', description: 'Provide overview of platform concepts and architecture.', relevantModules: ['ALL'] },
  { id: 'oa-03', category: 'operational_assistance', taskName: 'Dashboard Management', description: 'Configure and optimize platform dashboards.', relevantModules: ['ALL'] },
  { id: 'oa-04', category: 'operational_assistance', taskName: 'Detection Rules Management', description: 'Configure and manage detection rules.', relevantModules: ['CSPM', 'XDR'] },
  { id: 'oa-05', category: 'operational_assistance', taskName: 'Issue/Compliance Reports', description: 'Set up and configure compliance and issue reporting.', relevantModules: ['CSPM'] },
  { id: 'oa-06', category: 'operational_assistance', taskName: 'Custom Detection Rules', description: 'Create custom detection rules for specific use cases.', relevantModules: ['CSPM', 'XDR'] },
  { id: 'oa-07', category: 'operational_assistance', taskName: 'DSPM', description: 'Configure Data Security Posture Management.', relevantModules: ['DSPM'] },
  { id: 'oa-08', category: 'operational_assistance', taskName: 'AI-SPM', description: 'Configure AI Security Posture Management.', relevantModules: ['AI-SPM'] },
  { id: 'oa-09', category: 'operational_assistance', taskName: 'Workload Asset Management', description: 'Manage and organize cloud workload assets.', relevantModules: ['CWP'] },
  { id: 'oa-10', category: 'operational_assistance', taskName: 'KSPM — Vulnerability and Compliance', description: 'Configure Kubernetes Security Posture Management for vulnerability and compliance.', relevantModules: ['CWP'] },
  { id: 'oa-11', category: 'operational_assistance', taskName: 'Kubernetes Admission Control', description: 'Configure admission control policies for Kubernetes clusters.', relevantModules: ['CWP'] },
  { id: 'oa-12', category: 'operational_assistance', taskName: 'WAAS Rule and Application', description: 'Configure Web Application and API Security rules.', relevantModules: ['CWP'] },
  { id: 'oa-13', category: 'operational_assistance', taskName: 'Malware Policy Management', description: 'Configure and manage malware detection policies.', relevantModules: ['CWP', 'XDR'] },
  { id: 'oa-14', category: 'operational_assistance', taskName: 'Secret Policy Management', description: 'Configure and manage secrets detection policies.', relevantModules: ['CSPM', 'AppSec'] },
  { id: 'oa-15', category: 'operational_assistance', taskName: 'ASPM Visibility', description: 'Configure Application Security Posture Management visibility.', relevantModules: ['ASPM'] },
  { id: 'oa-16', category: 'operational_assistance', taskName: 'SCA + SBOM', description: 'Configure Software Composition Analysis and Software Bill of Materials.', relevantModules: ['AppSec', 'ASPM'] },
  { id: 'oa-17', category: 'operational_assistance', taskName: 'IaC and Secrets Scanning', description: 'Configure Infrastructure as Code and secrets scanning.', relevantModules: ['AppSec'] },

  // ============================================================
  // SECURITY OPTIMIZATION (Section 2.3)
  // ============================================================
  { id: 'so-01', category: 'security_optimization', taskName: 'Detection Rules Management Fine-tuning', description: 'Fine-tune existing detection rules for accuracy and relevance.', relevantModules: ['CSPM', 'XDR'] },
  { id: 'so-02', category: 'security_optimization', taskName: 'Custom Detection Rules', description: 'Create and optimize custom detection rules.', relevantModules: ['CSPM', 'XDR'] },
  { id: 'so-03', category: 'security_optimization', taskName: 'ASM', description: 'Configure and optimize Attack Surface Management.', relevantModules: ['ASM'] },
  { id: 'so-04', category: 'security_optimization', taskName: 'DSPM Review and DDR', description: 'Review DSPM configuration and Data Detection and Response.', relevantModules: ['DSPM'] },
  { id: 'so-05', category: 'security_optimization', taskName: 'API Advisory Sessions', description: 'Provide advisory sessions on API security configuration.', relevantModules: ['AppSec', 'ASPM'] },
  { id: 'so-06', category: 'security_optimization', taskName: 'Compliance Management', description: 'Optimize compliance monitoring and reporting.', relevantModules: ['CSPM'] },
  { id: 'so-07', category: 'security_optimization', taskName: 'Vulnerability Management', description: 'Optimize vulnerability detection, prioritization, and management.', relevantModules: ['CWP', 'CSPM'] },
  { id: 'so-08', category: 'security_optimization', taskName: 'Issue/Case Prioritization and Remediation', description: 'Prioritize and remediate security issues and cases.', relevantModules: ['ALL'] },
  { id: 'so-09', category: 'security_optimization', taskName: 'Malware, Secrets, Compliance and Vulnerability Tuning', description: 'Tune policies across malware, secrets, compliance, and vulnerability detection.', relevantModules: ['CWP', 'CSPM'] },
  { id: 'so-10', category: 'security_optimization', taskName: 'Threat Detection and Protection', description: 'Optimize threat detection and protection capabilities.', relevantModules: ['XDR', 'CWP'] },
  { id: 'so-11', category: 'security_optimization', taskName: 'AppSec Scan Management', description: 'Manage and optimize application security scanning.', relevantModules: ['AppSec'] },
  { id: 'so-12', category: 'security_optimization', taskName: 'Code to Cloud Visibility and Vulnerability Tracing', description: 'Configure end-to-end code to cloud visibility and vulnerability tracing.', relevantModules: ['AppSec', 'ASPM'] },
  { id: 'so-13', category: 'security_optimization', taskName: 'ASPM Application Risk', description: 'Assess and manage application risk through ASPM.', relevantModules: ['ASPM'] },
  { id: 'so-14', category: 'security_optimization', taskName: 'ASPM Workflow Review', description: 'Review and optimize ASPM workflows.', relevantModules: ['ASPM'] },
  { id: 'so-15', category: 'security_optimization', taskName: 'CI/CD Risk Management', description: 'Assess and manage risks in CI/CD pipelines.', relevantModules: ['AppSec', 'ASPM'] },

  // ============================================================
  // EXCLUDED — Requires Add-on S&O SKU (Section 2.4)
  // ============================================================
  { id: 'ex-01', category: 'excluded', taskName: 'Custom Reporting and Dashboards', description: 'Creating custom reports and dashboards beyond standard platform capabilities. Requires Add-on Scale and Optimize SKU.', relevantModules: ['ALL'] },
  { id: 'ex-02', category: 'excluded', taskName: 'Agent Lifecycle Management', description: 'Managing the full lifecycle of deployed agents. Requires Add-on Scale and Optimize SKU.', relevantModules: ['ALL'] },
  { id: 'ex-03', category: 'excluded', taskName: 'Build a Secure SDLC Model', description: 'Designing and implementing a secure software development lifecycle. Requires Add-on Scale and Optimize SKU.', relevantModules: ['ALL'] },
  { id: 'ex-04', category: 'excluded', taskName: 'Create Custom Automation for RBAC, Onboarding, APIs', description: 'Building custom automation scripts or tools for RBAC, onboarding, or API workflows. Requires Add-on Scale and Optimize SKU.', relevantModules: ['ALL'] },
  { id: 'ex-05', category: 'excluded', taskName: 'Create Custom Third-party Integrations', description: 'Building custom integrations with third-party tools beyond standard connectors. Requires Add-on Scale and Optimize SKU.', relevantModules: ['ALL'] },
  { id: 'ex-06', category: 'excluded', taskName: 'Remediation Response Strategy Review', description: 'Reviewing and designing remediation response strategies. Requires Add-on Scale and Optimize SKU.', relevantModules: ['ALL'] },
  { id: 'ex-07', category: 'excluded', taskName: 'Enhanced Compliance Reporting and Policy Creation', description: 'Creating enhanced compliance reports and custom compliance policies. Requires Add-on Scale and Optimize SKU.', relevantModules: ['ALL'] },
  { id: 'ex-08', category: 'excluded', taskName: 'CIEM Least Privilege Model Implementation', description: 'Implementing Cloud Infrastructure Entitlement Management least privilege models. Requires Add-on Scale and Optimize SKU.', relevantModules: ['ALL'] },
  { id: 'ex-09', category: 'excluded', taskName: 'Threat Hunting — Search and Investigate Review', description: 'Conducting threat hunting, search, and investigation reviews. Requires Add-on Scale and Optimize SKU.', relevantModules: ['ALL'] },
];
