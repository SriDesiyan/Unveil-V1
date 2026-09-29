import { 
  CaseRecord, 
  PersonaProfile, 
  EvidenceArtifact, 
  GraphNode, 
  GraphEdge, 
  TimelineEvent, 
  AgentTask, 
  ActivityFeedItem,
  TrackerRecord
} from '../types';

export const PRIMARY_CASE_ID = 'CASE-26151-001';

export const MOCK_CASES: CaseRecord[] = [
  {
    id: 'CASE-26151-001',
    title: 'Controlled Alias Migration & Cross-Layer Linkage Study',
    subtitle: 'NightHarbor → NightRiver Pseudonymous Entity Attribution',
    leadAgency: 'NTRO Cyber Forensics Research / SIH-26151 Testbed',
    assignedAnalyst: 'Lead Analyst V. Sharma (Credential #8842-NTRO)',
    badgeNumber: 'NTRO-8842',
    status: 'ACTIVE - EVIDENCE COMPILATION',
    priority: 'CRITICAL',
    primarySubject: 'NightHarbor',
    secondarySubject: 'NightRiver',
    evidenceCount: 7,
    contradictionCount: 1,
    investigationPhase: 'Phase IV: Cross-Engine Evidence Fusion & Contradiction Resolution',
    createdDate: '2026-07-12 09:15 UTC',
    updatedDate: '2026-08-25 15:40 UTC',
    targetInfrastructure: 'srv-03.harbor-sync.is (Correlated Clearnet VPS 185.220.101.44)',
    trackedCryptoUsd: 1420500,
    fusionScore: 78.4,
    posture: 'INVESTIGATIVE LEAD',
    summary: 'Investigation evaluating candidate operational migration from legacy actor persona NightHarbor to emergent identity NightRiver across Tor hidden services, cryptographic key rotation packets, unhosted Bitcoin peel chains, and stylometric writeprints. A temporal contradiction in active posting windows currently mandates an investigative lead posture rather than corroborated attribution.'
  },
  {
    id: 'CASE-2026-CR-0104',
    title: 'Operation ZeroTread // Tor Exploit Brokerage De-anonymization',
    subtitle: 'Infrastructure Leakage & BGP Descriptor Timing Analysis',
    leadAgency: 'Federal Cyber Defense Liaison / CERT-In Test Cell',
    assignedAnalyst: 'SA K. Danilov (Badge #4190)',
    badgeNumber: 'FED-4190',
    status: 'UNDER REVIEW',
    priority: 'HIGH',
    primarySubject: 'ZeroDayBroker_Ru',
    secondarySubject: 'Mikhail A. Sokolov (Candidate)',
    evidenceCount: 12,
    contradictionCount: 0,
    investigationPhase: 'Phase V: Prosecutorial Dossier Staging',
    createdDate: '2026-04-18 11:20 UTC',
    updatedDate: '2026-08-20 18:30 UTC',
    targetInfrastructure: '194.87.139.102 (Selectel Colocation Node)',
    trackedCryptoUsd: 3840000,
    fusionScore: 91.2,
    posture: 'CORROBORATED CANDIDATE',
    summary: 'Multi-layer triangulation on zero-day exploit broker infrastructure. Apache mod_status leak combined with microsecond-precision Tor descriptor publication drift mapped origin VPS directly to an offshore colocation facility.'
  },
  {
    id: 'CASE-2026-CR-0219',
    title: 'Operation DarkLedger // Carding & Mixer Peer Cashout Syndicate',
    subtitle: 'High-Volume Escrow Peel Chain & Monero Pool Clustering',
    leadAgency: 'Joint Financial Intelligence Task Force',
    assignedAnalyst: 'SA T. Alva (Badge #7731)',
    badgeNumber: 'FED-7731',
    status: 'DISPUTED',
    priority: 'HIGH',
    primarySubject: 'CardMaster_RU',
    secondarySubject: 'Unresolved Co-Signer Node',
    evidenceCount: 9,
    contradictionCount: 2,
    investigationPhase: 'Phase III: Counterparty Disambiguation',
    createdDate: '2026-05-02 14:00 UTC',
    updatedDate: '2026-08-22 08:15 UTC',
    targetInfrastructure: '141.98.11.204 (ITL Offshore LLC)',
    trackedCryptoUsd: 4120000,
    fusionScore: 42.1,
    posture: 'CONFLICTED / DISPUTED',
    summary: 'Cryptocurrency laundering ring investigation. While high-volume Tron TRC-20 and Bitcoin transactions linked to a single Dubai OTC desk were established, contradictory time-zone telemetry and opposing stylometric markers suggest multiple independent operators sharing credentials.'
  }
];

export const MOCK_PERSONAS: PersonaProfile[] = [
  {
    id: 'P-001',
    primaryHandle: 'NightHarbor',
    knownAliases: ['NH-Vector', 'HarborAdmin', 'AnchorSec_01', 'Krypton_Mirror'],
    caseId: 'CASE-26151-001',
    status: 'INVESTIGATIVE LEAD',
    category: 'Tor Hidden Service Infrastructure & Extortion Brokerage',
    firstSeen: '2024-03-15',
    lastSeen: '2026-07-28',
    primarySource: 'Controlled Marketplace Archive / Dread Forum Mirror',
    allSources: ['Dread Forum', 'Exploit.in Snapshot', 'Controlled BreachForums v3 Dump', 'Tor HSDir Ingestion'],
    associatedMarketplaces: ['Harbor Market (Offline)', 'Dread', 'Exploit.in'],
    summaryDossier: 'Primary observed threat actor operating dark-web service orchestration and cryptographic escrow. Historical posting history ceased abruptly on 2026-07-28 coincident with an announced "retirement", followed immediately by the appearance of NightRiver.',
    pgpKeys: [
      {
        keyId: '7AC419F2',
        fingerprint: '7A42 90D1 E874 553C 219B  D004 7AC4 19F2 9E21 4410',
        algorithm: 'RSA-4096',
        bitLength: 4096,
        createdDate: '2024-02-10',
        verifiedSignedMessages: 42,
        publicKeySnippet: '-----BEGIN PGP PUBLIC KEY BLOCK-----\nmQINBF/1c...NightHarbor <nightharbor@secure-jabber.is>...\n-----END PGP PUBLIC KEY BLOCK-----'
      }
    ],
    cryptoWallets: [
      {
        currency: 'BTC',
        address: 'bc1q9u2k84a6x79f225m9307cxtr590h00pke934zx',
        clusterTag: 'NightHarbor Escrow Splitter #1',
        estimatedBalanceUsd: 1420500,
        firstSeen: '2024-04-11',
        lastSeen: '2026-07-26',
        taintedSource: 'Controlled ransomware extortion deposit & escrow fee deduction',
        transactionCount: 148,
        counterparties: ['Wasabi Mixer Egress #4', 'bc1q...h2p', 'cp-01-escrow']
      }
    ],
    hiddenServices: [
      {
        onionAddress: 'harbor77kxj49z9v2fka83kndla047fks.onion',
        serviceName: 'Harbor Secure Exchange Portal',
        lastSeen: '2026-07-25',
        status: 'OFFLINE',
        serverHeader: 'nginx/1.24.0 (Ubuntu)',
        tlsFingerprint: 'sha256:4a88f1c0993e82bf4e19873a01948ba98231',
        sshBanner: 'SSH-2.0-OpenSSH_8.9p1 Ubuntu-3ubuntu0.6',
        correlatedClearnetOrigin: {
          ip: '185.220.101.44',
          isp: 'Belcloud High-Availability Hosting',
          country: 'Bulgaria',
          asNumber: 'AS206216',
          method: 'Apache mod_status & TLS Certificate SAN disclosure',
          leakDescription: 'Exposed worker process telemetry disclosed origin VPS IP 185.220.101.44 serving virtual host harbor-sync.'
        },
        misconfigurations: [
          {
            id: 'MISCONFIG-NH-01',
            severity: 'CRITICAL',
            type: 'EXPOSED_ORIGIN_HEADER',
            endpoint: '/nginx_status',
            description: 'Publicly readable server metrics leaking clearnet gateway address.',
            technicalEvidence: 'Nginx server-status returned internal loopback relay 185.220.101.44:8080.',
            clearnetOriginLeak: '185.220.101.44',
            confidence: 96
          }
        ]
      }
    ],
    stylometry: {
      lexicalDiversityScore: 0.74,
      averageSentenceLength: 17.8,
      vocabularyRichness: 'High (Type-Token Ratio 0.68)',
      punctuationFingerprint: 'Repeated em-dash variants, double-semicolon formatting, Oxford comma strictness',
      functionWordOverlap: 84.2,
      topSyntacticPatterns: ['Passive construction preference (38%)', 'Adverbial clause initial positioning (41%)', 'Lowercase acronym formatting'],
      postingTimeWindowUtc: '18:00 - 23:30 UTC',
      peakHourDistribution: '20:00 - 22:00 UTC (82% of samples)',
      burstCadence: 'Episodic post clustering (3-5 consecutive forum replies within 14 min)',
      confidenceLead: 'Strong stylometric continuity with NightRiver samples',
      shortTextWarning: false
    },
    hypothesis: {
      candidatePair: ['NightHarbor', 'NightRiver'],
      acsScore: 78.4,
      formulaFormulaBreakdown: {
        baseIntercept: -1.2,
        infrastructureSignal: 2.1,
        cryptographicSignal: 2.8,
        stylometricSignal: 1.9,
        behavioralSignal: 1.4,
        temporalSignal: 1.1,
        sourceReliabilitySignal: 1.2,
        contradictionPenalty: 2.4
      },
      posture: 'INVESTIGATIVE LEAD',
      decisionReasoning: 'Cryptographic subkey cross-signing (EV-26151-014), infrastructure overlap (EV-26151-021), and stylometric syntax congruence strongly support an operational alias migration. However, EV-26151-041 identifies concurrent activity on 2026-08-21 that contradicts the asserted complete migration date, penalizing the attribution score and precluding automated corroboration.',
      independentCorroborationGroups: ['Cryptographic (PGP Key Cross-Signature)', 'Infrastructure (TLS SAN & VPS Heritage)', 'Stylometric (Writeprint Syntax & Grammar Overlap)', 'Blockchain (Peel Chain Direct Ingress)'],
      contradictions: ['EV-26151-041: Simultaneous active session tokens registered from distinct ASNs on 2026-08-21 03:12 UTC'],
      abstentionTriggered: false
    }
  },
  {
    id: 'P-002',
    primaryHandle: 'NightRiver',
    knownAliases: ['RiverLine', 'NR-07', 'DeltaChannel', 'Vector_R'],
    caseId: 'CASE-26151-001',
    status: 'INVESTIGATIVE LEAD',
    category: 'Successor Service Architecture & Escrow Relays',
    firstSeen: '2026-07-12',
    lastSeen: '2026-08-25',
    primarySource: 'Controlled Marketplace Archive Snapshot v2',
    allSources: ['Controlled Marketplace v2', 'Dread Forum Successor Thread', 'Tor Onion Ingestion'],
    associatedMarketplaces: ['RiverEscrow Relay', 'Dread'],
    summaryDossier: 'Successor entity first detected registering forum vendor threads in mid-July 2026. Claims to have inherited escrow operations from retired entities while maintaining strict operational security.',
    pgpKeys: [
      {
        keyId: 'B910C24A',
        fingerprint: '119B C482 7701 9A22 DFF3  001A B910 C24A 4B5E CC82',
        algorithm: 'Ed25519',
        bitLength: 256,
        createdDate: '2026-07-10',
        verifiedSignedMessages: 19,
        publicKeySnippet: '-----BEGIN PGP PUBLIC KEY BLOCK-----\nmDMEYP...NightRiver Transition Key <river@onion-relay.net>...\n-----END PGP PUBLIC KEY BLOCK-----'
      }
    ],
    cryptoWallets: [
      {
        currency: 'BTC',
        address: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjh97h2p',
        clusterTag: 'NightRiver Ingress Vault',
        estimatedBalanceUsd: 890000,
        firstSeen: '2026-07-15',
        lastSeen: '2026-08-24',
        taintedSource: 'Direct peel chain hop from legacy NightHarbor splitter #1',
        transactionCount: 34,
        counterparties: ['bc1q9u2k84a6x79f225m9307cxtr590h00pke934zx', 'cp-02-cashout']
      }
    ],
    hiddenServices: [
      {
        onionAddress: 'river99xkp2018aflkq99zla0021pzkla04921f.onion',
        serviceName: 'RiverEscrow NextGen Node',
        lastSeen: '2026-08-25',
        status: 'ONLINE',
        serverHeader: 'nginx/1.24.0 (Ubuntu)',
        tlsFingerprint: 'sha256:4a88f1c0993e82bf4e19873a01948ba98231',
        sshBanner: 'SSH-2.0-OpenSSH_8.9p1 Ubuntu-3ubuntu0.6',
        correlatedClearnetOrigin: {
          ip: '185.220.101.44',
          isp: 'Belcloud High-Availability Hosting',
          country: 'Bulgaria',
          asNumber: 'AS206216',
          method: 'X.509 Certificate Subject Alternative Name Continuity',
          leakDescription: 'Certificate EV-26151-021 issued for harbor-sync.is retained active SAN covering river-sync-node.is.'
        },
        misconfigurations: []
      }
    ],
    stylometry: {
      lexicalDiversityScore: 0.72,
      averageSentenceLength: 18.2,
      vocabularyRichness: 'High (Type-Token Ratio 0.66)',
      punctuationFingerprint: 'Double-semicolon formatting, parentheses citation structures, identical hyphenation',
      functionWordOverlap: 81.9,
      topSyntacticPatterns: ['Passive construction preference (35%)', 'Adverbial clause initial positioning (44%)'],
      postingTimeWindowUtc: '17:30 - 23:00 UTC',
      peakHourDistribution: '19:30 - 22:00 UTC (79% of samples)',
      burstCadence: 'Episodic post clustering',
      confidenceLead: 'High degree of stylistic continuity with NightHarbor writeprints',
      shortTextWarning: false
    },
    hypothesis: {
      candidatePair: ['NightRiver', 'NightHarbor'],
      acsScore: 78.4,
      formulaFormulaBreakdown: {
        baseIntercept: -1.2,
        infrastructureSignal: 2.1,
        cryptographicSignal: 2.8,
        stylometricSignal: 1.9,
        behavioralSignal: 1.4,
        temporalSignal: 1.1,
        sourceReliabilitySignal: 1.2,
        contradictionPenalty: 2.4
      },
      posture: 'INVESTIGATIVE LEAD',
      decisionReasoning: 'Corroboration signals link NightRiver as an operational re-branding of NightHarbor. Contradiction flag EV-26151-041 remains unresolved.',
      independentCorroborationGroups: ['Cryptographic', 'Infrastructure', 'Stylometric', 'Blockchain'],
      contradictions: ['EV-26151-041: Migration window collision'],
      abstentionTriggered: false
    }
  }
];

export const MOCK_EVIDENCE: EvidenceArtifact[] = [
  {
    id: 'EV-26151-014',
    evidenceType: 'PGP Subkey Cross-Signature Packet',
    group: 'Cryptographic',
    source: 'Controlled Marketplace Archive Snapshot v1.0',
    sourceReliability: 'HIGH',
    capturedTimestamp: '2026-07-12 10:22:14 UTC',
    firstSeen: '2026-07-12',
    lastSeen: '2026-07-12',
    contentSummary: 'Preserved OpenPGP key transition announcement signed by NightHarbor master key 7AC419F2 endorsing subkey B910C24A utilized by NightRiver. Cryptographic signature cryptographically verified against case keyring.',
    warcReference: 'warc://controlled-corpus/case-26151/20260712-102214-warc.gz#offset=149204',
    sha256Hash: 'a8f190c12847be6630f9a21b3c901842e01934ba9823104f7620bcde10293481',
    extractorVersion: 'UNVEIL-PGP-EXTRACTOR v1.4.2',
    extractionConfidence: 99.8,
    linkedEntities: ['NightHarbor (P-001)', 'NightRiver (P-002)', 'Key: 7AC419F2', 'Key: B910C24A'],
    isContradiction: false
  },
  {
    id: 'EV-26151-021',
    evidenceType: 'X.509 TLS Subject Alt Name (SAN) Continuity',
    group: 'Infrastructure',
    source: 'Authorized Infrastructure Telemetry / Port 443 Probe',
    sourceReliability: 'HIGH',
    capturedTimestamp: '2026-07-18 06:14:02 UTC',
    firstSeen: '2026-07-18',
    lastSeen: '2026-08-06',
    contentSummary: 'Preserved Let\'s Encrypt certificate (Serial: 04:9A:82:11:00:FE) presenting dual SAN attributes harbor-sync.is and river-sync-node.is hosted on IP 185.220.101.44 (AS206216).',
    warcReference: 'warc://controlled-corpus/case-26151/20260718-061402-tls.warc.gz#offset=84920',
    sha256Hash: '4c810b429184ba7e012984fe73019842fba90123847ac0192834bfe981240192',
    extractorVersion: 'UNVEIL-CITE-ENGINE v2.1.0',
    extractionConfidence: 97.4,
    linkedEntities: ['harbor-sync.is', 'river-sync-node.is', '185.220.101.44', 'srv-03'],
    isContradiction: false
  },
  {
    id: 'EV-26151-032',
    evidenceType: 'PTRW Stylometric Multi-Feature Writeprint Match',
    group: 'Stylometric',
    source: 'Controlled Forum Corpus Snapshot (14,200 tokens)',
    sourceReliability: 'MEDIUM',
    capturedTimestamp: '2026-08-03 19:48:33 UTC',
    firstSeen: '2026-08-03',
    lastSeen: '2026-08-03',
    contentSummary: 'Comparative stylometric writeprint analysis between 42 NightHarbor forum posts and 18 NightRiver replies. Yielded 84.2% function-word distribution overlap and congruent syntactic branching. Note: Short-text samples (<150 words) isolated to prevent false certainty.',
    warcReference: 'warc://controlled-corpus/case-26151/20260803-194833-nlp.warc.gz#offset=330192',
    sha256Hash: '918420fe8102934ba7e0192834fbc01928347ba0192834fe73019842fba90123',
    extractorVersion: 'UNVEIL-PTRW-STYLOMETRY v3.0.1',
    extractionConfidence: 82.5,
    linkedEntities: ['NightHarbor (P-001)', 'NightRiver (P-002)'],
    isContradiction: false
  },
  {
    id: 'EV-26151-038',
    evidenceType: 'Bitcoin Peel Chain Direct Egress Link',
    group: 'Blockchain',
    source: 'Public Ledger Ingestion Engine (Block #884192)',
    sourceReliability: 'HIGH',
    capturedTimestamp: '2026-08-08 14:05:51 UTC',
    firstSeen: '2026-08-08',
    lastSeen: '2026-08-08',
    contentSummary: 'Transaction 8f9b204c...33d8 transferred 14.85 BTC from NightHarbor splitter address bc1q9u2k84a6x79f225m9307cxtr590h00pke934zx directly into freshly initialized NightRiver deposit address bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjh97h2p without mixer intervention.',
    warcReference: 'warc://controlled-corpus/case-26151/20260808-140551-btc.warc.gz#offset=12401',
    sha256Hash: 'e10293481a8f190c12847be6630f9a21b3c901842e01934ba9823104f7620bcd',
    extractorVersion: 'UNVEIL-BTI-LEDGER v1.8.0',
    extractionConfidence: 99.1,
    linkedEntities: ['bc1q9u2k84a6x79f225m9307cxtr590h00pke934zx', 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjh97h2p'],
    isContradiction: false
  },
  {
    id: 'EV-26151-041',
    evidenceType: 'Temporal Session Collision / ASN Discrepancy',
    group: 'Contradiction',
    source: 'Source Capture Ledger & Authenticated Relay Logs',
    sourceReliability: 'HIGH',
    capturedTimestamp: '2026-08-21 03:12:40 UTC',
    firstSeen: '2026-08-21',
    lastSeen: '2026-08-21',
    contentSummary: 'AUTHENTICATED ACTIVITY CONFLICT: On 2026-08-21 at 03:12 UTC, active administrative Jabber sessions were simultaneously recorded for both NightHarbor (authenticated via AS58224 in Iran) and NightRiver (authenticated via AS206216 in Bulgaria). This concurrent operational window contradicts a clean single-operator alias migration hypothesis.',
    warcReference: 'warc://controlled-corpus/case-26151/20260821-031240-conflict.warc.gz#offset=98412',
    sha256Hash: 'fba90123847ac0192834bfe9812401924c810b429184ba7e012984fe73019842',
    extractorVersion: 'UNVEIL-TEMPORAL-AUDIT v2.0.4',
    extractionConfidence: 94.6,
    linkedEntities: ['NightHarbor (P-001)', 'NightRiver (P-002)', 'AS58224', 'AS206216'],
    isContradiction: true,
    contradictionNotes: 'Penalizes attribution confidence score by -2.4 in fusion equation. Mandates INVESTIGATIVE LEAD status until physical operator redundancy can be ruled in or out.'
  },
  {
    id: 'EV-26151-042',
    evidenceType: 'SSH Host Key Fingerprint Overlap',
    group: 'Infrastructure',
    source: 'Automated Port Scanner (CITE Infrastructure Engine)',
    sourceReliability: 'HIGH',
    capturedTimestamp: '2026-08-24 11:04:19 UTC',
    firstSeen: '2026-08-24',
    lastSeen: '2026-08-24',
    contentSummary: 'Identical ED25519 SSH host key SHA-256:7uT4wBq3s10xVp9L4kMz82jF1qW returned by backup clearnet gateway for both legacy and current onion hidden service endpoints.',
    warcReference: 'warc://controlled-corpus/case-26151/20260824-110419-ssh.warc.gz#offset=41092',
    sha256Hash: '3c901842e01934ba9823104f7620bcde10293481a8f190c12847be6630f9a21b',
    extractorVersion: 'UNVEIL-CITE-ENGINE v2.1.0',
    extractionConfidence: 98.2,
    linkedEntities: ['srv-03', 'harbor-sync.is', 'river-sync-node.is'],
    isContradiction: false
  },
  {
    id: 'EV-26151-045',
    evidenceType: 'Tor Descriptor Keepalive Drift Alignment',
    group: 'Temporal',
    source: 'Tor Network Ingestion Probe (Consensus Archive)',
    sourceReliability: 'MEDIUM',
    capturedTimestamp: '2026-08-25 09:30:11 UTC',
    firstSeen: '2026-07-12',
    lastSeen: '2026-08-25',
    contentSummary: 'HSDir descriptor publication keepalive micro-intervals for both harbor77...onion and river99...onion display synchronized 20-minute publication jitter aligned to AS206216 upstream cron scheduler.',
    warcReference: 'warc://controlled-corpus/case-26151/20260825-093011-hsdir.warc.gz#offset=55210',
    sha256Hash: '7620bcde10293481a8f190c12847be6630f9a21b3c901842e01934ba9823104f',
    extractorVersion: 'UNVEIL-CITE-ENGINE v2.1.0',
    extractionConfidence: 89.0,
    linkedEntities: ['harbor77kxj49z9v2fka83kndla047fks.onion', 'river99xkp2018aflkq99zla0021pzkla04921f.onion'],
    isContradiction: false
  }
];

export const MOCK_GRAPH_NODES: GraphNode[] = [
  {
    "id": "NODE-P001",
    "label": "NightStalker",
    "sublabel": "Syndicate Leader",
    "type": "PERSONA",
    "category": "Persona",
    "confidence": 0.95,
    "firstSeen": "2026-01-15",
    "lastSeen": "2026-09-28",
    "degree": 85,
    "details": {
      "Role": "Syndicate Leader",
      "Forum": "Dread/Exploit",
      "Status": "Active Primary Target"
    }
  },
  {
    "id": "NODE-P002",
    "label": "HydraShadow",
    "sublabel": "Financial Broker",
    "type": "ALIAS",
    "category": "Alias",
    "confidence": 0.9,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-27",
    "degree": 42,
    "details": {
      "Role": "Financial Broker",
      "Market": "Hydra-V2",
      "Status": "Active Co-Conspirator"
    }
  },
  {
    "id": "NODE-P003",
    "label": "K-Vortex",
    "sublabel": "Disputed Candidate",
    "type": "CANDIDATE_ENTITY",
    "category": "Candidate Entity",
    "confidence": 0.35,
    "firstSeen": "2025-11-10",
    "lastSeen": "2026-03-02",
    "degree": 12,
    "details": {
      "Status": "Detained",
      "Alibi": "Verified Physical Remand",
      "Verdict": "Disputed Contradiction"
    }
  },
  {
    "id": "NODE-ONION-MAIN",
    "label": "darkriver7x6kz9o2la8m4q7y.onion",
    "sublabel": "Tor v3 Leak Portal",
    "type": "ONION",
    "category": "Onion Service",
    "confidence": 0.92,
    "firstSeen": "2026-01-20",
    "lastSeen": "2026-09-28",
    "degree": 95,
    "details": {
      "Protocol": "Tor v3",
      "Port": 80,
      "Role": "Extortion Blog"
    }
  },
  {
    "id": "NODE-WALLET-MAIN",
    "label": "bc1q9x3kf82js97a2n0z91m0e8v4",
    "sublabel": "NightStalker Ransom Vault",
    "type": "WALLET",
    "category": "Wallet",
    "confidence": 0.96,
    "firstSeen": "2026-01-18",
    "lastSeen": "2026-09-28",
    "degree": 38,
    "details": {
      "Currency": "BTC",
      "Balance": "14.28 BTC",
      "TxCount": 42
    }
  },
  {
    "id": "NODE-WALLET-DEP",
    "label": "bc1q7w2m3p98k10z89a421y90px",
    "sublabel": "HydraShadow Deposit Escrow",
    "type": "WALLET",
    "category": "Wallet",
    "confidence": 0.91,
    "firstSeen": "2026-02-05",
    "lastSeen": "2026-09-28",
    "degree": 24,
    "details": {
      "Currency": "BTC",
      "Balance": "38.10 BTC",
      "Market": "Hydra-V2"
    }
  },
  {
    "id": "NODE-VPS-01",
    "label": "185.220.101.45 (NL)",
    "sublabel": "Clearnet VPS Master",
    "type": "INFRASTRUCTURE",
    "category": "Infrastructure",
    "confidence": 0.88,
    "firstSeen": "2026-01-10",
    "lastSeen": "2026-09-28",
    "degree": 28,
    "details": {
      "ASN": "AS9009",
      "Country": "NL",
      "City": "Amsterdam",
      "ISP": "Hosting Services"
    }
  },
  {
    "id": "NODE-PGP-MASTER",
    "label": "0x9B10C48A2D90E18F",
    "sublabel": "Master PGP Key (4096R)",
    "type": "PGP",
    "category": "PGP",
    "confidence": 0.98,
    "firstSeen": "2025-12-01",
    "lastSeen": "2028-12-01",
    "degree": 18,
    "details": {
      "Fingerprint": "8F91 204B C48A 2D90 E18F 9012 8472 9102 3847 2910"
    }
  },
  {
    "id": "NODE-ONION-MIRROR1",
    "label": "nightstream2m4u9q1.onion",
    "sublabel": "Tor Mirror v3",
    "type": "ONION",
    "category": "Onion Service",
    "confidence": 0.82,
    "firstSeen": "2026-01-20",
    "lastSeen": "2026-09-28",
    "degree": 8,
    "details": {
      "Role": "Tor Mirror v3"
    }
  },
  {
    "id": "NODE-ONION-MIRROR2",
    "label": "nightvault9q81za0p.onion",
    "sublabel": "Tor Backup Portal",
    "type": "ONION",
    "category": "Onion Service",
    "confidence": 0.82,
    "firstSeen": "2026-01-20",
    "lastSeen": "2026-09-28",
    "degree": 8,
    "details": {
      "Role": "Tor Backup Portal"
    }
  },
  {
    "id": "NODE-ONION-DROP",
    "label": "shadowdrop4y9p21v.onion",
    "sublabel": "Escrow Drop Point",
    "type": "ONION",
    "category": "Onion Service",
    "confidence": 0.82,
    "firstSeen": "2026-01-20",
    "lastSeen": "2026-09-28",
    "degree": 8,
    "details": {
      "Role": "Escrow Drop Point"
    }
  },
  {
    "id": "NODE-VPS-02",
    "label": "194.26.29.112 (SE)",
    "sublabel": "VPS Staging AS44034 SE",
    "type": "INFRASTRUCTURE",
    "category": "Infrastructure",
    "confidence": 0.82,
    "firstSeen": "2026-01-20",
    "lastSeen": "2026-09-28",
    "degree": 8,
    "details": {
      "Role": "VPS Staging AS44034 SE"
    }
  },
  {
    "id": "NODE-VPS-03",
    "label": "45.142.214.88 (CH)",
    "sublabel": "VPS Ingress AS200017 CH",
    "type": "INFRASTRUCTURE",
    "category": "Infrastructure",
    "confidence": 0.82,
    "firstSeen": "2026-01-20",
    "lastSeen": "2026-09-28",
    "degree": 8,
    "details": {
      "Role": "VPS Ingress AS200017 CH"
    }
  },
  {
    "id": "NODE-VPS-04",
    "label": "91.240.118.15 (RO)",
    "sublabel": "Relay Node AS51852 RO",
    "type": "INFRASTRUCTURE",
    "category": "Infrastructure",
    "confidence": 0.82,
    "firstSeen": "2026-01-20",
    "lastSeen": "2026-09-28",
    "degree": 8,
    "details": {
      "Role": "Relay Node AS51852 RO"
    }
  },
  {
    "id": "NODE-VPS-05",
    "label": "185.165.169.72 (NL)",
    "sublabel": "Backend DB Proxy AS57523",
    "type": "INFRASTRUCTURE",
    "category": "Infrastructure",
    "confidence": 0.82,
    "firstSeen": "2026-01-20",
    "lastSeen": "2026-09-28",
    "degree": 8,
    "details": {
      "Role": "Backend DB Proxy AS57523"
    }
  },
  {
    "id": "NODE-VPS-06",
    "label": "193.106.191.24 (DE)",
    "sublabel": "Reverse Proxy AS48693",
    "type": "INFRASTRUCTURE",
    "category": "Infrastructure",
    "confidence": 0.82,
    "firstSeen": "2026-01-20",
    "lastSeen": "2026-09-28",
    "degree": 8,
    "details": {
      "Role": "Reverse Proxy AS48693"
    }
  },
  {
    "id": "NODE-CERT-01",
    "label": "TLS: nightriver-core.internal",
    "sublabel": "X.509 Certificate",
    "type": "CERTIFICATE",
    "category": "Infrastructure",
    "confidence": 0.82,
    "firstSeen": "2026-01-20",
    "lastSeen": "2026-09-28",
    "degree": 8,
    "details": {
      "Role": "X.509 Certificate"
    }
  },
  {
    "id": "NODE-CERT-02",
    "label": "TLS: vault-proxy.local",
    "sublabel": "X.509 Certificate",
    "type": "CERTIFICATE",
    "category": "Infrastructure",
    "confidence": 0.82,
    "firstSeen": "2026-01-20",
    "lastSeen": "2026-09-28",
    "degree": 8,
    "details": {
      "Role": "X.509 Certificate"
    }
  },
  {
    "id": "NODE-CERT-03",
    "label": "TLS: *.exfil-storage.net",
    "sublabel": "Wildcard TLS Cert",
    "type": "CERTIFICATE",
    "category": "Infrastructure",
    "confidence": 0.82,
    "firstSeen": "2026-01-20",
    "lastSeen": "2026-09-28",
    "degree": 8,
    "details": {
      "Role": "Wildcard TLS Cert"
    }
  },
  {
    "id": "NODE-SSH-01",
    "label": "SSH: 3c8e12fd9a7b...",
    "sublabel": "OpenSSH 8.9p1 Hostkey",
    "type": "INFRASTRUCTURE",
    "category": "Infrastructure",
    "confidence": 0.82,
    "firstSeen": "2026-01-20",
    "lastSeen": "2026-09-28",
    "degree": 8,
    "details": {
      "Role": "OpenSSH 8.9p1 Hostkey"
    }
  },
  {
    "id": "NODE-SSH-02",
    "label": "SSH: 91bf84ac12e0...",
    "sublabel": "OpenSSH 9.1 Hostkey",
    "type": "INFRASTRUCTURE",
    "category": "Infrastructure",
    "confidence": 0.82,
    "firstSeen": "2026-01-20",
    "lastSeen": "2026-09-28",
    "degree": 8,
    "details": {
      "Role": "OpenSSH 9.1 Hostkey"
    }
  },
  {
    "id": "NODE-SSH-03",
    "label": "SSH: 77a0bc41d2f9...",
    "sublabel": "OpenSSH 8.2p1 Hostkey",
    "type": "INFRASTRUCTURE",
    "category": "Infrastructure",
    "confidence": 0.82,
    "firstSeen": "2026-01-20",
    "lastSeen": "2026-09-28",
    "degree": 8,
    "details": {
      "Role": "OpenSSH 8.2p1 Hostkey"
    }
  },
  {
    "id": "NODE-FAV-01",
    "label": "Favicon: -120938472",
    "sublabel": "MurmurHash3 Hash",
    "type": "INFRASTRUCTURE",
    "category": "Infrastructure",
    "confidence": 0.82,
    "firstSeen": "2026-01-20",
    "lastSeen": "2026-09-28",
    "degree": 8,
    "details": {
      "Role": "MurmurHash3 Hash"
    }
  },
  {
    "id": "NODE-FAV-02",
    "label": "Favicon: 184710294",
    "sublabel": "MurmurHash3 Hash",
    "type": "INFRASTRUCTURE",
    "category": "Infrastructure",
    "confidence": 0.82,
    "firstSeen": "2026-01-20",
    "lastSeen": "2026-09-28",
    "degree": 8,
    "details": {
      "Role": "MurmurHash3 Hash"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-01",
    "label": "Dump: employee_creds_01.txt",
    "sublabel": "Leaked Artifact",
    "type": "POST",
    "category": "Post",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "32012c4c32888ee2"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-02",
    "label": "Doc: exfil_archive_02.enc",
    "sublabel": "Leaked Artifact",
    "type": "DOCUMENT",
    "category": "Document",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "6a9722cdf589a2a0"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-03",
    "label": "Doc: corporate_dump_part03.sql",
    "sublabel": "Leaked Artifact",
    "type": "POST",
    "category": "Post",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "4a317b6972e2f183"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-04",
    "label": "Doc: exfil_archive_04.enc",
    "sublabel": "Leaked Artifact",
    "type": "DOCUMENT",
    "category": "Document",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "57dbfc296665f072"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-05",
    "label": "Dump: employee_creds_05.txt",
    "sublabel": "Leaked Artifact",
    "type": "POST",
    "category": "Post",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "9462965f2002ffb6"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-06",
    "label": "Doc: corporate_dump_part06.sql",
    "sublabel": "Leaked Artifact",
    "type": "DOCUMENT",
    "category": "Document",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "919299b8b8860441"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-07",
    "label": "Dump: employee_creds_07.txt",
    "sublabel": "Leaked Artifact",
    "type": "POST",
    "category": "Post",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "3f21b4ea2fbe67cd"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-08",
    "label": "Doc: exfil_archive_08.enc",
    "sublabel": "Leaked Artifact",
    "type": "DOCUMENT",
    "category": "Document",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "f4fdd034b5429729"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-09",
    "label": "Doc: corporate_dump_part09.sql",
    "sublabel": "Leaked Artifact",
    "type": "POST",
    "category": "Post",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "cfc5c391b5ba915c"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-10",
    "label": "Doc: exfil_archive_10.enc",
    "sublabel": "Leaked Artifact",
    "type": "DOCUMENT",
    "category": "Document",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "a26c6de8780e4e79"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-11",
    "label": "Dump: employee_creds_11.txt",
    "sublabel": "Leaked Artifact",
    "type": "POST",
    "category": "Post",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "00bf463c9d57c76a"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-12",
    "label": "Doc: corporate_dump_part12.sql",
    "sublabel": "Leaked Artifact",
    "type": "DOCUMENT",
    "category": "Document",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "fcf995ce3ce15e43"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-13",
    "label": "Dump: employee_creds_13.txt",
    "sublabel": "Leaked Artifact",
    "type": "POST",
    "category": "Post",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "b40ee9c64c8028e7"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-14",
    "label": "Doc: exfil_archive_14.enc",
    "sublabel": "Leaked Artifact",
    "type": "DOCUMENT",
    "category": "Document",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "9d348a4243d4ca09"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-15",
    "label": "Doc: corporate_dump_part15.sql",
    "sublabel": "Leaked Artifact",
    "type": "POST",
    "category": "Post",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "8fdb99dc4306238c"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-16",
    "label": "Doc: exfil_archive_16.enc",
    "sublabel": "Leaked Artifact",
    "type": "DOCUMENT",
    "category": "Document",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "e241483af4c21cbf"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-17",
    "label": "Dump: employee_creds_17.txt",
    "sublabel": "Leaked Artifact",
    "type": "POST",
    "category": "Post",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "e1902b31f7e09e00"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-18",
    "label": "Doc: corporate_dump_part18.sql",
    "sublabel": "Leaked Artifact",
    "type": "DOCUMENT",
    "category": "Document",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "111a11f0a4b2ceb2"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-19",
    "label": "Dump: employee_creds_19.txt",
    "sublabel": "Leaked Artifact",
    "type": "POST",
    "category": "Post",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "be69c5a839df95e1"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-20",
    "label": "Doc: exfil_archive_20.enc",
    "sublabel": "Leaked Artifact",
    "type": "DOCUMENT",
    "category": "Document",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "2c5045d5190611b3"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-21",
    "label": "Doc: corporate_dump_part21.sql",
    "sublabel": "Leaked Artifact",
    "type": "POST",
    "category": "Post",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "921057339c51aef3"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-22",
    "label": "Doc: exfil_archive_22.enc",
    "sublabel": "Leaked Artifact",
    "type": "DOCUMENT",
    "category": "Document",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "5d1318a2390ba826"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-23",
    "label": "Dump: employee_creds_23.txt",
    "sublabel": "Leaked Artifact",
    "type": "POST",
    "category": "Post",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "7d66ca22e709db74"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-24",
    "label": "Doc: corporate_dump_part24.sql",
    "sublabel": "Leaked Artifact",
    "type": "DOCUMENT",
    "category": "Document",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "bb4291cf37c0a6d0"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-25",
    "label": "Dump: employee_creds_25.txt",
    "sublabel": "Leaked Artifact",
    "type": "POST",
    "category": "Post",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "6ac556a6269c4d3e"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-26",
    "label": "Doc: exfil_archive_26.enc",
    "sublabel": "Leaked Artifact",
    "type": "DOCUMENT",
    "category": "Document",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "9bec092e8d8a0d6a"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-27",
    "label": "Doc: corporate_dump_part27.sql",
    "sublabel": "Leaked Artifact",
    "type": "POST",
    "category": "Post",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "09b5f6d070427def"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-28",
    "label": "Doc: exfil_archive_28.enc",
    "sublabel": "Leaked Artifact",
    "type": "DOCUMENT",
    "category": "Document",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "e5bd7b57eaaa2b60"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-29",
    "label": "Dump: employee_creds_29.txt",
    "sublabel": "Leaked Artifact",
    "type": "POST",
    "category": "Post",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "86edccdb0893cfbe"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-30",
    "label": "Doc: corporate_dump_part30.sql",
    "sublabel": "Leaked Artifact",
    "type": "DOCUMENT",
    "category": "Document",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "b2d846ac4c1bb7e7"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-31",
    "label": "Dump: employee_creds_31.txt",
    "sublabel": "Leaked Artifact",
    "type": "POST",
    "category": "Post",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "bb40eebd4aff8369"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-32",
    "label": "Doc: exfil_archive_32.enc",
    "sublabel": "Leaked Artifact",
    "type": "DOCUMENT",
    "category": "Document",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "25dab2e88aca0a29"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-33",
    "label": "Doc: corporate_dump_part33.sql",
    "sublabel": "Leaked Artifact",
    "type": "POST",
    "category": "Post",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "42378d3ac11ead73"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-34",
    "label": "Doc: exfil_archive_34.enc",
    "sublabel": "Leaked Artifact",
    "type": "DOCUMENT",
    "category": "Document",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "1ffd567cd7ce8de7"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-35",
    "label": "Dump: employee_creds_35.txt",
    "sublabel": "Leaked Artifact",
    "type": "POST",
    "category": "Post",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "03ce64cf91ed2784"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-36",
    "label": "Doc: corporate_dump_part36.sql",
    "sublabel": "Leaked Artifact",
    "type": "DOCUMENT",
    "category": "Document",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "b780b2457b67a3cd"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-37",
    "label": "Dump: employee_creds_37.txt",
    "sublabel": "Leaked Artifact",
    "type": "POST",
    "category": "Post",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "c4064ce38b92c2af"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-38",
    "label": "Doc: exfil_archive_38.enc",
    "sublabel": "Leaked Artifact",
    "type": "DOCUMENT",
    "category": "Document",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "4b2393ad31dcab35"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-39",
    "label": "Doc: corporate_dump_part39.sql",
    "sublabel": "Leaked Artifact",
    "type": "POST",
    "category": "Post",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "e8742cbf96f058e5"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-40",
    "label": "Doc: exfil_archive_40.enc",
    "sublabel": "Leaked Artifact",
    "type": "DOCUMENT",
    "category": "Document",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "44fda7f24ab8f7a0"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-41",
    "label": "Dump: employee_creds_41.txt",
    "sublabel": "Leaked Artifact",
    "type": "POST",
    "category": "Post",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "76a667db9d8ed6dd"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-42",
    "label": "Doc: corporate_dump_part42.sql",
    "sublabel": "Leaked Artifact",
    "type": "DOCUMENT",
    "category": "Document",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "c4e37a05445c48a1"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-43",
    "label": "Dump: employee_creds_43.txt",
    "sublabel": "Leaked Artifact",
    "type": "POST",
    "category": "Post",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "354e7d12047d36a5"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-44",
    "label": "Doc: exfil_archive_44.enc",
    "sublabel": "Leaked Artifact",
    "type": "DOCUMENT",
    "category": "Document",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "82aedcbee7ca7048"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-45",
    "label": "Doc: corporate_dump_part45.sql",
    "sublabel": "Leaked Artifact",
    "type": "POST",
    "category": "Post",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "c8a7817368f39fb9"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-46",
    "label": "Doc: exfil_archive_46.enc",
    "sublabel": "Leaked Artifact",
    "type": "DOCUMENT",
    "category": "Document",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "d55557c74343153e"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-47",
    "label": "Dump: employee_creds_47.txt",
    "sublabel": "Leaked Artifact",
    "type": "POST",
    "category": "Post",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "3e6e40cfd5f1aa04"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-48",
    "label": "Doc: corporate_dump_part48.sql",
    "sublabel": "Leaked Artifact",
    "type": "DOCUMENT",
    "category": "Document",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "f82811d6ee82f154"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-49",
    "label": "Dump: employee_creds_49.txt",
    "sublabel": "Leaked Artifact",
    "type": "POST",
    "category": "Post",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "05f07c10fd9cbe7b"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-50",
    "label": "Doc: exfil_archive_50.enc",
    "sublabel": "Leaked Artifact",
    "type": "DOCUMENT",
    "category": "Document",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "b66d053a4a28b8fd"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-51",
    "label": "Doc: corporate_dump_part51.sql",
    "sublabel": "Leaked Artifact",
    "type": "POST",
    "category": "Post",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "51ddd8e8bb2241db"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-52",
    "label": "Doc: exfil_archive_52.enc",
    "sublabel": "Leaked Artifact",
    "type": "DOCUMENT",
    "category": "Document",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "afc1839782e7ee3b"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-53",
    "label": "Dump: employee_creds_53.txt",
    "sublabel": "Leaked Artifact",
    "type": "POST",
    "category": "Post",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "a3cd593dd14bcda1"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-54",
    "label": "Doc: corporate_dump_part54.sql",
    "sublabel": "Leaked Artifact",
    "type": "DOCUMENT",
    "category": "Document",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "101d75154022b245"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-55",
    "label": "Dump: employee_creds_55.txt",
    "sublabel": "Leaked Artifact",
    "type": "POST",
    "category": "Post",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "3d6efd4ae31cee7d"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-56",
    "label": "Doc: exfil_archive_56.enc",
    "sublabel": "Leaked Artifact",
    "type": "DOCUMENT",
    "category": "Document",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "11c8624765205d12"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-57",
    "label": "Doc: corporate_dump_part57.sql",
    "sublabel": "Leaked Artifact",
    "type": "POST",
    "category": "Post",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "a77ace85cc7f5179"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-58",
    "label": "Doc: exfil_archive_58.enc",
    "sublabel": "Leaked Artifact",
    "type": "DOCUMENT",
    "category": "Document",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "6285d67190c53b9b"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-59",
    "label": "Dump: employee_creds_59.txt",
    "sublabel": "Leaked Artifact",
    "type": "POST",
    "category": "Post",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "729333493e4f9bb8"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-60",
    "label": "Doc: corporate_dump_part60.sql",
    "sublabel": "Leaked Artifact",
    "type": "DOCUMENT",
    "category": "Document",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "031790485ad3a5fc"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-61",
    "label": "Dump: employee_creds_61.txt",
    "sublabel": "Leaked Artifact",
    "type": "POST",
    "category": "Post",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "c4451c389cb25401"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-62",
    "label": "Doc: exfil_archive_62.enc",
    "sublabel": "Leaked Artifact",
    "type": "DOCUMENT",
    "category": "Document",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "db55e2475d43a625"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-63",
    "label": "Doc: corporate_dump_part63.sql",
    "sublabel": "Leaked Artifact",
    "type": "POST",
    "category": "Post",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "7f261487b92586b2"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-64",
    "label": "Doc: exfil_archive_64.enc",
    "sublabel": "Leaked Artifact",
    "type": "DOCUMENT",
    "category": "Document",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "45589eb575e49b8e"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-65",
    "label": "Dump: employee_creds_65.txt",
    "sublabel": "Leaked Artifact",
    "type": "POST",
    "category": "Post",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "4a324bdc8946e226"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-66",
    "label": "Doc: corporate_dump_part66.sql",
    "sublabel": "Leaked Artifact",
    "type": "DOCUMENT",
    "category": "Document",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "7a9c80e620c530fe"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-67",
    "label": "Dump: employee_creds_67.txt",
    "sublabel": "Leaked Artifact",
    "type": "POST",
    "category": "Post",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "0aa8818d2ead7549"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-68",
    "label": "Doc: exfil_archive_68.enc",
    "sublabel": "Leaked Artifact",
    "type": "DOCUMENT",
    "category": "Document",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "c8f0ec580c378f95"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-69",
    "label": "Doc: corporate_dump_part69.sql",
    "sublabel": "Leaked Artifact",
    "type": "POST",
    "category": "Post",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "f6c7c3e8f51af999"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-70",
    "label": "Doc: exfil_archive_70.enc",
    "sublabel": "Leaked Artifact",
    "type": "DOCUMENT",
    "category": "Document",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "2cbc7ed131067f39"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-71",
    "label": "Dump: employee_creds_71.txt",
    "sublabel": "Leaked Artifact",
    "type": "POST",
    "category": "Post",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "f56d3e8f499708bf"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-72",
    "label": "Doc: corporate_dump_part72.sql",
    "sublabel": "Leaked Artifact",
    "type": "DOCUMENT",
    "category": "Document",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "4c23719c0d16656b"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-73",
    "label": "Dump: employee_creds_73.txt",
    "sublabel": "Leaked Artifact",
    "type": "POST",
    "category": "Post",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "f6a06f1176881564"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-74",
    "label": "Doc: exfil_archive_74.enc",
    "sublabel": "Leaked Artifact",
    "type": "DOCUMENT",
    "category": "Document",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "99dae44f3433e111"
    }
  },
  {
    "id": "NODE-ITEM-LEAK-75",
    "label": "Doc: corporate_dump_part75.sql",
    "sublabel": "Leaked Artifact",
    "type": "POST",
    "category": "Post",
    "confidence": 0.75,
    "firstSeen": "2026-02-01",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Source": "darkriver7x...onion",
      "SHA256": "0200505da846278e"
    }
  },
  {
    "id": "NODE-ACC-DREAD",
    "label": "NightStalker@Dread",
    "sublabel": "Forum Account (Rep: +418)",
    "type": "ALIAS",
    "category": "Alias",
    "confidence": 0.88,
    "firstSeen": "2026-01-15",
    "lastSeen": "2026-09-28",
    "degree": 6,
    "details": {
      "Role": "Forum Account (Rep: +418)"
    }
  },
  {
    "id": "NODE-ACC-EXPLOIT",
    "label": "NightStalker@Exploit",
    "sublabel": "Forum Account (Rep: Verified)",
    "type": "ALIAS",
    "category": "Alias",
    "confidence": 0.88,
    "firstSeen": "2026-01-15",
    "lastSeen": "2026-09-28",
    "degree": 6,
    "details": {
      "Role": "Forum Account (Rep: Verified)"
    }
  },
  {
    "id": "NODE-ACC-XSS",
    "label": "NightStalker@XSS",
    "sublabel": "Forum Account",
    "type": "ALIAS",
    "category": "Alias",
    "confidence": 0.88,
    "firstSeen": "2026-01-15",
    "lastSeen": "2026-09-28",
    "degree": 6,
    "details": {
      "Role": "Forum Account"
    }
  },
  {
    "id": "NODE-ACC-RAMP",
    "label": "NightStalker@Ramp",
    "sublabel": "Forum Account",
    "type": "ALIAS",
    "category": "Alias",
    "confidence": 0.88,
    "firstSeen": "2026-01-15",
    "lastSeen": "2026-09-28",
    "degree": 6,
    "details": {
      "Role": "Forum Account"
    }
  },
  {
    "id": "NODE-ACC-BREACHED",
    "label": "NightStalker@BreachForums",
    "sublabel": "Forum Account",
    "type": "ALIAS",
    "category": "Alias",
    "confidence": 0.88,
    "firstSeen": "2026-01-15",
    "lastSeen": "2026-09-28",
    "degree": 6,
    "details": {
      "Role": "Forum Account"
    }
  },
  {
    "id": "NODE-COMM-SESSION",
    "label": "Session: 05a81902bc91...",
    "sublabel": "Encrypted Chat Handle",
    "type": "PERSONA",
    "category": "Persona",
    "confidence": 0.88,
    "firstSeen": "2026-01-15",
    "lastSeen": "2026-09-28",
    "degree": 6,
    "details": {
      "Role": "Encrypted Chat Handle"
    }
  },
  {
    "id": "NODE-COMM-TOX",
    "label": "Tox: 76F920AE81...",
    "sublabel": "P2P Messenger Handle",
    "type": "PERSONA",
    "category": "Persona",
    "confidence": 0.88,
    "firstSeen": "2026-01-15",
    "lastSeen": "2026-09-28",
    "degree": 6,
    "details": {
      "Role": "P2P Messenger Handle"
    }
  },
  {
    "id": "NODE-COMM-JABBER",
    "label": "nightstalker@exploit.im",
    "sublabel": "XMPP / OTR Handle",
    "type": "PERSONA",
    "category": "Email",
    "confidence": 0.88,
    "firstSeen": "2026-01-15",
    "lastSeen": "2026-09-28",
    "degree": 6,
    "details": {
      "Role": "XMPP / OTR Handle"
    }
  },
  {
    "id": "NODE-COMM-MATRIX",
    "label": "@nightstalker:matrix.org",
    "sublabel": "Federated Chat Handle",
    "type": "PERSONA",
    "category": "Email",
    "confidence": 0.88,
    "firstSeen": "2026-01-15",
    "lastSeen": "2026-09-28",
    "degree": 6,
    "details": {
      "Role": "Federated Chat Handle"
    }
  },
  {
    "id": "NODE-PGP-SUB1",
    "label": "Subkey: 0x48A2D90E (Sign)",
    "sublabel": "Signing Subkey",
    "type": "PGP",
    "category": "PGP",
    "confidence": 0.88,
    "firstSeen": "2026-01-15",
    "lastSeen": "2026-09-28",
    "degree": 6,
    "details": {
      "Role": "Signing Subkey"
    }
  },
  {
    "id": "NODE-PGP-SUB2",
    "label": "Subkey: 0x18F90128 (Encrypt)",
    "sublabel": "Encryption Subkey",
    "type": "PGP",
    "category": "PGP",
    "confidence": 0.88,
    "firstSeen": "2026-01-15",
    "lastSeen": "2026-09-28",
    "degree": 6,
    "details": {
      "Role": "Encryption Subkey"
    }
  },
  {
    "id": "NODE-PGP-SUB3",
    "label": "Subkey: 0x90E18F4B (Auth)",
    "sublabel": "Authentication Subkey",
    "type": "PGP",
    "category": "PGP",
    "confidence": 0.88,
    "firstSeen": "2026-01-15",
    "lastSeen": "2026-09-28",
    "degree": 6,
    "details": {
      "Role": "Authentication Subkey"
    }
  },
  {
    "id": "NODE-POST-FORUM-01",
    "label": "Paste #1201: Key Listing",
    "sublabel": "Dread Forum Thread",
    "type": "POST",
    "category": "Post",
    "confidence": 0.8,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Forum": "Dread",
      "Author": "NightStalker"
    }
  },
  {
    "id": "NODE-POST-FORUM-02",
    "label": "Post #8402: Exploit Proof",
    "sublabel": "Dread Forum Thread",
    "type": "POST",
    "category": "Post",
    "confidence": 0.8,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Forum": "Dread",
      "Author": "NightStalker"
    }
  },
  {
    "id": "NODE-POST-FORUM-03",
    "label": "Post #8403: Ransom Notice",
    "sublabel": "Dread Forum Thread",
    "type": "POST",
    "category": "Post",
    "confidence": 0.8,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Forum": "Dread",
      "Author": "NightStalker"
    }
  },
  {
    "id": "NODE-POST-FORUM-04",
    "label": "Post #8404: Exploit Proof",
    "sublabel": "Dread Forum Thread",
    "type": "POST",
    "category": "Post",
    "confidence": 0.8,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Forum": "Dread",
      "Author": "NightStalker"
    }
  },
  {
    "id": "NODE-POST-FORUM-05",
    "label": "Paste #1205: Key Listing",
    "sublabel": "Dread Forum Thread",
    "type": "POST",
    "category": "Post",
    "confidence": 0.8,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Forum": "Dread",
      "Author": "NightStalker"
    }
  },
  {
    "id": "NODE-POST-FORUM-06",
    "label": "Post #8406: Ransom Notice",
    "sublabel": "Dread Forum Thread",
    "type": "POST",
    "category": "Post",
    "confidence": 0.8,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Forum": "Dread",
      "Author": "NightStalker"
    }
  },
  {
    "id": "NODE-POST-FORUM-07",
    "label": "Paste #1207: Key Listing",
    "sublabel": "Dread Forum Thread",
    "type": "POST",
    "category": "Post",
    "confidence": 0.8,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Forum": "Dread",
      "Author": "NightStalker"
    }
  },
  {
    "id": "NODE-POST-FORUM-08",
    "label": "Post #8408: Exploit Proof",
    "sublabel": "Dread Forum Thread",
    "type": "POST",
    "category": "Post",
    "confidence": 0.8,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Forum": "Dread",
      "Author": "NightStalker"
    }
  },
  {
    "id": "NODE-POST-FORUM-09",
    "label": "Post #8409: Ransom Notice",
    "sublabel": "Dread Forum Thread",
    "type": "POST",
    "category": "Post",
    "confidence": 0.8,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Forum": "Dread",
      "Author": "NightStalker"
    }
  },
  {
    "id": "NODE-POST-FORUM-10",
    "label": "Post #8410: Exploit Proof",
    "sublabel": "Dread Forum Thread",
    "type": "POST",
    "category": "Post",
    "confidence": 0.8,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Forum": "Dread",
      "Author": "NightStalker"
    }
  },
  {
    "id": "NODE-POST-FORUM-11",
    "label": "Paste #1211: Key Listing",
    "sublabel": "Dread Forum Thread",
    "type": "POST",
    "category": "Post",
    "confidence": 0.8,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Forum": "Dread",
      "Author": "NightStalker"
    }
  },
  {
    "id": "NODE-POST-FORUM-12",
    "label": "Post #8412: Ransom Notice",
    "sublabel": "Dread Forum Thread",
    "type": "POST",
    "category": "Post",
    "confidence": 0.8,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Forum": "Dread",
      "Author": "NightStalker"
    }
  },
  {
    "id": "NODE-POST-FORUM-13",
    "label": "Paste #1213: Key Listing",
    "sublabel": "Dread Forum Thread",
    "type": "POST",
    "category": "Post",
    "confidence": 0.8,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Forum": "Dread",
      "Author": "NightStalker"
    }
  },
  {
    "id": "NODE-POST-FORUM-14",
    "label": "Post #8414: Exploit Proof",
    "sublabel": "Dread Forum Thread",
    "type": "POST",
    "category": "Post",
    "confidence": 0.8,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Forum": "Dread",
      "Author": "NightStalker"
    }
  },
  {
    "id": "NODE-POST-FORUM-15",
    "label": "Post #8415: Ransom Notice",
    "sublabel": "Dread Forum Thread",
    "type": "POST",
    "category": "Post",
    "confidence": 0.8,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Forum": "Dread",
      "Author": "NightStalker"
    }
  },
  {
    "id": "NODE-POST-FORUM-16",
    "label": "Post #8416: Exploit Proof",
    "sublabel": "Dread Forum Thread",
    "type": "POST",
    "category": "Post",
    "confidence": 0.8,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Forum": "Dread",
      "Author": "NightStalker"
    }
  },
  {
    "id": "NODE-POST-FORUM-17",
    "label": "Paste #1217: Key Listing",
    "sublabel": "Dread Forum Thread",
    "type": "POST",
    "category": "Post",
    "confidence": 0.8,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Forum": "Dread",
      "Author": "NightStalker"
    }
  },
  {
    "id": "NODE-POST-FORUM-18",
    "label": "Post #8418: Ransom Notice",
    "sublabel": "Dread Forum Thread",
    "type": "POST",
    "category": "Post",
    "confidence": 0.8,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Forum": "Dread",
      "Author": "NightStalker"
    }
  },
  {
    "id": "NODE-POST-FORUM-19",
    "label": "Paste #1219: Key Listing",
    "sublabel": "Dread Forum Thread",
    "type": "POST",
    "category": "Post",
    "confidence": 0.8,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Forum": "Dread",
      "Author": "NightStalker"
    }
  },
  {
    "id": "NODE-POST-FORUM-20",
    "label": "Post #8420: Exploit Proof",
    "sublabel": "Dread Forum Thread",
    "type": "POST",
    "category": "Post",
    "confidence": 0.8,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Forum": "Dread",
      "Author": "NightStalker"
    }
  },
  {
    "id": "NODE-POST-FORUM-21",
    "label": "Post #8421: Ransom Notice",
    "sublabel": "Dread Forum Thread",
    "type": "POST",
    "category": "Post",
    "confidence": 0.8,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Forum": "Dread",
      "Author": "NightStalker"
    }
  },
  {
    "id": "NODE-POST-FORUM-22",
    "label": "Post #8422: Exploit Proof",
    "sublabel": "Dread Forum Thread",
    "type": "POST",
    "category": "Post",
    "confidence": 0.8,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Forum": "Dread",
      "Author": "NightStalker"
    }
  },
  {
    "id": "NODE-POST-FORUM-23",
    "label": "Paste #1223: Key Listing",
    "sublabel": "Dread Forum Thread",
    "type": "POST",
    "category": "Post",
    "confidence": 0.8,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Forum": "Dread",
      "Author": "NightStalker"
    }
  },
  {
    "id": "NODE-POST-FORUM-24",
    "label": "Post #8424: Ransom Notice",
    "sublabel": "Dread Forum Thread",
    "type": "POST",
    "category": "Post",
    "confidence": 0.8,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Forum": "Dread",
      "Author": "NightStalker"
    }
  },
  {
    "id": "NODE-POST-FORUM-25",
    "label": "Paste #1225: Key Listing",
    "sublabel": "Dread Forum Thread",
    "type": "POST",
    "category": "Post",
    "confidence": 0.8,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Forum": "Dread",
      "Author": "NightStalker"
    }
  },
  {
    "id": "NODE-POST-FORUM-26",
    "label": "Post #8426: Exploit Proof",
    "sublabel": "Dread Forum Thread",
    "type": "POST",
    "category": "Post",
    "confidence": 0.8,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Forum": "Dread",
      "Author": "NightStalker"
    }
  },
  {
    "id": "NODE-POST-FORUM-27",
    "label": "Post #8427: Ransom Notice",
    "sublabel": "Dread Forum Thread",
    "type": "POST",
    "category": "Post",
    "confidence": 0.8,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Forum": "Dread",
      "Author": "NightStalker"
    }
  },
  {
    "id": "NODE-POST-FORUM-28",
    "label": "Post #8428: Exploit Proof",
    "sublabel": "Dread Forum Thread",
    "type": "POST",
    "category": "Post",
    "confidence": 0.8,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Forum": "Dread",
      "Author": "NightStalker"
    }
  },
  {
    "id": "NODE-POST-FORUM-29",
    "label": "Paste #1229: Key Listing",
    "sublabel": "Dread Forum Thread",
    "type": "POST",
    "category": "Post",
    "confidence": 0.8,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Forum": "Dread",
      "Author": "NightStalker"
    }
  },
  {
    "id": "NODE-POST-FORUM-30",
    "label": "Post #8430: Ransom Notice",
    "sublabel": "Dread Forum Thread",
    "type": "POST",
    "category": "Post",
    "confidence": 0.8,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Forum": "Dread",
      "Author": "NightStalker"
    }
  },
  {
    "id": "NODE-POST-FORUM-31",
    "label": "Paste #1231: Key Listing",
    "sublabel": "Dread Forum Thread",
    "type": "POST",
    "category": "Post",
    "confidence": 0.8,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Forum": "Dread",
      "Author": "NightStalker"
    }
  },
  {
    "id": "NODE-POST-FORUM-32",
    "label": "Post #8432: Exploit Proof",
    "sublabel": "Dread Forum Thread",
    "type": "POST",
    "category": "Post",
    "confidence": 0.8,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Forum": "Dread",
      "Author": "NightStalker"
    }
  },
  {
    "id": "NODE-POST-FORUM-33",
    "label": "Post #8433: Ransom Notice",
    "sublabel": "Dread Forum Thread",
    "type": "POST",
    "category": "Post",
    "confidence": 0.8,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Forum": "Dread",
      "Author": "NightStalker"
    }
  },
  {
    "id": "NODE-POST-FORUM-34",
    "label": "Post #8434: Exploit Proof",
    "sublabel": "Dread Forum Thread",
    "type": "POST",
    "category": "Post",
    "confidence": 0.8,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Forum": "Dread",
      "Author": "NightStalker"
    }
  },
  {
    "id": "NODE-POST-FORUM-35",
    "label": "Paste #1235: Key Listing",
    "sublabel": "Dread Forum Thread",
    "type": "POST",
    "category": "Post",
    "confidence": 0.8,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Forum": "Dread",
      "Author": "NightStalker"
    }
  },
  {
    "id": "NODE-POST-FORUM-36",
    "label": "Post #8436: Ransom Notice",
    "sublabel": "Dread Forum Thread",
    "type": "POST",
    "category": "Post",
    "confidence": 0.8,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Forum": "Dread",
      "Author": "NightStalker"
    }
  },
  {
    "id": "NODE-POST-FORUM-37",
    "label": "Paste #1237: Key Listing",
    "sublabel": "Dread Forum Thread",
    "type": "POST",
    "category": "Post",
    "confidence": 0.8,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Forum": "Dread",
      "Author": "NightStalker"
    }
  },
  {
    "id": "NODE-POST-FORUM-38",
    "label": "Post #8438: Exploit Proof",
    "sublabel": "Dread Forum Thread",
    "type": "POST",
    "category": "Post",
    "confidence": 0.8,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Forum": "Dread",
      "Author": "NightStalker"
    }
  },
  {
    "id": "NODE-POST-FORUM-39",
    "label": "Post #8439: Ransom Notice",
    "sublabel": "Dread Forum Thread",
    "type": "POST",
    "category": "Post",
    "confidence": 0.8,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Forum": "Dread",
      "Author": "NightStalker"
    }
  },
  {
    "id": "NODE-POST-FORUM-40",
    "label": "Post #8440: Exploit Proof",
    "sublabel": "Dread Forum Thread",
    "type": "POST",
    "category": "Post",
    "confidence": 0.8,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Forum": "Dread",
      "Author": "NightStalker"
    }
  },
  {
    "id": "NODE-POST-FORUM-41",
    "label": "Paste #1241: Key Listing",
    "sublabel": "Dread Forum Thread",
    "type": "POST",
    "category": "Post",
    "confidence": 0.8,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Forum": "Dread",
      "Author": "NightStalker"
    }
  },
  {
    "id": "NODE-POST-FORUM-42",
    "label": "Post #8442: Ransom Notice",
    "sublabel": "Dread Forum Thread",
    "type": "POST",
    "category": "Post",
    "confidence": 0.8,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Forum": "Dread",
      "Author": "NightStalker"
    }
  },
  {
    "id": "NODE-POST-FORUM-43",
    "label": "Paste #1243: Key Listing",
    "sublabel": "Dread Forum Thread",
    "type": "POST",
    "category": "Post",
    "confidence": 0.8,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Forum": "Dread",
      "Author": "NightStalker"
    }
  },
  {
    "id": "NODE-POST-FORUM-44",
    "label": "Post #8444: Exploit Proof",
    "sublabel": "Dread Forum Thread",
    "type": "POST",
    "category": "Post",
    "confidence": 0.8,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Forum": "Dread",
      "Author": "NightStalker"
    }
  },
  {
    "id": "NODE-POST-FORUM-45",
    "label": "Post #8445: Ransom Notice",
    "sublabel": "Dread Forum Thread",
    "type": "POST",
    "category": "Post",
    "confidence": 0.8,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Forum": "Dread",
      "Author": "NightStalker"
    }
  },
  {
    "id": "NODE-POST-FORUM-46",
    "label": "Post #8446: Exploit Proof",
    "sublabel": "Dread Forum Thread",
    "type": "POST",
    "category": "Post",
    "confidence": 0.8,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Forum": "Dread",
      "Author": "NightStalker"
    }
  },
  {
    "id": "NODE-POST-FORUM-47",
    "label": "Paste #1247: Key Listing",
    "sublabel": "Dread Forum Thread",
    "type": "POST",
    "category": "Post",
    "confidence": 0.8,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Forum": "Dread",
      "Author": "NightStalker"
    }
  },
  {
    "id": "NODE-POST-FORUM-48",
    "label": "Post #8448: Ransom Notice",
    "sublabel": "Dread Forum Thread",
    "type": "POST",
    "category": "Post",
    "confidence": 0.8,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Forum": "Dread",
      "Author": "NightStalker"
    }
  },
  {
    "id": "NODE-POST-FORUM-49",
    "label": "Paste #1249: Key Listing",
    "sublabel": "Dread Forum Thread",
    "type": "POST",
    "category": "Post",
    "confidence": 0.8,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Forum": "Dread",
      "Author": "NightStalker"
    }
  },
  {
    "id": "NODE-POST-FORUM-50",
    "label": "Post #8450: Exploit Proof",
    "sublabel": "Dread Forum Thread",
    "type": "POST",
    "category": "Post",
    "confidence": 0.8,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Forum": "Dread",
      "Author": "NightStalker"
    }
  },
  {
    "id": "NODE-POST-FORUM-51",
    "label": "Post #8451: Ransom Notice",
    "sublabel": "Dread Forum Thread",
    "type": "POST",
    "category": "Post",
    "confidence": 0.8,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Forum": "Dread",
      "Author": "NightStalker"
    }
  },
  {
    "id": "NODE-POST-FORUM-52",
    "label": "Post #8452: Exploit Proof",
    "sublabel": "Dread Forum Thread",
    "type": "POST",
    "category": "Post",
    "confidence": 0.8,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Forum": "Dread",
      "Author": "NightStalker"
    }
  },
  {
    "id": "NODE-POST-FORUM-53",
    "label": "Paste #1253: Key Listing",
    "sublabel": "Dread Forum Thread",
    "type": "POST",
    "category": "Post",
    "confidence": 0.8,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Forum": "Dread",
      "Author": "NightStalker"
    }
  },
  {
    "id": "NODE-POST-FORUM-54",
    "label": "Post #8454: Ransom Notice",
    "sublabel": "Dread Forum Thread",
    "type": "POST",
    "category": "Post",
    "confidence": 0.8,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Forum": "Dread",
      "Author": "NightStalker"
    }
  },
  {
    "id": "NODE-POST-FORUM-55",
    "label": "Paste #1255: Key Listing",
    "sublabel": "Dread Forum Thread",
    "type": "POST",
    "category": "Post",
    "confidence": 0.8,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Forum": "Dread",
      "Author": "NightStalker"
    }
  },
  {
    "id": "NODE-PEEL-HOP-01",
    "label": "Peel Hop #01: bc1qpeel01...",
    "sublabel": "Peeling Hop 1",
    "type": "WALLET",
    "category": "Wallet",
    "confidence": 0.8,
    "firstSeen": "2026-02-16",
    "lastSeen": "2026-09-28",
    "degree": 5,
    "details": {
      "Hop": 1,
      "Currency": "BTC"
    }
  },
  {
    "id": "NODE-CHANGE-OUT-01",
    "label": "Change #01: bc1qchg01...",
    "sublabel": "Change Output",
    "type": "WALLET",
    "category": "Wallet",
    "confidence": 0.75,
    "firstSeen": "2026-02-16",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Type": "Change Address"
    }
  },
  {
    "id": "NODE-TX-PEEL-01",
    "label": "TX #01: 58f51b4f2d...",
    "sublabel": "Ledger Transfer",
    "type": "TRANSACTION",
    "category": "Transaction",
    "confidence": 0.85,
    "firstSeen": "2026-02-16",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "AmountBTC": 8.08
    }
  },
  {
    "id": "NODE-PEEL-HOP-02",
    "label": "Peel Hop #02: bc1qpeel02...",
    "sublabel": "Peeling Hop 2",
    "type": "WALLET",
    "category": "Wallet",
    "confidence": 0.8,
    "firstSeen": "2026-02-16",
    "lastSeen": "2026-09-28",
    "degree": 5,
    "details": {
      "Hop": 2,
      "Currency": "BTC"
    }
  },
  {
    "id": "NODE-CHANGE-OUT-02",
    "label": "Change #02: bc1qchg02...",
    "sublabel": "Change Output",
    "type": "WALLET",
    "category": "Wallet",
    "confidence": 0.75,
    "firstSeen": "2026-02-16",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Type": "Change Address"
    }
  },
  {
    "id": "NODE-TX-PEEL-02",
    "label": "TX #02: 06c989aa3b...",
    "sublabel": "Ledger Transfer",
    "type": "TRANSACTION",
    "category": "Transaction",
    "confidence": 0.85,
    "firstSeen": "2026-02-16",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "AmountBTC": 7.76
    }
  },
  {
    "id": "NODE-PEEL-HOP-03",
    "label": "Peel Hop #03: bc1qpeel03...",
    "sublabel": "Peeling Hop 3",
    "type": "WALLET",
    "category": "Wallet",
    "confidence": 0.8,
    "firstSeen": "2026-02-16",
    "lastSeen": "2026-09-28",
    "degree": 5,
    "details": {
      "Hop": 3,
      "Currency": "BTC"
    }
  },
  {
    "id": "NODE-CHANGE-OUT-03",
    "label": "Change #03: bc1qchg03...",
    "sublabel": "Change Output",
    "type": "WALLET",
    "category": "Wallet",
    "confidence": 0.75,
    "firstSeen": "2026-02-16",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Type": "Change Address"
    }
  },
  {
    "id": "NODE-TX-PEEL-03",
    "label": "TX #03: 4ca65520b9...",
    "sublabel": "Ledger Transfer",
    "type": "TRANSACTION",
    "category": "Transaction",
    "confidence": 0.85,
    "firstSeen": "2026-02-16",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "AmountBTC": 7.44
    }
  },
  {
    "id": "NODE-PEEL-HOP-04",
    "label": "Peel Hop #04: bc1qpeel04...",
    "sublabel": "Peeling Hop 4",
    "type": "WALLET",
    "category": "Wallet",
    "confidence": 0.8,
    "firstSeen": "2026-02-16",
    "lastSeen": "2026-09-28",
    "degree": 5,
    "details": {
      "Hop": 4,
      "Currency": "BTC"
    }
  },
  {
    "id": "NODE-CHANGE-OUT-04",
    "label": "Change #04: bc1qchg04...",
    "sublabel": "Change Output",
    "type": "WALLET",
    "category": "Wallet",
    "confidence": 0.75,
    "firstSeen": "2026-02-16",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Type": "Change Address"
    }
  },
  {
    "id": "NODE-TX-PEEL-04",
    "label": "TX #04: 918669461c...",
    "sublabel": "Ledger Transfer",
    "type": "TRANSACTION",
    "category": "Transaction",
    "confidence": 0.85,
    "firstSeen": "2026-02-16",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "AmountBTC": 7.12
    }
  },
  {
    "id": "NODE-PEEL-HOP-05",
    "label": "Peel Hop #05: bc1qpeel05...",
    "sublabel": "Peeling Hop 5",
    "type": "WALLET",
    "category": "Wallet",
    "confidence": 0.8,
    "firstSeen": "2026-02-16",
    "lastSeen": "2026-09-28",
    "degree": 5,
    "details": {
      "Hop": 5,
      "Currency": "BTC"
    }
  },
  {
    "id": "NODE-CHANGE-OUT-05",
    "label": "Change #05: bc1qchg05...",
    "sublabel": "Change Output",
    "type": "WALLET",
    "category": "Wallet",
    "confidence": 0.75,
    "firstSeen": "2026-02-16",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Type": "Change Address"
    }
  },
  {
    "id": "NODE-TX-PEEL-05",
    "label": "TX #05: 9a3869b64b...",
    "sublabel": "Ledger Transfer",
    "type": "TRANSACTION",
    "category": "Transaction",
    "confidence": 0.85,
    "firstSeen": "2026-02-16",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "AmountBTC": 6.8
    }
  },
  {
    "id": "NODE-PEEL-HOP-06",
    "label": "Peel Hop #06: bc1qpeel06...",
    "sublabel": "Peeling Hop 6",
    "type": "WALLET",
    "category": "Wallet",
    "confidence": 0.8,
    "firstSeen": "2026-02-16",
    "lastSeen": "2026-09-28",
    "degree": 5,
    "details": {
      "Hop": 6,
      "Currency": "BTC"
    }
  },
  {
    "id": "NODE-CHANGE-OUT-06",
    "label": "Change #06: bc1qchg06...",
    "sublabel": "Change Output",
    "type": "WALLET",
    "category": "Wallet",
    "confidence": 0.75,
    "firstSeen": "2026-02-16",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Type": "Change Address"
    }
  },
  {
    "id": "NODE-TX-PEEL-06",
    "label": "TX #06: 7834850755...",
    "sublabel": "Ledger Transfer",
    "type": "TRANSACTION",
    "category": "Transaction",
    "confidence": 0.85,
    "firstSeen": "2026-02-16",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "AmountBTC": 6.48
    }
  },
  {
    "id": "NODE-PEEL-HOP-07",
    "label": "Peel Hop #07: bc1qpeel07...",
    "sublabel": "Peeling Hop 7",
    "type": "WALLET",
    "category": "Wallet",
    "confidence": 0.8,
    "firstSeen": "2026-02-16",
    "lastSeen": "2026-09-28",
    "degree": 5,
    "details": {
      "Hop": 7,
      "Currency": "BTC"
    }
  },
  {
    "id": "NODE-CHANGE-OUT-07",
    "label": "Change #07: bc1qchg07...",
    "sublabel": "Change Output",
    "type": "WALLET",
    "category": "Wallet",
    "confidence": 0.75,
    "firstSeen": "2026-02-16",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Type": "Change Address"
    }
  },
  {
    "id": "NODE-TX-PEEL-07",
    "label": "TX #07: 283eebdb7d...",
    "sublabel": "Ledger Transfer",
    "type": "TRANSACTION",
    "category": "Transaction",
    "confidence": 0.85,
    "firstSeen": "2026-02-16",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "AmountBTC": 6.16
    }
  },
  {
    "id": "NODE-PEEL-HOP-08",
    "label": "Peel Hop #08: bc1qpeel08...",
    "sublabel": "Peeling Hop 8",
    "type": "WALLET",
    "category": "Wallet",
    "confidence": 0.8,
    "firstSeen": "2026-02-16",
    "lastSeen": "2026-09-28",
    "degree": 5,
    "details": {
      "Hop": 8,
      "Currency": "BTC"
    }
  },
  {
    "id": "NODE-CHANGE-OUT-08",
    "label": "Change #08: bc1qchg08...",
    "sublabel": "Change Output",
    "type": "WALLET",
    "category": "Wallet",
    "confidence": 0.75,
    "firstSeen": "2026-02-16",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Type": "Change Address"
    }
  },
  {
    "id": "NODE-TX-PEEL-08",
    "label": "TX #08: efe932c4dd...",
    "sublabel": "Ledger Transfer",
    "type": "TRANSACTION",
    "category": "Transaction",
    "confidence": 0.85,
    "firstSeen": "2026-02-16",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "AmountBTC": 5.84
    }
  },
  {
    "id": "NODE-PEEL-HOP-09",
    "label": "Peel Hop #09: bc1qpeel09...",
    "sublabel": "Peeling Hop 9",
    "type": "WALLET",
    "category": "Wallet",
    "confidence": 0.8,
    "firstSeen": "2026-02-16",
    "lastSeen": "2026-09-28",
    "degree": 5,
    "details": {
      "Hop": 9,
      "Currency": "BTC"
    }
  },
  {
    "id": "NODE-CHANGE-OUT-09",
    "label": "Change #09: bc1qchg09...",
    "sublabel": "Change Output",
    "type": "WALLET",
    "category": "Wallet",
    "confidence": 0.75,
    "firstSeen": "2026-02-16",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Type": "Change Address"
    }
  },
  {
    "id": "NODE-TX-PEEL-09",
    "label": "TX #09: 6870b8fd70...",
    "sublabel": "Ledger Transfer",
    "type": "TRANSACTION",
    "category": "Transaction",
    "confidence": 0.85,
    "firstSeen": "2026-02-16",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "AmountBTC": 5.52
    }
  },
  {
    "id": "NODE-PEEL-HOP-10",
    "label": "Peel Hop #10: bc1qpeel10...",
    "sublabel": "Peeling Hop 10",
    "type": "WALLET",
    "category": "Wallet",
    "confidence": 0.8,
    "firstSeen": "2026-02-16",
    "lastSeen": "2026-09-28",
    "degree": 5,
    "details": {
      "Hop": 10,
      "Currency": "BTC"
    }
  },
  {
    "id": "NODE-CHANGE-OUT-10",
    "label": "Change #10: bc1qchg10...",
    "sublabel": "Change Output",
    "type": "WALLET",
    "category": "Wallet",
    "confidence": 0.75,
    "firstSeen": "2026-02-16",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Type": "Change Address"
    }
  },
  {
    "id": "NODE-TX-PEEL-10",
    "label": "TX #10: ad15d763f6...",
    "sublabel": "Ledger Transfer",
    "type": "TRANSACTION",
    "category": "Transaction",
    "confidence": 0.85,
    "firstSeen": "2026-02-16",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "AmountBTC": 5.2
    }
  },
  {
    "id": "NODE-PEEL-HOP-11",
    "label": "Peel Hop #11: bc1qpeel11...",
    "sublabel": "Peeling Hop 11",
    "type": "WALLET",
    "category": "Wallet",
    "confidence": 0.8,
    "firstSeen": "2026-02-16",
    "lastSeen": "2026-09-28",
    "degree": 5,
    "details": {
      "Hop": 11,
      "Currency": "BTC"
    }
  },
  {
    "id": "NODE-CHANGE-OUT-11",
    "label": "Change #11: bc1qchg11...",
    "sublabel": "Change Output",
    "type": "WALLET",
    "category": "Wallet",
    "confidence": 0.75,
    "firstSeen": "2026-02-16",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Type": "Change Address"
    }
  },
  {
    "id": "NODE-TX-PEEL-11",
    "label": "TX #11: f98f6a88ba...",
    "sublabel": "Ledger Transfer",
    "type": "TRANSACTION",
    "category": "Transaction",
    "confidence": 0.85,
    "firstSeen": "2026-02-16",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "AmountBTC": 4.88
    }
  },
  {
    "id": "NODE-PEEL-HOP-12",
    "label": "Peel Hop #12: bc1qpeel12...",
    "sublabel": "Peeling Hop 12",
    "type": "WALLET",
    "category": "Wallet",
    "confidence": 0.8,
    "firstSeen": "2026-02-16",
    "lastSeen": "2026-09-28",
    "degree": 5,
    "details": {
      "Hop": 12,
      "Currency": "BTC"
    }
  },
  {
    "id": "NODE-CHANGE-OUT-12",
    "label": "Change #12: bc1qchg12...",
    "sublabel": "Change Output",
    "type": "WALLET",
    "category": "Wallet",
    "confidence": 0.75,
    "firstSeen": "2026-02-16",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Type": "Change Address"
    }
  },
  {
    "id": "NODE-TX-PEEL-12",
    "label": "TX #12: 76b12687d5...",
    "sublabel": "Ledger Transfer",
    "type": "TRANSACTION",
    "category": "Transaction",
    "confidence": 0.85,
    "firstSeen": "2026-02-16",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "AmountBTC": 4.56
    }
  },
  {
    "id": "NODE-PEEL-HOP-13",
    "label": "Peel Hop #13: bc1qpeel13...",
    "sublabel": "Peeling Hop 13",
    "type": "WALLET",
    "category": "Wallet",
    "confidence": 0.8,
    "firstSeen": "2026-02-16",
    "lastSeen": "2026-09-28",
    "degree": 5,
    "details": {
      "Hop": 13,
      "Currency": "BTC"
    }
  },
  {
    "id": "NODE-CHANGE-OUT-13",
    "label": "Change #13: bc1qchg13...",
    "sublabel": "Change Output",
    "type": "WALLET",
    "category": "Wallet",
    "confidence": 0.75,
    "firstSeen": "2026-02-16",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Type": "Change Address"
    }
  },
  {
    "id": "NODE-TX-PEEL-13",
    "label": "TX #13: b15e29d0b5...",
    "sublabel": "Ledger Transfer",
    "type": "TRANSACTION",
    "category": "Transaction",
    "confidence": 0.85,
    "firstSeen": "2026-02-16",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "AmountBTC": 4.24
    }
  },
  {
    "id": "NODE-PEEL-HOP-14",
    "label": "Peel Hop #14: bc1qpeel14...",
    "sublabel": "Peeling Hop 14",
    "type": "WALLET",
    "category": "Wallet",
    "confidence": 0.8,
    "firstSeen": "2026-02-16",
    "lastSeen": "2026-09-28",
    "degree": 5,
    "details": {
      "Hop": 14,
      "Currency": "BTC"
    }
  },
  {
    "id": "NODE-CHANGE-OUT-14",
    "label": "Change #14: bc1qchg14...",
    "sublabel": "Change Output",
    "type": "WALLET",
    "category": "Wallet",
    "confidence": 0.75,
    "firstSeen": "2026-02-16",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Type": "Change Address"
    }
  },
  {
    "id": "NODE-TX-PEEL-14",
    "label": "TX #14: 8469891d86...",
    "sublabel": "Ledger Transfer",
    "type": "TRANSACTION",
    "category": "Transaction",
    "confidence": 0.85,
    "firstSeen": "2026-02-16",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "AmountBTC": 3.92
    }
  },
  {
    "id": "NODE-PEEL-HOP-15",
    "label": "Peel Hop #15: bc1qpeel15...",
    "sublabel": "Peeling Hop 15",
    "type": "WALLET",
    "category": "Wallet",
    "confidence": 0.8,
    "firstSeen": "2026-02-16",
    "lastSeen": "2026-09-28",
    "degree": 5,
    "details": {
      "Hop": 15,
      "Currency": "BTC"
    }
  },
  {
    "id": "NODE-CHANGE-OUT-15",
    "label": "Change #15: bc1qchg15...",
    "sublabel": "Change Output",
    "type": "WALLET",
    "category": "Wallet",
    "confidence": 0.75,
    "firstSeen": "2026-02-16",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Type": "Change Address"
    }
  },
  {
    "id": "NODE-TX-PEEL-15",
    "label": "TX #15: b0dd541c45...",
    "sublabel": "Ledger Transfer",
    "type": "TRANSACTION",
    "category": "Transaction",
    "confidence": 0.85,
    "firstSeen": "2026-02-16",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "AmountBTC": 3.6
    }
  },
  {
    "id": "NODE-PEEL-HOP-16",
    "label": "Peel Hop #16: bc1qpeel16...",
    "sublabel": "Peeling Hop 16",
    "type": "WALLET",
    "category": "Wallet",
    "confidence": 0.8,
    "firstSeen": "2026-02-16",
    "lastSeen": "2026-09-28",
    "degree": 5,
    "details": {
      "Hop": 16,
      "Currency": "BTC"
    }
  },
  {
    "id": "NODE-CHANGE-OUT-16",
    "label": "Change #16: bc1qchg16...",
    "sublabel": "Change Output",
    "type": "WALLET",
    "category": "Wallet",
    "confidence": 0.75,
    "firstSeen": "2026-02-16",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Type": "Change Address"
    }
  },
  {
    "id": "NODE-TX-PEEL-16",
    "label": "TX #16: effb410f7d...",
    "sublabel": "Ledger Transfer",
    "type": "TRANSACTION",
    "category": "Transaction",
    "confidence": 0.85,
    "firstSeen": "2026-02-16",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "AmountBTC": 3.28
    }
  },
  {
    "id": "NODE-PEEL-HOP-17",
    "label": "Peel Hop #17: bc1qpeel17...",
    "sublabel": "Peeling Hop 17",
    "type": "WALLET",
    "category": "Wallet",
    "confidence": 0.8,
    "firstSeen": "2026-02-16",
    "lastSeen": "2026-09-28",
    "degree": 5,
    "details": {
      "Hop": 17,
      "Currency": "BTC"
    }
  },
  {
    "id": "NODE-CHANGE-OUT-17",
    "label": "Change #17: bc1qchg17...",
    "sublabel": "Change Output",
    "type": "WALLET",
    "category": "Wallet",
    "confidence": 0.75,
    "firstSeen": "2026-02-16",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Type": "Change Address"
    }
  },
  {
    "id": "NODE-TX-PEEL-17",
    "label": "TX #17: f80df6d227...",
    "sublabel": "Ledger Transfer",
    "type": "TRANSACTION",
    "category": "Transaction",
    "confidence": 0.85,
    "firstSeen": "2026-02-16",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "AmountBTC": 2.96
    }
  },
  {
    "id": "NODE-PEEL-HOP-18",
    "label": "Peel Hop #18: bc1qpeel18...",
    "sublabel": "Peeling Hop 18",
    "type": "WALLET",
    "category": "Wallet",
    "confidence": 0.8,
    "firstSeen": "2026-02-16",
    "lastSeen": "2026-09-28",
    "degree": 5,
    "details": {
      "Hop": 18,
      "Currency": "BTC"
    }
  },
  {
    "id": "NODE-CHANGE-OUT-18",
    "label": "Change #18: bc1qchg18...",
    "sublabel": "Change Output",
    "type": "WALLET",
    "category": "Wallet",
    "confidence": 0.75,
    "firstSeen": "2026-02-16",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Type": "Change Address"
    }
  },
  {
    "id": "NODE-TX-PEEL-18",
    "label": "TX #18: bab81ae745...",
    "sublabel": "Ledger Transfer",
    "type": "TRANSACTION",
    "category": "Transaction",
    "confidence": 0.85,
    "firstSeen": "2026-02-16",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "AmountBTC": 2.64
    }
  },
  {
    "id": "NODE-PEEL-HOP-19",
    "label": "Peel Hop #19: bc1qpeel19...",
    "sublabel": "Peeling Hop 19",
    "type": "WALLET",
    "category": "Wallet",
    "confidence": 0.8,
    "firstSeen": "2026-02-16",
    "lastSeen": "2026-09-28",
    "degree": 5,
    "details": {
      "Hop": 19,
      "Currency": "BTC"
    }
  },
  {
    "id": "NODE-CHANGE-OUT-19",
    "label": "Change #19: bc1qchg19...",
    "sublabel": "Change Output",
    "type": "WALLET",
    "category": "Wallet",
    "confidence": 0.75,
    "firstSeen": "2026-02-16",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Type": "Change Address"
    }
  },
  {
    "id": "NODE-TX-PEEL-19",
    "label": "TX #19: bcce1155d0...",
    "sublabel": "Ledger Transfer",
    "type": "TRANSACTION",
    "category": "Transaction",
    "confidence": 0.85,
    "firstSeen": "2026-02-16",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "AmountBTC": 2.32
    }
  },
  {
    "id": "NODE-PEEL-HOP-20",
    "label": "Peel Hop #20: bc1qpeel20...",
    "sublabel": "Peeling Hop 20",
    "type": "WALLET",
    "category": "Wallet",
    "confidence": 0.8,
    "firstSeen": "2026-02-16",
    "lastSeen": "2026-09-28",
    "degree": 5,
    "details": {
      "Hop": 20,
      "Currency": "BTC"
    }
  },
  {
    "id": "NODE-CHANGE-OUT-20",
    "label": "Change #20: bc1qchg20...",
    "sublabel": "Change Output",
    "type": "WALLET",
    "category": "Wallet",
    "confidence": 0.75,
    "firstSeen": "2026-02-16",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Type": "Change Address"
    }
  },
  {
    "id": "NODE-TX-PEEL-20",
    "label": "TX #20: 8cfad4353d...",
    "sublabel": "Ledger Transfer",
    "type": "TRANSACTION",
    "category": "Transaction",
    "confidence": 0.85,
    "firstSeen": "2026-02-16",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "AmountBTC": 2.0
    }
  },
  {
    "id": "NODE-PEEL-HOP-21",
    "label": "Peel Hop #21: bc1qpeel21...",
    "sublabel": "Peeling Hop 21",
    "type": "WALLET",
    "category": "Wallet",
    "confidence": 0.8,
    "firstSeen": "2026-02-16",
    "lastSeen": "2026-09-28",
    "degree": 5,
    "details": {
      "Hop": 21,
      "Currency": "BTC"
    }
  },
  {
    "id": "NODE-CHANGE-OUT-21",
    "label": "Change #21: bc1qchg21...",
    "sublabel": "Change Output",
    "type": "WALLET",
    "category": "Wallet",
    "confidence": 0.75,
    "firstSeen": "2026-02-16",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Type": "Change Address"
    }
  },
  {
    "id": "NODE-TX-PEEL-21",
    "label": "TX #21: d6a45d7780...",
    "sublabel": "Ledger Transfer",
    "type": "TRANSACTION",
    "category": "Transaction",
    "confidence": 0.85,
    "firstSeen": "2026-02-16",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "AmountBTC": 1.68
    }
  },
  {
    "id": "NODE-PEEL-HOP-22",
    "label": "Peel Hop #22: bc1qpeel22...",
    "sublabel": "Peeling Hop 22",
    "type": "WALLET",
    "category": "Wallet",
    "confidence": 0.8,
    "firstSeen": "2026-02-16",
    "lastSeen": "2026-09-28",
    "degree": 5,
    "details": {
      "Hop": 22,
      "Currency": "BTC"
    }
  },
  {
    "id": "NODE-CHANGE-OUT-22",
    "label": "Change #22: bc1qchg22...",
    "sublabel": "Change Output",
    "type": "WALLET",
    "category": "Wallet",
    "confidence": 0.75,
    "firstSeen": "2026-02-16",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "Type": "Change Address"
    }
  },
  {
    "id": "NODE-TX-PEEL-22",
    "label": "TX #22: bc9671154e...",
    "sublabel": "Ledger Transfer",
    "type": "TRANSACTION",
    "category": "Transaction",
    "confidence": 0.85,
    "firstSeen": "2026-02-16",
    "lastSeen": "2026-09-28",
    "degree": 4,
    "details": {
      "AmountBTC": 1.36
    }
  },
  {
    "id": "NODE-CASH-CHIPMIXER",
    "label": "ChipMixer Output Pool",
    "sublabel": "Mixer Relayer",
    "type": "WALLET",
    "category": "Wallet",
    "confidence": 0.75,
    "firstSeen": "2026-02-18",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Role": "Mixer Relayer"
    }
  },
  {
    "id": "NODE-CASH-SINBAD",
    "label": "Sinbad Relayer #4",
    "sublabel": "Mixing Service",
    "type": "WALLET",
    "category": "Wallet",
    "confidence": 0.75,
    "firstSeen": "2026-02-18",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Role": "Mixing Service"
    }
  },
  {
    "id": "NODE-CASH-WASABI",
    "label": "Wasabi CoinJoin Pool",
    "sublabel": "Privacy Pool",
    "type": "WALLET",
    "category": "Wallet",
    "confidence": 0.75,
    "firstSeen": "2026-02-18",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Role": "Privacy Pool"
    }
  },
  {
    "id": "NODE-CASH-P2P",
    "label": "OTC Broker Escrow Desk",
    "sublabel": "Fiat Cashout Bridge",
    "type": "WALLET",
    "category": "Wallet",
    "confidence": 0.75,
    "firstSeen": "2026-02-18",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Role": "Fiat Cashout Bridge"
    }
  },
  {
    "id": "NODE-TG-BOT",
    "label": "@nightriver_support_bot",
    "sublabel": "Telegram Bot",
    "type": "PERSONA",
    "category": "Persona",
    "confidence": 0.85,
    "firstSeen": "2026-01-22",
    "lastSeen": "2026-09-28",
    "degree": 32,
    "details": {
      "Platform": "Telegram",
      "Role": "Victim Negotiation Bot"
    }
  },
  {
    "id": "NODE-TG-CHANNEL",
    "label": "t.me/nightriver_updates",
    "sublabel": "Public Channel",
    "type": "PERSONA",
    "category": "Persona",
    "confidence": 0.8,
    "firstSeen": "2026-01-20",
    "lastSeen": "2026-09-28",
    "degree": 6,
    "details": {
      "Platform": "Telegram",
      "Role": "Public Broadcast"
    }
  },
  {
    "id": "NODE-TG-MSG-01",
    "label": "Msg #01: Proof of Keys",
    "sublabel": "Telegram Ticket",
    "type": "POST",
    "category": "Post",
    "confidence": 0.7,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Channel": "Telegram"
    }
  },
  {
    "id": "NODE-TG-MSG-02",
    "label": "Msg #02: Extortion Ticket",
    "sublabel": "Telegram Ticket",
    "type": "POST",
    "category": "Post",
    "confidence": 0.7,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Channel": "Telegram"
    }
  },
  {
    "id": "NODE-TG-MSG-03",
    "label": "Msg #03: Proof of Keys",
    "sublabel": "Telegram Ticket",
    "type": "POST",
    "category": "Post",
    "confidence": 0.7,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Channel": "Telegram"
    }
  },
  {
    "id": "NODE-TG-MSG-04",
    "label": "Msg #04: Extortion Ticket",
    "sublabel": "Telegram Ticket",
    "type": "POST",
    "category": "Post",
    "confidence": 0.7,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Channel": "Telegram"
    }
  },
  {
    "id": "NODE-TG-MSG-05",
    "label": "Msg #05: Proof of Keys",
    "sublabel": "Telegram Ticket",
    "type": "POST",
    "category": "Post",
    "confidence": 0.7,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Channel": "Telegram"
    }
  },
  {
    "id": "NODE-TG-MSG-06",
    "label": "Msg #06: Extortion Ticket",
    "sublabel": "Telegram Ticket",
    "type": "POST",
    "category": "Post",
    "confidence": 0.7,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Channel": "Telegram"
    }
  },
  {
    "id": "NODE-TG-MSG-07",
    "label": "Msg #07: Proof of Keys",
    "sublabel": "Telegram Ticket",
    "type": "POST",
    "category": "Post",
    "confidence": 0.7,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Channel": "Telegram"
    }
  },
  {
    "id": "NODE-TG-MSG-08",
    "label": "Msg #08: Extortion Ticket",
    "sublabel": "Telegram Ticket",
    "type": "POST",
    "category": "Post",
    "confidence": 0.7,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Channel": "Telegram"
    }
  },
  {
    "id": "NODE-TG-MSG-09",
    "label": "Msg #09: Proof of Keys",
    "sublabel": "Telegram Ticket",
    "type": "POST",
    "category": "Post",
    "confidence": 0.7,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Channel": "Telegram"
    }
  },
  {
    "id": "NODE-TG-MSG-10",
    "label": "Msg #10: Extortion Ticket",
    "sublabel": "Telegram Ticket",
    "type": "POST",
    "category": "Post",
    "confidence": 0.7,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Channel": "Telegram"
    }
  },
  {
    "id": "NODE-TG-MSG-11",
    "label": "Msg #11: Proof of Keys",
    "sublabel": "Telegram Ticket",
    "type": "POST",
    "category": "Post",
    "confidence": 0.7,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Channel": "Telegram"
    }
  },
  {
    "id": "NODE-TG-MSG-12",
    "label": "Msg #12: Extortion Ticket",
    "sublabel": "Telegram Ticket",
    "type": "POST",
    "category": "Post",
    "confidence": 0.7,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Channel": "Telegram"
    }
  },
  {
    "id": "NODE-TG-MSG-13",
    "label": "Msg #13: Proof of Keys",
    "sublabel": "Telegram Ticket",
    "type": "POST",
    "category": "Post",
    "confidence": 0.7,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Channel": "Telegram"
    }
  },
  {
    "id": "NODE-TG-MSG-14",
    "label": "Msg #14: Extortion Ticket",
    "sublabel": "Telegram Ticket",
    "type": "POST",
    "category": "Post",
    "confidence": 0.7,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Channel": "Telegram"
    }
  },
  {
    "id": "NODE-TG-MSG-15",
    "label": "Msg #15: Proof of Keys",
    "sublabel": "Telegram Ticket",
    "type": "POST",
    "category": "Post",
    "confidence": 0.7,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Channel": "Telegram"
    }
  },
  {
    "id": "NODE-TG-MSG-16",
    "label": "Msg #16: Extortion Ticket",
    "sublabel": "Telegram Ticket",
    "type": "POST",
    "category": "Post",
    "confidence": 0.7,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Channel": "Telegram"
    }
  },
  {
    "id": "NODE-TG-MSG-17",
    "label": "Msg #17: Proof of Keys",
    "sublabel": "Telegram Ticket",
    "type": "POST",
    "category": "Post",
    "confidence": 0.7,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Channel": "Telegram"
    }
  },
  {
    "id": "NODE-TG-MSG-18",
    "label": "Msg #18: Extortion Ticket",
    "sublabel": "Telegram Ticket",
    "type": "POST",
    "category": "Post",
    "confidence": 0.7,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Channel": "Telegram"
    }
  },
  {
    "id": "NODE-TG-MSG-19",
    "label": "Msg #19: Proof of Keys",
    "sublabel": "Telegram Ticket",
    "type": "POST",
    "category": "Post",
    "confidence": 0.7,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Channel": "Telegram"
    }
  },
  {
    "id": "NODE-TG-MSG-20",
    "label": "Msg #20: Extortion Ticket",
    "sublabel": "Telegram Ticket",
    "type": "POST",
    "category": "Post",
    "confidence": 0.7,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Channel": "Telegram"
    }
  },
  {
    "id": "NODE-TG-MSG-21",
    "label": "Msg #21: Proof of Keys",
    "sublabel": "Telegram Ticket",
    "type": "POST",
    "category": "Post",
    "confidence": 0.7,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Channel": "Telegram"
    }
  },
  {
    "id": "NODE-TG-MSG-22",
    "label": "Msg #22: Extortion Ticket",
    "sublabel": "Telegram Ticket",
    "type": "POST",
    "category": "Post",
    "confidence": 0.7,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Channel": "Telegram"
    }
  },
  {
    "id": "NODE-TG-MSG-23",
    "label": "Msg #23: Proof of Keys",
    "sublabel": "Telegram Ticket",
    "type": "POST",
    "category": "Post",
    "confidence": 0.7,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Channel": "Telegram"
    }
  },
  {
    "id": "NODE-TG-MSG-24",
    "label": "Msg #24: Extortion Ticket",
    "sublabel": "Telegram Ticket",
    "type": "POST",
    "category": "Post",
    "confidence": 0.7,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Channel": "Telegram"
    }
  },
  {
    "id": "NODE-TG-MSG-25",
    "label": "Msg #25: Proof of Keys",
    "sublabel": "Telegram Ticket",
    "type": "POST",
    "category": "Post",
    "confidence": 0.7,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Channel": "Telegram"
    }
  },
  {
    "id": "NODE-TG-MSG-26",
    "label": "Msg #26: Extortion Ticket",
    "sublabel": "Telegram Ticket",
    "type": "POST",
    "category": "Post",
    "confidence": 0.7,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Channel": "Telegram"
    }
  },
  {
    "id": "NODE-TG-MSG-27",
    "label": "Msg #27: Proof of Keys",
    "sublabel": "Telegram Ticket",
    "type": "POST",
    "category": "Post",
    "confidence": 0.7,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Channel": "Telegram"
    }
  },
  {
    "id": "NODE-TG-MSG-28",
    "label": "Msg #28: Extortion Ticket",
    "sublabel": "Telegram Ticket",
    "type": "POST",
    "category": "Post",
    "confidence": 0.7,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Channel": "Telegram"
    }
  },
  {
    "id": "NODE-TG-MSG-29",
    "label": "Msg #29: Proof of Keys",
    "sublabel": "Telegram Ticket",
    "type": "POST",
    "category": "Post",
    "confidence": 0.7,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Channel": "Telegram"
    }
  },
  {
    "id": "NODE-TG-MSG-30",
    "label": "Msg #30: Extortion Ticket",
    "sublabel": "Telegram Ticket",
    "type": "POST",
    "category": "Post",
    "confidence": 0.7,
    "firstSeen": "2026-01-25",
    "lastSeen": "2026-09-28",
    "degree": 3,
    "details": {
      "Channel": "Telegram"
    }
  },
  {
    "id": "NODE-ALIBI-CUSTODY",
    "label": "Confirmed Detention Custody (2026-03-03 to 2026-03-12)",
    "sublabel": "Alibi Verification",
    "type": "CANDIDATE_ENTITY",
    "category": "Candidate Entity",
    "confidence": 1.0,
    "firstSeen": "2026-03-03",
    "lastSeen": "2026-03-12",
    "degree": 5,
    "details": {
      "Status": "Verified Physical Detention",
      "Verdict": "Disproved Suspect"
    }
  },
  {
    "id": "NODE-CONFLICT-POST",
    "label": "Live Extortion Post on 2026-03-05 14:15 UTC",
    "sublabel": "Conflicting Timestamp",
    "type": "POST",
    "category": "Post",
    "confidence": 0.95,
    "firstSeen": "2026-03-05",
    "lastSeen": "2026-03-05",
    "degree": 3,
    "details": {
      "Author": "NightStalker",
      "Conflict": "Collides with detention alibi"
    }
  },
  {
    "id": "NODE-ALIBI-LOG1",
    "label": "Court Remand Order #CR-8812",
    "sublabel": "Legal Custody Record",
    "type": "DOCUMENT",
    "category": "Document",
    "confidence": 0.99,
    "firstSeen": "2026-03-03",
    "lastSeen": "2026-03-12",
    "degree": 2,
    "details": {
      "Role": "Legal Custody Record"
    }
  },
  {
    "id": "NODE-ALIBI-LOG2",
    "label": "Cell Block Inmate Log #CB-401",
    "sublabel": "Physical Security Log",
    "type": "DOCUMENT",
    "category": "Document",
    "confidence": 0.99,
    "firstSeen": "2026-03-03",
    "lastSeen": "2026-03-12",
    "degree": 2,
    "details": {
      "Role": "Physical Security Log"
    }
  },
  {
    "id": "NODE-ALIBI-LOG3",
    "label": "Biometric Booking Receipt",
    "sublabel": "Sheriff Department Record",
    "type": "DOCUMENT",
    "category": "Document",
    "confidence": 0.99,
    "firstSeen": "2026-03-03",
    "lastSeen": "2026-03-12",
    "degree": 2,
    "details": {
      "Role": "Sheriff Department Record"
    }
  }
];

export const MOCK_GRAPH_EDGES: GraphEdge[] = [
  {
    "id": "EDGE-INFRA-ITEM-001",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-01",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-01",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-002",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-02",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-02",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-003",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-03",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-03",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-004",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-04",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-04",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-MIRROR1-ITEM-004",
    "source": "NODE-ONION-MIRROR1",
    "target": "NODE-ITEM-LEAK-04",
    "relationType": "MIRRORS_ARTIFACT",
    "label": "MIRRORS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.82,
    "isContradiction": false,
    "evidenceSnippet": "Mirrored file on secondary Tor v3 node",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-005",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-05",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-05",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-MIRROR2-ITEM-005",
    "source": "NODE-ONION-MIRROR2",
    "target": "NODE-ITEM-LEAK-05",
    "relationType": "CACHES_ARTIFACT",
    "label": "CACHES ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.78,
    "isContradiction": false,
    "evidenceSnippet": "Cached archive on backup portal",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-006",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-06",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-06",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-007",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-07",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-07",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-008",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-08",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-08",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-MIRROR1-ITEM-008",
    "source": "NODE-ONION-MIRROR1",
    "target": "NODE-ITEM-LEAK-08",
    "relationType": "MIRRORS_ARTIFACT",
    "label": "MIRRORS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.82,
    "isContradiction": false,
    "evidenceSnippet": "Mirrored file on secondary Tor v3 node",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-009",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-09",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-09",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-010",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-10",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-10",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-MIRROR2-ITEM-010",
    "source": "NODE-ONION-MIRROR2",
    "target": "NODE-ITEM-LEAK-10",
    "relationType": "CACHES_ARTIFACT",
    "label": "CACHES ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.78,
    "isContradiction": false,
    "evidenceSnippet": "Cached archive on backup portal",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-011",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-11",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-11",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-012",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-12",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-12",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-MIRROR1-ITEM-012",
    "source": "NODE-ONION-MIRROR1",
    "target": "NODE-ITEM-LEAK-12",
    "relationType": "MIRRORS_ARTIFACT",
    "label": "MIRRORS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.82,
    "isContradiction": false,
    "evidenceSnippet": "Mirrored file on secondary Tor v3 node",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-013",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-13",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-13",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-014",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-14",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-14",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-015",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-15",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-15",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-MIRROR2-ITEM-015",
    "source": "NODE-ONION-MIRROR2",
    "target": "NODE-ITEM-LEAK-15",
    "relationType": "CACHES_ARTIFACT",
    "label": "CACHES ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.78,
    "isContradiction": false,
    "evidenceSnippet": "Cached archive on backup portal",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-016",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-16",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-16",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-MIRROR1-ITEM-016",
    "source": "NODE-ONION-MIRROR1",
    "target": "NODE-ITEM-LEAK-16",
    "relationType": "MIRRORS_ARTIFACT",
    "label": "MIRRORS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.82,
    "isContradiction": false,
    "evidenceSnippet": "Mirrored file on secondary Tor v3 node",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-017",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-17",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-17",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-018",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-18",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-18",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-019",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-19",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-19",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-020",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-20",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-20",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-MIRROR1-ITEM-020",
    "source": "NODE-ONION-MIRROR1",
    "target": "NODE-ITEM-LEAK-20",
    "relationType": "MIRRORS_ARTIFACT",
    "label": "MIRRORS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.82,
    "isContradiction": false,
    "evidenceSnippet": "Mirrored file on secondary Tor v3 node",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-MIRROR2-ITEM-020",
    "source": "NODE-ONION-MIRROR2",
    "target": "NODE-ITEM-LEAK-20",
    "relationType": "CACHES_ARTIFACT",
    "label": "CACHES ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.78,
    "isContradiction": false,
    "evidenceSnippet": "Cached archive on backup portal",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-021",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-21",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-21",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-022",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-22",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-22",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-023",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-23",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-23",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-024",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-24",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-24",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-MIRROR1-ITEM-024",
    "source": "NODE-ONION-MIRROR1",
    "target": "NODE-ITEM-LEAK-24",
    "relationType": "MIRRORS_ARTIFACT",
    "label": "MIRRORS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.82,
    "isContradiction": false,
    "evidenceSnippet": "Mirrored file on secondary Tor v3 node",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-025",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-25",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-25",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-MIRROR2-ITEM-025",
    "source": "NODE-ONION-MIRROR2",
    "target": "NODE-ITEM-LEAK-25",
    "relationType": "CACHES_ARTIFACT",
    "label": "CACHES ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.78,
    "isContradiction": false,
    "evidenceSnippet": "Cached archive on backup portal",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-026",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-26",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-26",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-027",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-27",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-27",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-028",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-28",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-28",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-MIRROR1-ITEM-028",
    "source": "NODE-ONION-MIRROR1",
    "target": "NODE-ITEM-LEAK-28",
    "relationType": "MIRRORS_ARTIFACT",
    "label": "MIRRORS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.82,
    "isContradiction": false,
    "evidenceSnippet": "Mirrored file on secondary Tor v3 node",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-029",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-29",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-29",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-030",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-30",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-30",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-MIRROR2-ITEM-030",
    "source": "NODE-ONION-MIRROR2",
    "target": "NODE-ITEM-LEAK-30",
    "relationType": "CACHES_ARTIFACT",
    "label": "CACHES ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.78,
    "isContradiction": false,
    "evidenceSnippet": "Cached archive on backup portal",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-031",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-31",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-31",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-032",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-32",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-32",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-MIRROR1-ITEM-032",
    "source": "NODE-ONION-MIRROR1",
    "target": "NODE-ITEM-LEAK-32",
    "relationType": "MIRRORS_ARTIFACT",
    "label": "MIRRORS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.82,
    "isContradiction": false,
    "evidenceSnippet": "Mirrored file on secondary Tor v3 node",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-033",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-33",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-33",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-034",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-34",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-34",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-035",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-35",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-35",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-MIRROR2-ITEM-035",
    "source": "NODE-ONION-MIRROR2",
    "target": "NODE-ITEM-LEAK-35",
    "relationType": "CACHES_ARTIFACT",
    "label": "CACHES ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.78,
    "isContradiction": false,
    "evidenceSnippet": "Cached archive on backup portal",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-036",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-36",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-36",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-MIRROR1-ITEM-036",
    "source": "NODE-ONION-MIRROR1",
    "target": "NODE-ITEM-LEAK-36",
    "relationType": "MIRRORS_ARTIFACT",
    "label": "MIRRORS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.82,
    "isContradiction": false,
    "evidenceSnippet": "Mirrored file on secondary Tor v3 node",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-037",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-37",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-37",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-038",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-38",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-38",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-039",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-39",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-39",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-040",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-40",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-40",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-MIRROR1-ITEM-040",
    "source": "NODE-ONION-MIRROR1",
    "target": "NODE-ITEM-LEAK-40",
    "relationType": "MIRRORS_ARTIFACT",
    "label": "MIRRORS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.82,
    "isContradiction": false,
    "evidenceSnippet": "Mirrored file on secondary Tor v3 node",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-MIRROR2-ITEM-040",
    "source": "NODE-ONION-MIRROR2",
    "target": "NODE-ITEM-LEAK-40",
    "relationType": "CACHES_ARTIFACT",
    "label": "CACHES ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.78,
    "isContradiction": false,
    "evidenceSnippet": "Cached archive on backup portal",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-041",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-41",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-41",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-042",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-42",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-42",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-043",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-43",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-43",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-044",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-44",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-44",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-MIRROR1-ITEM-044",
    "source": "NODE-ONION-MIRROR1",
    "target": "NODE-ITEM-LEAK-44",
    "relationType": "MIRRORS_ARTIFACT",
    "label": "MIRRORS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.82,
    "isContradiction": false,
    "evidenceSnippet": "Mirrored file on secondary Tor v3 node",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-045",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-45",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-45",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-MIRROR2-ITEM-045",
    "source": "NODE-ONION-MIRROR2",
    "target": "NODE-ITEM-LEAK-45",
    "relationType": "CACHES_ARTIFACT",
    "label": "CACHES ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.78,
    "isContradiction": false,
    "evidenceSnippet": "Cached archive on backup portal",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-046",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-46",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-46",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-047",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-47",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-47",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-048",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-48",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-48",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-MIRROR1-ITEM-048",
    "source": "NODE-ONION-MIRROR1",
    "target": "NODE-ITEM-LEAK-48",
    "relationType": "MIRRORS_ARTIFACT",
    "label": "MIRRORS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.82,
    "isContradiction": false,
    "evidenceSnippet": "Mirrored file on secondary Tor v3 node",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-049",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-49",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-49",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-050",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-50",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-50",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-MIRROR2-ITEM-050",
    "source": "NODE-ONION-MIRROR2",
    "target": "NODE-ITEM-LEAK-50",
    "relationType": "CACHES_ARTIFACT",
    "label": "CACHES ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.78,
    "isContradiction": false,
    "evidenceSnippet": "Cached archive on backup portal",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-051",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-51",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-51",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-052",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-52",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-52",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-MIRROR1-ITEM-052",
    "source": "NODE-ONION-MIRROR1",
    "target": "NODE-ITEM-LEAK-52",
    "relationType": "MIRRORS_ARTIFACT",
    "label": "MIRRORS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.82,
    "isContradiction": false,
    "evidenceSnippet": "Mirrored file on secondary Tor v3 node",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-053",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-53",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-53",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-054",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-54",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-54",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-055",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-55",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-55",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-MIRROR2-ITEM-055",
    "source": "NODE-ONION-MIRROR2",
    "target": "NODE-ITEM-LEAK-55",
    "relationType": "CACHES_ARTIFACT",
    "label": "CACHES ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.78,
    "isContradiction": false,
    "evidenceSnippet": "Cached archive on backup portal",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-056",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-56",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-56",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-MIRROR1-ITEM-056",
    "source": "NODE-ONION-MIRROR1",
    "target": "NODE-ITEM-LEAK-56",
    "relationType": "MIRRORS_ARTIFACT",
    "label": "MIRRORS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.82,
    "isContradiction": false,
    "evidenceSnippet": "Mirrored file on secondary Tor v3 node",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-057",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-57",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-57",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-058",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-58",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-58",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-059",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-59",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-59",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-060",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-60",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-60",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-MIRROR1-ITEM-060",
    "source": "NODE-ONION-MIRROR1",
    "target": "NODE-ITEM-LEAK-60",
    "relationType": "MIRRORS_ARTIFACT",
    "label": "MIRRORS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.82,
    "isContradiction": false,
    "evidenceSnippet": "Mirrored file on secondary Tor v3 node",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-MIRROR2-ITEM-060",
    "source": "NODE-ONION-MIRROR2",
    "target": "NODE-ITEM-LEAK-60",
    "relationType": "CACHES_ARTIFACT",
    "label": "CACHES ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.78,
    "isContradiction": false,
    "evidenceSnippet": "Cached archive on backup portal",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-061",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-61",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-61",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-062",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-62",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-62",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-063",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-63",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-63",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-064",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-64",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-64",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-MIRROR1-ITEM-064",
    "source": "NODE-ONION-MIRROR1",
    "target": "NODE-ITEM-LEAK-64",
    "relationType": "MIRRORS_ARTIFACT",
    "label": "MIRRORS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.82,
    "isContradiction": false,
    "evidenceSnippet": "Mirrored file on secondary Tor v3 node",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-065",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-65",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-65",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-MIRROR2-ITEM-065",
    "source": "NODE-ONION-MIRROR2",
    "target": "NODE-ITEM-LEAK-65",
    "relationType": "CACHES_ARTIFACT",
    "label": "CACHES ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.78,
    "isContradiction": false,
    "evidenceSnippet": "Cached archive on backup portal",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-066",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-66",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-66",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-067",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-67",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-67",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-068",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-68",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-68",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-MIRROR1-ITEM-068",
    "source": "NODE-ONION-MIRROR1",
    "target": "NODE-ITEM-LEAK-68",
    "relationType": "MIRRORS_ARTIFACT",
    "label": "MIRRORS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.82,
    "isContradiction": false,
    "evidenceSnippet": "Mirrored file on secondary Tor v3 node",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-069",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-69",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-69",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-070",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-70",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-70",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-MIRROR2-ITEM-070",
    "source": "NODE-ONION-MIRROR2",
    "target": "NODE-ITEM-LEAK-70",
    "relationType": "CACHES_ARTIFACT",
    "label": "CACHES ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.78,
    "isContradiction": false,
    "evidenceSnippet": "Cached archive on backup portal",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-071",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-71",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-71",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-072",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-72",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-72",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-MIRROR1-ITEM-072",
    "source": "NODE-ONION-MIRROR1",
    "target": "NODE-ITEM-LEAK-72",
    "relationType": "MIRRORS_ARTIFACT",
    "label": "MIRRORS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.82,
    "isContradiction": false,
    "evidenceSnippet": "Mirrored file on secondary Tor v3 node",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-073",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-73",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-73",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-074",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-74",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-74",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-INFRA-ITEM-075",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-ITEM-LEAK-75",
    "relationType": "HOSTS_ARTIFACT",
    "label": "HOSTS ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Artifact observed on Tor v3 hidden service index NODE-ITEM-LEAK-75",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-MIRROR2-ITEM-075",
    "source": "NODE-ONION-MIRROR2",
    "target": "NODE-ITEM-LEAK-75",
    "relationType": "CACHES_ARTIFACT",
    "label": "CACHES ARTIFACT",
    "evidenceCount": 1,
    "confidence": 0.78,
    "isContradiction": false,
    "evidenceSnippet": "Cached archive on backup portal",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PERSONA-NODE-ACC-DREAD",
    "source": "NODE-P001",
    "target": "NODE-ACC-DREAD",
    "relationType": "MAINTAINS_ACCOUNT",
    "label": "MAINTAINS ACCOUNT",
    "evidenceCount": 2,
    "confidence": 0.94,
    "isContradiction": false,
    "evidenceSnippet": "Profile handle matches primary syndicate operator",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PERSONA-NODE-ACC-EXPLOIT",
    "source": "NODE-P001",
    "target": "NODE-ACC-EXPLOIT",
    "relationType": "MAINTAINS_ACCOUNT",
    "label": "MAINTAINS ACCOUNT",
    "evidenceCount": 2,
    "confidence": 0.94,
    "isContradiction": false,
    "evidenceSnippet": "Profile handle matches primary syndicate operator",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PERSONA-NODE-ACC-XSS",
    "source": "NODE-P001",
    "target": "NODE-ACC-XSS",
    "relationType": "MAINTAINS_ACCOUNT",
    "label": "MAINTAINS ACCOUNT",
    "evidenceCount": 2,
    "confidence": 0.94,
    "isContradiction": false,
    "evidenceSnippet": "Profile handle matches primary syndicate operator",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PERSONA-NODE-ACC-RAMP",
    "source": "NODE-P001",
    "target": "NODE-ACC-RAMP",
    "relationType": "MAINTAINS_ACCOUNT",
    "label": "MAINTAINS ACCOUNT",
    "evidenceCount": 2,
    "confidence": 0.94,
    "isContradiction": false,
    "evidenceSnippet": "Profile handle matches primary syndicate operator",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PERSONA-NODE-ACC-BREACHED",
    "source": "NODE-P001",
    "target": "NODE-ACC-BREACHED",
    "relationType": "MAINTAINS_ACCOUNT",
    "label": "MAINTAINS ACCOUNT",
    "evidenceCount": 2,
    "confidence": 0.94,
    "isContradiction": false,
    "evidenceSnippet": "Profile handle matches primary syndicate operator",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-AUTHOR-001",
    "source": "NODE-P001",
    "target": "NODE-POST-FORUM-01",
    "relationType": "AUTHORED_BY",
    "label": "AUTHORED BY",
    "evidenceCount": 1,
    "confidence": 0.85,
    "isContradiction": false,
    "evidenceSnippet": "Public message signed with forum account credentials",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-AUTHOR-002",
    "source": "NODE-P001",
    "target": "NODE-POST-FORUM-02",
    "relationType": "AUTHORED_BY",
    "label": "AUTHORED BY",
    "evidenceCount": 1,
    "confidence": 0.85,
    "isContradiction": false,
    "evidenceSnippet": "Public message signed with forum account credentials",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-AUTHOR-003",
    "source": "NODE-P001",
    "target": "NODE-POST-FORUM-03",
    "relationType": "AUTHORED_BY",
    "label": "AUTHORED BY",
    "evidenceCount": 1,
    "confidence": 0.85,
    "isContradiction": false,
    "evidenceSnippet": "Public message signed with forum account credentials",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-AUTHOR-004",
    "source": "NODE-P001",
    "target": "NODE-POST-FORUM-04",
    "relationType": "AUTHORED_BY",
    "label": "AUTHORED BY",
    "evidenceCount": 1,
    "confidence": 0.85,
    "isContradiction": false,
    "evidenceSnippet": "Public message signed with forum account credentials",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-DREAD-004",
    "source": "NODE-ACC-DREAD",
    "target": "NODE-POST-FORUM-04",
    "relationType": "SUBMITTED_FROM",
    "label": "SUBMITTED FROM",
    "evidenceCount": 1,
    "confidence": 0.88,
    "isContradiction": false,
    "evidenceSnippet": "Originates from authenticated Dread forum account",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-AUTHOR-005",
    "source": "NODE-P001",
    "target": "NODE-POST-FORUM-05",
    "relationType": "AUTHORED_BY",
    "label": "AUTHORED BY",
    "evidenceCount": 1,
    "confidence": 0.85,
    "isContradiction": false,
    "evidenceSnippet": "Public message signed with forum account credentials",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-EXPLOIT-005",
    "source": "NODE-ACC-EXPLOIT",
    "target": "NODE-POST-FORUM-05",
    "relationType": "SUBMITTED_FROM",
    "label": "SUBMITTED FROM",
    "evidenceCount": 1,
    "confidence": 0.87,
    "isContradiction": false,
    "evidenceSnippet": "Originates from verified Exploit forum account",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-AUTHOR-006",
    "source": "NODE-P001",
    "target": "NODE-POST-FORUM-06",
    "relationType": "AUTHORED_BY",
    "label": "AUTHORED BY",
    "evidenceCount": 1,
    "confidence": 0.85,
    "isContradiction": false,
    "evidenceSnippet": "Public message signed with forum account credentials",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-AUTHOR-007",
    "source": "NODE-P001",
    "target": "NODE-POST-FORUM-07",
    "relationType": "AUTHORED_BY",
    "label": "AUTHORED BY",
    "evidenceCount": 1,
    "confidence": 0.85,
    "isContradiction": false,
    "evidenceSnippet": "Public message signed with forum account credentials",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-AUTHOR-008",
    "source": "NODE-P001",
    "target": "NODE-POST-FORUM-08",
    "relationType": "AUTHORED_BY",
    "label": "AUTHORED BY",
    "evidenceCount": 1,
    "confidence": 0.85,
    "isContradiction": false,
    "evidenceSnippet": "Public message signed with forum account credentials",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-DREAD-008",
    "source": "NODE-ACC-DREAD",
    "target": "NODE-POST-FORUM-08",
    "relationType": "SUBMITTED_FROM",
    "label": "SUBMITTED FROM",
    "evidenceCount": 1,
    "confidence": 0.88,
    "isContradiction": false,
    "evidenceSnippet": "Originates from authenticated Dread forum account",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-AUTHOR-009",
    "source": "NODE-P001",
    "target": "NODE-POST-FORUM-09",
    "relationType": "AUTHORED_BY",
    "label": "AUTHORED BY",
    "evidenceCount": 1,
    "confidence": 0.85,
    "isContradiction": false,
    "evidenceSnippet": "Public message signed with forum account credentials",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-AUTHOR-010",
    "source": "NODE-P001",
    "target": "NODE-POST-FORUM-10",
    "relationType": "AUTHORED_BY",
    "label": "AUTHORED BY",
    "evidenceCount": 1,
    "confidence": 0.85,
    "isContradiction": false,
    "evidenceSnippet": "Public message signed with forum account credentials",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-EXPLOIT-010",
    "source": "NODE-ACC-EXPLOIT",
    "target": "NODE-POST-FORUM-10",
    "relationType": "SUBMITTED_FROM",
    "label": "SUBMITTED FROM",
    "evidenceCount": 1,
    "confidence": 0.87,
    "isContradiction": false,
    "evidenceSnippet": "Originates from verified Exploit forum account",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-AUTHOR-011",
    "source": "NODE-P001",
    "target": "NODE-POST-FORUM-11",
    "relationType": "AUTHORED_BY",
    "label": "AUTHORED BY",
    "evidenceCount": 1,
    "confidence": 0.85,
    "isContradiction": false,
    "evidenceSnippet": "Public message signed with forum account credentials",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-AUTHOR-012",
    "source": "NODE-P001",
    "target": "NODE-POST-FORUM-12",
    "relationType": "AUTHORED_BY",
    "label": "AUTHORED BY",
    "evidenceCount": 1,
    "confidence": 0.85,
    "isContradiction": false,
    "evidenceSnippet": "Public message signed with forum account credentials",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-DREAD-012",
    "source": "NODE-ACC-DREAD",
    "target": "NODE-POST-FORUM-12",
    "relationType": "SUBMITTED_FROM",
    "label": "SUBMITTED FROM",
    "evidenceCount": 1,
    "confidence": 0.88,
    "isContradiction": false,
    "evidenceSnippet": "Originates from authenticated Dread forum account",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-AUTHOR-013",
    "source": "NODE-P001",
    "target": "NODE-POST-FORUM-13",
    "relationType": "AUTHORED_BY",
    "label": "AUTHORED BY",
    "evidenceCount": 1,
    "confidence": 0.85,
    "isContradiction": false,
    "evidenceSnippet": "Public message signed with forum account credentials",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-AUTHOR-014",
    "source": "NODE-P001",
    "target": "NODE-POST-FORUM-14",
    "relationType": "AUTHORED_BY",
    "label": "AUTHORED BY",
    "evidenceCount": 1,
    "confidence": 0.85,
    "isContradiction": false,
    "evidenceSnippet": "Public message signed with forum account credentials",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-AUTHOR-015",
    "source": "NODE-P001",
    "target": "NODE-POST-FORUM-15",
    "relationType": "AUTHORED_BY",
    "label": "AUTHORED BY",
    "evidenceCount": 1,
    "confidence": 0.85,
    "isContradiction": false,
    "evidenceSnippet": "Public message signed with forum account credentials",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-EXPLOIT-015",
    "source": "NODE-ACC-EXPLOIT",
    "target": "NODE-POST-FORUM-15",
    "relationType": "SUBMITTED_FROM",
    "label": "SUBMITTED FROM",
    "evidenceCount": 1,
    "confidence": 0.87,
    "isContradiction": false,
    "evidenceSnippet": "Originates from verified Exploit forum account",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-AUTHOR-016",
    "source": "NODE-P001",
    "target": "NODE-POST-FORUM-16",
    "relationType": "AUTHORED_BY",
    "label": "AUTHORED BY",
    "evidenceCount": 1,
    "confidence": 0.85,
    "isContradiction": false,
    "evidenceSnippet": "Public message signed with forum account credentials",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-DREAD-016",
    "source": "NODE-ACC-DREAD",
    "target": "NODE-POST-FORUM-16",
    "relationType": "SUBMITTED_FROM",
    "label": "SUBMITTED FROM",
    "evidenceCount": 1,
    "confidence": 0.88,
    "isContradiction": false,
    "evidenceSnippet": "Originates from authenticated Dread forum account",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-AUTHOR-017",
    "source": "NODE-P001",
    "target": "NODE-POST-FORUM-17",
    "relationType": "AUTHORED_BY",
    "label": "AUTHORED BY",
    "evidenceCount": 1,
    "confidence": 0.85,
    "isContradiction": false,
    "evidenceSnippet": "Public message signed with forum account credentials",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-AUTHOR-018",
    "source": "NODE-P001",
    "target": "NODE-POST-FORUM-18",
    "relationType": "AUTHORED_BY",
    "label": "AUTHORED BY",
    "evidenceCount": 1,
    "confidence": 0.85,
    "isContradiction": false,
    "evidenceSnippet": "Public message signed with forum account credentials",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-AUTHOR-019",
    "source": "NODE-P001",
    "target": "NODE-POST-FORUM-19",
    "relationType": "AUTHORED_BY",
    "label": "AUTHORED BY",
    "evidenceCount": 1,
    "confidence": 0.85,
    "isContradiction": false,
    "evidenceSnippet": "Public message signed with forum account credentials",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-AUTHOR-020",
    "source": "NODE-P001",
    "target": "NODE-POST-FORUM-20",
    "relationType": "AUTHORED_BY",
    "label": "AUTHORED BY",
    "evidenceCount": 1,
    "confidence": 0.85,
    "isContradiction": false,
    "evidenceSnippet": "Public message signed with forum account credentials",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-DREAD-020",
    "source": "NODE-ACC-DREAD",
    "target": "NODE-POST-FORUM-20",
    "relationType": "SUBMITTED_FROM",
    "label": "SUBMITTED FROM",
    "evidenceCount": 1,
    "confidence": 0.88,
    "isContradiction": false,
    "evidenceSnippet": "Originates from authenticated Dread forum account",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-AUTHOR-021",
    "source": "NODE-P001",
    "target": "NODE-POST-FORUM-21",
    "relationType": "AUTHORED_BY",
    "label": "AUTHORED BY",
    "evidenceCount": 1,
    "confidence": 0.85,
    "isContradiction": false,
    "evidenceSnippet": "Public message signed with forum account credentials",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-AUTHOR-022",
    "source": "NODE-P001",
    "target": "NODE-POST-FORUM-22",
    "relationType": "AUTHORED_BY",
    "label": "AUTHORED BY",
    "evidenceCount": 1,
    "confidence": 0.85,
    "isContradiction": false,
    "evidenceSnippet": "Public message signed with forum account credentials",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-AUTHOR-023",
    "source": "NODE-P001",
    "target": "NODE-POST-FORUM-23",
    "relationType": "AUTHORED_BY",
    "label": "AUTHORED BY",
    "evidenceCount": 1,
    "confidence": 0.85,
    "isContradiction": false,
    "evidenceSnippet": "Public message signed with forum account credentials",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-AUTHOR-024",
    "source": "NODE-P001",
    "target": "NODE-POST-FORUM-24",
    "relationType": "AUTHORED_BY",
    "label": "AUTHORED BY",
    "evidenceCount": 1,
    "confidence": 0.85,
    "isContradiction": false,
    "evidenceSnippet": "Public message signed with forum account credentials",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-DREAD-024",
    "source": "NODE-ACC-DREAD",
    "target": "NODE-POST-FORUM-24",
    "relationType": "SUBMITTED_FROM",
    "label": "SUBMITTED FROM",
    "evidenceCount": 1,
    "confidence": 0.88,
    "isContradiction": false,
    "evidenceSnippet": "Originates from authenticated Dread forum account",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-AUTHOR-025",
    "source": "NODE-P001",
    "target": "NODE-POST-FORUM-25",
    "relationType": "AUTHORED_BY",
    "label": "AUTHORED BY",
    "evidenceCount": 1,
    "confidence": 0.85,
    "isContradiction": false,
    "evidenceSnippet": "Public message signed with forum account credentials",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-EXPLOIT-025",
    "source": "NODE-ACC-EXPLOIT",
    "target": "NODE-POST-FORUM-25",
    "relationType": "SUBMITTED_FROM",
    "label": "SUBMITTED FROM",
    "evidenceCount": 1,
    "confidence": 0.87,
    "isContradiction": false,
    "evidenceSnippet": "Originates from verified Exploit forum account",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-AUTHOR-026",
    "source": "NODE-P001",
    "target": "NODE-POST-FORUM-26",
    "relationType": "AUTHORED_BY",
    "label": "AUTHORED BY",
    "evidenceCount": 1,
    "confidence": 0.85,
    "isContradiction": false,
    "evidenceSnippet": "Public message signed with forum account credentials",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-AUTHOR-027",
    "source": "NODE-P001",
    "target": "NODE-POST-FORUM-27",
    "relationType": "AUTHORED_BY",
    "label": "AUTHORED BY",
    "evidenceCount": 1,
    "confidence": 0.85,
    "isContradiction": false,
    "evidenceSnippet": "Public message signed with forum account credentials",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-AUTHOR-028",
    "source": "NODE-P001",
    "target": "NODE-POST-FORUM-28",
    "relationType": "AUTHORED_BY",
    "label": "AUTHORED BY",
    "evidenceCount": 1,
    "confidence": 0.85,
    "isContradiction": false,
    "evidenceSnippet": "Public message signed with forum account credentials",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-DREAD-028",
    "source": "NODE-ACC-DREAD",
    "target": "NODE-POST-FORUM-28",
    "relationType": "SUBMITTED_FROM",
    "label": "SUBMITTED FROM",
    "evidenceCount": 1,
    "confidence": 0.88,
    "isContradiction": false,
    "evidenceSnippet": "Originates from authenticated Dread forum account",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-AUTHOR-029",
    "source": "NODE-P001",
    "target": "NODE-POST-FORUM-29",
    "relationType": "AUTHORED_BY",
    "label": "AUTHORED BY",
    "evidenceCount": 1,
    "confidence": 0.85,
    "isContradiction": false,
    "evidenceSnippet": "Public message signed with forum account credentials",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-AUTHOR-030",
    "source": "NODE-P001",
    "target": "NODE-POST-FORUM-30",
    "relationType": "AUTHORED_BY",
    "label": "AUTHORED BY",
    "evidenceCount": 1,
    "confidence": 0.85,
    "isContradiction": false,
    "evidenceSnippet": "Public message signed with forum account credentials",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-EXPLOIT-030",
    "source": "NODE-ACC-EXPLOIT",
    "target": "NODE-POST-FORUM-30",
    "relationType": "SUBMITTED_FROM",
    "label": "SUBMITTED FROM",
    "evidenceCount": 1,
    "confidence": 0.87,
    "isContradiction": false,
    "evidenceSnippet": "Originates from verified Exploit forum account",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-AUTHOR-031",
    "source": "NODE-P001",
    "target": "NODE-POST-FORUM-31",
    "relationType": "AUTHORED_BY",
    "label": "AUTHORED BY",
    "evidenceCount": 1,
    "confidence": 0.85,
    "isContradiction": false,
    "evidenceSnippet": "Public message signed with forum account credentials",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-AUTHOR-032",
    "source": "NODE-P001",
    "target": "NODE-POST-FORUM-32",
    "relationType": "AUTHORED_BY",
    "label": "AUTHORED BY",
    "evidenceCount": 1,
    "confidence": 0.85,
    "isContradiction": false,
    "evidenceSnippet": "Public message signed with forum account credentials",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-DREAD-032",
    "source": "NODE-ACC-DREAD",
    "target": "NODE-POST-FORUM-32",
    "relationType": "SUBMITTED_FROM",
    "label": "SUBMITTED FROM",
    "evidenceCount": 1,
    "confidence": 0.88,
    "isContradiction": false,
    "evidenceSnippet": "Originates from authenticated Dread forum account",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-AUTHOR-033",
    "source": "NODE-P001",
    "target": "NODE-POST-FORUM-33",
    "relationType": "AUTHORED_BY",
    "label": "AUTHORED BY",
    "evidenceCount": 1,
    "confidence": 0.85,
    "isContradiction": false,
    "evidenceSnippet": "Public message signed with forum account credentials",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-AUTHOR-034",
    "source": "NODE-P001",
    "target": "NODE-POST-FORUM-34",
    "relationType": "AUTHORED_BY",
    "label": "AUTHORED BY",
    "evidenceCount": 1,
    "confidence": 0.85,
    "isContradiction": false,
    "evidenceSnippet": "Public message signed with forum account credentials",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-AUTHOR-035",
    "source": "NODE-P001",
    "target": "NODE-POST-FORUM-35",
    "relationType": "AUTHORED_BY",
    "label": "AUTHORED BY",
    "evidenceCount": 1,
    "confidence": 0.85,
    "isContradiction": false,
    "evidenceSnippet": "Public message signed with forum account credentials",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-EXPLOIT-035",
    "source": "NODE-ACC-EXPLOIT",
    "target": "NODE-POST-FORUM-35",
    "relationType": "SUBMITTED_FROM",
    "label": "SUBMITTED FROM",
    "evidenceCount": 1,
    "confidence": 0.87,
    "isContradiction": false,
    "evidenceSnippet": "Originates from verified Exploit forum account",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-AUTHOR-036",
    "source": "NODE-P001",
    "target": "NODE-POST-FORUM-36",
    "relationType": "AUTHORED_BY",
    "label": "AUTHORED BY",
    "evidenceCount": 1,
    "confidence": 0.85,
    "isContradiction": false,
    "evidenceSnippet": "Public message signed with forum account credentials",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-DREAD-036",
    "source": "NODE-ACC-DREAD",
    "target": "NODE-POST-FORUM-36",
    "relationType": "SUBMITTED_FROM",
    "label": "SUBMITTED FROM",
    "evidenceCount": 1,
    "confidence": 0.88,
    "isContradiction": false,
    "evidenceSnippet": "Originates from authenticated Dread forum account",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-AUTHOR-037",
    "source": "NODE-P001",
    "target": "NODE-POST-FORUM-37",
    "relationType": "AUTHORED_BY",
    "label": "AUTHORED BY",
    "evidenceCount": 1,
    "confidence": 0.85,
    "isContradiction": false,
    "evidenceSnippet": "Public message signed with forum account credentials",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-AUTHOR-038",
    "source": "NODE-P001",
    "target": "NODE-POST-FORUM-38",
    "relationType": "AUTHORED_BY",
    "label": "AUTHORED BY",
    "evidenceCount": 1,
    "confidence": 0.85,
    "isContradiction": false,
    "evidenceSnippet": "Public message signed with forum account credentials",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-AUTHOR-039",
    "source": "NODE-P001",
    "target": "NODE-POST-FORUM-39",
    "relationType": "AUTHORED_BY",
    "label": "AUTHORED BY",
    "evidenceCount": 1,
    "confidence": 0.85,
    "isContradiction": false,
    "evidenceSnippet": "Public message signed with forum account credentials",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-AUTHOR-040",
    "source": "NODE-P001",
    "target": "NODE-POST-FORUM-40",
    "relationType": "AUTHORED_BY",
    "label": "AUTHORED BY",
    "evidenceCount": 1,
    "confidence": 0.85,
    "isContradiction": false,
    "evidenceSnippet": "Public message signed with forum account credentials",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-DREAD-040",
    "source": "NODE-ACC-DREAD",
    "target": "NODE-POST-FORUM-40",
    "relationType": "SUBMITTED_FROM",
    "label": "SUBMITTED FROM",
    "evidenceCount": 1,
    "confidence": 0.88,
    "isContradiction": false,
    "evidenceSnippet": "Originates from authenticated Dread forum account",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-AUTHOR-041",
    "source": "NODE-P001",
    "target": "NODE-POST-FORUM-41",
    "relationType": "AUTHORED_BY",
    "label": "AUTHORED BY",
    "evidenceCount": 1,
    "confidence": 0.85,
    "isContradiction": false,
    "evidenceSnippet": "Public message signed with forum account credentials",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-AUTHOR-042",
    "source": "NODE-P001",
    "target": "NODE-POST-FORUM-42",
    "relationType": "AUTHORED_BY",
    "label": "AUTHORED BY",
    "evidenceCount": 1,
    "confidence": 0.85,
    "isContradiction": false,
    "evidenceSnippet": "Public message signed with forum account credentials",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-AUTHOR-043",
    "source": "NODE-P001",
    "target": "NODE-POST-FORUM-43",
    "relationType": "AUTHORED_BY",
    "label": "AUTHORED BY",
    "evidenceCount": 1,
    "confidence": 0.85,
    "isContradiction": false,
    "evidenceSnippet": "Public message signed with forum account credentials",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-AUTHOR-044",
    "source": "NODE-P001",
    "target": "NODE-POST-FORUM-44",
    "relationType": "AUTHORED_BY",
    "label": "AUTHORED BY",
    "evidenceCount": 1,
    "confidence": 0.85,
    "isContradiction": false,
    "evidenceSnippet": "Public message signed with forum account credentials",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-DREAD-044",
    "source": "NODE-ACC-DREAD",
    "target": "NODE-POST-FORUM-44",
    "relationType": "SUBMITTED_FROM",
    "label": "SUBMITTED FROM",
    "evidenceCount": 1,
    "confidence": 0.88,
    "isContradiction": false,
    "evidenceSnippet": "Originates from authenticated Dread forum account",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-AUTHOR-045",
    "source": "NODE-P001",
    "target": "NODE-POST-FORUM-45",
    "relationType": "AUTHORED_BY",
    "label": "AUTHORED BY",
    "evidenceCount": 1,
    "confidence": 0.85,
    "isContradiction": false,
    "evidenceSnippet": "Public message signed with forum account credentials",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-EXPLOIT-045",
    "source": "NODE-ACC-EXPLOIT",
    "target": "NODE-POST-FORUM-45",
    "relationType": "SUBMITTED_FROM",
    "label": "SUBMITTED FROM",
    "evidenceCount": 1,
    "confidence": 0.87,
    "isContradiction": false,
    "evidenceSnippet": "Originates from verified Exploit forum account",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-AUTHOR-046",
    "source": "NODE-P001",
    "target": "NODE-POST-FORUM-46",
    "relationType": "AUTHORED_BY",
    "label": "AUTHORED BY",
    "evidenceCount": 1,
    "confidence": 0.85,
    "isContradiction": false,
    "evidenceSnippet": "Public message signed with forum account credentials",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-AUTHOR-047",
    "source": "NODE-P001",
    "target": "NODE-POST-FORUM-47",
    "relationType": "AUTHORED_BY",
    "label": "AUTHORED BY",
    "evidenceCount": 1,
    "confidence": 0.85,
    "isContradiction": false,
    "evidenceSnippet": "Public message signed with forum account credentials",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-AUTHOR-048",
    "source": "NODE-P001",
    "target": "NODE-POST-FORUM-48",
    "relationType": "AUTHORED_BY",
    "label": "AUTHORED BY",
    "evidenceCount": 1,
    "confidence": 0.85,
    "isContradiction": false,
    "evidenceSnippet": "Public message signed with forum account credentials",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-DREAD-048",
    "source": "NODE-ACC-DREAD",
    "target": "NODE-POST-FORUM-48",
    "relationType": "SUBMITTED_FROM",
    "label": "SUBMITTED FROM",
    "evidenceCount": 1,
    "confidence": 0.88,
    "isContradiction": false,
    "evidenceSnippet": "Originates from authenticated Dread forum account",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-AUTHOR-049",
    "source": "NODE-P001",
    "target": "NODE-POST-FORUM-49",
    "relationType": "AUTHORED_BY",
    "label": "AUTHORED BY",
    "evidenceCount": 1,
    "confidence": 0.85,
    "isContradiction": false,
    "evidenceSnippet": "Public message signed with forum account credentials",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-AUTHOR-050",
    "source": "NODE-P001",
    "target": "NODE-POST-FORUM-50",
    "relationType": "AUTHORED_BY",
    "label": "AUTHORED BY",
    "evidenceCount": 1,
    "confidence": 0.85,
    "isContradiction": false,
    "evidenceSnippet": "Public message signed with forum account credentials",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-EXPLOIT-050",
    "source": "NODE-ACC-EXPLOIT",
    "target": "NODE-POST-FORUM-50",
    "relationType": "SUBMITTED_FROM",
    "label": "SUBMITTED FROM",
    "evidenceCount": 1,
    "confidence": 0.87,
    "isContradiction": false,
    "evidenceSnippet": "Originates from verified Exploit forum account",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-AUTHOR-051",
    "source": "NODE-P001",
    "target": "NODE-POST-FORUM-51",
    "relationType": "AUTHORED_BY",
    "label": "AUTHORED BY",
    "evidenceCount": 1,
    "confidence": 0.85,
    "isContradiction": false,
    "evidenceSnippet": "Public message signed with forum account credentials",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-AUTHOR-052",
    "source": "NODE-P001",
    "target": "NODE-POST-FORUM-52",
    "relationType": "AUTHORED_BY",
    "label": "AUTHORED BY",
    "evidenceCount": 1,
    "confidence": 0.85,
    "isContradiction": false,
    "evidenceSnippet": "Public message signed with forum account credentials",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-DREAD-052",
    "source": "NODE-ACC-DREAD",
    "target": "NODE-POST-FORUM-52",
    "relationType": "SUBMITTED_FROM",
    "label": "SUBMITTED FROM",
    "evidenceCount": 1,
    "confidence": 0.88,
    "isContradiction": false,
    "evidenceSnippet": "Originates from authenticated Dread forum account",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-AUTHOR-053",
    "source": "NODE-P001",
    "target": "NODE-POST-FORUM-53",
    "relationType": "AUTHORED_BY",
    "label": "AUTHORED BY",
    "evidenceCount": 1,
    "confidence": 0.85,
    "isContradiction": false,
    "evidenceSnippet": "Public message signed with forum account credentials",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-AUTHOR-054",
    "source": "NODE-P001",
    "target": "NODE-POST-FORUM-54",
    "relationType": "AUTHORED_BY",
    "label": "AUTHORED BY",
    "evidenceCount": 1,
    "confidence": 0.85,
    "isContradiction": false,
    "evidenceSnippet": "Public message signed with forum account credentials",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-AUTHOR-055",
    "source": "NODE-P001",
    "target": "NODE-POST-FORUM-55",
    "relationType": "AUTHORED_BY",
    "label": "AUTHORED BY",
    "evidenceCount": 1,
    "confidence": 0.85,
    "isContradiction": false,
    "evidenceSnippet": "Public message signed with forum account credentials",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-EXPLOIT-055",
    "source": "NODE-ACC-EXPLOIT",
    "target": "NODE-POST-FORUM-55",
    "relationType": "SUBMITTED_FROM",
    "label": "SUBMITTED FROM",
    "evidenceCount": 1,
    "confidence": 0.87,
    "isContradiction": false,
    "evidenceSnippet": "Originates from verified Exploit forum account",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PEEL-TX1-001",
    "source": "NODE-WALLET-MAIN",
    "target": "NODE-TX-PEEL-01",
    "relationType": "SPENDS_UTXO",
    "label": "SPENDS UTXO",
    "evidenceCount": 1,
    "confidence": 0.92,
    "isContradiction": false,
    "evidenceSnippet": "UTXO spent as single input in peeling transfer",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PEEL-TX2-001",
    "source": "NODE-TX-PEEL-01",
    "target": "NODE-PEEL-HOP-01",
    "relationType": "PEELING_TRANSFER",
    "label": "PEELING TRANSFER",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Smaller transfer output peel to unhosted intermediate",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PEEL-TX3-001",
    "source": "NODE-TX-PEEL-01",
    "target": "NODE-CHANGE-OUT-01",
    "relationType": "COMMON_CHANGE_OUTPUT",
    "label": "COMMON CHANGE OUTPUT",
    "evidenceCount": 1,
    "confidence": 0.88,
    "isContradiction": false,
    "evidenceSnippet": "Major residual value returned to controlled change address",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PEEL-TX1-002",
    "source": "NODE-PEEL-HOP-01",
    "target": "NODE-TX-PEEL-02",
    "relationType": "SPENDS_UTXO",
    "label": "SPENDS UTXO",
    "evidenceCount": 1,
    "confidence": 0.92,
    "isContradiction": false,
    "evidenceSnippet": "UTXO spent as single input in peeling transfer",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PEEL-TX2-002",
    "source": "NODE-TX-PEEL-02",
    "target": "NODE-PEEL-HOP-02",
    "relationType": "PEELING_TRANSFER",
    "label": "PEELING TRANSFER",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Smaller transfer output peel to unhosted intermediate",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PEEL-TX3-002",
    "source": "NODE-TX-PEEL-02",
    "target": "NODE-CHANGE-OUT-02",
    "relationType": "COMMON_CHANGE_OUTPUT",
    "label": "COMMON CHANGE OUTPUT",
    "evidenceCount": 1,
    "confidence": 0.88,
    "isContradiction": false,
    "evidenceSnippet": "Major residual value returned to controlled change address",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PEEL-TX1-003",
    "source": "NODE-PEEL-HOP-02",
    "target": "NODE-TX-PEEL-03",
    "relationType": "SPENDS_UTXO",
    "label": "SPENDS UTXO",
    "evidenceCount": 1,
    "confidence": 0.92,
    "isContradiction": false,
    "evidenceSnippet": "UTXO spent as single input in peeling transfer",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PEEL-TX2-003",
    "source": "NODE-TX-PEEL-03",
    "target": "NODE-PEEL-HOP-03",
    "relationType": "PEELING_TRANSFER",
    "label": "PEELING TRANSFER",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Smaller transfer output peel to unhosted intermediate",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PEEL-TX3-003",
    "source": "NODE-TX-PEEL-03",
    "target": "NODE-CHANGE-OUT-03",
    "relationType": "COMMON_CHANGE_OUTPUT",
    "label": "COMMON CHANGE OUTPUT",
    "evidenceCount": 1,
    "confidence": 0.88,
    "isContradiction": false,
    "evidenceSnippet": "Major residual value returned to controlled change address",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PEEL-TX1-004",
    "source": "NODE-PEEL-HOP-03",
    "target": "NODE-TX-PEEL-04",
    "relationType": "SPENDS_UTXO",
    "label": "SPENDS UTXO",
    "evidenceCount": 1,
    "confidence": 0.92,
    "isContradiction": false,
    "evidenceSnippet": "UTXO spent as single input in peeling transfer",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PEEL-TX2-004",
    "source": "NODE-TX-PEEL-04",
    "target": "NODE-PEEL-HOP-04",
    "relationType": "PEELING_TRANSFER",
    "label": "PEELING TRANSFER",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Smaller transfer output peel to unhosted intermediate",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PEEL-TX3-004",
    "source": "NODE-TX-PEEL-04",
    "target": "NODE-CHANGE-OUT-04",
    "relationType": "COMMON_CHANGE_OUTPUT",
    "label": "COMMON CHANGE OUTPUT",
    "evidenceCount": 1,
    "confidence": 0.88,
    "isContradiction": false,
    "evidenceSnippet": "Major residual value returned to controlled change address",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PEEL-TX1-005",
    "source": "NODE-PEEL-HOP-04",
    "target": "NODE-TX-PEEL-05",
    "relationType": "SPENDS_UTXO",
    "label": "SPENDS UTXO",
    "evidenceCount": 1,
    "confidence": 0.92,
    "isContradiction": false,
    "evidenceSnippet": "UTXO spent as single input in peeling transfer",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PEEL-TX2-005",
    "source": "NODE-TX-PEEL-05",
    "target": "NODE-PEEL-HOP-05",
    "relationType": "PEELING_TRANSFER",
    "label": "PEELING TRANSFER",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Smaller transfer output peel to unhosted intermediate",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PEEL-TX3-005",
    "source": "NODE-TX-PEEL-05",
    "target": "NODE-CHANGE-OUT-05",
    "relationType": "COMMON_CHANGE_OUTPUT",
    "label": "COMMON CHANGE OUTPUT",
    "evidenceCount": 1,
    "confidence": 0.88,
    "isContradiction": false,
    "evidenceSnippet": "Major residual value returned to controlled change address",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PEEL-TX1-006",
    "source": "NODE-PEEL-HOP-05",
    "target": "NODE-TX-PEEL-06",
    "relationType": "SPENDS_UTXO",
    "label": "SPENDS UTXO",
    "evidenceCount": 1,
    "confidence": 0.92,
    "isContradiction": false,
    "evidenceSnippet": "UTXO spent as single input in peeling transfer",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PEEL-TX2-006",
    "source": "NODE-TX-PEEL-06",
    "target": "NODE-PEEL-HOP-06",
    "relationType": "PEELING_TRANSFER",
    "label": "PEELING TRANSFER",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Smaller transfer output peel to unhosted intermediate",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PEEL-TX3-006",
    "source": "NODE-TX-PEEL-06",
    "target": "NODE-CHANGE-OUT-06",
    "relationType": "COMMON_CHANGE_OUTPUT",
    "label": "COMMON CHANGE OUTPUT",
    "evidenceCount": 1,
    "confidence": 0.88,
    "isContradiction": false,
    "evidenceSnippet": "Major residual value returned to controlled change address",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PEEL-TX1-007",
    "source": "NODE-PEEL-HOP-06",
    "target": "NODE-TX-PEEL-07",
    "relationType": "SPENDS_UTXO",
    "label": "SPENDS UTXO",
    "evidenceCount": 1,
    "confidence": 0.92,
    "isContradiction": false,
    "evidenceSnippet": "UTXO spent as single input in peeling transfer",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PEEL-TX2-007",
    "source": "NODE-TX-PEEL-07",
    "target": "NODE-PEEL-HOP-07",
    "relationType": "PEELING_TRANSFER",
    "label": "PEELING TRANSFER",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Smaller transfer output peel to unhosted intermediate",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PEEL-TX3-007",
    "source": "NODE-TX-PEEL-07",
    "target": "NODE-CHANGE-OUT-07",
    "relationType": "COMMON_CHANGE_OUTPUT",
    "label": "COMMON CHANGE OUTPUT",
    "evidenceCount": 1,
    "confidence": 0.88,
    "isContradiction": false,
    "evidenceSnippet": "Major residual value returned to controlled change address",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PEEL-TX1-008",
    "source": "NODE-PEEL-HOP-07",
    "target": "NODE-TX-PEEL-08",
    "relationType": "SPENDS_UTXO",
    "label": "SPENDS UTXO",
    "evidenceCount": 1,
    "confidence": 0.92,
    "isContradiction": false,
    "evidenceSnippet": "UTXO spent as single input in peeling transfer",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PEEL-TX2-008",
    "source": "NODE-TX-PEEL-08",
    "target": "NODE-PEEL-HOP-08",
    "relationType": "PEELING_TRANSFER",
    "label": "PEELING TRANSFER",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Smaller transfer output peel to unhosted intermediate",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PEEL-TX3-008",
    "source": "NODE-TX-PEEL-08",
    "target": "NODE-CHANGE-OUT-08",
    "relationType": "COMMON_CHANGE_OUTPUT",
    "label": "COMMON CHANGE OUTPUT",
    "evidenceCount": 1,
    "confidence": 0.88,
    "isContradiction": false,
    "evidenceSnippet": "Major residual value returned to controlled change address",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PEEL-TX1-009",
    "source": "NODE-PEEL-HOP-08",
    "target": "NODE-TX-PEEL-09",
    "relationType": "SPENDS_UTXO",
    "label": "SPENDS UTXO",
    "evidenceCount": 1,
    "confidence": 0.92,
    "isContradiction": false,
    "evidenceSnippet": "UTXO spent as single input in peeling transfer",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PEEL-TX2-009",
    "source": "NODE-TX-PEEL-09",
    "target": "NODE-PEEL-HOP-09",
    "relationType": "PEELING_TRANSFER",
    "label": "PEELING TRANSFER",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Smaller transfer output peel to unhosted intermediate",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PEEL-TX3-009",
    "source": "NODE-TX-PEEL-09",
    "target": "NODE-CHANGE-OUT-09",
    "relationType": "COMMON_CHANGE_OUTPUT",
    "label": "COMMON CHANGE OUTPUT",
    "evidenceCount": 1,
    "confidence": 0.88,
    "isContradiction": false,
    "evidenceSnippet": "Major residual value returned to controlled change address",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PEEL-TX1-010",
    "source": "NODE-PEEL-HOP-09",
    "target": "NODE-TX-PEEL-10",
    "relationType": "SPENDS_UTXO",
    "label": "SPENDS UTXO",
    "evidenceCount": 1,
    "confidence": 0.92,
    "isContradiction": false,
    "evidenceSnippet": "UTXO spent as single input in peeling transfer",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PEEL-TX2-010",
    "source": "NODE-TX-PEEL-10",
    "target": "NODE-PEEL-HOP-10",
    "relationType": "PEELING_TRANSFER",
    "label": "PEELING TRANSFER",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Smaller transfer output peel to unhosted intermediate",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PEEL-TX3-010",
    "source": "NODE-TX-PEEL-10",
    "target": "NODE-CHANGE-OUT-10",
    "relationType": "COMMON_CHANGE_OUTPUT",
    "label": "COMMON CHANGE OUTPUT",
    "evidenceCount": 1,
    "confidence": 0.88,
    "isContradiction": false,
    "evidenceSnippet": "Major residual value returned to controlled change address",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PEEL-TX1-011",
    "source": "NODE-PEEL-HOP-10",
    "target": "NODE-TX-PEEL-11",
    "relationType": "SPENDS_UTXO",
    "label": "SPENDS UTXO",
    "evidenceCount": 1,
    "confidence": 0.92,
    "isContradiction": false,
    "evidenceSnippet": "UTXO spent as single input in peeling transfer",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PEEL-TX2-011",
    "source": "NODE-TX-PEEL-11",
    "target": "NODE-PEEL-HOP-11",
    "relationType": "PEELING_TRANSFER",
    "label": "PEELING TRANSFER",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Smaller transfer output peel to unhosted intermediate",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PEEL-TX3-011",
    "source": "NODE-TX-PEEL-11",
    "target": "NODE-CHANGE-OUT-11",
    "relationType": "COMMON_CHANGE_OUTPUT",
    "label": "COMMON CHANGE OUTPUT",
    "evidenceCount": 1,
    "confidence": 0.88,
    "isContradiction": false,
    "evidenceSnippet": "Major residual value returned to controlled change address",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PEEL-TX1-012",
    "source": "NODE-PEEL-HOP-11",
    "target": "NODE-TX-PEEL-12",
    "relationType": "SPENDS_UTXO",
    "label": "SPENDS UTXO",
    "evidenceCount": 1,
    "confidence": 0.92,
    "isContradiction": false,
    "evidenceSnippet": "UTXO spent as single input in peeling transfer",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PEEL-TX2-012",
    "source": "NODE-TX-PEEL-12",
    "target": "NODE-PEEL-HOP-12",
    "relationType": "PEELING_TRANSFER",
    "label": "PEELING TRANSFER",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Smaller transfer output peel to unhosted intermediate",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PEEL-TX3-012",
    "source": "NODE-TX-PEEL-12",
    "target": "NODE-CHANGE-OUT-12",
    "relationType": "COMMON_CHANGE_OUTPUT",
    "label": "COMMON CHANGE OUTPUT",
    "evidenceCount": 1,
    "confidence": 0.88,
    "isContradiction": false,
    "evidenceSnippet": "Major residual value returned to controlled change address",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PEEL-TX1-013",
    "source": "NODE-PEEL-HOP-12",
    "target": "NODE-TX-PEEL-13",
    "relationType": "SPENDS_UTXO",
    "label": "SPENDS UTXO",
    "evidenceCount": 1,
    "confidence": 0.92,
    "isContradiction": false,
    "evidenceSnippet": "UTXO spent as single input in peeling transfer",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PEEL-TX2-013",
    "source": "NODE-TX-PEEL-13",
    "target": "NODE-PEEL-HOP-13",
    "relationType": "PEELING_TRANSFER",
    "label": "PEELING TRANSFER",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Smaller transfer output peel to unhosted intermediate",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PEEL-TX3-013",
    "source": "NODE-TX-PEEL-13",
    "target": "NODE-CHANGE-OUT-13",
    "relationType": "COMMON_CHANGE_OUTPUT",
    "label": "COMMON CHANGE OUTPUT",
    "evidenceCount": 1,
    "confidence": 0.88,
    "isContradiction": false,
    "evidenceSnippet": "Major residual value returned to controlled change address",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PEEL-TX1-014",
    "source": "NODE-PEEL-HOP-13",
    "target": "NODE-TX-PEEL-14",
    "relationType": "SPENDS_UTXO",
    "label": "SPENDS UTXO",
    "evidenceCount": 1,
    "confidence": 0.92,
    "isContradiction": false,
    "evidenceSnippet": "UTXO spent as single input in peeling transfer",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PEEL-TX2-014",
    "source": "NODE-TX-PEEL-14",
    "target": "NODE-PEEL-HOP-14",
    "relationType": "PEELING_TRANSFER",
    "label": "PEELING TRANSFER",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Smaller transfer output peel to unhosted intermediate",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PEEL-TX3-014",
    "source": "NODE-TX-PEEL-14",
    "target": "NODE-CHANGE-OUT-14",
    "relationType": "COMMON_CHANGE_OUTPUT",
    "label": "COMMON CHANGE OUTPUT",
    "evidenceCount": 1,
    "confidence": 0.88,
    "isContradiction": false,
    "evidenceSnippet": "Major residual value returned to controlled change address",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PEEL-TX1-015",
    "source": "NODE-PEEL-HOP-14",
    "target": "NODE-TX-PEEL-15",
    "relationType": "SPENDS_UTXO",
    "label": "SPENDS UTXO",
    "evidenceCount": 1,
    "confidence": 0.92,
    "isContradiction": false,
    "evidenceSnippet": "UTXO spent as single input in peeling transfer",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PEEL-TX2-015",
    "source": "NODE-TX-PEEL-15",
    "target": "NODE-PEEL-HOP-15",
    "relationType": "PEELING_TRANSFER",
    "label": "PEELING TRANSFER",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Smaller transfer output peel to unhosted intermediate",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PEEL-TX3-015",
    "source": "NODE-TX-PEEL-15",
    "target": "NODE-CHANGE-OUT-15",
    "relationType": "COMMON_CHANGE_OUTPUT",
    "label": "COMMON CHANGE OUTPUT",
    "evidenceCount": 1,
    "confidence": 0.88,
    "isContradiction": false,
    "evidenceSnippet": "Major residual value returned to controlled change address",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PEEL-TX1-016",
    "source": "NODE-PEEL-HOP-15",
    "target": "NODE-TX-PEEL-16",
    "relationType": "SPENDS_UTXO",
    "label": "SPENDS UTXO",
    "evidenceCount": 1,
    "confidence": 0.92,
    "isContradiction": false,
    "evidenceSnippet": "UTXO spent as single input in peeling transfer",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PEEL-TX2-016",
    "source": "NODE-TX-PEEL-16",
    "target": "NODE-PEEL-HOP-16",
    "relationType": "PEELING_TRANSFER",
    "label": "PEELING TRANSFER",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Smaller transfer output peel to unhosted intermediate",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PEEL-TX3-016",
    "source": "NODE-TX-PEEL-16",
    "target": "NODE-CHANGE-OUT-16",
    "relationType": "COMMON_CHANGE_OUTPUT",
    "label": "COMMON CHANGE OUTPUT",
    "evidenceCount": 1,
    "confidence": 0.88,
    "isContradiction": false,
    "evidenceSnippet": "Major residual value returned to controlled change address",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PEEL-TX1-017",
    "source": "NODE-PEEL-HOP-16",
    "target": "NODE-TX-PEEL-17",
    "relationType": "SPENDS_UTXO",
    "label": "SPENDS UTXO",
    "evidenceCount": 1,
    "confidence": 0.92,
    "isContradiction": false,
    "evidenceSnippet": "UTXO spent as single input in peeling transfer",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PEEL-TX2-017",
    "source": "NODE-TX-PEEL-17",
    "target": "NODE-PEEL-HOP-17",
    "relationType": "PEELING_TRANSFER",
    "label": "PEELING TRANSFER",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Smaller transfer output peel to unhosted intermediate",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PEEL-TX3-017",
    "source": "NODE-TX-PEEL-17",
    "target": "NODE-CHANGE-OUT-17",
    "relationType": "COMMON_CHANGE_OUTPUT",
    "label": "COMMON CHANGE OUTPUT",
    "evidenceCount": 1,
    "confidence": 0.88,
    "isContradiction": false,
    "evidenceSnippet": "Major residual value returned to controlled change address",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PEEL-TX1-018",
    "source": "NODE-PEEL-HOP-17",
    "target": "NODE-TX-PEEL-18",
    "relationType": "SPENDS_UTXO",
    "label": "SPENDS UTXO",
    "evidenceCount": 1,
    "confidence": 0.92,
    "isContradiction": false,
    "evidenceSnippet": "UTXO spent as single input in peeling transfer",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PEEL-TX2-018",
    "source": "NODE-TX-PEEL-18",
    "target": "NODE-PEEL-HOP-18",
    "relationType": "PEELING_TRANSFER",
    "label": "PEELING TRANSFER",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Smaller transfer output peel to unhosted intermediate",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PEEL-TX3-018",
    "source": "NODE-TX-PEEL-18",
    "target": "NODE-CHANGE-OUT-18",
    "relationType": "COMMON_CHANGE_OUTPUT",
    "label": "COMMON CHANGE OUTPUT",
    "evidenceCount": 1,
    "confidence": 0.88,
    "isContradiction": false,
    "evidenceSnippet": "Major residual value returned to controlled change address",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PEEL-TX1-019",
    "source": "NODE-PEEL-HOP-18",
    "target": "NODE-TX-PEEL-19",
    "relationType": "SPENDS_UTXO",
    "label": "SPENDS UTXO",
    "evidenceCount": 1,
    "confidence": 0.92,
    "isContradiction": false,
    "evidenceSnippet": "UTXO spent as single input in peeling transfer",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PEEL-TX2-019",
    "source": "NODE-TX-PEEL-19",
    "target": "NODE-PEEL-HOP-19",
    "relationType": "PEELING_TRANSFER",
    "label": "PEELING TRANSFER",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Smaller transfer output peel to unhosted intermediate",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PEEL-TX3-019",
    "source": "NODE-TX-PEEL-19",
    "target": "NODE-CHANGE-OUT-19",
    "relationType": "COMMON_CHANGE_OUTPUT",
    "label": "COMMON CHANGE OUTPUT",
    "evidenceCount": 1,
    "confidence": 0.88,
    "isContradiction": false,
    "evidenceSnippet": "Major residual value returned to controlled change address",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PEEL-TX1-020",
    "source": "NODE-PEEL-HOP-19",
    "target": "NODE-TX-PEEL-20",
    "relationType": "SPENDS_UTXO",
    "label": "SPENDS UTXO",
    "evidenceCount": 1,
    "confidence": 0.92,
    "isContradiction": false,
    "evidenceSnippet": "UTXO spent as single input in peeling transfer",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PEEL-TX2-020",
    "source": "NODE-TX-PEEL-20",
    "target": "NODE-PEEL-HOP-20",
    "relationType": "PEELING_TRANSFER",
    "label": "PEELING TRANSFER",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Smaller transfer output peel to unhosted intermediate",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PEEL-TX3-020",
    "source": "NODE-TX-PEEL-20",
    "target": "NODE-CHANGE-OUT-20",
    "relationType": "COMMON_CHANGE_OUTPUT",
    "label": "COMMON CHANGE OUTPUT",
    "evidenceCount": 1,
    "confidence": 0.88,
    "isContradiction": false,
    "evidenceSnippet": "Major residual value returned to controlled change address",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PEEL-TX1-021",
    "source": "NODE-PEEL-HOP-20",
    "target": "NODE-TX-PEEL-21",
    "relationType": "SPENDS_UTXO",
    "label": "SPENDS UTXO",
    "evidenceCount": 1,
    "confidence": 0.92,
    "isContradiction": false,
    "evidenceSnippet": "UTXO spent as single input in peeling transfer",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PEEL-TX2-021",
    "source": "NODE-TX-PEEL-21",
    "target": "NODE-PEEL-HOP-21",
    "relationType": "PEELING_TRANSFER",
    "label": "PEELING TRANSFER",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Smaller transfer output peel to unhosted intermediate",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PEEL-TX3-021",
    "source": "NODE-TX-PEEL-21",
    "target": "NODE-CHANGE-OUT-21",
    "relationType": "COMMON_CHANGE_OUTPUT",
    "label": "COMMON CHANGE OUTPUT",
    "evidenceCount": 1,
    "confidence": 0.88,
    "isContradiction": false,
    "evidenceSnippet": "Major residual value returned to controlled change address",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PEEL-TX1-022",
    "source": "NODE-PEEL-HOP-21",
    "target": "NODE-TX-PEEL-22",
    "relationType": "SPENDS_UTXO",
    "label": "SPENDS UTXO",
    "evidenceCount": 1,
    "confidence": 0.92,
    "isContradiction": false,
    "evidenceSnippet": "UTXO spent as single input in peeling transfer",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PEEL-TX2-022",
    "source": "NODE-TX-PEEL-22",
    "target": "NODE-PEEL-HOP-22",
    "relationType": "PEELING_TRANSFER",
    "label": "PEELING TRANSFER",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Smaller transfer output peel to unhosted intermediate",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PEEL-TX3-022",
    "source": "NODE-TX-PEEL-22",
    "target": "NODE-CHANGE-OUT-22",
    "relationType": "COMMON_CHANGE_OUTPUT",
    "label": "COMMON CHANGE OUTPUT",
    "evidenceCount": 1,
    "confidence": 0.88,
    "isContradiction": false,
    "evidenceSnippet": "Major residual value returned to controlled change address",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-CASH-NODE-CASH-CHIPMIXER",
    "source": "NODE-PEEL-HOP-22",
    "target": "NODE-CASH-CHIPMIXER",
    "relationType": "CASHOUT_ROUTE",
    "label": "CASHOUT ROUTE",
    "evidenceCount": 1,
    "confidence": 0.8,
    "isContradiction": false,
    "evidenceSnippet": "Terminal peeling hop deposited into mixing service",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-CASH-NODE-CASH-SINBAD",
    "source": "NODE-PEEL-HOP-22",
    "target": "NODE-CASH-SINBAD",
    "relationType": "CASHOUT_ROUTE",
    "label": "CASHOUT ROUTE",
    "evidenceCount": 1,
    "confidence": 0.8,
    "isContradiction": false,
    "evidenceSnippet": "Terminal peeling hop deposited into mixing service",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-CASH-NODE-CASH-WASABI",
    "source": "NODE-PEEL-HOP-22",
    "target": "NODE-CASH-WASABI",
    "relationType": "CASHOUT_ROUTE",
    "label": "CASHOUT ROUTE",
    "evidenceCount": 1,
    "confidence": 0.8,
    "isContradiction": false,
    "evidenceSnippet": "Terminal peeling hop deposited into mixing service",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-CASH-NODE-CASH-P2P",
    "source": "NODE-PEEL-HOP-22",
    "target": "NODE-CASH-P2P",
    "relationType": "CASHOUT_ROUTE",
    "label": "CASHOUT ROUTE",
    "evidenceCount": 1,
    "confidence": 0.8,
    "isContradiction": false,
    "evidenceSnippet": "Terminal peeling hop deposited into mixing service",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-TG-BOT-CHAN",
    "source": "NODE-TG-BOT",
    "target": "NODE-TG-CHANNEL",
    "relationType": "BROADCASTS_ON",
    "label": "BROADCASTS ON",
    "evidenceCount": 1,
    "confidence": 0.85,
    "isContradiction": false,
    "evidenceSnippet": "Automated update bot configured as administrator of news channel",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-TG-MSG-001",
    "source": "NODE-TG-BOT",
    "target": "NODE-TG-MSG-01",
    "relationType": "DISPATCHES_MESSAGE",
    "label": "DISPATCHES MESSAGE",
    "evidenceCount": 1,
    "confidence": 0.8,
    "isContradiction": false,
    "evidenceSnippet": "Negotiation ticket dispatched by automated support handle",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-TG-MSG-002",
    "source": "NODE-TG-BOT",
    "target": "NODE-TG-MSG-02",
    "relationType": "DISPATCHES_MESSAGE",
    "label": "DISPATCHES MESSAGE",
    "evidenceCount": 1,
    "confidence": 0.8,
    "isContradiction": false,
    "evidenceSnippet": "Negotiation ticket dispatched by automated support handle",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-TG-MSG-003",
    "source": "NODE-TG-BOT",
    "target": "NODE-TG-MSG-03",
    "relationType": "DISPATCHES_MESSAGE",
    "label": "DISPATCHES MESSAGE",
    "evidenceCount": 1,
    "confidence": 0.8,
    "isContradiction": false,
    "evidenceSnippet": "Negotiation ticket dispatched by automated support handle",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-TG-MSG-004",
    "source": "NODE-TG-BOT",
    "target": "NODE-TG-MSG-04",
    "relationType": "DISPATCHES_MESSAGE",
    "label": "DISPATCHES MESSAGE",
    "evidenceCount": 1,
    "confidence": 0.8,
    "isContradiction": false,
    "evidenceSnippet": "Negotiation ticket dispatched by automated support handle",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-TG-MSG-005",
    "source": "NODE-TG-BOT",
    "target": "NODE-TG-MSG-05",
    "relationType": "DISPATCHES_MESSAGE",
    "label": "DISPATCHES MESSAGE",
    "evidenceCount": 1,
    "confidence": 0.8,
    "isContradiction": false,
    "evidenceSnippet": "Negotiation ticket dispatched by automated support handle",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-TG-MSG-006",
    "source": "NODE-TG-BOT",
    "target": "NODE-TG-MSG-06",
    "relationType": "DISPATCHES_MESSAGE",
    "label": "DISPATCHES MESSAGE",
    "evidenceCount": 1,
    "confidence": 0.8,
    "isContradiction": false,
    "evidenceSnippet": "Negotiation ticket dispatched by automated support handle",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-TG-MSG-007",
    "source": "NODE-TG-BOT",
    "target": "NODE-TG-MSG-07",
    "relationType": "DISPATCHES_MESSAGE",
    "label": "DISPATCHES MESSAGE",
    "evidenceCount": 1,
    "confidence": 0.8,
    "isContradiction": false,
    "evidenceSnippet": "Negotiation ticket dispatched by automated support handle",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-TG-MSG-008",
    "source": "NODE-TG-BOT",
    "target": "NODE-TG-MSG-08",
    "relationType": "DISPATCHES_MESSAGE",
    "label": "DISPATCHES MESSAGE",
    "evidenceCount": 1,
    "confidence": 0.8,
    "isContradiction": false,
    "evidenceSnippet": "Negotiation ticket dispatched by automated support handle",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-TG-MSG-009",
    "source": "NODE-TG-BOT",
    "target": "NODE-TG-MSG-09",
    "relationType": "DISPATCHES_MESSAGE",
    "label": "DISPATCHES MESSAGE",
    "evidenceCount": 1,
    "confidence": 0.8,
    "isContradiction": false,
    "evidenceSnippet": "Negotiation ticket dispatched by automated support handle",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-TG-MSG-010",
    "source": "NODE-TG-BOT",
    "target": "NODE-TG-MSG-10",
    "relationType": "DISPATCHES_MESSAGE",
    "label": "DISPATCHES MESSAGE",
    "evidenceCount": 1,
    "confidence": 0.8,
    "isContradiction": false,
    "evidenceSnippet": "Negotiation ticket dispatched by automated support handle",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-TG-MSG-011",
    "source": "NODE-TG-BOT",
    "target": "NODE-TG-MSG-11",
    "relationType": "DISPATCHES_MESSAGE",
    "label": "DISPATCHES MESSAGE",
    "evidenceCount": 1,
    "confidence": 0.8,
    "isContradiction": false,
    "evidenceSnippet": "Negotiation ticket dispatched by automated support handle",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-TG-MSG-012",
    "source": "NODE-TG-BOT",
    "target": "NODE-TG-MSG-12",
    "relationType": "DISPATCHES_MESSAGE",
    "label": "DISPATCHES MESSAGE",
    "evidenceCount": 1,
    "confidence": 0.8,
    "isContradiction": false,
    "evidenceSnippet": "Negotiation ticket dispatched by automated support handle",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-TG-MSG-013",
    "source": "NODE-TG-BOT",
    "target": "NODE-TG-MSG-13",
    "relationType": "DISPATCHES_MESSAGE",
    "label": "DISPATCHES MESSAGE",
    "evidenceCount": 1,
    "confidence": 0.8,
    "isContradiction": false,
    "evidenceSnippet": "Negotiation ticket dispatched by automated support handle",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-TG-MSG-014",
    "source": "NODE-TG-BOT",
    "target": "NODE-TG-MSG-14",
    "relationType": "DISPATCHES_MESSAGE",
    "label": "DISPATCHES MESSAGE",
    "evidenceCount": 1,
    "confidence": 0.8,
    "isContradiction": false,
    "evidenceSnippet": "Negotiation ticket dispatched by automated support handle",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-TG-MSG-015",
    "source": "NODE-TG-BOT",
    "target": "NODE-TG-MSG-15",
    "relationType": "DISPATCHES_MESSAGE",
    "label": "DISPATCHES MESSAGE",
    "evidenceCount": 1,
    "confidence": 0.8,
    "isContradiction": false,
    "evidenceSnippet": "Negotiation ticket dispatched by automated support handle",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-TG-MSG-016",
    "source": "NODE-TG-BOT",
    "target": "NODE-TG-MSG-16",
    "relationType": "DISPATCHES_MESSAGE",
    "label": "DISPATCHES MESSAGE",
    "evidenceCount": 1,
    "confidence": 0.8,
    "isContradiction": false,
    "evidenceSnippet": "Negotiation ticket dispatched by automated support handle",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-TG-MSG-017",
    "source": "NODE-TG-BOT",
    "target": "NODE-TG-MSG-17",
    "relationType": "DISPATCHES_MESSAGE",
    "label": "DISPATCHES MESSAGE",
    "evidenceCount": 1,
    "confidence": 0.8,
    "isContradiction": false,
    "evidenceSnippet": "Negotiation ticket dispatched by automated support handle",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-TG-MSG-018",
    "source": "NODE-TG-BOT",
    "target": "NODE-TG-MSG-18",
    "relationType": "DISPATCHES_MESSAGE",
    "label": "DISPATCHES MESSAGE",
    "evidenceCount": 1,
    "confidence": 0.8,
    "isContradiction": false,
    "evidenceSnippet": "Negotiation ticket dispatched by automated support handle",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-TG-MSG-019",
    "source": "NODE-TG-BOT",
    "target": "NODE-TG-MSG-19",
    "relationType": "DISPATCHES_MESSAGE",
    "label": "DISPATCHES MESSAGE",
    "evidenceCount": 1,
    "confidence": 0.8,
    "isContradiction": false,
    "evidenceSnippet": "Negotiation ticket dispatched by automated support handle",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-TG-MSG-020",
    "source": "NODE-TG-BOT",
    "target": "NODE-TG-MSG-20",
    "relationType": "DISPATCHES_MESSAGE",
    "label": "DISPATCHES MESSAGE",
    "evidenceCount": 1,
    "confidence": 0.8,
    "isContradiction": false,
    "evidenceSnippet": "Negotiation ticket dispatched by automated support handle",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-TG-MSG-021",
    "source": "NODE-TG-BOT",
    "target": "NODE-TG-MSG-21",
    "relationType": "DISPATCHES_MESSAGE",
    "label": "DISPATCHES MESSAGE",
    "evidenceCount": 1,
    "confidence": 0.8,
    "isContradiction": false,
    "evidenceSnippet": "Negotiation ticket dispatched by automated support handle",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-TG-MSG-022",
    "source": "NODE-TG-BOT",
    "target": "NODE-TG-MSG-22",
    "relationType": "DISPATCHES_MESSAGE",
    "label": "DISPATCHES MESSAGE",
    "evidenceCount": 1,
    "confidence": 0.8,
    "isContradiction": false,
    "evidenceSnippet": "Negotiation ticket dispatched by automated support handle",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-TG-MSG-023",
    "source": "NODE-TG-BOT",
    "target": "NODE-TG-MSG-23",
    "relationType": "DISPATCHES_MESSAGE",
    "label": "DISPATCHES MESSAGE",
    "evidenceCount": 1,
    "confidence": 0.8,
    "isContradiction": false,
    "evidenceSnippet": "Negotiation ticket dispatched by automated support handle",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-TG-MSG-024",
    "source": "NODE-TG-BOT",
    "target": "NODE-TG-MSG-24",
    "relationType": "DISPATCHES_MESSAGE",
    "label": "DISPATCHES MESSAGE",
    "evidenceCount": 1,
    "confidence": 0.8,
    "isContradiction": false,
    "evidenceSnippet": "Negotiation ticket dispatched by automated support handle",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-TG-MSG-025",
    "source": "NODE-TG-BOT",
    "target": "NODE-TG-MSG-25",
    "relationType": "DISPATCHES_MESSAGE",
    "label": "DISPATCHES MESSAGE",
    "evidenceCount": 1,
    "confidence": 0.8,
    "isContradiction": false,
    "evidenceSnippet": "Negotiation ticket dispatched by automated support handle",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-TG-MSG-026",
    "source": "NODE-TG-BOT",
    "target": "NODE-TG-MSG-26",
    "relationType": "DISPATCHES_MESSAGE",
    "label": "DISPATCHES MESSAGE",
    "evidenceCount": 1,
    "confidence": 0.8,
    "isContradiction": false,
    "evidenceSnippet": "Negotiation ticket dispatched by automated support handle",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-TG-MSG-027",
    "source": "NODE-TG-BOT",
    "target": "NODE-TG-MSG-27",
    "relationType": "DISPATCHES_MESSAGE",
    "label": "DISPATCHES MESSAGE",
    "evidenceCount": 1,
    "confidence": 0.8,
    "isContradiction": false,
    "evidenceSnippet": "Negotiation ticket dispatched by automated support handle",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-TG-MSG-028",
    "source": "NODE-TG-BOT",
    "target": "NODE-TG-MSG-28",
    "relationType": "DISPATCHES_MESSAGE",
    "label": "DISPATCHES MESSAGE",
    "evidenceCount": 1,
    "confidence": 0.8,
    "isContradiction": false,
    "evidenceSnippet": "Negotiation ticket dispatched by automated support handle",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-TG-MSG-029",
    "source": "NODE-TG-BOT",
    "target": "NODE-TG-MSG-29",
    "relationType": "DISPATCHES_MESSAGE",
    "label": "DISPATCHES MESSAGE",
    "evidenceCount": 1,
    "confidence": 0.8,
    "isContradiction": false,
    "evidenceSnippet": "Negotiation ticket dispatched by automated support handle",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-TG-MSG-030",
    "source": "NODE-TG-BOT",
    "target": "NODE-TG-MSG-30",
    "relationType": "DISPATCHES_MESSAGE",
    "label": "DISPATCHES MESSAGE",
    "evidenceCount": 1,
    "confidence": 0.8,
    "isContradiction": false,
    "evidenceSnippet": "Negotiation ticket dispatched by automated support handle",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-DOC-NODE-ALIBI-LOG1",
    "source": "NODE-ALIBI-CUSTODY",
    "target": "NODE-ALIBI-LOG1",
    "relationType": "VERIFIES_DETENTION",
    "label": "VERIFIES DETENTION",
    "evidenceCount": 1,
    "confidence": 0.99,
    "isContradiction": false,
    "evidenceSnippet": "Official legal remand document verifying physical detention",
    "evidenceIds": [
      "EVD-0006"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-DOC-NODE-ALIBI-LOG2",
    "source": "NODE-ALIBI-CUSTODY",
    "target": "NODE-ALIBI-LOG2",
    "relationType": "VERIFIES_DETENTION",
    "label": "VERIFIES DETENTION",
    "evidenceCount": 1,
    "confidence": 0.99,
    "isContradiction": false,
    "evidenceSnippet": "Official legal remand document verifying physical detention",
    "evidenceIds": [
      "EVD-0006"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-DOC-NODE-ALIBI-LOG3",
    "source": "NODE-ALIBI-CUSTODY",
    "target": "NODE-ALIBI-LOG3",
    "relationType": "VERIFIES_DETENTION",
    "label": "VERIFIES DETENTION",
    "evidenceCount": 1,
    "confidence": 0.99,
    "isContradiction": false,
    "evidenceSnippet": "Official legal remand document verifying physical detention",
    "evidenceIds": [
      "EVD-0006"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-ALIBI-01",
    "source": "NODE-P003",
    "target": "NODE-ALIBI-CUSTODY",
    "relationType": "PHYSICAL_CUSTODY_ALIBI",
    "label": "PHYSICAL CUSTODY ALIBI",
    "evidenceCount": 1,
    "confidence": 1.0,
    "isContradiction": false,
    "evidenceSnippet": "Subject K-Vortex in law enforcement remand facility during cyber incident",
    "evidenceIds": [
      "EVD-0006"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-CONFLICT-01",
    "source": "NODE-P001",
    "target": "NODE-CONFLICT-POST",
    "relationType": "AUTHORED_DURING_DETENTION",
    "label": "AUTHORED DURING DETENTION",
    "evidenceCount": 1,
    "confidence": 0.95,
    "isContradiction": false,
    "evidenceSnippet": "Live interactive forum thread authored while candidate was detained",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-CONTRA-ALIBI",
    "source": "NODE-P001",
    "target": "NODE-P003",
    "relationType": "DISPUTED_CONTRADICTION",
    "label": "DISPUTED CONTRADICTION",
    "evidenceCount": 2,
    "confidence": 0.2,
    "isContradiction": true,
    "contradiction_ids": [
      "CONTRA-001"
    ],
    "evidenceSnippet": "SEVERE CONTRADICTION: K-Vortex physical detention contradicts concurrent NightStalker cyber operation",
    "evidenceIds": [
      "EVD-0002",
      "EVD-0006"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-BRIDGE-FIN-01",
    "source": "NODE-WALLET-MAIN",
    "target": "NODE-WALLET-DEP",
    "relationType": "TRANSACTED_PEELING_FUNDS",
    "label": "TRANSACTED PEELING FUNDS",
    "evidenceCount": 2,
    "confidence": 0.98,
    "isContradiction": false,
    "evidenceSnippet": "Direct 14.85 BTC peel chain transaction between vault and market escrow",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-BRIDGE-FIN-02",
    "source": "NODE-P002",
    "target": "NODE-WALLET-DEP",
    "relationType": "CONTROLS_MARKET_WALLET",
    "label": "CONTROLS MARKET WALLET",
    "evidenceCount": 1,
    "confidence": 0.92,
    "isContradiction": false,
    "evidenceSnippet": "Deposit address registered to HydraShadow vendor profile",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-BRIDGE-FIN-03",
    "source": "NODE-P001",
    "target": "NODE-WALLET-MAIN",
    "relationType": "CONTROLS_RANSOM_VAULT",
    "label": "CONTROLS RANSOM VAULT",
    "evidenceCount": 2,
    "confidence": 0.96,
    "isContradiction": false,
    "evidenceSnippet": "Ransom address published on darkriver7x leak portal",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-BRIDGE-INFRA-01",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-CERT-01",
    "relationType": "PRESENTS_CERTIFICATE",
    "label": "PRESENTS CERTIFICATE",
    "evidenceCount": 1,
    "confidence": 0.98,
    "isContradiction": false,
    "evidenceSnippet": "Internal self-signed TLS cert leaked via misconfigured reverse proxy",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-BRIDGE-INFRA-02",
    "source": "NODE-VPS-01",
    "target": "NODE-CERT-01",
    "relationType": "HOSTS_CERTIFICATE",
    "label": "HOSTS CERTIFICATE",
    "evidenceCount": 1,
    "confidence": 0.98,
    "isContradiction": false,
    "evidenceSnippet": "Exact SHA-256 fingerprint certificate served on port 8443 of clearnet VPS",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-BRIDGE-INFRA-03",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-VPS-01",
    "relationType": "CO_LOCATED_INFRA",
    "label": "CO-LOCATED INFRASTRUCTURE",
    "evidenceCount": 2,
    "confidence": 0.96,
    "isContradiction": false,
    "evidenceSnippet": "Dual-homed backend server running Tor onion daemon and clearnet reverse proxy",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-BRIDGE-SSH-01",
    "source": "NODE-VPS-01",
    "target": "NODE-SSH-01",
    "relationType": "PRESENTS_HOSTKEY",
    "label": "PRESENTS HOSTKEY",
    "evidenceCount": 1,
    "confidence": 0.95,
    "isContradiction": false,
    "evidenceSnippet": "OpenSSH 8.9p1 ECDSA hostkey fingerprint observed on port 2222",
    "evidenceIds": [
      "EVD-0002"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-BRIDGE-SSH-02",
    "source": "NODE-VPS-02",
    "target": "NODE-SSH-01",
    "relationType": "PRESENTS_HOSTKEY",
    "label": "PRESENTS HOSTKEY",
    "evidenceCount": 1,
    "confidence": 0.92,
    "isContradiction": false,
    "evidenceSnippet": "Identical ECDSA hostkey fingerprint observed on Swedish staging VPS",
    "evidenceIds": [
      "EVD-0002"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-BRIDGE-SSH-03",
    "source": "NODE-VPS-01",
    "target": "NODE-VPS-02",
    "relationType": "SHARED_HOSTKEY_INFRA",
    "label": "SHARED HOSTKEY INFRASTRUCTURE",
    "evidenceCount": 2,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "Cluster of VPS nodes configured with identical deployment ansible scripts",
    "evidenceIds": [
      "EVD-0002"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-BRIDGE-PGP-01",
    "source": "NODE-P001",
    "target": "NODE-PGP-MASTER",
    "relationType": "CONTROLS_PRIVATE_KEY",
    "label": "CONTROLS PRIVATE KEY",
    "evidenceCount": 2,
    "confidence": 0.98,
    "isContradiction": false,
    "evidenceSnippet": "Master PGP signature attached to all major extortion releases",
    "evidenceIds": [
      "EVD-0005"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-BRIDGE-PGP-02",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-PGP-MASTER",
    "relationType": "PUBLISHES_DECLARATION",
    "label": "PUBLISHES DECLARATION",
    "evidenceCount": 1,
    "confidence": 0.95,
    "isContradiction": false,
    "evidenceSnippet": "Tor v3 leak site header embeds master PGP public key ASCII block",
    "evidenceIds": [
      "EVD-0005"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-BRIDGE-STYLO-01",
    "source": "NODE-P001",
    "target": "NODE-P002",
    "relationType": "STYLISTIC_ALIGNMENT",
    "label": "STYLISTIC ALIGNMENT (84%)",
    "evidenceCount": 1,
    "confidence": 0.78,
    "isContradiction": false,
    "evidenceSnippet": "Function word overlap and punctuation entropy consistent across both handles",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "MEDIUM"
  },
  {
    "id": "EDGE-BRIDGE-TG-01",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-TG-BOT",
    "relationType": "OPERATES_SUPPORT_BOT",
    "label": "OPERATES SUPPORT BOT",
    "evidenceCount": 1,
    "confidence": 0.88,
    "isContradiction": false,
    "evidenceSnippet": "Tor site contact page directs victims to @nightriver_support_bot",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PGP-NODE-PGP-SUB1",
    "source": "NODE-PGP-MASTER",
    "target": "NODE-PGP-SUB1",
    "relationType": "SIGNING_SUBKEY",
    "label": "SIGNING SUBKEY",
    "evidenceCount": 1,
    "confidence": 0.99,
    "isContradiction": false,
    "evidenceSnippet": "Subkey bind verified by master self-signature NODE-PGP-SUB1",
    "evidenceIds": [
      "EVD-0005"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PGP-NODE-PGP-SUB2",
    "source": "NODE-PGP-MASTER",
    "target": "NODE-PGP-SUB2",
    "relationType": "ENCRYPTION_SUBKEY",
    "label": "ENCRYPTION SUBKEY",
    "evidenceCount": 1,
    "confidence": 0.99,
    "isContradiction": false,
    "evidenceSnippet": "Subkey bind verified by master self-signature NODE-PGP-SUB2",
    "evidenceIds": [
      "EVD-0005"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-PGP-NODE-PGP-SUB3",
    "source": "NODE-PGP-MASTER",
    "target": "NODE-PGP-SUB3",
    "relationType": "AUTH_SUBKEY",
    "label": "AUTH SUBKEY",
    "evidenceCount": 1,
    "confidence": 0.99,
    "isContradiction": false,
    "evidenceSnippet": "Subkey bind verified by master self-signature NODE-PGP-SUB3",
    "evidenceIds": [
      "EVD-0005"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-COMM-NODE-COMM-SESSION",
    "source": "NODE-P001",
    "target": "NODE-COMM-SESSION",
    "relationType": "USES_COMM_HANDLE",
    "label": "USES COMM HANDLE",
    "evidenceCount": 1,
    "confidence": 0.91,
    "isContradiction": false,
    "evidenceSnippet": "Handle listed on private Dread forum profile and paste dump",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-COMM-NODE-COMM-TOX",
    "source": "NODE-P001",
    "target": "NODE-COMM-TOX",
    "relationType": "USES_COMM_HANDLE",
    "label": "USES COMM HANDLE",
    "evidenceCount": 1,
    "confidence": 0.91,
    "isContradiction": false,
    "evidenceSnippet": "Handle listed on private Dread forum profile and paste dump",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-COMM-NODE-COMM-JABBER",
    "source": "NODE-P001",
    "target": "NODE-COMM-JABBER",
    "relationType": "USES_COMM_HANDLE",
    "label": "USES COMM HANDLE",
    "evidenceCount": 1,
    "confidence": 0.91,
    "isContradiction": false,
    "evidenceSnippet": "Handle listed on private Dread forum profile and paste dump",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-COMM-NODE-COMM-MATRIX",
    "source": "NODE-P001",
    "target": "NODE-COMM-MATRIX",
    "relationType": "USES_COMM_HANDLE",
    "label": "USES COMM HANDLE",
    "evidenceCount": 1,
    "confidence": 0.91,
    "isContradiction": false,
    "evidenceSnippet": "Handle listed on private Dread forum profile and paste dump",
    "evidenceIds": [
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-FAV-01",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-FAV-01",
    "relationType": "SHARES_FAVICON_HASH",
    "label": "SHARES FAVICON HASH",
    "evidenceCount": 1,
    "confidence": 0.97,
    "isContradiction": false,
    "evidenceSnippet": "MurmurHash3 (-120938472) matches portal header icon",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-FAV-02",
    "source": "NODE-ONION-MIRROR1",
    "target": "NODE-FAV-01",
    "relationType": "SHARES_FAVICON_HASH",
    "label": "SHARES FAVICON HASH",
    "evidenceCount": 1,
    "confidence": 0.97,
    "isContradiction": false,
    "evidenceSnippet": "MurmurHash3 (-120938472) matches mirror portal icon",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-FAV-03",
    "source": "NODE-ONION-MIRROR2",
    "target": "NODE-FAV-02",
    "relationType": "SHARES_FAVICON_HASH",
    "label": "SHARES FAVICON HASH",
    "evidenceCount": 1,
    "confidence": 0.95,
    "isContradiction": false,
    "evidenceSnippet": "MurmurHash3 (184710294) matches backup portal icon",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-ONION-PAYMENT",
    "source": "NODE-ONION-MAIN",
    "target": "NODE-WALLET-MAIN",
    "relationType": "DISPLAYS_RANSOM_WALLET",
    "label": "DISPLAYS RANSOM WALLET",
    "evidenceCount": 2,
    "confidence": 0.99,
    "isContradiction": false,
    "evidenceSnippet": "Onion extortion blog explicitly specifies ransom deposit address",
    "evidenceIds": [
      "EVD-0001",
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-ONION-DROP-PAYMENT",
    "source": "NODE-ONION-DROP",
    "target": "NODE-WALLET-DEP",
    "relationType": "ESCROW_PAYMENT_WALLET",
    "label": "ESCROW PAYMENT WALLET",
    "evidenceCount": 1,
    "confidence": 0.94,
    "isContradiction": false,
    "evidenceSnippet": "Escrow drop site redirects payments to market wallet",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-VPS-ROUTE-01",
    "source": "NODE-VPS-05",
    "target": "NODE-VPS-01",
    "relationType": "PROXIES_BACKEND",
    "label": "PROXIES BACKEND",
    "evidenceCount": 1,
    "confidence": 0.93,
    "isContradiction": false,
    "evidenceSnippet": "Internal iptables routing rules forward traffic from proxy to backend VPS",
    "evidenceIds": [
      "EVD-0002"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-VPS-ROUTE-02",
    "source": "NODE-VPS-06",
    "target": "NODE-VPS-02",
    "relationType": "PROXIES_INGRESS",
    "label": "PROXIES INGRESS",
    "evidenceCount": 1,
    "confidence": 0.91,
    "isContradiction": false,
    "evidenceSnippet": "HAProxy ingress relay points to secondary staging VPS",
    "evidenceIds": [
      "EVD-0002"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-VPS-SSH-03",
    "source": "NODE-VPS-03",
    "target": "NODE-SSH-02",
    "relationType": "PRESENTS_HOSTKEY",
    "label": "PRESENTS HOSTKEY",
    "evidenceCount": 1,
    "confidence": 0.94,
    "isContradiction": false,
    "evidenceSnippet": "OpenSSH 9.1 hostkey presents identical signature across Swiss VPS",
    "evidenceIds": [
      "EVD-0002"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-VPS-SSH-04",
    "source": "NODE-VPS-04",
    "target": "NODE-SSH-03",
    "relationType": "PRESENTS_HOSTKEY",
    "label": "PRESENTS HOSTKEY",
    "evidenceCount": 1,
    "confidence": 0.9,
    "isContradiction": false,
    "evidenceSnippet": "OpenSSH 8.2p1 hostkey fingerprint observed on Romanian relay",
    "evidenceIds": [
      "EVD-0002"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-REF-001",
    "source": "NODE-POST-FORUM-01",
    "target": "NODE-ITEM-LEAK-01",
    "relationType": "REFERENCES_LEAK_FILE",
    "label": "REFERENCES LEAK FILE",
    "evidenceCount": 1,
    "confidence": 0.86,
    "isContradiction": false,
    "evidenceSnippet": "Forum negotiation thread provides decrypt proof for NODE-ITEM-LEAK-01",
    "evidenceIds": [
      "EVD-0001",
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-REF-002",
    "source": "NODE-POST-FORUM-02",
    "target": "NODE-ITEM-LEAK-02",
    "relationType": "REFERENCES_LEAK_FILE",
    "label": "REFERENCES LEAK FILE",
    "evidenceCount": 1,
    "confidence": 0.86,
    "isContradiction": false,
    "evidenceSnippet": "Forum negotiation thread provides decrypt proof for NODE-ITEM-LEAK-02",
    "evidenceIds": [
      "EVD-0001",
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-REF-003",
    "source": "NODE-POST-FORUM-03",
    "target": "NODE-ITEM-LEAK-03",
    "relationType": "REFERENCES_LEAK_FILE",
    "label": "REFERENCES LEAK FILE",
    "evidenceCount": 1,
    "confidence": 0.86,
    "isContradiction": false,
    "evidenceSnippet": "Forum negotiation thread provides decrypt proof for NODE-ITEM-LEAK-03",
    "evidenceIds": [
      "EVD-0001",
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-REF-004",
    "source": "NODE-POST-FORUM-04",
    "target": "NODE-ITEM-LEAK-04",
    "relationType": "REFERENCES_LEAK_FILE",
    "label": "REFERENCES LEAK FILE",
    "evidenceCount": 1,
    "confidence": 0.86,
    "isContradiction": false,
    "evidenceSnippet": "Forum negotiation thread provides decrypt proof for NODE-ITEM-LEAK-04",
    "evidenceIds": [
      "EVD-0001",
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-REF-005",
    "source": "NODE-POST-FORUM-05",
    "target": "NODE-ITEM-LEAK-05",
    "relationType": "REFERENCES_LEAK_FILE",
    "label": "REFERENCES LEAK FILE",
    "evidenceCount": 1,
    "confidence": 0.86,
    "isContradiction": false,
    "evidenceSnippet": "Forum negotiation thread provides decrypt proof for NODE-ITEM-LEAK-05",
    "evidenceIds": [
      "EVD-0001",
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-REF-006",
    "source": "NODE-POST-FORUM-06",
    "target": "NODE-ITEM-LEAK-06",
    "relationType": "REFERENCES_LEAK_FILE",
    "label": "REFERENCES LEAK FILE",
    "evidenceCount": 1,
    "confidence": 0.86,
    "isContradiction": false,
    "evidenceSnippet": "Forum negotiation thread provides decrypt proof for NODE-ITEM-LEAK-06",
    "evidenceIds": [
      "EVD-0001",
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-REF-007",
    "source": "NODE-POST-FORUM-07",
    "target": "NODE-ITEM-LEAK-07",
    "relationType": "REFERENCES_LEAK_FILE",
    "label": "REFERENCES LEAK FILE",
    "evidenceCount": 1,
    "confidence": 0.86,
    "isContradiction": false,
    "evidenceSnippet": "Forum negotiation thread provides decrypt proof for NODE-ITEM-LEAK-07",
    "evidenceIds": [
      "EVD-0001",
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-REF-008",
    "source": "NODE-POST-FORUM-08",
    "target": "NODE-ITEM-LEAK-08",
    "relationType": "REFERENCES_LEAK_FILE",
    "label": "REFERENCES LEAK FILE",
    "evidenceCount": 1,
    "confidence": 0.86,
    "isContradiction": false,
    "evidenceSnippet": "Forum negotiation thread provides decrypt proof for NODE-ITEM-LEAK-08",
    "evidenceIds": [
      "EVD-0001",
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-REF-009",
    "source": "NODE-POST-FORUM-09",
    "target": "NODE-ITEM-LEAK-09",
    "relationType": "REFERENCES_LEAK_FILE",
    "label": "REFERENCES LEAK FILE",
    "evidenceCount": 1,
    "confidence": 0.86,
    "isContradiction": false,
    "evidenceSnippet": "Forum negotiation thread provides decrypt proof for NODE-ITEM-LEAK-09",
    "evidenceIds": [
      "EVD-0001",
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-REF-010",
    "source": "NODE-POST-FORUM-10",
    "target": "NODE-ITEM-LEAK-10",
    "relationType": "REFERENCES_LEAK_FILE",
    "label": "REFERENCES LEAK FILE",
    "evidenceCount": 1,
    "confidence": 0.86,
    "isContradiction": false,
    "evidenceSnippet": "Forum negotiation thread provides decrypt proof for NODE-ITEM-LEAK-10",
    "evidenceIds": [
      "EVD-0001",
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-REF-011",
    "source": "NODE-POST-FORUM-11",
    "target": "NODE-ITEM-LEAK-11",
    "relationType": "REFERENCES_LEAK_FILE",
    "label": "REFERENCES LEAK FILE",
    "evidenceCount": 1,
    "confidence": 0.86,
    "isContradiction": false,
    "evidenceSnippet": "Forum negotiation thread provides decrypt proof for NODE-ITEM-LEAK-11",
    "evidenceIds": [
      "EVD-0001",
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-REF-012",
    "source": "NODE-POST-FORUM-12",
    "target": "NODE-ITEM-LEAK-12",
    "relationType": "REFERENCES_LEAK_FILE",
    "label": "REFERENCES LEAK FILE",
    "evidenceCount": 1,
    "confidence": 0.86,
    "isContradiction": false,
    "evidenceSnippet": "Forum negotiation thread provides decrypt proof for NODE-ITEM-LEAK-12",
    "evidenceIds": [
      "EVD-0001",
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-REF-013",
    "source": "NODE-POST-FORUM-13",
    "target": "NODE-ITEM-LEAK-13",
    "relationType": "REFERENCES_LEAK_FILE",
    "label": "REFERENCES LEAK FILE",
    "evidenceCount": 1,
    "confidence": 0.86,
    "isContradiction": false,
    "evidenceSnippet": "Forum negotiation thread provides decrypt proof for NODE-ITEM-LEAK-13",
    "evidenceIds": [
      "EVD-0001",
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-REF-014",
    "source": "NODE-POST-FORUM-14",
    "target": "NODE-ITEM-LEAK-14",
    "relationType": "REFERENCES_LEAK_FILE",
    "label": "REFERENCES LEAK FILE",
    "evidenceCount": 1,
    "confidence": 0.86,
    "isContradiction": false,
    "evidenceSnippet": "Forum negotiation thread provides decrypt proof for NODE-ITEM-LEAK-14",
    "evidenceIds": [
      "EVD-0001",
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-REF-015",
    "source": "NODE-POST-FORUM-15",
    "target": "NODE-ITEM-LEAK-15",
    "relationType": "REFERENCES_LEAK_FILE",
    "label": "REFERENCES LEAK FILE",
    "evidenceCount": 1,
    "confidence": 0.86,
    "isContradiction": false,
    "evidenceSnippet": "Forum negotiation thread provides decrypt proof for NODE-ITEM-LEAK-15",
    "evidenceIds": [
      "EVD-0001",
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-REF-016",
    "source": "NODE-POST-FORUM-16",
    "target": "NODE-ITEM-LEAK-16",
    "relationType": "REFERENCES_LEAK_FILE",
    "label": "REFERENCES LEAK FILE",
    "evidenceCount": 1,
    "confidence": 0.86,
    "isContradiction": false,
    "evidenceSnippet": "Forum negotiation thread provides decrypt proof for NODE-ITEM-LEAK-16",
    "evidenceIds": [
      "EVD-0001",
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-REF-017",
    "source": "NODE-POST-FORUM-17",
    "target": "NODE-ITEM-LEAK-17",
    "relationType": "REFERENCES_LEAK_FILE",
    "label": "REFERENCES LEAK FILE",
    "evidenceCount": 1,
    "confidence": 0.86,
    "isContradiction": false,
    "evidenceSnippet": "Forum negotiation thread provides decrypt proof for NODE-ITEM-LEAK-17",
    "evidenceIds": [
      "EVD-0001",
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-REF-018",
    "source": "NODE-POST-FORUM-18",
    "target": "NODE-ITEM-LEAK-18",
    "relationType": "REFERENCES_LEAK_FILE",
    "label": "REFERENCES LEAK FILE",
    "evidenceCount": 1,
    "confidence": 0.86,
    "isContradiction": false,
    "evidenceSnippet": "Forum negotiation thread provides decrypt proof for NODE-ITEM-LEAK-18",
    "evidenceIds": [
      "EVD-0001",
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-REF-019",
    "source": "NODE-POST-FORUM-19",
    "target": "NODE-ITEM-LEAK-19",
    "relationType": "REFERENCES_LEAK_FILE",
    "label": "REFERENCES LEAK FILE",
    "evidenceCount": 1,
    "confidence": 0.86,
    "isContradiction": false,
    "evidenceSnippet": "Forum negotiation thread provides decrypt proof for NODE-ITEM-LEAK-19",
    "evidenceIds": [
      "EVD-0001",
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-REF-020",
    "source": "NODE-POST-FORUM-20",
    "target": "NODE-ITEM-LEAK-20",
    "relationType": "REFERENCES_LEAK_FILE",
    "label": "REFERENCES LEAK FILE",
    "evidenceCount": 1,
    "confidence": 0.86,
    "isContradiction": false,
    "evidenceSnippet": "Forum negotiation thread provides decrypt proof for NODE-ITEM-LEAK-20",
    "evidenceIds": [
      "EVD-0001",
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-REF-021",
    "source": "NODE-POST-FORUM-21",
    "target": "NODE-ITEM-LEAK-21",
    "relationType": "REFERENCES_LEAK_FILE",
    "label": "REFERENCES LEAK FILE",
    "evidenceCount": 1,
    "confidence": 0.86,
    "isContradiction": false,
    "evidenceSnippet": "Forum negotiation thread provides decrypt proof for NODE-ITEM-LEAK-21",
    "evidenceIds": [
      "EVD-0001",
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-REF-022",
    "source": "NODE-POST-FORUM-22",
    "target": "NODE-ITEM-LEAK-22",
    "relationType": "REFERENCES_LEAK_FILE",
    "label": "REFERENCES LEAK FILE",
    "evidenceCount": 1,
    "confidence": 0.86,
    "isContradiction": false,
    "evidenceSnippet": "Forum negotiation thread provides decrypt proof for NODE-ITEM-LEAK-22",
    "evidenceIds": [
      "EVD-0001",
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-REF-023",
    "source": "NODE-POST-FORUM-23",
    "target": "NODE-ITEM-LEAK-23",
    "relationType": "REFERENCES_LEAK_FILE",
    "label": "REFERENCES LEAK FILE",
    "evidenceCount": 1,
    "confidence": 0.86,
    "isContradiction": false,
    "evidenceSnippet": "Forum negotiation thread provides decrypt proof for NODE-ITEM-LEAK-23",
    "evidenceIds": [
      "EVD-0001",
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-REF-024",
    "source": "NODE-POST-FORUM-24",
    "target": "NODE-ITEM-LEAK-24",
    "relationType": "REFERENCES_LEAK_FILE",
    "label": "REFERENCES LEAK FILE",
    "evidenceCount": 1,
    "confidence": 0.86,
    "isContradiction": false,
    "evidenceSnippet": "Forum negotiation thread provides decrypt proof for NODE-ITEM-LEAK-24",
    "evidenceIds": [
      "EVD-0001",
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-REF-025",
    "source": "NODE-POST-FORUM-25",
    "target": "NODE-ITEM-LEAK-25",
    "relationType": "REFERENCES_LEAK_FILE",
    "label": "REFERENCES LEAK FILE",
    "evidenceCount": 1,
    "confidence": 0.86,
    "isContradiction": false,
    "evidenceSnippet": "Forum negotiation thread provides decrypt proof for NODE-ITEM-LEAK-25",
    "evidenceIds": [
      "EVD-0001",
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-REF-026",
    "source": "NODE-POST-FORUM-26",
    "target": "NODE-ITEM-LEAK-26",
    "relationType": "REFERENCES_LEAK_FILE",
    "label": "REFERENCES LEAK FILE",
    "evidenceCount": 1,
    "confidence": 0.86,
    "isContradiction": false,
    "evidenceSnippet": "Forum negotiation thread provides decrypt proof for NODE-ITEM-LEAK-26",
    "evidenceIds": [
      "EVD-0001",
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-REF-027",
    "source": "NODE-POST-FORUM-27",
    "target": "NODE-ITEM-LEAK-27",
    "relationType": "REFERENCES_LEAK_FILE",
    "label": "REFERENCES LEAK FILE",
    "evidenceCount": 1,
    "confidence": 0.86,
    "isContradiction": false,
    "evidenceSnippet": "Forum negotiation thread provides decrypt proof for NODE-ITEM-LEAK-27",
    "evidenceIds": [
      "EVD-0001",
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-REF-028",
    "source": "NODE-POST-FORUM-28",
    "target": "NODE-ITEM-LEAK-28",
    "relationType": "REFERENCES_LEAK_FILE",
    "label": "REFERENCES LEAK FILE",
    "evidenceCount": 1,
    "confidence": 0.86,
    "isContradiction": false,
    "evidenceSnippet": "Forum negotiation thread provides decrypt proof for NODE-ITEM-LEAK-28",
    "evidenceIds": [
      "EVD-0001",
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-REF-029",
    "source": "NODE-POST-FORUM-29",
    "target": "NODE-ITEM-LEAK-29",
    "relationType": "REFERENCES_LEAK_FILE",
    "label": "REFERENCES LEAK FILE",
    "evidenceCount": 1,
    "confidence": 0.86,
    "isContradiction": false,
    "evidenceSnippet": "Forum negotiation thread provides decrypt proof for NODE-ITEM-LEAK-29",
    "evidenceIds": [
      "EVD-0001",
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-REF-030",
    "source": "NODE-POST-FORUM-30",
    "target": "NODE-ITEM-LEAK-30",
    "relationType": "REFERENCES_LEAK_FILE",
    "label": "REFERENCES LEAK FILE",
    "evidenceCount": 1,
    "confidence": 0.86,
    "isContradiction": false,
    "evidenceSnippet": "Forum negotiation thread provides decrypt proof for NODE-ITEM-LEAK-30",
    "evidenceIds": [
      "EVD-0001",
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-REF-031",
    "source": "NODE-POST-FORUM-31",
    "target": "NODE-ITEM-LEAK-31",
    "relationType": "REFERENCES_LEAK_FILE",
    "label": "REFERENCES LEAK FILE",
    "evidenceCount": 1,
    "confidence": 0.86,
    "isContradiction": false,
    "evidenceSnippet": "Forum negotiation thread provides decrypt proof for NODE-ITEM-LEAK-31",
    "evidenceIds": [
      "EVD-0001",
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-REF-032",
    "source": "NODE-POST-FORUM-32",
    "target": "NODE-ITEM-LEAK-32",
    "relationType": "REFERENCES_LEAK_FILE",
    "label": "REFERENCES LEAK FILE",
    "evidenceCount": 1,
    "confidence": 0.86,
    "isContradiction": false,
    "evidenceSnippet": "Forum negotiation thread provides decrypt proof for NODE-ITEM-LEAK-32",
    "evidenceIds": [
      "EVD-0001",
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-REF-033",
    "source": "NODE-POST-FORUM-33",
    "target": "NODE-ITEM-LEAK-33",
    "relationType": "REFERENCES_LEAK_FILE",
    "label": "REFERENCES LEAK FILE",
    "evidenceCount": 1,
    "confidence": 0.86,
    "isContradiction": false,
    "evidenceSnippet": "Forum negotiation thread provides decrypt proof for NODE-ITEM-LEAK-33",
    "evidenceIds": [
      "EVD-0001",
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-REF-034",
    "source": "NODE-POST-FORUM-34",
    "target": "NODE-ITEM-LEAK-34",
    "relationType": "REFERENCES_LEAK_FILE",
    "label": "REFERENCES LEAK FILE",
    "evidenceCount": 1,
    "confidence": 0.86,
    "isContradiction": false,
    "evidenceSnippet": "Forum negotiation thread provides decrypt proof for NODE-ITEM-LEAK-34",
    "evidenceIds": [
      "EVD-0001",
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-REF-035",
    "source": "NODE-POST-FORUM-35",
    "target": "NODE-ITEM-LEAK-35",
    "relationType": "REFERENCES_LEAK_FILE",
    "label": "REFERENCES LEAK FILE",
    "evidenceCount": 1,
    "confidence": 0.86,
    "isContradiction": false,
    "evidenceSnippet": "Forum negotiation thread provides decrypt proof for NODE-ITEM-LEAK-35",
    "evidenceIds": [
      "EVD-0001",
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-REF-036",
    "source": "NODE-POST-FORUM-36",
    "target": "NODE-ITEM-LEAK-36",
    "relationType": "REFERENCES_LEAK_FILE",
    "label": "REFERENCES LEAK FILE",
    "evidenceCount": 1,
    "confidence": 0.86,
    "isContradiction": false,
    "evidenceSnippet": "Forum negotiation thread provides decrypt proof for NODE-ITEM-LEAK-36",
    "evidenceIds": [
      "EVD-0001",
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-REF-037",
    "source": "NODE-POST-FORUM-37",
    "target": "NODE-ITEM-LEAK-37",
    "relationType": "REFERENCES_LEAK_FILE",
    "label": "REFERENCES LEAK FILE",
    "evidenceCount": 1,
    "confidence": 0.86,
    "isContradiction": false,
    "evidenceSnippet": "Forum negotiation thread provides decrypt proof for NODE-ITEM-LEAK-37",
    "evidenceIds": [
      "EVD-0001",
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-REF-038",
    "source": "NODE-POST-FORUM-38",
    "target": "NODE-ITEM-LEAK-38",
    "relationType": "REFERENCES_LEAK_FILE",
    "label": "REFERENCES LEAK FILE",
    "evidenceCount": 1,
    "confidence": 0.86,
    "isContradiction": false,
    "evidenceSnippet": "Forum negotiation thread provides decrypt proof for NODE-ITEM-LEAK-38",
    "evidenceIds": [
      "EVD-0001",
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-REF-039",
    "source": "NODE-POST-FORUM-39",
    "target": "NODE-ITEM-LEAK-39",
    "relationType": "REFERENCES_LEAK_FILE",
    "label": "REFERENCES LEAK FILE",
    "evidenceCount": 1,
    "confidence": 0.86,
    "isContradiction": false,
    "evidenceSnippet": "Forum negotiation thread provides decrypt proof for NODE-ITEM-LEAK-39",
    "evidenceIds": [
      "EVD-0001",
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-REF-040",
    "source": "NODE-POST-FORUM-40",
    "target": "NODE-ITEM-LEAK-40",
    "relationType": "REFERENCES_LEAK_FILE",
    "label": "REFERENCES LEAK FILE",
    "evidenceCount": 1,
    "confidence": 0.86,
    "isContradiction": false,
    "evidenceSnippet": "Forum negotiation thread provides decrypt proof for NODE-ITEM-LEAK-40",
    "evidenceIds": [
      "EVD-0001",
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-REF-041",
    "source": "NODE-POST-FORUM-41",
    "target": "NODE-ITEM-LEAK-41",
    "relationType": "REFERENCES_LEAK_FILE",
    "label": "REFERENCES LEAK FILE",
    "evidenceCount": 1,
    "confidence": 0.86,
    "isContradiction": false,
    "evidenceSnippet": "Forum negotiation thread provides decrypt proof for NODE-ITEM-LEAK-41",
    "evidenceIds": [
      "EVD-0001",
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-REF-042",
    "source": "NODE-POST-FORUM-42",
    "target": "NODE-ITEM-LEAK-42",
    "relationType": "REFERENCES_LEAK_FILE",
    "label": "REFERENCES LEAK FILE",
    "evidenceCount": 1,
    "confidence": 0.86,
    "isContradiction": false,
    "evidenceSnippet": "Forum negotiation thread provides decrypt proof for NODE-ITEM-LEAK-42",
    "evidenceIds": [
      "EVD-0001",
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-REF-043",
    "source": "NODE-POST-FORUM-43",
    "target": "NODE-ITEM-LEAK-43",
    "relationType": "REFERENCES_LEAK_FILE",
    "label": "REFERENCES LEAK FILE",
    "evidenceCount": 1,
    "confidence": 0.86,
    "isContradiction": false,
    "evidenceSnippet": "Forum negotiation thread provides decrypt proof for NODE-ITEM-LEAK-43",
    "evidenceIds": [
      "EVD-0001",
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-REF-044",
    "source": "NODE-POST-FORUM-44",
    "target": "NODE-ITEM-LEAK-44",
    "relationType": "REFERENCES_LEAK_FILE",
    "label": "REFERENCES LEAK FILE",
    "evidenceCount": 1,
    "confidence": 0.86,
    "isContradiction": false,
    "evidenceSnippet": "Forum negotiation thread provides decrypt proof for NODE-ITEM-LEAK-44",
    "evidenceIds": [
      "EVD-0001",
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-POST-REF-045",
    "source": "NODE-POST-FORUM-45",
    "target": "NODE-ITEM-LEAK-45",
    "relationType": "REFERENCES_LEAK_FILE",
    "label": "REFERENCES LEAK FILE",
    "evidenceCount": 1,
    "confidence": 0.86,
    "isContradiction": false,
    "evidenceSnippet": "Forum negotiation thread provides decrypt proof for NODE-ITEM-LEAK-45",
    "evidenceIds": [
      "EVD-0001",
      "EVD-0004"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-TG-REF-001",
    "source": "NODE-TG-MSG-01",
    "target": "NODE-ONION-DROP",
    "relationType": "DISPATCHES_MIRROR_LINK",
    "label": "DISPATCHES MIRROR LINK",
    "evidenceCount": 1,
    "confidence": 0.84,
    "isContradiction": false,
    "evidenceSnippet": "Automated victim chat instructs connection via NODE-ONION-DROP",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-TG-REF-002",
    "source": "NODE-TG-MSG-02",
    "target": "NODE-ONION-MIRROR1",
    "relationType": "DISPATCHES_MIRROR_LINK",
    "label": "DISPATCHES MIRROR LINK",
    "evidenceCount": 1,
    "confidence": 0.84,
    "isContradiction": false,
    "evidenceSnippet": "Automated victim chat instructs connection via NODE-ONION-MIRROR1",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-TG-REF-003",
    "source": "NODE-TG-MSG-03",
    "target": "NODE-ONION-DROP",
    "relationType": "DISPATCHES_MIRROR_LINK",
    "label": "DISPATCHES MIRROR LINK",
    "evidenceCount": 1,
    "confidence": 0.84,
    "isContradiction": false,
    "evidenceSnippet": "Automated victim chat instructs connection via NODE-ONION-DROP",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-TG-REF-004",
    "source": "NODE-TG-MSG-04",
    "target": "NODE-ONION-MIRROR1",
    "relationType": "DISPATCHES_MIRROR_LINK",
    "label": "DISPATCHES MIRROR LINK",
    "evidenceCount": 1,
    "confidence": 0.84,
    "isContradiction": false,
    "evidenceSnippet": "Automated victim chat instructs connection via NODE-ONION-MIRROR1",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-TG-REF-005",
    "source": "NODE-TG-MSG-05",
    "target": "NODE-ONION-DROP",
    "relationType": "DISPATCHES_MIRROR_LINK",
    "label": "DISPATCHES MIRROR LINK",
    "evidenceCount": 1,
    "confidence": 0.84,
    "isContradiction": false,
    "evidenceSnippet": "Automated victim chat instructs connection via NODE-ONION-DROP",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-TG-REF-006",
    "source": "NODE-TG-MSG-06",
    "target": "NODE-ONION-MIRROR1",
    "relationType": "DISPATCHES_MIRROR_LINK",
    "label": "DISPATCHES MIRROR LINK",
    "evidenceCount": 1,
    "confidence": 0.84,
    "isContradiction": false,
    "evidenceSnippet": "Automated victim chat instructs connection via NODE-ONION-MIRROR1",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-TG-REF-007",
    "source": "NODE-TG-MSG-07",
    "target": "NODE-ONION-DROP",
    "relationType": "DISPATCHES_MIRROR_LINK",
    "label": "DISPATCHES MIRROR LINK",
    "evidenceCount": 1,
    "confidence": 0.84,
    "isContradiction": false,
    "evidenceSnippet": "Automated victim chat instructs connection via NODE-ONION-DROP",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-TG-REF-008",
    "source": "NODE-TG-MSG-08",
    "target": "NODE-ONION-MIRROR1",
    "relationType": "DISPATCHES_MIRROR_LINK",
    "label": "DISPATCHES MIRROR LINK",
    "evidenceCount": 1,
    "confidence": 0.84,
    "isContradiction": false,
    "evidenceSnippet": "Automated victim chat instructs connection via NODE-ONION-MIRROR1",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-TG-REF-009",
    "source": "NODE-TG-MSG-09",
    "target": "NODE-ONION-DROP",
    "relationType": "DISPATCHES_MIRROR_LINK",
    "label": "DISPATCHES MIRROR LINK",
    "evidenceCount": 1,
    "confidence": 0.84,
    "isContradiction": false,
    "evidenceSnippet": "Automated victim chat instructs connection via NODE-ONION-DROP",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-TG-REF-010",
    "source": "NODE-TG-MSG-10",
    "target": "NODE-ONION-MIRROR1",
    "relationType": "DISPATCHES_MIRROR_LINK",
    "label": "DISPATCHES MIRROR LINK",
    "evidenceCount": 1,
    "confidence": 0.84,
    "isContradiction": false,
    "evidenceSnippet": "Automated victim chat instructs connection via NODE-ONION-MIRROR1",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-TG-REF-011",
    "source": "NODE-TG-MSG-11",
    "target": "NODE-ONION-DROP",
    "relationType": "DISPATCHES_MIRROR_LINK",
    "label": "DISPATCHES MIRROR LINK",
    "evidenceCount": 1,
    "confidence": 0.84,
    "isContradiction": false,
    "evidenceSnippet": "Automated victim chat instructs connection via NODE-ONION-DROP",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-TG-REF-012",
    "source": "NODE-TG-MSG-12",
    "target": "NODE-ONION-MIRROR1",
    "relationType": "DISPATCHES_MIRROR_LINK",
    "label": "DISPATCHES MIRROR LINK",
    "evidenceCount": 1,
    "confidence": 0.84,
    "isContradiction": false,
    "evidenceSnippet": "Automated victim chat instructs connection via NODE-ONION-MIRROR1",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-TG-REF-013",
    "source": "NODE-TG-MSG-13",
    "target": "NODE-ONION-DROP",
    "relationType": "DISPATCHES_MIRROR_LINK",
    "label": "DISPATCHES MIRROR LINK",
    "evidenceCount": 1,
    "confidence": 0.84,
    "isContradiction": false,
    "evidenceSnippet": "Automated victim chat instructs connection via NODE-ONION-DROP",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-TG-REF-014",
    "source": "NODE-TG-MSG-14",
    "target": "NODE-ONION-MIRROR1",
    "relationType": "DISPATCHES_MIRROR_LINK",
    "label": "DISPATCHES MIRROR LINK",
    "evidenceCount": 1,
    "confidence": 0.84,
    "isContradiction": false,
    "evidenceSnippet": "Automated victim chat instructs connection via NODE-ONION-MIRROR1",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-TG-REF-015",
    "source": "NODE-TG-MSG-15",
    "target": "NODE-ONION-DROP",
    "relationType": "DISPATCHES_MIRROR_LINK",
    "label": "DISPATCHES MIRROR LINK",
    "evidenceCount": 1,
    "confidence": 0.84,
    "isContradiction": false,
    "evidenceSnippet": "Automated victim chat instructs connection via NODE-ONION-DROP",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-TG-REF-016",
    "source": "NODE-TG-MSG-16",
    "target": "NODE-ONION-MIRROR1",
    "relationType": "DISPATCHES_MIRROR_LINK",
    "label": "DISPATCHES MIRROR LINK",
    "evidenceCount": 1,
    "confidence": 0.84,
    "isContradiction": false,
    "evidenceSnippet": "Automated victim chat instructs connection via NODE-ONION-MIRROR1",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-TG-REF-017",
    "source": "NODE-TG-MSG-17",
    "target": "NODE-ONION-DROP",
    "relationType": "DISPATCHES_MIRROR_LINK",
    "label": "DISPATCHES MIRROR LINK",
    "evidenceCount": 1,
    "confidence": 0.84,
    "isContradiction": false,
    "evidenceSnippet": "Automated victim chat instructs connection via NODE-ONION-DROP",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-TG-REF-018",
    "source": "NODE-TG-MSG-18",
    "target": "NODE-ONION-MIRROR1",
    "relationType": "DISPATCHES_MIRROR_LINK",
    "label": "DISPATCHES MIRROR LINK",
    "evidenceCount": 1,
    "confidence": 0.84,
    "isContradiction": false,
    "evidenceSnippet": "Automated victim chat instructs connection via NODE-ONION-MIRROR1",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-TG-REF-019",
    "source": "NODE-TG-MSG-19",
    "target": "NODE-ONION-DROP",
    "relationType": "DISPATCHES_MIRROR_LINK",
    "label": "DISPATCHES MIRROR LINK",
    "evidenceCount": 1,
    "confidence": 0.84,
    "isContradiction": false,
    "evidenceSnippet": "Automated victim chat instructs connection via NODE-ONION-DROP",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-TG-REF-020",
    "source": "NODE-TG-MSG-20",
    "target": "NODE-ONION-MIRROR1",
    "relationType": "DISPATCHES_MIRROR_LINK",
    "label": "DISPATCHES MIRROR LINK",
    "evidenceCount": 1,
    "confidence": 0.84,
    "isContradiction": false,
    "evidenceSnippet": "Automated victim chat instructs connection via NODE-ONION-MIRROR1",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-TG-REF-021",
    "source": "NODE-TG-MSG-21",
    "target": "NODE-ONION-DROP",
    "relationType": "DISPATCHES_MIRROR_LINK",
    "label": "DISPATCHES MIRROR LINK",
    "evidenceCount": 1,
    "confidence": 0.84,
    "isContradiction": false,
    "evidenceSnippet": "Automated victim chat instructs connection via NODE-ONION-DROP",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-TG-REF-022",
    "source": "NODE-TG-MSG-22",
    "target": "NODE-ONION-MIRROR1",
    "relationType": "DISPATCHES_MIRROR_LINK",
    "label": "DISPATCHES MIRROR LINK",
    "evidenceCount": 1,
    "confidence": 0.84,
    "isContradiction": false,
    "evidenceSnippet": "Automated victim chat instructs connection via NODE-ONION-MIRROR1",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-TG-REF-023",
    "source": "NODE-TG-MSG-23",
    "target": "NODE-ONION-DROP",
    "relationType": "DISPATCHES_MIRROR_LINK",
    "label": "DISPATCHES MIRROR LINK",
    "evidenceCount": 1,
    "confidence": 0.84,
    "isContradiction": false,
    "evidenceSnippet": "Automated victim chat instructs connection via NODE-ONION-DROP",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-TG-REF-024",
    "source": "NODE-TG-MSG-24",
    "target": "NODE-ONION-MIRROR1",
    "relationType": "DISPATCHES_MIRROR_LINK",
    "label": "DISPATCHES MIRROR LINK",
    "evidenceCount": 1,
    "confidence": 0.84,
    "isContradiction": false,
    "evidenceSnippet": "Automated victim chat instructs connection via NODE-ONION-MIRROR1",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-TG-REF-025",
    "source": "NODE-TG-MSG-25",
    "target": "NODE-ONION-DROP",
    "relationType": "DISPATCHES_MIRROR_LINK",
    "label": "DISPATCHES MIRROR LINK",
    "evidenceCount": 1,
    "confidence": 0.84,
    "isContradiction": false,
    "evidenceSnippet": "Automated victim chat instructs connection via NODE-ONION-DROP",
    "evidenceIds": [
      "EVD-0001"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-CONSOLIDATE-002",
    "source": "NODE-PEEL-HOP-02",
    "target": "NODE-CHANGE-OUT-01",
    "relationType": "CONSOLIDATES_CHANGE",
    "label": "CONSOLIDATES CHANGE",
    "evidenceCount": 1,
    "confidence": 0.87,
    "isContradiction": false,
    "evidenceSnippet": "Multi-input transaction recombines peel change address into cluster",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-CONSOLIDATE-004",
    "source": "NODE-PEEL-HOP-04",
    "target": "NODE-CHANGE-OUT-03",
    "relationType": "CONSOLIDATES_CHANGE",
    "label": "CONSOLIDATES CHANGE",
    "evidenceCount": 1,
    "confidence": 0.87,
    "isContradiction": false,
    "evidenceSnippet": "Multi-input transaction recombines peel change address into cluster",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-CONSOLIDATE-006",
    "source": "NODE-PEEL-HOP-06",
    "target": "NODE-CHANGE-OUT-05",
    "relationType": "CONSOLIDATES_CHANGE",
    "label": "CONSOLIDATES CHANGE",
    "evidenceCount": 1,
    "confidence": 0.87,
    "isContradiction": false,
    "evidenceSnippet": "Multi-input transaction recombines peel change address into cluster",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-CONSOLIDATE-008",
    "source": "NODE-PEEL-HOP-08",
    "target": "NODE-CHANGE-OUT-07",
    "relationType": "CONSOLIDATES_CHANGE",
    "label": "CONSOLIDATES CHANGE",
    "evidenceCount": 1,
    "confidence": 0.87,
    "isContradiction": false,
    "evidenceSnippet": "Multi-input transaction recombines peel change address into cluster",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-CONSOLIDATE-010",
    "source": "NODE-PEEL-HOP-10",
    "target": "NODE-CHANGE-OUT-09",
    "relationType": "CONSOLIDATES_CHANGE",
    "label": "CONSOLIDATES CHANGE",
    "evidenceCount": 1,
    "confidence": 0.87,
    "isContradiction": false,
    "evidenceSnippet": "Multi-input transaction recombines peel change address into cluster",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-CONSOLIDATE-012",
    "source": "NODE-PEEL-HOP-12",
    "target": "NODE-CHANGE-OUT-11",
    "relationType": "CONSOLIDATES_CHANGE",
    "label": "CONSOLIDATES CHANGE",
    "evidenceCount": 1,
    "confidence": 0.87,
    "isContradiction": false,
    "evidenceSnippet": "Multi-input transaction recombines peel change address into cluster",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-CONSOLIDATE-014",
    "source": "NODE-PEEL-HOP-14",
    "target": "NODE-CHANGE-OUT-13",
    "relationType": "CONSOLIDATES_CHANGE",
    "label": "CONSOLIDATES CHANGE",
    "evidenceCount": 1,
    "confidence": 0.87,
    "isContradiction": false,
    "evidenceSnippet": "Multi-input transaction recombines peel change address into cluster",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-CONSOLIDATE-016",
    "source": "NODE-PEEL-HOP-16",
    "target": "NODE-CHANGE-OUT-15",
    "relationType": "CONSOLIDATES_CHANGE",
    "label": "CONSOLIDATES CHANGE",
    "evidenceCount": 1,
    "confidence": 0.87,
    "isContradiction": false,
    "evidenceSnippet": "Multi-input transaction recombines peel change address into cluster",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-CONSOLIDATE-018",
    "source": "NODE-PEEL-HOP-18",
    "target": "NODE-CHANGE-OUT-17",
    "relationType": "CONSOLIDATES_CHANGE",
    "label": "CONSOLIDATES CHANGE",
    "evidenceCount": 1,
    "confidence": 0.87,
    "isContradiction": false,
    "evidenceSnippet": "Multi-input transaction recombines peel change address into cluster",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  },
  {
    "id": "EDGE-CONSOLIDATE-020",
    "source": "NODE-PEEL-HOP-20",
    "target": "NODE-CHANGE-OUT-19",
    "relationType": "CONSOLIDATES_CHANGE",
    "label": "CONSOLIDATES CHANGE",
    "evidenceCount": 1,
    "confidence": 0.87,
    "isContradiction": false,
    "evidenceSnippet": "Multi-input transaction recombines peel change address into cluster",
    "evidenceIds": [
      "EVD-0003"
    ],
    "sourceReliability": "HIGH"
  }
];

export const MOCK_TIMELINE: TimelineEvent[] = [
  {
    id: 'time-1',
    date: '2026-07-12',
    formattedDate: '12 JUL 2026',
    title: 'Successor Alias Introduced & PGP Subkey Endorsed',
    description: 'NightRiver registers initial marketplace thread. EV-26151-014 captures PGP transition packet endorsed by NightHarbor master key 7AC419F2.',
    category: 'alias',
    entity: 'NightHarbor · NightRiver',
    linkedEvidenceId: 'EV-26151-014'
  },
  {
    id: 'time-2',
    date: '2026-07-18',
    formattedDate: '18 JUL 2026',
    title: 'Cross-Layer Infrastructure SAN Overlap Recorded',
    description: 'CITE engine captures Let\'s Encrypt certificate EV-26151-021 demonstrating simultaneous SAN for harbor-sync.is and river-sync-node.is on 185.220.101.44.',
    category: 'infra',
    entity: 'srv-03 · 185.220.101.44',
    linkedEvidenceId: 'EV-26151-021'
  },
  {
    id: 'time-3',
    date: '2026-08-03',
    formattedDate: '03 AUG 2026',
    title: 'PTRW Stylometric Multi-Feature Comparison',
    description: 'Writeprint analysis generates 84.2% function-word correlation between NightHarbor legacy corpus and NightRiver replies. Short-text disclaimer flagged.',
    category: 'write',
    entity: 'NightHarbor · NightRiver',
    linkedEvidenceId: 'EV-26151-032'
  },
  {
    id: 'time-4',
    date: '2026-08-08',
    formattedDate: '08 AUG 2026',
    title: 'Direct Bitcoin Peel Chain Transfer Executed',
    description: 'EV-26151-038 logs 14.85 BTC transferred directly from NightHarbor splitter wallet into NightRiver deposit address without mixer round.',
    category: 'wallet',
    entity: 'bc1q9u...4zx → bc1qxy...h2p',
    linkedEvidenceId: 'EV-26151-038'
  },
  {
    id: 'time-5',
    date: '2026-08-21',
    formattedDate: '21 AUG 2026',
    title: 'Contradiction Flagged: Simultaneous Session Collision',
    description: 'EV-26151-041 identifies active authenticated sessions simultaneously recorded from AS58224 (Iran) and AS206216 (Bulgaria), conflicting with clean single-actor migration.',
    category: 'conflict',
    entity: 'Contradiction Monitor',
    linkedEvidenceId: 'EV-26151-041',
    isContradiction: true
  },
  {
    id: 'time-6',
    date: '2026-08-24',
    formattedDate: '24 AUG 2026',
    title: 'ED25519 SSH Host Key Continuity Confirmed',
    description: 'Port 22 SSH host key fingerprint EV-26151-042 confirms persistent operational server environment behind the onion routing endpoints.',
    category: 'infra',
    entity: 'srv-03 Gateway',
    linkedEvidenceId: 'EV-26151-042'
  },
  {
    id: 'time-7',
    date: '2026-08-25',
    formattedDate: '25 AUG 2026',
    title: 'Fusion Score Evaluated: Investigative Lead Status Retained',
    description: 'Evidence fusion calculates ACS = 78.4%. Contradiction penalty prevents corroborated status; analyst review mandated before any prosecutorial export.',
    category: 'hypothesis',
    entity: 'UN-VEIL Fusion Engine',
    linkedEvidenceId: 'EV-26151-041'
  }
];

export const MOCK_AGENT_TASKS: AgentTask[] = [
  {
    id: 'TASK-01',
    taskName: 'Correlate OpenPGP Keyring Against Case Corpus',
    toolUsed: 'UNVEIL-PGP-ROUTER',
    status: 'COMPLETED',
    timestamp: '14:10:02 UTC',
    evidenceGatheredCount: 1,
    summary: 'Extracted key packet EV-26151-014. Cryptographically confirmed subkey B910C24A was signed by master key 7AC419F2.'
  },
  {
    id: 'TASK-02',
    taskName: 'Triangulate Tor V3 Endpoints to Origin IP Subnets',
    toolUsed: 'CITE-INFRA-SCANNER',
    status: 'COMPLETED',
    timestamp: '14:22:45 UTC',
    evidenceGatheredCount: 3,
    summary: 'Queried historical certificates and Apache mod_status leak. Mapped harbor77...onion and river99...onion to VPS 185.220.101.44.'
  },
  {
    id: 'TASK-03',
    taskName: 'Inspect Blockchain Peel Chains for Direct Value Flow',
    toolUsed: 'BTI-LEDGER-WALK',
    status: 'COMPLETED',
    timestamp: '14:38:19 UTC',
    evidenceGatheredCount: 1,
    summary: 'Tracked Tx 8f9b204c. Identified 14.85 BTC unmixed transfer between suspected persona wallets.'
  },
  {
    id: 'TASK-04',
    taskName: 'Execute Paraphrase-Robust Stylometric Writeprint Match',
    toolUsed: 'PTRW-NLP-EMBEDDING',
    status: 'COMPLETED',
    timestamp: '15:02:11 UTC',
    evidenceGatheredCount: 1,
    summary: 'Evaluated lexical diversity and function-word frequencies across 14,200 tokens. Returned 84.2% overlap. Short-text guardrail active.'
  },
  {
    id: 'TASK-05',
    taskName: 'Audit Temporal Session Log Continuity & Anomaly Scan',
    toolUsed: 'TEMPORAL-COLLISION-CHECK',
    status: 'COMPLETED',
    timestamp: '15:15:40 UTC',
    evidenceGatheredCount: 1,
    summary: 'DETECTED CONTRADICTION: Flagged simultaneous active sessions on 2026-08-21 03:12 UTC across disparate geographical ASNs.',
    evidenceGap: 'Unresolved gap: Need independent access logs to verify whether session was an automated keepalive script or secondary human operator.'
  },
  {
    id: 'TASK-06',
    taskName: 'Synthesize Cross-Layer Evidence & Formulate Gap Statement',
    toolUsed: 'INVESTIGATION-ORCHESTRATOR',
    status: 'COMPLETED',
    timestamp: '15:40:00 UTC',
    evidenceGatheredCount: 7,
    summary: 'Formulated current posture: INVESTIGATIVE LEAD (ACS 78.4). Agentic read-only stopping criteria satisfied. Handoff to human analyst.',
    evidenceGap: 'Pending Analyst Action: Issue subpoena or mutual legal assistance request for AS206216 upstream netflow before attribution determination.'
  }
];

export const MOCK_ACTIVITY_FEED: ActivityFeedItem[] = [
  {
    id: 'ACT-901',
    timestamp: '2026-08-25 15:40:00 UTC',
    relativeTime: '12 min ago',
    actorHandle: 'NightRiver',
    type: 'CONTRADICTION_FLAG',
    summary: 'Temporal audit verified simultaneous session conflict EV-26151-041. Fusion score adjusted to 78.4%.',
    badgeText: 'CONTRADICTION',
    badgeTone: 'red'
  },
  {
    id: 'ACT-902',
    timestamp: '2026-08-25 14:38:19 UTC',
    relativeTime: '1 hr ago',
    actorHandle: 'NightHarbor',
    type: 'BLOCKCHAIN_TRACE',
    summary: 'BTI engine confirmed direct 14.85 BTC peel chain hop to NightRiver ingress vault #2.',
    badgeText: 'BTI LEDGER',
    badgeTone: 'amber'
  },
  {
    id: 'ACT-903',
    timestamp: '2026-08-25 14:22:45 UTC',
    relativeTime: '2 hrs ago',
    actorHandle: 'srv-03.harbor-sync',
    type: 'INFRASTRUCTURE_SCAN',
    summary: 'CITE scanner re-verified ED25519 SSH host key continuity on Bulgarian hosting relay 185.220.101.44.',
    badgeText: 'CITE INFRA',
    badgeTone: 'cyan'
  },
  {
    id: 'ACT-904',
    timestamp: '2026-08-25 11:15:00 UTC',
    relativeTime: '4 hrs ago',
    actorHandle: 'NightRiver',
    type: 'STYLOMETRY_RUN',
    summary: 'PTRW model processed 4 new forum message tokens. Semantic writeprint residual consistent with prior profile.',
    badgeText: 'PTRW NLP',
    badgeTone: 'purple'
  },
  {
    id: 'ACT-905',
    timestamp: '2026-08-25 09:30:11 UTC',
    relativeTime: '6 hrs ago',
    actorHandle: 'harbor77...onion',
    type: 'EVIDENCE_INGEST',
    summary: 'Tor descriptor keepalive EV-26151-045 ingested into S3/MinIO evidence vault with SHA-256 validation.',
    badgeText: 'WARC HASHED',
    badgeTone: 'emerald'
  }
];

export const MOCK_TRACKERS: TrackerRecord[] = [
  {
    "id": "TRK-001",
    "name": "NightRiver Ransomware YARA Ruleset",
    "type": "YARA",
    "description": "Scans memory dumps and exfiltration archives for NightRiver payload strings, packing routines, and XOR decryptors.",
    "status": "ACTIVE",
    "createdDate": "2026-01-22",
    "lastRunDate": "2026-09-28 14:10 UTC",
    "matchesCount": 18,
    "owner": "Analyst #NTRO-418",
    "emailNotifications": true,
    "webhookUrl": "https://soc.ntro.gov.in/webhooks/yara-alerts",
    "showToUsers": true,
    "targetObjectTypes": [
      "Document",
      "Post",
      "Evidence"
    ],
    "sources": [
      "Tor Crawlers",
      "Paste Submit",
      "Exploit Dumps"
    ],
    "dateRange": "2026-01-01 to 2026-12-31",
    "tags": [
      "ransomware",
      "yara",
      "nightriver",
      "exfil"
    ],
    "galaxyTaxonomy": [
      "Malware:Ransomware:NightRiver",
      "Threat-Actor:NightStalker"
    ],
    "recentMatches": [
      {
        "id": "M-01",
        "objectLabel": "exfil_archive_04.enc",
        "objectType": "Document",
        "source": "darkriver7x...onion",
        "matchedDate": "2026-09-28 12:44",
        "snippet": "RULE: nightriver_payload_header MATCH: { 4E 52 5F 43 4B 45 54 }",
        "evidenceId": "EVD-0001"
      },
      {
        "id": "M-02",
        "objectLabel": "corporate_dump_part06.sql",
        "objectType": "Document",
        "source": "darkriver7x...onion",
        "matchedDate": "2026-09-28 10:15",
        "snippet": "RULE: nightriver_victim_marker MATCH: { 56 49 43 54 49 4D 5F 49 44 }",
        "evidenceId": "EVD-0001"
      },
      {
        "id": "M-03",
        "objectLabel": "Paste #1204: Public Key Listing",
        "objectType": "Post",
        "source": "Dread Forums",
        "matchedDate": "2026-09-27 21:05",
        "snippet": "RULE: nightriver_key_exchange MATCH: 0x9B10C48A2D90E18F",
        "evidenceId": "EVD-0005"
      }
    ]
  },
  {
    "id": "TRK-002",
    "name": "NightStalker Persona & PGP Handle Tracker",
    "type": "TERM",
    "description": "Monitors darknet chat protocols, forum posts, and clearweb mirrors for mentions of NightStalker, HydraShadow, and master key ID 0x9B10C48A.",
    "status": "ACTIVE",
    "createdDate": "2026-01-18",
    "lastRunDate": "2026-09-28 14:12 UTC",
    "matchesCount": 64,
    "owner": "Analyst #NTRO-418",
    "emailNotifications": true,
    "showToUsers": true,
    "targetObjectTypes": [
      "Persona",
      "Alias",
      "Post",
      "PGP"
    ],
    "sources": [
      "Dread",
      "Exploit",
      "XSS",
      "Telegram",
      "Session"
    ],
    "pgpSubtype": "Master & Subkeys",
    "dateRange": "2026-01-01 to Present",
    "tags": [
      "persona",
      "pgp",
      "syndicate-lead",
      "dread"
    ],
    "galaxyTaxonomy": [
      "Threat-Actor:NightStalker"
    ],
    "recentMatches": [
      {
        "id": "M-04",
        "objectLabel": "Post #8412: Ransom Notice",
        "objectType": "Post",
        "source": "Dread Forums",
        "matchedDate": "2026-09-28 13:00",
        "snippet": "Author: NightStalker 'We announce the compromise of sector assets'",
        "evidenceId": "EVD-0004"
      },
      {
        "id": "M-05",
        "objectLabel": "Msg #14: Extortion Ticket",
        "objectType": "Post",
        "source": "Telegram Bot",
        "matchedDate": "2026-09-28 11:20",
        "snippet": "Handle: @nightriver_support_bot 'Negotiations handled exclusively by NightStalker'",
        "evidenceId": "EVD-0001"
      }
    ]
  },
  {
    "id": "TRK-003",
    "name": "Peeling Chain Bitcoin Vault Address Tracker",
    "type": "WALLET",
    "description": "Continuously watches mempool and UTXO spends originating from bc1q9x3kf82js97a2n0z91m0e8v4 and peeling hop addresses.",
    "status": "ACTIVE",
    "createdDate": "2026-02-16",
    "lastRunDate": "2026-09-28 13:50 UTC",
    "matchesCount": 28,
    "owner": "Blockchain Lead #NTRO-092",
    "emailNotifications": false,
    "showToUsers": true,
    "targetObjectTypes": [
      "Wallet",
      "Transaction"
    ],
    "sources": [
      "Bitcoin Core Node",
      "Mempool API",
      "Blockchair"
    ],
    "dateRange": "2026-02-01 to Present",
    "tags": [
      "btc",
      "peeling-chain",
      "ransom-vault",
      "chipmixer"
    ],
    "galaxyTaxonomy": [
      "Financial:Cryptocurrency:Bitcoin"
    ],
    "recentMatches": [
      {
        "id": "M-06",
        "objectLabel": "TX #18: e8d47b2c...",
        "objectType": "Transaction",
        "source": "Bitcoin Ledger",
        "matchedDate": "2026-09-28 09:30",
        "snippet": "Value: 2.64 BTC -> bc1qpeel18... & Change: bc1qchg18...",
        "evidenceId": "EVD-0003"
      }
    ]
  },
  {
    "id": "TRK-004",
    "name": "Tor Onion Hidden Service Uptime & Infrastructure",
    "type": "REGEX",
    "description": "Monitors Tor consensus and active crawlers for new darkriver*.onion domains, TLS cert rotations, and OpenSSH hostkey matches.",
    "status": "ACTIVE",
    "createdDate": "2026-01-20",
    "lastRunDate": "2026-09-28 14:05 UTC",
    "matchesCount": 12,
    "owner": "Infra Analyst #NTRO-114",
    "emailNotifications": true,
    "showToUsers": true,
    "targetObjectTypes": [
      "Onion Service",
      "Infrastructure",
      "Certificate"
    ],
    "sources": [
      "Tor v3 HSDir",
      "Lacus Crawler",
      "Shodan Ingress"
    ],
    "dateRange": "2026-01-01 to Present",
    "tags": [
      "tor-v3",
      "onion-crawler",
      "tls-fingerprint",
      "ssh-hostkey"
    ],
    "galaxyTaxonomy": [
      "Infrastructure:Tor:v3"
    ],
    "recentMatches": [
      {
        "id": "M-07",
        "objectLabel": "nightstream2m4u9q1.onion",
        "objectType": "Onion Service",
        "source": "Tor v3 HSDir",
        "matchedDate": "2026-09-28 08:14",
        "snippet": "New descriptor published with mirror public key matching master certificate",
        "evidenceId": "EVD-0001"
      }
    ]
  }
];

