import React, { useState } from 'react';
import { 
  ShieldAlert, 
  Search, 
  Download, 
  HelpCircle, 
  FolderLock, 
  Network,
  Users,
  FileSearch,
  Radio,
  Clock,
  Globe,
  Coins,
  FileText,
  Cpu,
  Bot,
  FileDown,
  ChevronDown,
  LayoutDashboard,
  Briefcase
} from 'lucide-react';
import { NavigationModule } from '../../types';
import { PRIMARY_CASE_ID } from '../../data/mockData';

interface AppHeaderProps {
  currentModule: NavigationModule;
  onSelectModule: (module: NavigationModule) => void;
  onOpenSearch: () => void;
  onOpenExport: () => void;
  onOpenWhy: () => void;
  currentCaseId?: string;
}

export const AppHeader: React.FC<AppHeaderProps> = ({
  currentModule,
  onSelectModule,
  onOpenSearch,
  onOpenExport,
  onOpenWhy,
  currentCaseId = PRIMARY_CASE_ID
}) => {
  const [isEnginesOpen, setIsEnginesOpen] = useState<boolean>(false);

  const navLinks: Array<{ id: NavigationModule; label: string; icon: React.ElementType; badge?: string }> = [
    { id: 'dashboard', label: 'Overview', icon: LayoutDashboard },
    { id: 'cases', label: 'Cases', icon: Briefcase },
    { id: 'search', label: 'Search', icon: Search },
    { id: 'actors', label: 'Actors', icon: Users },
    { id: 'evidence', label: 'Evidence', icon: FileSearch, badge: '72' },
    { id: 'trackers', label: 'Trackers', icon: Radio, badge: '4' },
    { id: 'graph', label: 'Graph', icon: Network, badge: '273' },
    { id: 'timeline', label: 'Timeline', icon: Clock },
    { id: 'agent', label: 'Agent', icon: Bot },
    { id: 'reports', label: 'Reports', icon: FileDown }
  ];

  const engineItems: Array<{ id: NavigationModule; label: string; sub: string; icon: React.ElementType }> = [
    { id: 'cite', label: 'CITE // Infrastructure', sub: 'TLS, SSH, Banners, Favicons', icon: Globe },
    { id: 'bti', label: 'BTI // Blockchain', sub: 'Peel Chains & UTXO Clusters', icon: Coins },
    { id: 'ptrw', label: 'PTRW // Stylometry', sub: 'Writeprints & Diurnal Rhythm', icon: FileText },
    { id: 'fusion', label: 'Evidence Fusion // ACS', sub: 'Logistic Confidence Formula', icon: Cpu }
  ];

  const isEngineActive = ['cite', 'bti', 'ptrw', 'fusion'].includes(currentModule);

  return (
    <header style={{
      background: '#0b1324',
      borderBottom: '1px solid #1e293b',
      position: 'sticky',
      top: 0,
      zIndex: 50,
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.4)'
    }}>
      {/* ROW 1: BRANDING & SYSTEM BAR */}
      <div style={{
        maxWidth: '1800px',
        margin: '0 auto',
        padding: '6px 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid rgba(30, 41, 59, 0.7)'
      }}>
        {/* Left: Brand Identity & Active Case */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '28px',
            height: '28px',
            borderRadius: '4px',
            background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
            flexShrink: 0
          }}>
            <ShieldAlert size={16} />
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{
                fontSize: '15px',
                fontWeight: 900,
                color: '#f8fafc',
                letterSpacing: '0.04em'
              }}>
                UN-VEIL
              </span>
              <span style={{
                fontSize: '10px',
                fontWeight: 700,
                color: '#38bdf8',
                background: 'rgba(2, 132, 199, 0.15)',
                padding: '1px 6px',
                borderRadius: '3px',
                border: '1px solid rgba(2, 132, 199, 0.3)'
              }}>
                NTRO // SIH26151
              </span>
            </div>
          </div>

          <div style={{ height: '18px', width: '1px', background: '#334155', margin: '0 4px' }} />

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            background: '#152238',
            border: '1px solid #1e293b',
            borderRadius: '4px',
            padding: '2px 8px',
            fontSize: '11px',
            color: '#cbd5e1'
          }}>
            <FolderLock size={12} color="#f59e0b" />
            <span style={{ color: '#94a3b8' }}>CASE:</span>
            <span style={{ fontWeight: 700, color: '#f8fafc' }}>{currentCaseId}</span>
            <span style={{ color: '#0284c7', fontSize: '10px' }}>(Operation NightRiver)</span>
          </div>
        </div>

        {/* Center: Classification Banner */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          fontSize: '10px',
          fontWeight: 800,
          letterSpacing: '0.08em',
          color: '#f59e0b',
          background: 'rgba(245, 158, 11, 0.1)',
          border: '1px solid rgba(245, 158, 11, 0.25)',
          padding: '2px 10px',
          borderRadius: '3px'
        }}>
          OFFICIAL // SENSITIVE FORENSIC INTELLIGENCE
        </div>

        {/* Right: Quick Controls & Analyst Badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            onClick={onOpenSearch}
            title="Global Search (Ctrl + K)"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              background: '#152238',
              border: '1px solid #1e293b',
              borderRadius: '4px',
              padding: '3px 8px',
              color: '#94a3b8',
              fontSize: '11px',
              cursor: 'pointer'
            }}
          >
            <Search size={12} />
            <span>Search</span>
            <kbd style={{ fontSize: '9px', background: '#0b1324', padding: '1px 4px', borderRadius: '2px', border: '1px solid #334155' }}>⌘K</kbd>
          </button>

          <button
            onClick={onOpenWhy}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              background: '#0369a1',
              border: 'none',
              borderRadius: '4px',
              padding: '3px 8px',
              color: '#ffffff',
              fontSize: '11px',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            <HelpCircle size={12} /> WHY?
          </button>

          <button
            onClick={onOpenExport}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              background: '#152238',
              border: '1px solid #1e293b',
              borderRadius: '4px',
              padding: '3px 8px',
              color: '#cbd5e1',
              fontSize: '11px',
              cursor: 'pointer'
            }}
          >
            <Download size={12} /> Export
          </button>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            fontSize: '10.5px',
            color: '#10b981',
            background: 'rgba(16, 185, 129, 0.1)',
            padding: '2px 8px',
            borderRadius: '4px',
            border: '1px solid rgba(16, 185, 129, 0.2)'
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }} />
            <span>ANALYST #NTRO-418</span>
          </div>
        </div>
      </div>

      {/* ROW 2: COMPACT HORIZONTAL WORKSPACE NAVIGATION (REFERENCE DESKTOP STYLE) */}
      <div style={{
        maxWidth: '1800px',
        margin: '0 auto',
        padding: '0 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: '4px',
        overflowX: 'auto',
        whiteSpace: 'nowrap',
        height: '38px'
      }}>
        {navLinks.map(link => {
          const Icon = link.icon;
          const isActive = currentModule === link.id;
          return (
            <button
              key={link.id}
              data-nav={link.id}
              onClick={() => onSelectModule(link.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                height: '38px',
                padding: '0 12px',
                background: isActive ? '#0284c7' : 'transparent',
                color: isActive ? '#ffffff' : '#cbd5e1',
                border: 'none',
                borderBottom: isActive ? '2px solid #38bdf8' : '2px solid transparent',
                fontSize: '12px',
                fontWeight: isActive ? 700 : 500,
                cursor: 'pointer',
                transition: 'background 0.12s ease, color 0.12s ease'
              }}
              onMouseEnter={e => {
                if (!isActive) {
                  e.currentTarget.style.backgroundColor = '#152238';
                  e.currentTarget.style.color = '#f8fafc';
                }
              }}
              onMouseLeave={e => {
                if (!isActive) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#cbd5e1';
                }
              }}
            >
              <Icon size={14} color={isActive ? '#ffffff' : '#94a3b8'} />
              <span>{link.label}</span>
              {link.badge && (
                <span style={{
                  fontSize: '9.5px',
                  fontWeight: 800,
                  padding: '1px 5px',
                  borderRadius: '10px',
                  background: isActive ? 'rgba(255,255,255,0.25)' : '#1e293b',
                  color: isActive ? '#ffffff' : '#38bdf8'
                }}>
                  {link.badge}
                </span>
              )}
            </button>
          );
        })}

        {/* Attribution Engines Dropdown */}
        <div style={{ position: 'relative' }}>
          <button
            onClick={() => setIsEnginesOpen(!isEnginesOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              height: '38px',
              padding: '0 12px',
              background: isEngineActive ? '#0284c7' : (isEnginesOpen ? '#152238' : 'transparent'),
              color: isEngineActive ? '#ffffff' : '#cbd5e1',
              border: 'none',
              borderBottom: isEngineActive ? '2px solid #38bdf8' : '2px solid transparent',
              fontSize: '12px',
              fontWeight: isEngineActive ? 700 : 500,
              cursor: 'pointer'
            }}
          >
            <Cpu size={14} color={isEngineActive ? '#ffffff' : '#94a3b8'} />
            <span>Attribution Engines</span>
            <ChevronDown size={12} />
          </button>

          {isEnginesOpen && (
            <div
              style={{
                position: 'absolute',
                top: '38px',
                left: 0,
                width: '240px',
                background: '#0e1726',
                border: '1px solid #1e293b',
                borderRadius: '0 0 6px 6px',
                boxShadow: '0 8px 20px rgba(0,0,0,0.5)',
                display: 'flex',
                flexDirection: 'column',
                zIndex: 100,
                overflow: 'hidden'
              }}
              onMouseLeave={() => setIsEnginesOpen(false)}
            >
              {engineItems.map(item => {
                const ItemIcon = item.icon;
                const isItemActive = currentModule === item.id;
                return (
                  <button
                    key={item.id}
                    data-nav={item.id}
                    onClick={() => {
                      onSelectModule(item.id);
                      setIsEnginesOpen(false);
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '8px',
                      padding: '8px 12px',
                      background: isItemActive ? '#0284c7' : 'transparent',
                      color: isItemActive ? '#ffffff' : '#cbd5e1',
                      border: 'none',
                      borderBottom: '1px solid #152238',
                      textAlign: 'left',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={e => {
                      if (!isItemActive) e.currentTarget.style.backgroundColor = '#152238';
                    }}
                    onMouseLeave={e => {
                      if (!isItemActive) e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                  >
                    <ItemIcon size={14} style={{ marginTop: '2px' }} />
                    <div>
                      <div style={{ fontSize: '11.5px', fontWeight: 700 }}>{item.label}</div>
                      <div style={{ fontSize: '10px', color: isItemActive ? '#e0f2fe' : '#64748b' }}>{item.sub}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
