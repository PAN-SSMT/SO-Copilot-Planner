export interface SupportCase {
  id: string;
  customerId: string;
  caseNumber: string;
  severity: 1 | 2 | 3 | 4;
  subject: string;
  status: 'Open' | 'In Progress' | 'Waiting on Customer' | 'Waiting on Engineering' | 'Resolved';
  createdDate: string;
  lastUpdatedDate: string;
  lastUpdateSummary: string;
  assignedTo: string;
  sfdcUrl: string;
}

export const supportCases: SupportCase[] = [
  {
    id: 'sc-002-01',
    customerId: 'cust-002',
    caseNumber: 'CS-2026-03842',
    severity: 3,
    subject: 'Prisma Cloud connector failing for AWS sub-account',
    status: 'Open',
    createdDate: '2026-03-20',
    lastUpdatedDate: '2026-04-10',
    lastUpdateSummary: 'TAC requested AWS CloudTrail logs. Awaiting customer response.',
    assignedTo: 'TAC - Level 2',
    sfdcUrl: 'https://panw.my.salesforce.com/500SC00200003842',
  },
  {
    id: 'sc-004-01',
    customerId: 'cust-004',
    caseNumber: 'CS-2026-04512',
    severity: 2,
    subject: 'Azure compliance policy not triggering alerts for PCI-DSS controls',
    status: 'In Progress',
    createdDate: '2026-03-28',
    lastUpdatedDate: '2026-04-14',
    lastUpdateSummary:
      'Engineering confirmed bug in policy evaluation logic. Fix targeted for next release (v4.2.1).',
    assignedTo: 'TAC - Level 3 / Engineering',
    sfdcUrl: 'https://panw.my.salesforce.com/500SC00400004512',
  },
  {
    id: 'sc-004-02',
    customerId: 'cust-004',
    caseNumber: 'CS-2026-04780',
    severity: 3,
    subject: 'DSPM scan timeout on large S3 buckets (>500K objects)',
    status: 'Open',
    createdDate: '2026-04-08',
    lastUpdatedDate: '2026-04-12',
    lastUpdateSummary: 'Reproduced in lab. Investigating memory allocation during scan.',
    assignedTo: 'TAC - Level 2',
    sfdcUrl: 'https://panw.my.salesforce.com/500SC00400004780',
  },
  {
    id: 'sc-006-01',
    customerId: 'cust-006',
    caseNumber: 'CS-2026-04891',
    severity: 2,
    subject: 'DSPM scan not correctly categorizing ICS data',
    status: 'In Progress',
    createdDate: '2026-03-15',
    lastUpdatedDate: '2026-04-13',
    lastUpdateSummary:
      'Product team reviewing ICS data classification rules. TAC escalated to engineering. ETA: 2 weeks.',
    assignedTo: 'TAC - Level 3 / Product',
    sfdcUrl: 'https://panw.my.salesforce.com/500SC00600004891',
  },
  {
    id: 'sc-006-02',
    customerId: 'cust-006',
    caseNumber: 'CS-2026-04923',
    severity: 2,
    subject: 'Custom detection rule rendering bug in Cortex Cloud',
    status: 'In Progress',
    createdDate: '2026-03-18',
    lastUpdatedDate: '2026-04-11',
    lastUpdateSummary: 'Bug confirmed. Fix in QA testing. Targeted for hotfix release.',
    assignedTo: 'TAC - Level 3',
    sfdcUrl: 'https://panw.my.salesforce.com/500SC00600004923',
  },
  {
    id: 'sc-007-01',
    customerId: 'cust-007',
    caseNumber: 'CS-2026-05102',
    severity: 3,
    subject: 'PC2CC policy migration API returning 400 for custom compliance policies',
    status: 'Open',
    createdDate: '2026-04-05',
    lastUpdatedDate: '2026-04-14',
    lastUpdateSummary:
      'Migration Control Tower reviewing API format differences. 3 of 15 policies affected.',
    assignedTo: 'MCT Team',
    sfdcUrl: 'https://panw.my.salesforce.com/500SC00700005102',
  },
  {
    id: 'sc-005-01',
    customerId: 'cust-005',
    caseNumber: 'CS-2026-04650',
    severity: 3,
    subject: 'EKS runtime agent high CPU usage during container scaling events',
    status: 'Waiting on Engineering',
    createdDate: '2026-04-01',
    lastUpdatedDate: '2026-04-09',
    lastUpdateSummary:
      'Engineering requested heap dump during next scaling event. Customer scheduling maintenance window.',
    assignedTo: 'TAC - Level 3',
    sfdcUrl: 'https://panw.my.salesforce.com/500SC00500004650',
  },
  {
    id: 'sc-009-01',
    customerId: 'cust-009',
    caseNumber: 'CS-2026-05201',
    severity: 4,
    subject: 'Request for documentation on AppSec SBOM export format',
    status: 'Waiting on Customer',
    createdDate: '2026-04-10',
    lastUpdatedDate: '2026-04-13',
    lastUpdateSummary: 'Documentation link sent. Awaiting customer confirmation.',
    assignedTo: 'TAC - Level 1',
    sfdcUrl: 'https://panw.my.salesforce.com/500SC00900005201',
  },
];
