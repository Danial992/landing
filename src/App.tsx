import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProblemsSection from './components/ProblemsSection';
import SolutionSection from './components/SolutionSection';
import ProgramSection from './components/ProgramSection';
import CaseStudies from './components/CaseStudies';
import SpeakerSection from './components/SpeakerSection';
import InvestmentProjects from './components/InvestmentProjects';
import UrgencySection from './components/UrgencySection';
import GuaranteesSection from './components/GuaranteesSection';
import ContactForm from './components/ContactForm';
import FinalCTA from './components/FinalCTA';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ProblemsSection />
      <SolutionSection />
      <ProgramSection />
      <CaseStudies />
      <SpeakerSection />
      <InvestmentProjects />
      <UrgencySection />
      <GuaranteesSection />
      <ContactForm /> {/* 👈 ДОБАВИЛИ форму сюда */}
      <FinalCTA />
    </div>
  );
}

export default App;
