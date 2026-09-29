import React, { useState, useEffect, useRef, useMemo } from 'react';
import cytoscape, { Core, EventObject } from 'cytoscape';
// @ts-ignore
import fcose from 'cytoscape-fcose';
import { 
  Network, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  Layers, 
  Filter, 
  HelpCircle, 
  AlertTriangle, 
  Info, 
  CheckCircle2, 
  X,
  ExternalLink,
  Maximize2,
  Minimize2,
  Download,
  EyeOff,
  Sliders,
  Search,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  FileText,
  Lock,
  Coins,
  Globe,
  Radio
} from 'lucide-react';
import { MOCK_GRAPH_NODES, MOCK_GRAPH_EDGES, MOCK_PERSONAS, MOCK_EVIDENCE } from '../data/mockData';
import { GraphNode, GraphEdge, PersonaProfile, NavigationModule } from '../types';

// Register fcose layout
try {
  cytoscape.use(fcose);
} catch (e) {
  // Already registered or fallback to cose
}

interface GraphViewProps {
  onOpenWhy: () => void;
  onSelectActor?: (actor: PersonaProfile) => void;
  onNavigate?: (module: NavigationModule) => void;
  focusedActorId?: string;
}

export const GraphView: React.FC<GraphViewProps> = ({
  onOpenWhy,
  onSelectActor,
  onNavigate,
  focusedActorId
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cyRef = useRef<Core | null>(null);

  // Inspector states
  const [selectedNode, setSelectedNode] = useState<GraphNode | null>(null);
  const [selectedEdge, setSelectedEdge] = useState<GraphEdge | null>(null);
  const [searchNodeQuery, setSearchNodeQuery] = useState<string>('');
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [layoutName, setLayoutName] = useState<'fcose' | 'concentric' | 'circle' | 'breadthfirst'>('fcose');
  const [repulsionValue, setRepulsionValue] = useState<number>(4500);

  // Active category filters (All checked by default)
  const [activeCategories, setActiveCategories] = useState<Record<string, boolean>>({
    'Persona': true,
    'Alias': true,
    'Wallet': true,
    'Transaction': true,
    'Infrastructure': true,
    'Onion Service': true,
    'PGP': true,
    'Document': true,
    'Post': true,
    'Candidate Entity': true,
    'Email': true
  });

  // Calculate live category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    MOCK_GRAPH_NODES.forEach(n => {
      const cat = n.category || 'Other';
      counts[cat] = (counts[cat] || 0) + 1;
    });
    return counts;
  }, []);

  // Initialize Cytoscape
  useEffect(() => {
    if (!containerRef.current) return;

    // Build elements
    const elements: cytoscape.ElementDefinition[] = [];

    // Add nodes
    MOCK_GRAPH_NODES.forEach(n => {
      elements.push({
        group: 'nodes',
        data: {
          id: n.id,
          label: n.label,
          sublabel: n.sublabel || '',
          type: n.type,
          category: n.category || 'Other',
          confidence: n.confidence,
          degree: n.degree || 1,
          details: n.details || {}
        }
      });
    });

    // Add edges
    MOCK_GRAPH_EDGES.forEach(e => {
      elements.push({
        group: 'edges',
        data: {
          id: e.id,
          source: e.source,
          target: e.target,
          label: e.label,
          relationType: e.relationType,
          confidence: e.confidence,
          isContradiction: e.isContradiction || false,
          evidenceSnippet: e.evidenceSnippet,
          evidenceIds: e.evidenceIds,
          sourceReliability: e.sourceReliability
        }
      });
    });

    const cy = cytoscape({
      container: containerRef.current,
      elements: elements,
      style: [
        {
          selector: 'node',
          style: {
            'label': 'data(label)',
            'font-family': 'Inter, sans-serif',
            'font-size': '10px',
            'font-weight': 600,
            'color': '#cbd5e1',
            'text-valign': 'bottom',
            'text-margin-y': 4,
            'background-color': '#0284c7',
            'border-width': 2,
            'border-color': '#0369a1',
            'width': '16px',
            'height': '16px',
            'text-max-width': '120px',
            'text-wrap': 'ellipsis',
            'text-outline-color': '#0b1324',
            'text-outline-width': 2,
            'transition-property': 'background-color, border-color, opacity, width, height',
            'transition-duration': 0.25
          }
        },
        // Sizing by Degree
        {
          selector: 'node[degree >= 20]',
          style: {
            'width': '38px',
            'height': '38px',
            'font-size': '12px',
            'font-weight': 800,
            'color': '#f8fafc',
            'border-width': 3
          }
        },
        {
          selector: 'node[degree >= 8][degree < 20]',
          style: {
            'width': '24px',
            'height': '24px',
            'font-size': '11px',
            'color': '#e2e8f0',
            'border-width': 2.5
          }
        },
        {
          selector: 'node[degree < 5]',
          style: {
            'width': '11px',
            'height': '11px',
            'font-size': '0px' // Hide tiny leaf labels until hovered to prevent visual clutter
          }
        },
        // Category Color Mapping
        {
          selector: 'node[category = "Persona"]',
          style: { 'background-color': '#06b6d4', 'border-color': '#0891b2', 'shape': 'ellipse' }
        },
        {
          selector: 'node[category = "Alias"]',
          style: { 'background-color': '#3b82f6', 'border-color': '#1d4ed8', 'shape': 'ellipse' }
        },
        {
          selector: 'node[category = "Wallet"]',
          style: { 'background-color': '#f97316', 'border-color': '#c2410c', 'shape': 'ellipse' }
        },
        {
          selector: 'node[category = "Transaction"]',
          style: { 'background-color': '#f59e0b', 'border-color': '#b45309', 'shape': 'ellipse' }
        },
        {
          selector: 'node[category = "PGP"]',
          style: { 'background-color': '#10b981', 'border-color': '#047857', 'shape': 'star' }
        },
        {
          selector: 'node[category = "Infrastructure"]',
          style: { 'background-color': '#ef4444', 'border-color': '#b91c1c', 'shape': 'rectangle' }
        },
        {
          selector: 'node[category = "Onion Service"]',
          style: { 'background-color': '#8b5cf6', 'border-color': '#6d28d9', 'shape': 'triangle' }
        },
        {
          selector: 'node[category = "Document"]',
          style: { 'background-color': '#0284c7', 'border-color': '#0369a1', 'shape': 'round-rectangle' }
        },
        {
          selector: 'node[category = "Post"]',
          style: { 'background-color': '#64748b', 'border-color': '#334155', 'shape': 'ellipse' }
        },
        {
          selector: 'node[category = "Candidate Entity"]',
          style: {
            'background-color': '#1e1b4b',
            'border-color': '#dc2626',
            'border-width': 3,
            'shape': 'hexagon',
            'color': '#fca5a5'
          }
        },
        {
          selector: 'node[category = "Email"]',
          style: { 'background-color': '#14b8a6', 'border-color': '#0f766e', 'shape': 'ellipse' }
        },
        // Hover
        {
          selector: 'node:hover',
          style: {
            'font-size': '12px',
            'color': '#ffffff',
            'border-color': '#ffffff',
            'border-width': 3
          }
        },
        // Edge styling
        {
          selector: 'edge',
          style: {
            'width': '1.2px',
            'line-color': '#334155',
            'curve-style': 'bezier',
            'target-arrow-shape': 'triangle',
            'target-arrow-color': '#334155',
            'arrow-scale': 0.8,
            'opacity': 0.65,
            'transition-property': 'line-color, width, opacity',
            'transition-duration': 0.2
          }
        },
        {
          selector: 'edge[isContradiction = true]',
          style: {
            'width': '3.5px',
            'line-color': '#ef4444',
            'target-arrow-color': '#ef4444',
            'line-style': 'dashed',
            'line-dash-pattern': [6, 4],
            'opacity': 1.0,
            'label': '⚠️ DISPUTED CONTRADICTION',
            'font-size': '10px',
            'font-weight': 800,
            'color': '#fca5a5',
            'text-background-color': '#0b1324',
            'text-background-opacity': 0.9,
            'text-background-padding': '2px',
            'text-border-color': '#ef4444',
            'text-border-width': 1,
            'text-border-opacity': 0.8
          }
        },
        // Highlighting / Selection
        {
          selector: '.highlighted-node',
          style: {
            'border-color': '#38bdf8',
            'border-width': '4px',
            'opacity': 1.0
          }
        },
        {
          selector: '.highlighted-edge',
          style: {
            'width': '3px',
            'line-color': '#38bdf8',
            'target-arrow-color': '#38bdf8',
            'opacity': 1.0
          }
        },
        {
          selector: '.dimmed',
          style: {
            'opacity': 0.12
          }
        }
      ],
      layout: {
        name: 'cose',
        animate: false,
        randomize: false,
        componentSpacing: 100,
        nodeOverlap: 20,
        idealEdgeLength: 60,
        nodeRepulsion: repulsionValue
      } as any
    });

    cyRef.current = cy;

    // Events
    cy.on('tap', 'node', (evt: EventObject) => {
      const node = evt.target;
      const rawData = node.data();
      const match = MOCK_GRAPH_NODES.find(n => n.id === rawData.id) || null;
      setSelectedNode(match);
      setSelectedEdge(null);

      // Neighborhood highlighting
      cy.elements().removeClass('highlighted-node highlighted-edge dimmed');
      const neighborhood = node.neighborhood().add(node);
      cy.elements().not(neighborhood).addClass('dimmed');
      node.addClass('highlighted-node');
      node.connectedEdges().addClass('highlighted-edge');
    });

    cy.on('tap', 'edge', (evt: EventObject) => {
      const edge = evt.target;
      const rawData = edge.data();
      const match = MOCK_GRAPH_EDGES.find(e => e.id === rawData.id) || null;
      setSelectedEdge(match);
      setSelectedNode(null);

      // Highlight edge and endpoints
      cy.elements().removeClass('highlighted-node highlighted-edge dimmed');
      const connected = edge.connectedNodes().add(edge);
      cy.elements().not(connected).addClass('dimmed');
      edge.addClass('highlighted-edge');
      edge.connectedNodes().addClass('highlighted-node');
    });

    cy.on('tap', (evt: EventObject) => {
      if (evt.target === cy) {
        // Click background
        cy.elements().removeClass('highlighted-node highlighted-edge dimmed');
        setSelectedNode(null);
        setSelectedEdge(null);
      }
    });

    // Run layout initially
    runLayout('cose');

    return () => {
      cy.destroy();
    };
  }, []);

  // Run layout helper
  const runLayout = (name: string, customRepulsion?: number) => {
    if (!cyRef.current) return;
    const cy = cyRef.current;
    const rep = customRepulsion !== undefined ? customRepulsion : repulsionValue;

    let layoutOpts: any = { name: 'cose', animate: true, animationDuration: 600 };

    if (name === 'fcose') {
      try {
        layoutOpts = {
          name: 'fcose',
          animate: true,
          animationDuration: 700,
          quality: 'default',
          randomize: false,
          nodeRepulsion: rep,
          idealEdgeLength: 75,
          edgeElasticity: 0.45,
          gravity: 0.25,
          padding: 30
        };
      } catch (e) {
        layoutOpts = { name: 'cose', animate: true, animationDuration: 600 };
      }
    } else if (name === 'concentric') {
      layoutOpts = {
        name: 'concentric',
        concentric: (node: any) => node.data('degree') || 1,
        levelWidth: () => 2,
        animate: true,
        animationDuration: 500
      };
    } else if (name === 'circle') {
      layoutOpts = { name: 'circle', animate: true, animationDuration: 500 };
    } else if (name === 'breadthfirst') {
      layoutOpts = { name: 'breadthfirst', directed: true, roots: '#NODE-P001', animate: true, animationDuration: 500 };
    }

    const l = cy.layout(layoutOpts);
    l.run();
  };

  // Live Category Filtering
  const toggleCategory = (cat: string, isChecked: boolean) => {
    const updated = { ...activeCategories, [cat]: isChecked };
    setActiveCategories(updated);

    if (!cyRef.current) return;
    const cy = cyRef.current;

    cy.batch(() => {
      cy.nodes().forEach(node => {
        const nodeCat = node.data('category');
        if (updated[nodeCat]) {
          (node as any).style('display', 'element');
        } else {
          (node as any).style('display', 'none');
        }
      });
    });
  };

  const selectAllCategories = (state: boolean) => {
    const updated: Record<string, boolean> = {};
    Object.keys(activeCategories).forEach(cat => {
      updated[cat] = state;
    });
    setActiveCategories(updated);

    if (!cyRef.current) return;
    const cy = cyRef.current;
    cy.batch(() => {
      if (state) (cy.nodes() as any).style('display', 'element');
      else (cy.nodes() as any).style('display', 'none');
    });
  };

  // Node Search handler
  const handleSearchNode = (q: string) => {
    setSearchNodeQuery(q);
    if (!cyRef.current || !q.trim()) return;
    const cy = cyRef.current;
    const found = cy.nodes().filter((n: any) => {
      const lbl = n.data('label') || '';
      const sub = n.data('sublabel') || '';
      return lbl.toLowerCase().includes(q.toLowerCase()) || sub.toLowerCase().includes(q.toLowerCase());
    });

    if (found.length > 0) {
      cy.elements().removeClass('highlighted-node highlighted-edge dimmed');
      const first = found.first();
      const neighborhood = first.neighborhood().add(first);
      cy.elements().not(neighborhood).addClass('dimmed');
      first.addClass('highlighted-node');
      (first as any).connectedEdges().addClass('highlighted-edge');
      cy.animate({
        center: { eles: first },
        zoom: 1.8,
        duration: 500
      });
      const match = MOCK_GRAPH_NODES.find(n => n.id === first.data('id')) || null;
      setSelectedNode(match);
      setSelectedEdge(null);
    }
  };

  // Hide selected node
  const handleHideSelected = () => {
    if (!cyRef.current) return;
    const cy = cyRef.current;
    const selected = cy.$(':selected').add(cy.$('.highlighted-node'));
    if (selected.length > 0) {
      (selected as any).style('display', 'none');
      setSelectedNode(null);
      setSelectedEdge(null);
      cy.elements().removeClass('highlighted-node highlighted-edge dimmed');
    }
  };

  // Fit Graph
  const handleFit = () => {
    if (!cyRef.current) return;
    cyRef.current.fit(undefined, 30);
  };

  // Reset Graph
  const handleReset = () => {
    if (!cyRef.current) return;
    const cy = cyRef.current;
    (cy.nodes() as any).style('display', 'element');
    cy.elements().removeClass('highlighted-node highlighted-edge dimmed');
    setSelectedNode(null);
    setSelectedEdge(null);
    setSearchNodeQuery('');
    handleFit();
  };

  // Export PNG
  const handleExportPng = () => {
    if (!cyRef.current) return;
    const png = cyRef.current.png({ full: true, scale: 2, bg: '#0b1324' });
    const a = document.createElement('a');
    a.href = png;
    a.download = `UNVEIL-correlation-graph-${Date.now()}.png`;
    a.click();
  };

  // Toggle Fullscreen
  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  // Keyboard shortcut 'H'
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.key === 'h' || e.key === 'H') && selectedNode) {
        handleHideSelected();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedNode]);

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 340px',
      gap: '12px',
      height: isFullscreen ? '100vh' : 'calc(100vh - 120px)',
      position: isFullscreen ? 'fixed' : 'relative',
      top: isFullscreen ? 0 : 'auto',
      left: isFullscreen ? 0 : 'auto',
      right: isFullscreen ? 0 : 'auto',
      bottom: isFullscreen ? 0 : 'auto',
      zIndex: isFullscreen ? 9999 : 1,
      background: '#0b1324',
      padding: isFullscreen ? '12px' : 0
    }}>
      {/* LEFT: GRAPH WORKSPACE (75% VIEWPORT) */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        background: '#070c18',
        border: '1px solid #1e293b',
        borderRadius: '6px',
        overflow: 'hidden',
        boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
        position: 'relative'
      }}>
        {/* GRAPH TOOLBAR (MATCHING REFERENCE) */}
        <div style={{
          background: '#0e1726',
          borderBottom: '1px solid #1e293b',
          padding: '8px 12px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '8px',
          flexWrap: 'wrap'
        }}>
          {/* Left Title & Status */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Network size={16} color="#38bdf8" />
            <span style={{ fontSize: '13px', fontWeight: 800, color: '#f8fafc', letterSpacing: '0.02em' }}>
              ELTAG &mdash; THREAT ACTOR CORRELATION ENGINE
            </span>
            <span style={{
              background: '#070c18',
              border: '1px solid #1e293b',
              color: '#38bdf8',
              fontSize: '11px',
              fontWeight: 700,
              padding: '2px 8px',
              borderRadius: '4px'
            }}>
              273 Nodes &bull; 406 Edges
            </span>
          </div>

          {/* Center Search Node */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', minWidth: '200px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              background: '#070c18',
              border: '1px solid #1e293b',
              borderRadius: '4px',
              padding: '4px 8px',
              width: '100%'
            }}>
              <Search size={13} color="#64748b" />
              <input
                type="text"
                placeholder="Find node (e.g. NightStalker, bc1q...)"
                value={searchNodeQuery}
                onChange={e => handleSearchNode(e.target.value)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: '#f8fafc',
                  fontSize: '11.5px',
                  width: '100%'
                }}
              />
              {searchNodeQuery && (
                <button onClick={() => { setSearchNodeQuery(''); handleReset(); }} style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer' }}>
                  <X size={12} />
                </button>
              )}
            </div>
          </div>

          {/* Right Action Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <button
              onClick={handleReset}
              title="Reset View and Clear Filters"
              style={{
                background: '#0284c7',
                border: '1px solid #0369a1',
                color: '#ffffff',
                padding: '4px 10px',
                borderRadius: '4px',
                fontSize: '11.5px',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <RotateCcw size={12} /> Reset Graph
            </button>

            <button
              onClick={handleFit}
              title="Fit View to Screen"
              style={{
                background: '#0284c7',
                border: '1px solid #0369a1',
                color: '#ffffff',
                padding: '4px 10px',
                borderRadius: '4px',
                fontSize: '11.5px',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              Fit
            </button>

            <button
              onClick={handleExportPng}
              title="Export High-Res PNG"
              style={{
                background: '#0f223a',
                border: '1px solid #0284c7',
                color: '#38bdf8',
                padding: '4px 10px',
                borderRadius: '4px',
                fontSize: '11.5px',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <Download size={12} /> Add to Export
            </button>

            <button
              onClick={handleHideSelected}
              title="Hide Selected Node (Keyboard shortcut: H)"
              style={{
                background: '#152238',
                border: '1px solid #1e293b',
                color: '#94a3b8',
                padding: '4px 9px',
                borderRadius: '4px',
                fontSize: '11.5px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <EyeOff size={12} /> Hide (H)
            </button>

            {/* Repulsion Slider */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '0 4px' }} title="Adjust Layout Repulsion Force">
              <Sliders size={12} color="#64748b" />
              <input
                type="range"
                min="1500"
                max="9000"
                step="500"
                value={repulsionValue}
                onChange={e => {
                  const val = Number(e.target.value);
                  setRepulsionValue(val);
                  runLayout('fcose', val);
                }}
                style={{ width: '65px', cursor: 'pointer', accentColor: '#0284c7' }}
              />
            </div>

            <button
              onClick={toggleFullscreen}
              title="Toggle Fullscreen"
              style={{
                background: '#152238',
                border: '1px solid #1e293b',
                color: '#cbd5e1',
                padding: '4px 8px',
                borderRadius: '4px',
                fontSize: '11.5px',
                cursor: 'pointer'
              }}
            >
              {isFullscreen ? <Minimize2 size={13} /> : <Maximize2 size={13} />}
            </button>
          </div>
        </div>

        {/* CYTOSCAPE CANVAS CONTAINER */}
        <div
          ref={containerRef}
          style={{
            flex: 1,
            width: '100%',
            height: '100%',
            background: 'radial-gradient(ellipse at center, #0c1830 0%, #060c18 100%)',
            cursor: 'grab'
          }}
        />

        {/* Bottom Legend Ribbon */}
        <div style={{
          background: 'rgba(14, 23, 38, 0.95)',
          borderTop: '1px solid #1e293b',
          padding: '6px 14px',
          display: 'flex',
          gap: '16px',
          alignItems: 'center',
          fontSize: '11px',
          color: '#94a3b8',
          overflowX: 'auto',
          whiteSpace: 'nowrap'
        }}>
          <span style={{ fontWeight: 700, color: '#e2e8f0' }}>LEGEND:</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#06b6d4' }} /> Persona
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#3b82f6' }} /> Alias
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f97316' }} /> Wallet
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f59e0b' }} /> Transaction
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }} /> PGP
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '2px', background: '#ef4444' }} /> Infrastructure
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '0', background: '#8b5cf6' }} /> Onion
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span style={{ width: '12px', height: '2px', background: '#ef4444', borderTop: '2px dashed #ef4444' }} /> Contradiction Link
          </span>
        </div>
      </div>

      {/* RIGHT SIDEBAR: DIRECT CORRELATIONS & FORENSIC WHY PANEL */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        overflowY: 'auto',
        maxHeight: '100%'
      }}>
        {/* PANEL 1: DIRECT CORRELATIONS TALLIES (REFERENCE CORRELATION PANEL) */}
        <div style={{
          background: '#0e1726',
          border: '1px solid #1e293b',
          borderRadius: '6px',
          overflow: 'hidden',
          boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
        }}>
          <div style={{
            background: '#152238',
            borderBottom: '1px solid #1e293b',
            padding: '8px 12px',
            fontSize: '11.5px',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            color: '#f8fafc',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Layers size={13} color="#0284c7" />
              DIRECT CORRELATIONS
            </span>
            <span style={{ background: '#0284c7', color: '#fff', fontSize: '10.5px', padding: '1px 6px', borderRadius: '3px' }}>
              {MOCK_GRAPH_NODES.length}
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', maxHeight: '180px', overflowY: 'auto' }}>
            {Object.entries(categoryCounts).map(([cat, cnt]) => (
              <div
                key={cat}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '5px 12px',
                  borderBottom: '1px solid #141f33',
                  fontSize: '11px',
                  color: '#cbd5e1'
                }}
              >
                <span>{cat}</span>
                <span style={{
                  background: '#0284c7',
                  color: '#ffffff',
                  fontSize: '10px',
                  fontWeight: 800,
                  padding: '1px 6px',
                  borderRadius: '10px'
                }}>
                  {cnt}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* PANEL 2: SELECT CORRELATION FILTER CHECKBOXES */}
        <div style={{
          background: '#0e1726',
          border: '1px solid #1e293b',
          borderRadius: '6px',
          overflow: 'hidden',
          boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
        }}>
          <div style={{
            background: '#152238',
            borderBottom: '1px solid #1e293b',
            padding: '8px 12px',
            fontSize: '11.5px',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            color: '#f8fafc',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Filter size={13} color="#0284c7" />
              SELECT CORRELATION:
            </span>
            <div style={{ display: 'flex', gap: '4px' }}>
              <button
                onClick={() => selectAllCategories(true)}
                style={{ background: '#0284c7', border: 'none', color: '#fff', fontSize: '10px', padding: '1px 5px', borderRadius: '2px', cursor: 'pointer' }}
              >
                All
              </button>
              <button
                onClick={() => selectAllCategories(false)}
                style={{ background: '#334155', border: 'none', color: '#cbd5e1', fontSize: '10px', padding: '1px 5px', borderRadius: '2px', cursor: 'pointer' }}
              >
                None
              </button>
            </div>
          </div>

          <div style={{ padding: '8px 12px', display: 'flex', flexDirection: 'column', gap: '6px', maxHeight: '160px', overflowY: 'auto' }}>
            {Object.keys(categoryCounts).map(cat => (
              <label key={cat} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11.5px', color: '#e2e8f0', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={!!activeCategories[cat]}
                  onChange={e => toggleCategory(cat, e.target.checked)}
                  style={{ accentColor: '#0284c7' }}
                />
                <span>{cat} <span style={{ color: '#64748b', fontSize: '10.5px' }}>({categoryCounts[cat]})</span></span>
              </label>
            ))}
          </div>
        </div>

        {/* PANEL 3: FORENSIC WHY PANEL & INSPECTOR */}
        <div style={{
          background: '#0e1726',
          border: '1px solid #1e293b',
          borderRadius: '6px',
          overflow: 'hidden',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
        }}>
          <div style={{
            background: selectedEdge?.isContradiction ? '#450a0a' : '#152238',
            borderBottom: '1px solid #1e293b',
            padding: '8px 12px',
            fontSize: '11.5px',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            color: selectedEdge?.isContradiction ? '#fca5a5' : '#38bdf8',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <HelpCircle size={14} color={selectedEdge?.isContradiction ? '#ef4444' : '#0284c7'} />
              {selectedEdge ? 'WHY THIS RELATIONSHIP?' : (selectedNode ? 'OBJECT INSPECTOR' : 'FORENSIC WHY PANEL')}
            </span>
            {selectedEdge && (
              <span style={{
                background: selectedEdge.isContradiction ? '#dc2626' : '#0284c7',
                color: '#ffffff',
                fontSize: '10px',
                fontWeight: 800,
                padding: '1px 6px',
                borderRadius: '3px'
              }}>
                {selectedEdge.relationType}
              </span>
            )}
          </div>

          <div style={{ padding: '12px', display: 'flex', flexDirection: 'column', gap: '10px', overflowY: 'auto' }}>
            {selectedEdge ? (
              // Edge Details
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {selectedEdge.isContradiction && (
                  <div style={{
                    background: 'rgba(239, 68, 68, 0.15)',
                    border: '1px solid #ef4444',
                    borderRadius: '4px',
                    padding: '8px 10px',
                    fontSize: '11.5px',
                    color: '#fca5a5',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '8px'
                  }}>
                    <AlertTriangle size={15} color="#ef4444" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <div style={{ fontWeight: 800, marginBottom: '2px' }}>CONTRADICTION DETECTED</div>
                      <div>{selectedEdge.evidenceSnippet}</div>
                      <div style={{ fontSize: '10px', marginTop: '4px', color: '#f87171' }}>
                        Alibi rule triggered: Fusion ACS heavily suppressed (&beta;X = 4.0 penalty).
                      </div>
                    </div>
                  </div>
                )}

                <div style={{ background: '#070c18', border: '1px solid #1e293b', borderRadius: '4px', padding: '10px', fontSize: '11.5px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ color: '#64748b' }}>Edge ID:</span>
                    <span style={{ color: '#f8fafc', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>{selectedEdge.id}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ color: '#64748b' }}>Extraction Confidence:</span>
                    <span style={{ color: '#16a34a', fontWeight: 800 }}>{Math.round(selectedEdge.confidence * 100)}%</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ color: '#64748b' }}>Source Reliability:</span>
                    <span style={{ color: '#38bdf8', fontWeight: 700 }}>{selectedEdge.sourceReliability}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#64748b' }}>Corroborating Evidence:</span>
                    <span style={{ color: '#e2e8f0', fontWeight: 700 }}>{selectedEdge.evidenceIds.join(', ')}</span>
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '4px' }}>
                    EVIDENCE PROVENANCE LINEAGE
                  </div>
                  <div style={{ background: '#070c18', border: '1px solid #1e293b', borderRadius: '4px', padding: '8px 10px', fontSize: '11px', color: '#cbd5e1' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#38bdf8', marginBottom: '4px', fontWeight: 700 }}>
                      <ShieldCheck size={13} />
                      WARC PRESERVATION &bull; SHA-256 VERIFIED
                    </div>
                    <p style={{ margin: 0, color: '#94a3b8', lineHeight: 1.4 }}>
                      {selectedEdge.evidenceSnippet}
                    </p>
                  </div>
                </div>

                <button
                  onClick={onOpenWhy}
                  style={{
                    background: '#0284c7',
                    border: 'none',
                    color: '#ffffff',
                    padding: '7px 12px',
                    borderRadius: '4px',
                    fontSize: '11.5px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px'
                  }}
                >
                  Open Full Forensic WHY Modal <ArrowRight size={13} />
                </button>
              </div>
            ) : selectedNode ? (
              // Node Details
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ background: '#070c18', border: '1px solid #1e293b', borderRadius: '4px', padding: '10px', fontSize: '11.5px' }}>
                  <div style={{ fontSize: '13px', fontWeight: 800, color: '#f8fafc', marginBottom: '2px' }}>
                    {selectedNode.label}
                  </div>
                  <div style={{ fontSize: '11px', color: '#0284c7', fontWeight: 700, marginBottom: '8px' }}>
                    Category: {selectedNode.category || selectedNode.type}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ color: '#64748b' }}>Entity ID:</span>
                    <span style={{ color: '#e2e8f0', fontFamily: 'var(--font-mono)' }}>{selectedNode.id}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ color: '#64748b' }}>Confidence:</span>
                    <span style={{ color: '#16a34a', fontWeight: 800 }}>{Math.round(selectedNode.confidence * 100)}%</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ color: '#64748b' }}>Temporal Window:</span>
                    <span style={{ color: '#94a3b8' }}>{selectedNode.firstSeen} &rarr; {selectedNode.lastSeen}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#64748b' }}>Graph Degree:</span>
                    <span style={{ color: '#38bdf8', fontWeight: 800 }}>{selectedNode.degree || 1} connections</span>
                  </div>
                </div>

                {selectedNode.details && (
                  <div>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '4px' }}>
                      METADATA ATTRIBUTES
                    </div>
                    <div style={{ background: '#070c18', border: '1px solid #1e293b', borderRadius: '4px', padding: '8px 10px', fontSize: '11px' }}>
                      {Object.entries(selectedNode.details).map(([k, v]) => (
                        <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '2px 0' }}>
                          <span style={{ color: '#64748b' }}>{k}:</span>
                          <span style={{ color: '#e2e8f0', fontWeight: 600 }}>{String(v)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div style={{ display: 'flex', gap: '6px' }}>
                  <button
                    onClick={() => {
                      if (selectedNode.category === 'Wallet' && onNavigate) onNavigate('bti');
                      else if ((selectedNode.category === 'Infrastructure' || selectedNode.category === 'Onion Service') && onNavigate) onNavigate('cite');
                      else if (selectedNode.category === 'Persona' && onNavigate) onNavigate('actors');
                      else if (onNavigate) onNavigate('evidence');
                    }}
                    style={{
                      flex: 1,
                      background: '#0284c7',
                      border: 'none',
                      color: '#ffffff',
                      padding: '7px 10px',
                      borderRadius: '4px',
                      fontSize: '11px',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    Deep Dive Module
                  </button>
                  <button
                    onClick={onOpenWhy}
                    style={{
                      background: '#152238',
                      border: '1px solid #1e293b',
                      color: '#38bdf8',
                      padding: '7px 10px',
                      borderRadius: '4px',
                      fontSize: '11px',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    WHY?
                  </button>
                </div>
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '20px 10px', color: '#64748b', fontSize: '11.5px' }}>
                <HelpCircle size={28} color="#334155" style={{ margin: '0 auto 8px' }} />
                Click any node or relationship edge in the graph to inspect its evidence provenance, confidence rating, and contradiction flags.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
