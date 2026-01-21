export type Section = 'home' | 'matches' | 'tournaments' | 'guts-ranking' | 'mlt-ranking' | 'teams' | 'players' | 'news';

export const mockMatches = [
  { id: 1, team1: 'Natus Vincere', team2: 'FaZe Clan', score: '2:1', tournament: 'IEM Katowice 2026', time: '19:00', date: '22.01.2026', status: 'live' },
  { id: 2, team1: 'Team Vitality', team2: 'G2 Esports', score: '1:1', tournament: 'BLAST Premier', time: '21:30', date: '22.01.2026', status: 'live' },
  { id: 3, team1: 'Heroic', team2: 'ENCE', score: '-:-', tournament: 'ESL Pro League', time: '15:00', date: '23.01.2026', status: 'upcoming' },
  { id: 4, team1: 'Cloud9', team2: 'Astralis', score: '-:-', tournament: 'IEM Katowice 2026', time: '17:30', date: '23.01.2026', status: 'upcoming' },
];

export const mockNews = [
  { id: 1, title: 'Natus Vincere выходят в полуфинал IEM Katowice', category: 'Результаты', time: '2 часа назад', image: '/placeholder.svg' },
  { id: 2, title: 'FaZe Clan анонсировали нового тренера перед турниром', category: 'Трансферы', time: '5 часов назад', image: '/placeholder.svg' },
  { id: 3, title: 'Расписание плей-офф BLAST Premier Spring 2026', category: 'Турниры', time: '1 день назад', image: '/placeholder.svg' },
];

export const mockTeamsRanking = [
  { rank: 1, team: 'Natus Vincere', points: 1000, change: 0, logo: '🏆', roster: ['s1mple', 'electroNic', 'Perfecto', 'b1t', 'sdy'] },
  { rank: 2, team: 'FaZe Clan', points: 950, change: 1, logo: '⭐', roster: ['rain', 'karrigan', 'Twistzz', 'ropz', 'broky'] },
  { rank: 3, team: 'Team Vitality', points: 920, change: -1, logo: '🐝', roster: ['ZywOo', 'apEX', 'Magisk', 'dupreeh', 'Spinx'] },
  { rank: 4, team: 'G2 Esports', points: 880, change: 2, logo: '⚡', roster: ['NiKo', 'huNter-', 'jks', 'm0NESY', 'HooXi'] },
  { rank: 5, team: 'Heroic', points: 860, change: -1, logo: '🦁', roster: ['cadiaN', 'stavn', 'TeSeS', 'sjuush', 'jabbi'] },
];

export const mockMLTRanking = [
  { rank: 1, team: 'Team Spirit', points: 890, change: 0, logo: '👻', roster: ['chopper', 'magixx', 'sh1ro', 'w0nderful', 'donk'] },
  { rank: 2, team: 'Cloud9', points: 850, change: 1, logo: '☁️', roster: ['Ax1Le', 'interz', 'HObbit', 'nafany', 'Boombl4'] },
  { rank: 3, team: 'ENCE', points: 820, change: -1, logo: '❄️', roster: ['dycha', 'Snappi', 'NertZ', 'Maden', 'SunPayus'] },
  { rank: 4, team: 'Astralis', points: 800, change: 0, logo: '⭐', roster: ['blameF', 'Staehr', 'br0', 'Buzz', 'dev1ce'] },
];

export const mockPlayers = [
  { rank: 1, name: 's1mple', team: 'Natus Vincere', rating: 1.35, kills: 1250, headshots: '55%' },
  { rank: 2, name: 'ZywOo', team: 'Team Vitality', rating: 1.32, kills: 1180, headshots: '52%' },
  { rank: 3, name: 'NiKo', team: 'G2 Esports', rating: 1.28, kills: 1160, headshots: '54%' },
  { rank: 4, name: 'sh1ro', team: 'Team Spirit', rating: 1.26, kills: 1140, headshots: '51%' },
  { rank: 5, name: 'm0NESY', team: 'G2 Esports', rating: 1.25, kills: 1120, headshots: '58%' },
];

export const mockTournaments = [
  { id: 1, name: 'IEM Katowice 2026', prize: '$1,000,000', status: 'Активен', teams: 24, startDate: '15.01.2026', endDate: '30.01.2026' },
  { id: 2, name: 'BLAST Premier Spring 2026', prize: '$425,000', status: 'Активен', teams: 12, startDate: '20.01.2026', endDate: '28.01.2026' },
  { id: 3, name: 'ESL Pro League S19', prize: '$850,000', status: 'Завершен', teams: 32, startDate: '01.12.2025', endDate: '22.12.2025' },
];

export const allTeams = [
  { id: 1, name: 'Natus Vincere', logo: '🏆', region: 'Europe', rank: 1, roster: ['s1mple', 'electroNic', 'Perfecto', 'b1t', 'sdy'] },
  { id: 2, name: 'FaZe Clan', logo: '⭐', region: 'Europe', rank: 2, roster: ['rain', 'karrigan', 'Twistzz', 'ropz', 'broky'] },
  { id: 3, name: 'Team Vitality', logo: '🐝', region: 'Europe', rank: 3, roster: ['ZywOo', 'apEX', 'Magisk', 'dupreeh', 'Spinx'] },
  { id: 4, name: 'G2 Esports', logo: '⚡', region: 'Europe', rank: 4, roster: ['NiKo', 'huNter-', 'jks', 'm0NESY', 'HooXi'] },
  { id: 5, name: 'Team Spirit', logo: '👻', region: 'Europe', rank: 6, roster: ['chopper', 'magixx', 'sh1ro', 'w0nderful', 'donk'] },
  { id: 6, name: 'Cloud9', logo: '☁️', region: 'Europe', rank: 7, roster: ['Ax1Le', 'interz', 'HObbit', 'nafany', 'Boombl4'] },
];
