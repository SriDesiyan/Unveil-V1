import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  X, 
  ArrowRight, 
  Database, 
  FileText, 
  Coins, 
  Globe, 
  Lock, 
  Hash, 
  ExternalLink, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldCheck, 
  Eye, 
  Copy,
  SlidersHorizontal,
  ChevronDown
} from 'lucide-react';
import { MOCK_GRAPH_NODES, MOCK_EVIDENCE } from '../data/mockData';
import { NavigationModule } from '../types';

interface SearchViewProps {
  onNavigate?: (module: NavigationModule) => void;
  onOpenWhy?: () => void;
  onNotify?: (msg: string) => void;
}

export const SearchView: React.FC<SearchViewProps> = ({
  onNavigate,
  onOpenWhy,
  onNotify
}) => {
  const [query, setQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [selectedSource, setSelectedSource] = useState<string>('ALL');
  const [sortBy, setSortBy] = useState<'RECENT' | 'RELEVANCE' | 'CONFIDENCE'>('RELEVANCE');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Available categories with counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    MOCK_GRAPH_NODES.forEach(n => {
      const cat = n.category || 'Other';
      counts[cat] = (counts[cat] || 0) + 1;
    });
    return counts;
  }, []);

  // Filtered dataset
  const searchResults = useMemo(() => {
    return MOCK_GRAPH_NODES.filter(n => {
      const q = query.toLowerCase().trim();
      const matchesQuery = !q || 
        n.label.toLowerCase().includes(q) || 
        (n.sublabel && n.sublabel.toLowerCase().includes(q)) ||
        (n.category && n.category.toLowerCase().includes(q)) ||
        n.id.toLowerCase().includes(q);

      const matchesCat = selectedCategory === 'ALL' || n.category === selectedCategory;
      return matchesQuery && matchesCat;
    });
  }, [query, selectedCategory]);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    if (onNotify) onNotify(`Copied ${text} to clipboard`);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '270px 1fr', gap: '16px', alignItems: 'start' }}>
      {/* LEFT FILTER SIDEBAR (REFERENCE 5) */}
      <div style={{
        background: '#ffffff',
        border: '1px solid #e2e8f0',
        borderRadius: '6px',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.02)'
      }}>
        <div style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 800, color: '#0f172a' }}>
            <Filter size={15} color="#0284c7" />
            SEARCH FILTERS
          </div>
          <button
            onClick={() => { setSelectedCategory('ALL'); setQuery(''); }}
            style={{ fontSize: '11px', color: '#0284c7', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600 }}
          >
            Reset
          </button>
        </div>

        {/* Object Categories */}
        <div>
          <div style={{ fontSize: '11px', fontWeight: 700, color: '#475569', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            OBJECT TYPES
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <button
              onClick={() => setSelectedCategory('ALL')}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '6px 8px',
                borderRadius: '4px',
                fontSize: '11.5px',
                fontWeight: selectedCategory === 'ALL' ? 700 : 500,
                background: selectedCategory === 'ALL' ? '#f0f9ff' : 'transparent',
                color: selectedCategory === 'ALL' ? '#0369a1' : '#334155',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left'
              }}
            >
              <span>All Objects</span>
              <span style={{ fontSize: '10.5px', color: '#64748b' }}>{MOCK_GRAPH_NODES.length}</span>
            </button>

            {Object.entries(categoryCounts).map(([cat, cnt]) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '5px 8px',
                  borderRadius: '4px',
                  fontSize: '11.5px',
                  fontWeight: selectedCategory === cat ? 700 : 500,
                  background: selectedCategory === cat ? '#f0f9ff' : 'transparent',
                  color: selectedCategory === cat ? '#0369a1' : '#475569',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left'
                }}
              >
                <span>{cat}</span>
                <span style={{ fontSize: '10.5px', color: '#64748b' }}>{cnt}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Sources filter */}
        <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '12px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, color: '#475569', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            SOURCE FEEDERS
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {['ALL', 'Tor v3 Darknet', 'Dread Forums', 'Bitcoin Core Ledger', 'Telegram Gateway', 'Court Legal Remand'].map(src => (
              <label key={src} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11.5px', color: '#334155', cursor: 'pointer' }}>
                <input
                  type="radio"
                  name="source_filter"
                  checked={selectedSource === src}
                  onChange={() => setSelectedSource(src)}
                />
                {src}
              </label>
            ))}
          </div>
        </div>

        {/* Sorting */}
        <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '12px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, color: '#475569', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            ORDER RESULTS
          </div>
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value as any)}
            style={{ width: '100%', padding: '6px 8px', fontSize: '11.5px', border: '1px solid #cbd5e1', borderRadius: '4px', background: '#fff' }}
          >
            <option value="RELEVANCE">Best Forensic Match</option>
            <option value="RECENT">Most Recently Observed</option>
            <option value="CONFIDENCE">Highest Confidence Score</option>
          </select>
        </div>
      </div>

      {/* CENTRAL SEARCH WORKSPACE */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {/* Search Bar */}
        <div style={{
          background: '#ffffff',
          border: '1px solid #e2e8f0',
          borderRadius: '6px',
          padding: '12px 16px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
          display: 'flex',
          gap: '10px',
          alignItems: 'center'
        }}>
          <Search size={18} color="#0284c7" />
          <input
            type="text"
            placeholder="Search personas, PGP keys, wallet addresses (bc1q...), onion links, documents, hashes, or posts..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              fontSize: '13.5px',
              color: '#0f172a'
            }}
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer' }}
            >
              <X size={16} />
            </button>
          )}
          <span style={{
            fontSize: '11.5px',
            fontWeight: 700,
            background: '#f1f5f9',
            color: '#475569',
            padding: '3px 8px',
            borderRadius: '4px'
          }}>
            {searchResults.length} Results
          </span>
        </div>

        {/* Results List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {searchResults.length === 0 ? (
            <div style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '6px',
              padding: '36px',
              textAlign: 'center',
              color: '#64748b'
            }}>
              No objects matched your criteria. Try adjusting the query string or resetting the category filter.
            </div>
          ) : (
            searchResults.map(n => (
              <div
                key={n.id}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '6px',
                  padding: '12px 16px',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.02)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '14px',
                  transition: 'border-color 0.15s ease'
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = '#0284c7')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = '#e2e8f0')}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{
                      padding: '2px 6px',
                      borderRadius: '3px',
                      fontSize: '10px',
                      fontWeight: 800,
                      background: '#f1f5f9',
                      color: '#0369a1',
                      border: '1px solid #e2e8f0'
                    }}>
                      {n.category || n.type}
                    </span>
                    <span style={{ fontWeight: 800, fontSize: '13.5px', color: '#0f172a' }}>
                      {n.label}
                    </span>
                    {n.confidence && (
                      <span style={{ fontSize: '11px', color: '#16a34a', fontWeight: 700 }}>
                        {Math.round(n.confidence * 100)}% conf
                      </span>
                    )}
                  </div>

                  <div style={{ fontSize: '11.5px', color: '#64748b' }}>
                    {n.sublabel || (n.details ? JSON.stringify(n.details) : 'Deterministic intelligence entity')}
                  </div>

                  <div style={{ display: 'flex', gap: '12px', fontSize: '11px', color: '#94a3b8', marginTop: '2px', fontFamily: 'var(--font-mono)' }}>
                    <span>ID: {n.id}</span>
                    {n.firstSeen && <span>Observed: {n.firstSeen} → {n.lastSeen}</span>}
                    {n.degree && <span>Connections: {n.degree}</span>}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                  <button
                    onClick={() => copyToClipboard(n.label, n.id)}
                    title="Copy Identifier"
                    style={{
                      background: '#f8fafc',
                      border: '1px solid #cbd5e1',
                      borderRadius: '4px',
                      padding: '5px 8px',
                      color: copiedId === n.id ? '#16a34a' : '#475569',
                      fontSize: '11px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    {copiedId === n.id ? <CheckCircle2 size={13} /> : <Copy size={13} />}
                    {copiedId === n.id ? 'Copied' : 'Copy'}
                  </button>

                  <button
                    onClick={() => {
                      if (onNavigate) onNavigate('graph');
                    }}
                    style={{
                      background: '#f0f9ff',
                      border: '1px solid #bae6fd',
                      borderRadius: '4px',
                      padding: '5px 10px',
                      color: '#0284c7',
                      fontSize: '11.5px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    View in Graph <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
