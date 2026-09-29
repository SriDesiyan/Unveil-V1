import React, { useState, useEffect } from 'react';
import { NavigationModule, PersonaProfile } from './types';
import { MOCK_PERSONAS, MOCK_EVIDENCE, PRIMARY_CASE_ID } from './data/mockData';
import { AppHeader } from './components/layout/AppHeader';
import { AppFooter } from './components/layout/AppFooter';
import { GlobalSearchModal } from './components/layout/GlobalSearchModal';
import { WhyPanel } from './components/modals/WhyPanel';
import { ActorDossierDrawer } from './components/modals/ActorDossierDrawer';
import { QuickExportModal } from './components/modals/QuickExportModal';
import { Toast } from './components/common/Toast';

// Views
import { Dashboard } from './views/Dashboard';
import { CasesView } from './views/CasesView';
import { SearchView } from './views/SearchView';
import { ActorsView } from './views/ActorsView';
import { GraphView } from './views/GraphView';
import { TimelineView } from './views/TimelineView';
import { EvidenceView } from './views/EvidenceView';
import { TrackersView } from './views/TrackersView';
import { CiteView } from './views/CiteView';
import { BtiView } from './views/BtiView';
import { PtrwView } from './views/PtrwView';
import { FusionView } from './views/FusionView';
import { AgentOrchestrator } from './views/AgentOrchestrator';
import { ReportsView } from './views/ReportsView';

import './styles/globals.css';

export const App: React.FC = () => {
  const [currentModule, setCurrentModule] = useState<NavigationModule>('dashboard');

  // Modals & Drawers state
  const [isWhyOpen, setIsWhyOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isExportOpen, setIsExportOpen] = useState<boolean>(false);
  const [selectedActor, setSelectedActor] = useState<PersonaProfile | null>(null);
  const [selectedEvidenceId, setSelectedEvidenceId] = useState<string | undefined>(undefined);
  const [focusedActorId, setFocusedActorId] = useState<string | undefined>(undefined);

  // Notifications
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const notify = (msg: string) => {
    setToastMessage(msg);
  };

  // Keyboard shortcut listener for Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: '#f1f5f9',
      color: '#0f172a'
    }}>
      {/* COMPACT DARK HORIZONTAL TOP NAVIGATION (REFERENCE SPECIFICATION) */}
      <AppHeader
        currentModule={currentModule}
        onSelectModule={setCurrentModule}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenExport={() => setIsExportOpen(true)}
        onOpenWhy={() => setIsWhyOpen(true)}
        currentCaseId={PRIMARY_CASE_ID}
      />

      {/* FULL-WIDTH ANALYST WORKSPACE (NO GIANT SIDEBAR WASTING HORIZONTAL DENSITY) */}
      <main style={{
        flex: 1,
        maxWidth: currentModule === 'graph' ? '100%' : '1800px',
        width: '100%',
        margin: '0 auto',
        padding: currentModule === 'graph' ? '8px 12px' : '16px 20px',
        boxSizing: 'border-box'
      }}>
        {currentModule === 'dashboard' && (
          <Dashboard
            onNavigate={setCurrentModule}
            onOpenWhy={() => setIsWhyOpen(true)}
          />
        )}

        {currentModule === 'cases' && (
          <CasesView
            onNavigate={setCurrentModule}
            onOpenExport={() => setIsExportOpen(true)}
          />
        )}

        {currentModule === 'search' && (
          <SearchView
            onNavigate={setCurrentModule}
            onOpenWhy={() => setIsWhyOpen(true)}
            onNotify={notify}
          />
        )}

        {currentModule === 'actors' && (
          <ActorsView
            onSelectActor={(actor) => setSelectedActor(actor)}
            onNavigateToGraph={(actor) => {
              setFocusedActorId(actor.id);
              setCurrentModule('graph');
            }}
            onOpenWhy={() => setIsWhyOpen(true)}
          />
        )}

        {currentModule === 'evidence' && (
          <EvidenceView
            onOpenWhy={() => setIsWhyOpen(true)}
            selectedEvidenceId={selectedEvidenceId}
          />
        )}

        {currentModule === 'trackers' && (
          <TrackersView
            onNavigate={setCurrentModule}
            onOpenWhy={() => setIsWhyOpen(true)}
            onNotify={notify}
          />
        )}

        {currentModule === 'graph' && (
          <GraphView
            onOpenWhy={() => setIsWhyOpen(true)}
            onSelectActor={(actor) => setSelectedActor(actor)}
            onNavigate={setCurrentModule}
            focusedActorId={focusedActorId}
          />
        )}

        {currentModule === 'timeline' && (
          <TimelineView
            onNavigateToEvidence={(evId) => {
              setSelectedEvidenceId(evId);
              setCurrentModule('evidence');
            }}
            onOpenWhy={() => setIsWhyOpen(true)}
          />
        )}

        {currentModule === 'cite' && (
          <CiteView
            onOpenWhy={() => setIsWhyOpen(true)}
          />
        )}

        {currentModule === 'bti' && (
          <BtiView
            onOpenWhy={() => setIsWhyOpen(true)}
          />
        )}

        {currentModule === 'ptrw' && (
          <PtrwView
            onOpenWhy={() => setIsWhyOpen(true)}
          />
        )}

        {currentModule === 'fusion' && (
          <FusionView
            onOpenWhy={() => setIsWhyOpen(true)}
          />
        )}

        {currentModule === 'agent' && (
          <AgentOrchestrator
            onOpenWhy={() => setIsWhyOpen(true)}
            onNotify={notify}
          />
        )}

        {currentModule === 'reports' && (
          <ReportsView
            onNotify={notify}
            onOpenWhy={() => setIsWhyOpen(true)}
          />
        )}
      </main>

      {/* FOOTER */}
      {currentModule !== 'graph' && (
        <AppFooter />
      )}

      {/* GLOBAL MODALS */}
      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={(mod, id) => {
          setCurrentModule(mod);
          if (id && mod === 'actors') {
            const actor = MOCK_PERSONAS.find(p => p.id === id);
            if (actor) setSelectedActor(actor);
          } else if (id && mod === 'evidence') {
            setSelectedEvidenceId(id);
          }
          setIsSearchOpen(false);
        }}
      />

      <WhyPanel
        isOpen={isWhyOpen}
        onClose={() => setIsWhyOpen(false)}
      />

      <ActorDossierDrawer
        actor={selectedActor}
        onClose={() => setSelectedActor(null)}
        onViewInGraph={(actor) => {
          setFocusedActorId(actor.id);
          setSelectedActor(null);
          setCurrentModule('graph');
        }}
        onViewInCite={() => {
          setSelectedActor(null);
          setCurrentModule('cite');
        }}
        onViewInBti={() => {
          setSelectedActor(null);
          setCurrentModule('bti');
        }}
      />

      <QuickExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
        onExport={(fmt) => {
          notify(`Forensic dossier exported as ${fmt.toUpperCase()}`);
          setIsExportOpen(false);
        }}
      />

      {toastMessage && (
        <Toast
          message={toastMessage}
          onClose={() => setToastMessage(null)}
        />
      )}
    </div>
  );
};
