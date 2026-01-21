import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="border-t border-border/40 mt-16 py-8 bg-[#0F172A]">
      <div className="container mx-auto px-4 text-center">
        <div className="text-2xl font-bold mb-2">
          <span className="text-primary">GUTS</span>
          <span className="text-foreground"> NEWS</span>
        </div>
        <p className="text-muted-foreground text-sm mb-4">
          Ваш источник актуальной информации о киберспортивных турнирах и командах
        </p>
        <a 
          href="https://t.me/gutsnews" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
        >
          <Icon name="Send" size={20} />
          Подписаться на Telegram
        </a>
      </div>
    </footer>
  );
};

export default Footer;
