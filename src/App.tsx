import React, { useState } from 'react';
import { Header } from './components/Header';
import { LandingPage } from './pages/LandingPage';
import { Dashboard } from './pages/Dashboard';
import { SearchInterface } from './pages/SearchInterface';
import { ArtifactViewer } from './pages/ArtifactViewer';
import { VirtualTour } from './pages/VirtualTour';
import { DevelopmentPlan } from './pages/DevelopmentPlan';
import { ReligiousPlaces } from './pages/ReligiousPlaces';

export type Page = 'landing' | 'dashboard' | 'search' | 'artifacts' | 'tours' | 'religious' | 'development';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage onNavigate={setCurrentPage} />;
      case 'dashboard':
        return <Dashboard onNavigate={setCurrentPage} />;
      case 'search':
        return <SearchInterface onNavigate={setCurrentPage} />;
      case 'artifacts':
        return <ArtifactViewer onNavigate={setCurrentPage} />;
      case 'tours':
        return <VirtualTour onNavigate={setCurrentPage} />;
      case 'religious':
        return <ReligiousPlaces onNavigate={setCurrentPage} />;
      case 'development':
        return <DevelopmentPlan onNavigate={setCurrentPage} />;
      default:
        return <LandingPage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-teal-50">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderPage()}
    </div>
  );
}

export default App;