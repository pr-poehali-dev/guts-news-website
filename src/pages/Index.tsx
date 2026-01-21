import { useState } from 'react';
import { Section, mockTeamsRanking, mockPlayers } from '@/components/mockData';
import Header from '@/components/Header';
import ContentSections from '@/components/ContentSections';
import Footer from '@/components/Footer';

const Index = () => {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [selectedTeam, setSelectedTeam] = useState<typeof mockTeamsRanking[0] | null>(null);
  const [selectedPlayer, setSelectedPlayer] = useState<typeof mockPlayers[0] | null>(null);

  const handleSectionChange = (section: Section) => {
    setActiveSection(section);
    setSelectedTeam(null);
    setSelectedPlayer(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header activeSection={activeSection} onSectionChange={handleSectionChange} />
      <ContentSections 
        activeSection={activeSection}
        selectedTeam={selectedTeam}
        setSelectedTeam={setSelectedTeam}
        selectedPlayer={selectedPlayer}
        setSelectedPlayer={setSelectedPlayer}
      />
      <Footer />
    </div>
  );
};

export default Index;
