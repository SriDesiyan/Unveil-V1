import React, { useState } from 'react';
import { 
  Radio, 
  Plus, 
  Search, 
  Play, 
  Pause, 
  Trash2, 
  Edit3, 
  ExternalLink, 
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
  Tag, 
  Filter, 
  FileText, 
  ArrowRight, 
  ShieldCheck, 
  Download, 
  Eye, 
  Mail, 
  Send,
  Sliders,
  ChevronRight,
  Database
} from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { MOCK_TRACKERS } from '../data/mockData';
import { TrackerRecord, NavigationModule } from '../types';

interface TrackersViewProps {
  onNavigate?: (module: NavigationModule) => void;
  onOpenWhy?: () => void;
  onNotify?: (msg: string) => void;
}

export const TrackersView: React.FC<TrackersViewProps> = ({
  onNavigate,
  onOpenWhy,
  onNotify
}) => {
  const [activeTab, setActiveTab] = useState<'LIST' | 'CREATE' | 'DETAIL'>('LIST');
  const [trackers, setTrackers] = useState<TrackerRecord[]>(MOCK_TRACKERS);
  const [selectedTracker, setSelectedTracker] = useState<TrackerRecord>(MOCK_TRACKERS[0]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [typeFilter, setTypeFilter] = useState<string>('ALL');

  // Form state for tracker creation
  const [formName, setFormName] = useState<string>('');
  const [formType, setFormType] = useState<'TERM' | 'YARA' | 'REGEX' | 'WALLET' | 'PGP'>('TERM');
  const [formDesc, setFormDesc] = useState<string>('');
  const [formEmailNotif, setFormEmailNotif] = useState<boolean>(true);
  const [formWebhook, setFormWebhook] = useState<string>('https://soc.ntro.gov.in/webhooks/unveil-alerts');
  const [formShowToUsers, setFormShowToUsers] = useState<boolean>(true);
  const [formTargetTypes, setFormTargetTypes] = useState<string[]>(['Persona', 'Post', 'Document']);
  const [formSources, setFormSources] = useState<string[]>(['Dread', 'Exploit', 'Tor Crawlers']);
  const [formTags, setFormTags] = useState<string>('ransomware, extortion, nightriver');

  const filteredTrackers = trackers.filter(t => {
    const matchesSearch = t.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          t.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = typeFilter === 'ALL' || t.type === typeFilter;
    return matchesSearch && matchesType;
  });

  const handleToggleStatus = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setTrackers(prev => prev.map(t => {
      if (t.id === id) {
        const nextStatus = t.status === 'ACTIVE' ? 'PAUSED' : 'ACTIVE';
        if (onNotify) onNotify(`Tracker ${t.name} set to ${nextStatus}`);
        return { ...t, status: nextStatus };
      }
      return t;
    }));
  };

  const handleRunTracker = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setTrackers(prev => prev.map(t => {
      if (t.id === id) {
        const added = Math.floor(Math.random() * 3) + 1;
        if (onNotify) onNotify(`Tracker executed: ${added} new matches discovered`);
        return { 
          ...t, 
          matchesCount: t.matchesCount + added,
          lastRunDate: 'Just now'
        };
      }
      return t;
    }));
  };

  const handleSaveTracker = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim()) {
      if (onNotify) onNotify('Tracker Name is required');
      return;
    }

    const newTrk: TrackerRecord = {
      id: `TRK-${String(trackers.length + 1).padStart(3, '0')}`,
      name: formName,
      type: formType,
      description: formDesc || 'Custom analyst tracking rule configured for real-time monitoring.',
      status: 'ACTIVE',
      createdDate: new Date().toISOString().split('T')[0],
      lastRunDate: 'Never',
      matchesCount: 0,
      owner: 'Analyst #NTRO-418',
      emailNotifications: formEmailNotif,
      webhookUrl: formWebhook,
      showToUsers: formShowToUsers,
      targetObjectTypes: formTargetTypes,
      sources: formSources,
      dateRange: '2026-01-01 to Present',
      tags: formTags.split(',').map(s => s.trim()).filter(Boolean),
      recentMatches: []
    };

    setTrackers([newTrk, ...trackers]);
    setSelectedTracker(newTrk);
    setActiveTab('DETAIL');
    if (onNotify) onNotify(`Tracker '${newTrk.name}' successfully deployed to background queue.`);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* Top Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: '#ffffff',
        border: '1px solid #e2e8f0',
        borderRadius: '6px',
        padding: '12px 18px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.02)'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
            <Radio size={18} color="#0284c7" />
            <h1 style={{ margin: 0, fontSize: '18px', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.01em' }}>
              UN-VEIL TRACKERS & RETRO-HUNT WORKSPACE
            </h1>
            <span style={{
              background: '#e0f2fe',
              color: '#0369a1',
              fontSize: '11px',
              fontWeight: 700,
              padding: '2px 8px',
              borderRadius: '4px',
              border: '1px solid #bae6fd'
            }}>
              {trackers.filter(t => t.status === 'ACTIVE').length} ACTIVE RULES
            </span>
          </div>
          <p style={{ margin: 0, fontSize: '12.5px', color: '#64748b' }}>
            Continuous darknet crawler subscriptions, YARA rulesets, regex watchers, and Bitcoin UTXO mempool alerts.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={() => setActiveTab('LIST')}
            style={{
              padding: '6px 14px',
              borderRadius: '5px',
              fontSize: '12px',
              fontWeight: 700,
              cursor: 'pointer',
              border: activeTab === 'LIST' ? '1px solid #0284c7' : '1px solid #cbd5e1',
              background: activeTab === 'LIST' ? '#0284c7' : '#ffffff',
              color: activeTab === 'LIST' ? '#ffffff' : '#334155'
            }}
          >
            Tracker List ({trackers.length})
          </button>

          <button
            onClick={() => setActiveTab('CREATE')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 14px',
              borderRadius: '5px',
              fontSize: '12px',
              fontWeight: 700,
              cursor: 'pointer',
              border: activeTab === 'CREATE' ? '1px solid #0f172a' : '1px solid #cbd5e1',
              background: activeTab === 'CREATE' ? '#0f172a' : '#ffffff',
              color: activeTab === 'CREATE' ? '#ffffff' : '#334155'
            }}
          >
            <Plus size={14} /> New Tracker
          </button>
        </div>
      </div>

      {/* TAB 1: TRACKER LIST */}
      {activeTab === 'LIST' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {/* Filter Bar */}
          <div style={{
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '6px',
            padding: '10px 14px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '12px',
            flexWrap: 'wrap'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: 1, minWidth: '240px' }}>
              <Search size={15} color="#64748b" />
              <input
                type="text"
                placeholder="Filter trackers by name, keyword, or description..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  border: '1px solid #cbd5e1',
                  borderRadius: '4px',
                  padding: '5px 10px',
                  fontSize: '12.5px',
                  color: '#0f172a',
                  outline: 'none'
                }}
              />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '11.5px', color: '#64748b', fontWeight: 600 }}>Type:</span>
              {['ALL', 'TERM', 'YARA', 'WALLET', 'REGEX'].map(t => (
                <button
                  key={t}
                  onClick={() => setTypeFilter(t)}
                  style={{
                    padding: '3px 8px',
                    borderRadius: '4px',
                    fontSize: '11px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    border: typeFilter === t ? '1px solid #0284c7' : '1px solid #e2e8f0',
                    background: typeFilter === t ? '#f0f9ff' : '#ffffff',
                    color: typeFilter === t ? '#0369a1' : '#64748b'
                  }}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Table */}
          <div style={{
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '6px',
            overflow: 'hidden',
            boxShadow: '0 1px 3px rgba(0,0,0,0.02)'
          }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
              <thead>
                <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0', textAlign: 'left', color: '#475569' }}>
                  <th style={{ padding: '8px 12px', fontWeight: 700, width: '90px' }}>TYPE</th>
                  <th style={{ padding: '8px 12px', fontWeight: 700 }}>TRACKER NAME & SCOPE</th>
                  <th style={{ padding: '8px 12px', fontWeight: 700, width: '120px' }}>STATUS</th>
                  <th style={{ padding: '8px 12px', fontWeight: 700, width: '130px' }}>LAST RUN</th>
                  <th style={{ padding: '8px 12px', fontWeight: 700, width: '90px', textAlign: 'center' }}>MATCHES</th>
                  <th style={{ padding: '8px 12px', fontWeight: 700, width: '130px' }}>OWNER</th>
                  <th style={{ padding: '8px 12px', fontWeight: 700, width: '170px', textAlign: 'right' }}>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {filteredTrackers.map(t => (
                  <tr
                    key={t.id}
                    onClick={() => { setSelectedTracker(t); setActiveTab('DETAIL'); }}
                    style={{
                      borderBottom: '1px solid #f1f5f9',
                      cursor: 'pointer',
                      transition: 'background 0.15s ease'
                    }}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f8fafc')}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
                  >
                    <td style={{ padding: '10px 12px' }}>
                      <span style={{
                        display: 'inline-block',
                        padding: '2px 7px',
                        borderRadius: '3px',
                        fontSize: '10px',
                        fontWeight: 800,
                        letterSpacing: '0.04em',
                        background: t.type === 'YARA' ? '#fef3c7' : (t.type === 'WALLET' ? '#fed7aa' : (t.type === 'REGEX' ? '#f3e8ff' : '#e0f2fe')),
                        color: t.type === 'YARA' ? '#b45309' : (t.type === 'WALLET' ? '#c2410c' : (t.type === 'REGEX' ? '#7e22ce' : '#0369a1')),
                        border: '1px solid rgba(0,0,0,0.08)'
                      }}>
                        {t.type}
                      </span>
                    </td>
                    <td style={{ padding: '10px 12px' }}>
                      <div style={{ fontWeight: 700, color: '#0f172a', marginBottom: '2px' }}>
                        {t.name}
                      </div>
                      <div style={{ fontSize: '11px', color: '#64748b', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '420px' }}>
                        {t.description}
                      </div>
                      <div style={{ display: 'flex', gap: '4px', marginTop: '4px' }}>
                        {t.tags.slice(0, 3).map(tg => (
                          <span key={tg} style={{ fontSize: '10px', background: '#f1f5f9', color: '#475569', padding: '1px 5px', borderRadius: '3px' }}>
                            #{tg}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td style={{ padding: '10px 12px' }}>
                      <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                        fontSize: '11px',
                        fontWeight: 700,
                        color: t.status === 'ACTIVE' ? '#16a34a' : '#d97706'
                      }}>
                        <span style={{
                          width: '7px',
                          height: '7px',
                          borderRadius: '50%',
                          background: t.status === 'ACTIVE' ? '#16a34a' : '#d97706'
                        }} />
                        {t.status}
                      </span>
                    </td>
                    <td style={{ padding: '10px 12px', color: '#475569', fontSize: '11.5px', fontFamily: 'var(--font-mono)' }}>
                      {t.lastRunDate}
                    </td>
                    <td style={{ padding: '10px 12px', textAlign: 'center' }}>
                      <span style={{
                        background: '#f1f5f9',
                        color: '#0f172a',
                        fontWeight: 800,
                        fontSize: '12px',
                        padding: '3px 8px',
                        borderRadius: '12px',
                        border: '1px solid #e2e8f0'
                      }}>
                        {t.matchesCount}
                      </span>
                    </td>
                    <td style={{ padding: '10px 12px', color: '#64748b', fontSize: '11.5px' }}>
                      {t.owner}
                    </td>
                    <td style={{ padding: '10px 12px', textAlign: 'right' }}>
                      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '4px' }} onClick={e => e.stopPropagation()}>
                        <button
                          title="Execute Tracker Now"
                          onClick={(e) => handleRunTracker(t.id, e)}
                          style={{
                            background: '#f0fdf4',
                            border: '1px solid #bbf7d0',
                            color: '#15803d',
                            padding: '4px 7px',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '11px',
                            fontWeight: 700
                          }}
                        >
                          Run
                        </button>

                        <button
                          title={t.status === 'ACTIVE' ? 'Pause Tracker' : 'Activate Tracker'}
                          onClick={(e) => handleToggleStatus(t.id, e)}
                          style={{
                            background: t.status === 'ACTIVE' ? '#fffbeb' : '#f0f9ff',
                            border: t.status === 'ACTIVE' ? '1px solid #fde68a' : '1px solid #bae6fd',
                            color: t.status === 'ACTIVE' ? '#b45309' : '#0369a1',
                            padding: '4px 7px',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '11px',
                            fontWeight: 700
                          }}
                        >
                          {t.status === 'ACTIVE' ? 'Pause' : 'Resume'}
                        </button>

                        <button
                          title="Inspect Matches"
                          onClick={() => { setSelectedTracker(t); setActiveTab('DETAIL'); }}
                          style={{
                            background: '#f8fafc',
                            border: '1px solid #cbd5e1',
                            color: '#334155',
                            padding: '4px 7px',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '11px'
                          }}
                        >
                          View
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 2: CREATE TRACKER (REFERENCE 3 STYLE) */}
      {activeTab === 'CREATE' && (
        <form onSubmit={handleSaveTracker} style={{
          background: '#ffffff',
          border: '1px solid #e2e8f0',
          borderRadius: '6px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '18px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.02)'
        }}>
          <div style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '12px' }}>
            <h2 style={{ margin: 0, fontSize: '15px', fontWeight: 800, color: '#0f172a' }}>
              CONFIGURATION: DEPLOY INTELLIGENCE TRACKER
            </h2>
            <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#64748b' }}>
              Matches Reference Specification 3: Nested filter groups, object types, source routing, custom taxonomies, and notification webhooks.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '11.5px', fontWeight: 700, color: '#334155', marginBottom: '5px' }}>
                TRACKER NAME *
              </label>
              <input
                type="text"
                placeholder="e.g., NightRiver Payload Decryptor Watcher"
                value={formName}
                onChange={e => setFormName(e.target.value)}
                style={{ width: '100%', padding: '7px 10px', fontSize: '12.5px', border: '1px solid #cbd5e1', borderRadius: '4px' }}
                required
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '11.5px', fontWeight: 700, color: '#334155', marginBottom: '5px' }}>
                TRACKER ENGINE TYPE
              </label>
              <select
                value={formType}
                onChange={e => setFormType(e.target.value as any)}
                style={{ width: '100%', padding: '7px 10px', fontSize: '12.5px', border: '1px solid #cbd5e1', borderRadius: '4px', background: '#fff' }}
              >
                <option value="TERM">Term & Keyword Tracker</option>
                <option value="YARA">YARA Pattern & Rule Matcher</option>
                <option value="WALLET">Bitcoin & Crypto UTXO Peeling Tracker</option>
                <option value="REGEX">Regular Expression Entity Extractor</option>
                <option value="TYPO_SQUATTING">Typo-squatting & Domain Impersonation</option>
              </select>
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '11.5px', fontWeight: 700, color: '#334155', marginBottom: '5px' }}>
              RULE DESCRIPTION & FORENSIC OBJECTIVE
            </label>
            <textarea
              rows={2}
              placeholder="State the analytical objective, specific indicators, and extraction criteria..."
              value={formDesc}
              onChange={e => setFormDesc(e.target.value)}
              style={{ width: '100%', padding: '7px 10px', fontSize: '12.5px', border: '1px solid #cbd5e1', borderRadius: '4px' }}
            />
          </div>

          {/* Nested Filter Groups */}
          <div style={{
            background: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '6px',
            padding: '14px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#0369a1', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
              OBJECT TYPES TO TRACK
            </div>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              {['Persona', 'Alias', 'PGP Key', 'Wallet', 'Transaction', 'Onion Service', 'Infrastructure', 'Document', 'Post'].map(obj => {
                const checked = formTargetTypes.includes(obj);
                return (
                  <label key={obj} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#334155', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={e => {
                        if (e.target.checked) setFormTargetTypes([...formTargetTypes, obj]);
                        else setFormTargetTypes(formTargetTypes.filter(x => x !== obj));
                      }}
                    />
                    {obj}
                  </label>
                );
              })}
            </div>
          </div>

          <div style={{
            background: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '6px',
            padding: '14px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#0369a1', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
              SOURCE ROUTING & INGESTION FEEDS
            </div>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              {['Dread', 'Exploit', 'XSS Forums', 'Tor Crawlers', 'Paste Submit', 'Telegram Feeder', 'Bitcoin Ledger'].map(src => {
                const checked = formSources.includes(src);
                return (
                  <label key={src} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#334155', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={e => {
                        if (e.target.checked) setFormSources([...formSources, src]);
                        else setFormSources(formSources.filter(x => x !== src));
                      }}
                    />
                    {src}
                  </label>
                );
              })}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '11.5px', fontWeight: 700, color: '#334155', marginBottom: '5px' }}>
                NOTIFICATION WEBHOOK
              </label>
              <input
                type="text"
                value={formWebhook}
                onChange={e => setFormWebhook(e.target.value)}
                style={{ width: '100%', padding: '7px 10px', fontSize: '12px', border: '1px solid #cbd5e1', borderRadius: '4px', fontFamily: 'var(--font-mono)' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '11.5px', fontWeight: 700, color: '#334155', marginBottom: '5px' }}>
                ATTACHED TAXONOMY / GALAXY TAGS
              </label>
              <input
                type="text"
                value={formTags}
                onChange={e => setFormTags(e.target.value)}
                style={{ width: '100%', padding: '7px 10px', fontSize: '12px', border: '1px solid #cbd5e1', borderRadius: '4px' }}
              />
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', borderTop: '1px solid #e2e8f0', paddingTop: '14px' }}>
            <button
              type="button"
              onClick={() => setActiveTab('LIST')}
              style={{
                padding: '7px 14px',
                borderRadius: '4px',
                border: '1px solid #cbd5e1',
                background: '#ffffff',
                color: '#475569',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              style={{
                padding: '7px 18px',
                borderRadius: '4px',
                border: 'none',
                background: '#0284c7',
                color: '#ffffff',
                fontSize: '12px',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              Save & Activate Tracker
            </button>
          </div>
        </form>
      )}

      {/* TAB 3: TRACKER DETAIL & RESULTS (REFERENCE 4 STYLE) */}
      {activeTab === 'DETAIL' && selectedTracker && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {/* Top Detail Card */}
          <div style={{
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '6px',
            padding: '16px 20px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.02)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{
                    padding: '2px 7px',
                    borderRadius: '3px',
                    fontSize: '10px',
                    fontWeight: 800,
                    background: '#e0f2fe',
                    color: '#0369a1'
                  }}>
                    {selectedTracker.type} TRACKER
                  </span>
                  <h2 style={{ margin: 0, fontSize: '17px', fontWeight: 800, color: '#0f172a' }}>
                    {selectedTracker.name}
                  </h2>
                  <span style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    color: selectedTracker.status === 'ACTIVE' ? '#16a34a' : '#d97706',
                    background: selectedTracker.status === 'ACTIVE' ? '#f0fdf4' : '#fffbeb',
                    padding: '1px 7px',
                    borderRadius: '4px',
                    border: '1px solid rgba(0,0,0,0.05)'
                  }}>
                    {selectedTracker.status}
                  </span>
                </div>
                <p style={{ margin: '6px 0 0', fontSize: '12.5px', color: '#475569' }}>
                  {selectedTracker.description}
                </p>
              </div>

              <div style={{ display: 'flex', gap: '6px' }}>
                <button
                  onClick={(e) => handleRunTracker(selectedTracker.id, e)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    padding: '6px 12px',
                    borderRadius: '4px',
                    border: '1px solid #bbf7d0',
                    background: '#f0fdf4',
                    color: '#15803d',
                    fontSize: '11.5px',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  <Play size={13} /> Run Now
                </button>
                <button
                  onClick={() => setActiveTab('CREATE')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    padding: '6px 12px',
                    borderRadius: '4px',
                    border: '1px solid #cbd5e1',
                    background: '#ffffff',
                    color: '#334155',
                    fontSize: '11.5px',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  <Edit3 size={13} /> Edit
                </button>
              </div>
            </div>

            {/* Metadata Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '12px',
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '5px',
              padding: '10px 14px',
              fontSize: '11.5px'
            }}>
              <div>
                <span style={{ color: '#64748b' }}>Created Date:</span>
                <div style={{ fontWeight: 700, color: '#0f172a' }}>{selectedTracker.createdDate}</div>
              </div>
              <div>
                <span style={{ color: '#64748b' }}>Last Run:</span>
                <div style={{ fontWeight: 700, color: '#0f172a' }}>{selectedTracker.lastRunDate}</div>
              </div>
              <div>
                <span style={{ color: '#64748b' }}>Total Matches:</span>
                <div style={{ fontWeight: 800, color: '#0284c7' }}>{selectedTracker.matchesCount} items</div>
              </div>
              <div>
                <span style={{ color: '#64748b' }}>Owner / Assigned:</span>
                <div style={{ fontWeight: 700, color: '#0f172a' }}>{selectedTracker.owner}</div>
              </div>
              <div>
                <span style={{ color: '#64748b' }}>Sources Monitored:</span>
                <div style={{ fontWeight: 700, color: '#0f172a' }}>{selectedTracker.sources.join(', ')}</div>
              </div>
            </div>
          </div>

          {/* Results Table (REFERENCE 4 MATCH RESULTS) */}
          <div style={{
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '6px',
            padding: '16px 20px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.02)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <div style={{ fontSize: '13px', fontWeight: 800, color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                MATCH DISCOVERIES ({selectedTracker.recentMatches?.length || 0} RECENT)
              </div>
              <div style={{ fontSize: '11.5px', color: '#64748b' }}>
                Deterministic crawler and retro-hunt hits for rule {selectedTracker.id}
              </div>
            </div>

            {(!selectedTracker.recentMatches || selectedTracker.recentMatches.length === 0) ? (
              <div style={{ padding: '24px', textAlign: 'center', color: '#64748b', fontSize: '12.5px' }}>
                No hits recorded for this rule yet. Click "Run Now" to trigger a retro-hunt scan.
              </div>
            ) : (
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
                <thead>
                  <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0', textAlign: 'left', color: '#475569' }}>
                    <th style={{ padding: '8px 12px', width: '90px' }}>TYPE</th>
                    <th style={{ padding: '8px 12px' }}>OBJECT / ARTIFACT</th>
                    <th style={{ padding: '8px 12px', width: '140px' }}>SOURCE</th>
                    <th style={{ padding: '8px 12px', width: '130px' }}>DISCOVERED</th>
                    <th style={{ padding: '8px 12px' }}>RULE MATCH SNIPPET</th>
                    <th style={{ padding: '8px 12px', width: '100px', textAlign: 'right' }}>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedTracker.recentMatches.map(m => (
                    <tr key={m.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                      <td style={{ padding: '9px 12px' }}>
                        <span style={{ fontSize: '10px', fontWeight: 700, padding: '2px 6px', background: '#f1f5f9', borderRadius: '3px' }}>
                          {m.objectType}
                        </span>
                      </td>
                      <td style={{ padding: '9px 12px', fontWeight: 700, color: '#0f172a' }}>
                        {m.objectLabel}
                      </td>
                      <td style={{ padding: '9px 12px', color: '#64748b' }}>
                        {m.source}
                      </td>
                      <td style={{ padding: '9px 12px', color: '#475569', fontFamily: 'var(--font-mono)' }}>
                        {m.matchedDate}
                      </td>
                      <td style={{ padding: '9px 12px', color: '#0369a1', fontFamily: 'var(--font-mono)', fontSize: '11px' }}>
                        {m.snippet}
                      </td>
                      <td style={{ padding: '9px 12px', textAlign: 'right' }}>
                        <button
                          onClick={() => {
                            if (onNavigate) onNavigate('evidence');
                          }}
                          style={{
                            padding: '3px 8px',
                            background: '#f0f9ff',
                            border: '1px solid #bae6fd',
                            borderRadius: '4px',
                            color: '#0284c7',
                            fontSize: '11px',
                            fontWeight: 700,
                            cursor: 'pointer'
                          }}
                        >
                          Evidence
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
