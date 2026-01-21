import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Section } from './mockData';

interface HeaderProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
}

const Header = ({ activeSection, onSectionChange }: HeaderProps) => {
  const navItems: { id: Section; label: string; icon: string }[] = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'matches', label: 'Матчи', icon: 'Swords' },
    { id: 'tournaments', label: 'Турниры', icon: 'Trophy' },
    { id: 'guts-ranking', label: 'GUTS Рейтинг', icon: 'BarChart3' },
    { id: 'mlt-ranking', label: 'MLT Рейтинг', icon: 'Award' },
    { id: 'teams', label: 'Команды', icon: 'Users' },
    { id: 'players', label: 'Топ Игроки', icon: 'User' },
    { id: 'news', label: 'Новости', icon: 'Newspaper' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-[#0F172A] backdrop-blur supports-[backdrop-filter]:bg-[#0F172A]/95">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-3xl font-bold">
              <span className="text-primary">GUTS</span>
              <span className="text-foreground"> NEWS</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? 'default' : 'ghost'}
                onClick={() => onSectionChange(item.id)}
                className="gap-2"
              >
                <Icon name={item.icon} size={18} />
                {item.label}
              </Button>
            ))}
          </nav>
          <a 
            href="https://t.me/gutsnews" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <Icon name="Send" size={20} />
            <span className="hidden sm:inline font-medium">Telegram</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
