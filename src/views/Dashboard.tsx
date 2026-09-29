import React, { useState } from 'react';
import { 
  Users, 
  Globe, 
  Coins, 
  Key, 
  Lock, 
  FileText, 
  Server, 
  Hash, 
  ShieldCheck, 
  AlertTriangle, 
  Clock, 
  Network, 
  ArrowRight, 
  ExternalLink,
  ChevronRight,
  Database,
  BarChart2,
  Layers,
  Search,
  CheckCircle2,
  Radio,
  FileSearch,
  HelpCircle
} from 'lucide-react';
import { MOCK_CASES, MOCK_PERSONAS, MOCK_EVIDENCE, MOCK_ACTIVITY_FEED, PRIMARY_CASE_ID, MOCK_GRAPH_NODES, MOCK_GRAPH_EDGES } from '../data/mockData';
import { NavigationModule } from '../types';

interface DashboardProps {
  onNavigate: (module: NavigationModule) => void;
  onOpenWhy: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({
  onNavigate,
  onOpenWhy
}) => {
  const currentCase = MOCK_CASES.find(c => c.id === PRIMARY_CASE_ID) || MOCK_CASES[0];
  const [timeWindow, setTimeWindow] = useState<'24H' | '7D' | '30D' | 'ALL'>('30D');

  // Simulated 30-day time series data
  const timeSeriesDays = [
    { day: '09-01', ing: 45, corr: 8 },
    { day: '09-03', ing: 62, corr: 14 },
    { day: '09-05', ing: 88, corr: 22 },
    { day: '09-08', ing: 120, corr: 35 },
    { day: '09-10', ing: 95, corr: 28 },
    { day: '09-12', ing: 140, corr: 48 },
    { day: '09-15', ing: 180, corr: 65 },
    { day: '09-18', ing: 210, corr: 72 },
    { day: '09-20', ing: 165, corr: 54 },
    { day: '09-22', ing: 240, corr: 85 },
    { day: '09-25', ing: 310, corr: 110 },
    { day: '09-28', ing: 380, corr: 142 }
  ];

  // Object counters for Reference 1
  const objectCounters = [
    { label: 'PERSONAS', count: 5, target: 'actors' as NavigationModule, icon: Users, color: '#06b6d4', desc: 'Identified Actors' },
    { label: 'ALIASES', count: 6, target: 'actors' as NavigationModule, icon: Users, color: '#3b82f6', desc: 'Forum Usernames' },
    { label: 'ONION SERVICES', count: 4, target: 'cite' as NavigationModule, icon: Globe, color: '#8b5cf6', desc: 'Tor Hidden Sites' },
    { label: 'PGP KEYS', count: 4, target: 'evidence' as NavigationModule, icon: Key, color: '#10b981', desc: 'Master & Subkeys' },
    { label: 'WALLETS', count: 50, target: 'bti' as NavigationModule, icon: Coins, color: '#f97316', desc: 'BTC Addresses' },
    { label: 'TRANSACTIONS', count: 22, target: 'bti' as NavigationModule, icon: Coins, color: '#f59e0b', desc: 'Peel Chain Hops' },
    { label: 'INFRASTRUCTURE', count: 14, target: 'cite' as NavigationModule, icon: Server, color: '#ef4444', desc: 'VPS & Proxies' },
    { label: 'CERTIFICATES', count: 8, target: 'cite' as NavigationModule, icon: Lock, color: '#eab308', desc: 'TLS Fingerprints' },
    { label: 'SSH HOSTKEYS', count: 6, target: 'cite' as NavigationModule, icon: Hash, color: '#0284c7', desc: 'OpenSSH Hashes' },
    { label: 'FAVICONS', count: 4, target: 'cite' as NavigationModule, icon: Globe, color: '#14b8a6', desc: 'MurmurHash3' },
    { label: 'DOCUMENTS', count: 40, target: 'evidence' as NavigationModule, icon: FileText, color: '#0284c7', desc: 'Exfil Archives' },
    { label: 'POSTS & PASTES', count: 124, target: 'search' as NavigationModule, icon: FileSearch, color: '#64748b', desc: 'Forum Threads' },
    { label: 'EVIDENCE ITEMS', count: 72, target: 'evidence' as NavigationModule, icon: ShieldCheck, color: '#10b981', desc: 'WARC Preserved' },
    { label: 'TIMELINE EVENTS', count: 38, target: 'timeline' as NavigationModule, icon: Clock, color: '#38bdf8', desc: 'Temporal Footprints' }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      {/* CASE ORIENTATION BAR */}
      <div style={{
        background: '#ffffff',
        border: '1px solid #e2e8f0',
        borderRadius: '6px',
        padding: '12px 18px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '12px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.02)'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
            <span style={{
              background: '#e0f2fe',
              color: '#0369a1',
              fontSize: '11px',
              fontWeight: 800,
              padding: '2px 7px',
              borderRadius: '3px',
              border: '1px solid #bae6fd'
            }}>
              {currentCase.id}
            </span>
            <h1 style={{ margin: 0, fontSize: '18px', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.01em' }}>
              {currentCase.title}
            </h1>
          </div>
          <p style={{ margin: 0, fontSize: '12px', color: '#64748b' }}>
            Primary Threat Actor: <strong style={{ color: '#0f172a' }}>NightStalker (NightRiver Syndicate)</strong> &bull; Lead Agency: <strong style={{ color: '#0f172a' }}>NTRO Cyber Forensics</strong>
          </p>
        </div>

        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <button
            onClick={() => onNavigate('graph')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              background: '#0284c7',
              color: '#ffffff',
              border: 'none',
              padding: '6px 14px',
              borderRadius: '4px',
              fontSize: '12px',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            <Network size={14} /> Open ELTAG Graph
          </button>
          <button
            onClick={onOpenWhy}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              background: '#152238',
              color: '#38bdf8',
              border: '1px solid #1e293b',
              padding: '6px 12px',
              borderRadius: '4px',
              fontSize: '12px',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            <HelpCircle size={14} /> WHY Panel
          </button>
        </div>
      </div>

      {/* TOP SECTION: ANALYTICS CHART (LEFT) & INTELLIGENCE OBJECT COUNTERS (RIGHT) - REFERENCE 1 */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 1.2fr)', gap: '14px', alignItems: 'stretch' }}>
        {/* LEFT: TIME-SERIES INGESTION & DISCOVERY STREAM */}
        <div style={{
          background: '#ffffff',
          border: '1px solid #e2e8f0',
          borderRadius: '6px',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxShadow: '0 1px 3px rgba(0,0,0,0.02)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <div>
              <div style={{ fontSize: '13px', fontWeight: 800, color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                INTELLIGENCE DISCOVERY & CORRELATION STREAM
              </div>
              <div style={{ fontSize: '11.5px', color: '#64748b' }}>
                Daily ingested darknet artifacts vs. established multi-layer correlations
              </div>
            </div>

            <div style={{ display: 'flex', gap: '4px' }}>
              {(['24H', '7D', '30D', 'ALL'] as const).map(w => (
                <button
                  key={w}
                  onClick={() => setTimeWindow(w)}
                  style={{
                    padding: '3px 8px',
                    borderRadius: '3px',
                    fontSize: '10.5px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    border: timeWindow === w ? '1px solid #0284c7' : '1px solid #e2e8f0',
                    background: timeWindow === w ? '#f0f9ff' : '#ffffff',
                    color: timeWindow === w ? '#0284c7' : '#64748b'
                  }}
                >
                  {w}
                </button>
              ))}
            </div>
          </div>

          {/* SVG Stream Chart */}
          <div style={{ position: 'relative', width: '100%', height: '170px', background: '#f8fafc', borderRadius: '4px', border: '1px solid #e2e8f0', padding: '10px' }}>
            <svg style={{ width: '100%', height: '100%', overflow: 'visible' }} viewBox="0 0 500 140" preserveAspectRatio="none">
              <defs>
                <linearGradient id="ingGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#0284c7" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#0284c7" stopOpacity="0.0" />
                </linearGradient>
                <linearGradient id="corrGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Grid lines */}
              <line x1="0" y1="35" x2="500" y2="35" stroke="#e2e8f0" strokeDasharray="3,3" />
              <line x1="0" y1="70" x2="500" y2="70" stroke="#e2e8f0" strokeDasharray="3,3" />
              <line x1="0" y1="105" x2="500" y2="105" stroke="#e2e8f0" strokeDasharray="3,3" />

              {/* Ingestion Area & Line */}
              <polygon
                points="0,140 0,120 45,110 90,95 135,75 180,85 225,65 270,50 315,35 360,45 405,25 450,15 500,5 500,140"
                fill="url(#ingGrad)"
              />
              <polyline
                points="0,120 45,110 90,95 135,75 180,85 225,65 270,50 315,35 360,45 405,25 450,15 500,5"
                fill="none"
                stroke="#0284c7"
                strokeWidth="2.5"
              />

              {/* Correlation Area & Line */}
              <polygon
                points="0,140 0,135 45,130 90,120 135,110 180,115 225,100 270,85 315,75 360,80 405,65 450,50 500,35 500,140"
                fill="url(#corrGrad)"
              />
              <polyline
                points="0,135 45,130 90,120 135,110 180,115 225,100 270,85 315,75 360,80 405,65 450,50 500,35"
                fill="none"
                stroke="#10b981"
                strokeWidth="2"
              />
            </svg>
          </div>

          {/* Chart Summary Metrics */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', fontSize: '11px', color: '#475569' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '8px', height: '8px', background: '#0284c7', borderRadius: '50%' }} />
              <span>Ingested Items: <strong>2,841 total</strong> (142/hr)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '8px', height: '8px', background: '#10b981', borderRadius: '50%' }} />
              <span>Correlations Linked: <strong>406 edges</strong></span>
            </div>
            <div>
              Active Crawlers: <strong style={{ color: '#16a34a' }}>9 online</strong>
            </div>
          </div>
        </div>

        {/* RIGHT: MULTI-COLUMN INTELLIGENCE OBJECT COUNTERS GRID (REFERENCE 1) */}
        <div style={{
          background: '#ffffff',
          border: '1px solid #e2e8f0',
          borderRadius: '6px',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 1px 3px rgba(0,0,0,0.02)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <div style={{ fontSize: '13px', fontWeight: 800, color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
              INTELLIGENCE OBJECT INVENTORY
            </div>
            <span style={{ fontSize: '11px', color: '#64748b' }}>
              Click counter to explore
            </span>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
            gap: '8px',
            flex: 1
          }}>
            {objectCounters.map(c => {
              const Icon = c.icon;
              return (
                <div
                  key={c.label}
                  onClick={() => onNavigate(c.target)}
                  style={{
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '4px',
                    padding: '8px 10px',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'all 0.15s ease'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = c.color;
                    e.currentTarget.style.backgroundColor = '#ffffff';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.backgroundColor = '#f8fafc';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                    <span style={{ fontSize: '10px', fontWeight: 800, color: '#64748b', letterSpacing: '0.03em' }}>
                      {c.label}
                    </span>
                    <Icon size={13} color={c.color} />
                  </div>
                  <div style={{ fontSize: '18px', fontWeight: 800, color: '#0f172a', lineHeight: 1.1 }}>
                    {c.count}
                  </div>
                  <div style={{ fontSize: '10px', color: '#94a3b8', marginTop: '2px' }}>
                    {c.desc}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* DARK COMPACT STATUS STRIP (REFERENCE 1) */}
      <div style={{
        background: '#0e1726',
        border: '1px solid #1e293b',
        borderRadius: '6px',
        padding: '8px 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: '11px',
        color: '#cbd5e1',
        overflowX: 'auto',
        whiteSpace: 'nowrap',
        boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
      }}>
        <div style={{ display: 'flex', gap: '20px' }}>
          <span>COLLECTED: <strong style={{ color: '#38bdf8' }}>2,841</strong></span>
          <span>PROCESSED: <strong style={{ color: '#10b981' }}>2,841</strong></span>
          <span>QUEUED: <strong style={{ color: '#94a3b8' }}>0</strong></span>
          <span>ACTIVE TARGETS: <strong style={{ color: '#f59e0b' }}>18</strong></span>
          <span>CORRELATED EDGES: <strong style={{ color: '#38bdf8' }}>406</strong></span>
          <span>CONFLICTED: <strong style={{ color: '#ef4444' }}>1</strong></span>
          <span>ABSTAINED: <strong style={{ color: '#a855f7' }}>1</strong></span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#94a3b8' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }} />
          <span>PIPELINE ENGINE // NOMINAL</span>
        </div>
      </div>

      {/* RECENT FORENSIC ACTIVITY TABLE (REFERENCE 1) */}
      <div style={{
        background: '#ffffff',
        border: '1px solid #e2e8f0',
        borderRadius: '6px',
        overflow: 'hidden',
        boxShadow: '0 1px 3px rgba(0,0,0,0.02)'
      }}>
        <div style={{
          padding: '12px 16px',
          borderBottom: '1px solid #e2e8f0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ fontSize: '13px', fontWeight: 800, color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
            RECENT INTELLIGENCE & CORRELATION ACTIVITY
          </div>
          <button
            onClick={() => onNavigate('timeline')}
            style={{
              background: 'none',
              border: 'none',
              color: '#0284c7',
              fontSize: '11.5px',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            Full Timeline <ArrowRight size={12} />
          </button>
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
          <thead>
            <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0', textAlign: 'left', color: '#475569' }}>
              <th style={{ padding: '8px 12px', width: '120px' }}>TIME (UTC)</th>
              <th style={{ padding: '8px 12px', width: '150px' }}>SOURCE FEED</th>
              <th style={{ padding: '8px 12px' }}>OBSERVED OBJECT / ARTIFACT</th>
              <th style={{ padding: '8px 12px', width: '110px' }}>TYPE</th>
              <th style={{ padding: '8px 12px', width: '120px' }}>STATUS</th>
              <th style={{ padding: '8px 12px', width: '110px' }}>TAG</th>
              <th style={{ padding: '8px 12px', width: '100px', textAlign: 'right' }}>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {[
              { time: '2026-09-28 14:15', src: 'Tor v3 Crawler', obj: 'darkriver7x...onion (Header PGP 0x9B10C48A)', type: 'Onion Service', stat: 'CORRELATED', tone: '#16a34a', tag: '#pgp-signed' },
              { time: '2026-09-28 13:42', src: 'Bitcoin Mempool', obj: 'bc1q9x3kf82js9... -> 14.85 BTC Peel Hop #01', type: 'Wallet', stat: 'CORRELATED', tone: '#16a34a', tag: '#peel-chain' },
              { time: '2026-09-28 12:10', src: 'Dread Forums', obj: 'Post #8412: NightStalker Corporate Extortion Proof', type: 'Post', stat: 'ANALYZED', tone: '#0284c7', tag: '#stylometry' },
              { time: '2026-09-28 11:05', src: 'Court Remand System', obj: 'K-Vortex Physical Detention Remand (CR-8812)', type: 'Evidence', stat: 'CONFLICTED', tone: '#dc2626', tag: '#alibi-flag' },
              { time: '2026-09-28 09:30', src: 'Shodan Ingress', obj: '185.220.101.45 presents TLS cert nightriver-core', type: 'Infrastructure', stat: 'CORRELATED', tone: '#16a34a', tag: '#tls-triangulation' },
              { time: '2026-09-28 08:14', src: 'Telegram Feeder', obj: '@nightriver_support_bot victim negotiation ticket', type: 'Post', stat: 'QUEUED', tone: '#d97706', tag: '#bot-comm' }
            ].map((row, idx) => (
              <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                <td style={{ padding: '9px 12px', fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#475569' }}>
                  {row.time}
                </td>
                <td style={{ padding: '9px 12px', color: '#0f172a', fontWeight: 600 }}>
                  {row.src}
                </td>
                <td style={{ padding: '9px 12px', color: '#0f172a' }}>
                  {row.obj}
                </td>
                <td style={{ padding: '9px 12px' }}>
                  <span style={{ fontSize: '10px', fontWeight: 700, padding: '2px 6px', background: '#f1f5f9', borderRadius: '3px' }}>
                    {row.type}
                  </span>
                </td>
                <td style={{ padding: '9px 12px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: row.tone }}>
                    {row.stat}
                  </span>
                </td>
                <td style={{ padding: '9px 12px', color: '#0369a1', fontSize: '11px' }}>
                  {row.tag}
                </td>
                <td style={{ padding: '9px 12px', textAlign: 'right' }}>
                  <button
                    onClick={() => onNavigate('graph')}
                    style={{
                      padding: '3px 8px',
                      borderRadius: '3px',
                      border: '1px solid #bae6fd',
                      background: '#f0f9ff',
                      color: '#0284c7',
                      fontSize: '11px',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    Inspect
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
