import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

type Section = 'home' | 'matches' | 'tournaments' | 'guts-ranking' | 'mlt-ranking' | 'teams' | 'players' | 'news';

const mockMatches = [
  { id: 1, team1: 'Natus Vincere', team2: 'FaZe Clan', score: '2:1', tournament: 'IEM Katowice 2026', time: '19:00', date: '22.01.2026', status: 'live' },
  { id: 2, team1: 'Team Vitality', team2: 'G2 Esports', score: '1:1', tournament: 'BLAST Premier', time: '21:30', date: '22.01.2026', status: 'live' },
  { id: 3, team1: 'Heroic', team2: 'ENCE', score: '-:-', tournament: 'ESL Pro League', time: '15:00', date: '23.01.2026', status: 'upcoming' },
  { id: 4, team1: 'Cloud9', team2: 'Astralis', score: '-:-', tournament: 'IEM Katowice 2026', time: '17:30', date: '23.01.2026', status: 'upcoming' },
];

const mockNews = [
  { id: 1, title: 'Natus Vincere выходят в полуфинал IEM Katowice', category: 'Результаты', time: '2 часа назад', image: '/placeholder.svg' },
  { id: 2, title: 'FaZe Clan анонсировали нового тренера перед турниром', category: 'Трансферы', time: '5 часов назад', image: '/placeholder.svg' },
  { id: 3, title: 'Расписание плей-офф BLAST Premier Spring 2026', category: 'Турниры', time: '1 день назад', image: '/placeholder.svg' },
];

const mockTeamsRanking = [
  { rank: 1, team: 'Natus Vincere', points: 1000, change: 0, logo: '🏆', roster: ['s1mple', 'electroNic', 'Perfecto', 'b1t', 'sdy'] },
  { rank: 2, team: 'FaZe Clan', points: 950, change: 1, logo: '⭐', roster: ['rain', 'karrigan', 'Twistzz', 'ropz', 'broky'] },
  { rank: 3, team: 'Team Vitality', points: 920, change: -1, logo: '🐝', roster: ['ZywOo', 'apEX', 'Magisk', 'dupreeh', 'Spinx'] },
  { rank: 4, team: 'G2 Esports', points: 880, change: 2, logo: '⚡', roster: ['NiKo', 'huNter-', 'jks', 'm0NESY', 'HooXi'] },
  { rank: 5, team: 'Heroic', points: 860, change: -1, logo: '🦁', roster: ['cadiaN', 'stavn', 'TeSeS', 'sjuush', 'jabbi'] },
];

const mockMLTRanking = [
  { rank: 1, team: 'Team Spirit', points: 890, change: 0, logo: '👻', roster: ['chopper', 'magixx', 'sh1ro', 'w0nderful', 'donk'] },
  { rank: 2, team: 'Cloud9', points: 850, change: 1, logo: '☁️', roster: ['Ax1Le', 'interz', 'HObbit', 'nafany', 'Boombl4'] },
  { rank: 3, team: 'ENCE', points: 820, change: -1, logo: '❄️', roster: ['dycha', 'Snappi', 'NertZ', 'Maden', 'SunPayus'] },
  { rank: 4, team: 'Astralis', points: 800, change: 0, logo: '⭐', roster: ['blameF', 'Staehr', 'br0', 'Buzz', 'dev1ce'] },
];

const mockPlayers = [
  { rank: 1, name: 's1mple', team: 'Natus Vincere', rating: 1.35, kills: 1250, headshots: '55%' },
  { rank: 2, name: 'ZywOo', team: 'Team Vitality', rating: 1.32, kills: 1180, headshots: '52%' },
  { rank: 3, name: 'NiKo', team: 'G2 Esports', rating: 1.28, kills: 1160, headshots: '54%' },
  { rank: 4, name: 'sh1ro', team: 'Team Spirit', rating: 1.26, kills: 1140, headshots: '51%' },
  { rank: 5, name: 'm0NESY', team: 'G2 Esports', rating: 1.25, kills: 1120, headshots: '58%' },
];

const mockTournaments = [
  { id: 1, name: 'IEM Katowice 2026', prize: '$1,000,000', status: 'Активен', teams: 24, startDate: '15.01.2026', endDate: '30.01.2026' },
  { id: 2, name: 'BLAST Premier Spring 2026', prize: '$425,000', status: 'Активен', teams: 12, startDate: '20.01.2026', endDate: '28.01.2026' },
  { id: 3, name: 'ESL Pro League S19', prize: '$850,000', status: 'Завершен', teams: 32, startDate: '01.12.2025', endDate: '22.12.2025' },
];

const allTeams = [
  { id: 1, name: 'Natus Vincere', logo: '🏆', region: 'Europe', rank: 1, roster: ['s1mple', 'electroNic', 'Perfecto', 'b1t', 'sdy'] },
  { id: 2, name: 'FaZe Clan', logo: '⭐', region: 'Europe', rank: 2, roster: ['rain', 'karrigan', 'Twistzz', 'ropz', 'broky'] },
  { id: 3, name: 'Team Vitality', logo: '🐝', region: 'Europe', rank: 3, roster: ['ZywOo', 'apEX', 'Magisk', 'dupreeh', 'Spinx'] },
  { id: 4, name: 'G2 Esports', logo: '⚡', region: 'Europe', rank: 4, roster: ['NiKo', 'huNter-', 'jks', 'm0NESY', 'HooXi'] },
  { id: 5, name: 'Team Spirit', logo: '👻', region: 'Europe', rank: 6, roster: ['chopper', 'magixx', 'sh1ro', 'w0nderful', 'donk'] },
  { id: 6, name: 'Cloud9', logo: '☁️', region: 'Europe', rank: 7, roster: ['Ax1Le', 'interz', 'HObbit', 'nafany', 'Boombl4'] },
];

const Index = () => {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [selectedTeam, setSelectedTeam] = useState<typeof mockTeamsRanking[0] | null>(null);
  const [selectedPlayer, setSelectedPlayer] = useState<typeof mockPlayers[0] | null>(null);

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
    <div className="min-h-screen bg-background">
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
                  onClick={() => {
                    setActiveSection(item.id);
                    setSelectedTeam(null);
                    setSelectedPlayer(null);
                  }}
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

      <main className="container mx-auto px-4 py-8">
        {activeSection === 'home' && (
          <div className="space-y-8 animate-fade-in">
            <section>
              <h2 className="text-3xl font-bold mb-6 text-primary">Топ матчи</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {mockMatches.slice(0, 2).map((match) => (
                  <Card key={match.id} className="hover:border-primary/50 transition-all hover-scale cursor-pointer">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant={match.status === 'live' ? 'destructive' : 'secondary'}>
                          {match.status === 'live' ? '🔴 LIVE' : 'Скоро'}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{match.tournament}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex-1 text-center">
                          <div className="text-lg font-semibold">{match.team1}</div>
                        </div>
                        <div className="px-6">
                          <div className="text-3xl font-bold text-primary">{match.score}</div>
                        </div>
                        <div className="flex-1 text-center">
                          <div className="text-lg font-semibold">{match.team2}</div>
                        </div>
                      </div>
                      <div className="text-center mt-4 text-sm text-muted-foreground">
                        {match.date} в {match.time}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-primary">Предстоящие матчи</h2>
              <div className="grid gap-3">
                {mockMatches.filter(m => m.status === 'upcoming').map((match) => (
                  <Card key={match.id} className="hover:border-primary/50 transition-all cursor-pointer">
                    <CardContent className="py-4">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="font-semibold">{match.team1}</div>
                        </div>
                        <div className="text-center px-4">
                          <div className="text-sm text-muted-foreground">{match.time}</div>
                          <div className="text-xs text-muted-foreground">{match.date}</div>
                        </div>
                        <div className="flex-1 text-right">
                          <div className="font-semibold">{match.team2}</div>
                        </div>
                        <Badge variant="outline" className="ml-4">{match.tournament}</Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-primary">Последние новости</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {mockNews.map((news) => (
                  <Card key={news.id} className="overflow-hidden hover:border-primary/50 transition-all hover-scale cursor-pointer">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                      <img src={news.image} alt={news.title} className="w-full h-full object-cover" />
                      <Badge className="absolute top-2 left-2">{news.category}</Badge>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-2 line-clamp-2">{news.title}</h3>
                      <p className="text-sm text-muted-foreground">{news.time}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeSection === 'matches' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold text-primary">Все матчи</h2>
            <Tabs defaultValue="all">
              <TabsList>
                <TabsTrigger value="all">Все</TabsTrigger>
                <TabsTrigger value="live">Live</TabsTrigger>
                <TabsTrigger value="upcoming">Предстоящие</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="space-y-3 mt-6">
                {mockMatches.map((match) => (
                  <Card key={match.id} className="hover:border-primary/50 transition-all">
                    <CardContent className="py-4">
                      <div className="flex items-center justify-between gap-4 flex-wrap">
                        <Badge variant={match.status === 'live' ? 'destructive' : 'secondary'} className="w-20">
                          {match.status === 'live' ? '🔴 LIVE' : 'Скоро'}
                        </Badge>
                        <div className="flex-1 min-w-[150px]">
                          <div className="font-semibold">{match.team1}</div>
                        </div>
                        <div className="text-center px-4">
                          <div className="text-2xl font-bold text-primary">{match.score}</div>
                          <div className="text-xs text-muted-foreground mt-1">{match.time}</div>
                        </div>
                        <div className="flex-1 min-w-[150px] text-right">
                          <div className="font-semibold">{match.team2}</div>
                        </div>
                        <div className="min-w-[200px] text-right">
                          <Badge variant="outline">{match.tournament}</Badge>
                          <div className="text-xs text-muted-foreground mt-1">{match.date}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              <TabsContent value="live" className="space-y-3 mt-6">
                {mockMatches.filter(m => m.status === 'live').map((match) => (
                  <Card key={match.id} className="hover:border-primary/50 transition-all">
                    <CardContent className="py-4">
                      <div className="flex items-center justify-between gap-4 flex-wrap">
                        <Badge variant="destructive" className="w-20">🔴 LIVE</Badge>
                        <div className="flex-1 min-w-[150px]">
                          <div className="font-semibold">{match.team1}</div>
                        </div>
                        <div className="text-center px-4">
                          <div className="text-2xl font-bold text-primary">{match.score}</div>
                        </div>
                        <div className="flex-1 min-w-[150px] text-right">
                          <div className="font-semibold">{match.team2}</div>
                        </div>
                        <div className="min-w-[200px] text-right">
                          <Badge variant="outline">{match.tournament}</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              <TabsContent value="upcoming" className="space-y-3 mt-6">
                {mockMatches.filter(m => m.status === 'upcoming').map((match) => (
                  <Card key={match.id} className="hover:border-primary/50 transition-all">
                    <CardContent className="py-4">
                      <div className="flex items-center justify-between gap-4 flex-wrap">
                        <Badge variant="secondary" className="w-20">Скоро</Badge>
                        <div className="flex-1 min-w-[150px]">
                          <div className="font-semibold">{match.team1}</div>
                        </div>
                        <div className="text-center px-4">
                          <div className="text-sm text-muted-foreground">{match.time}</div>
                          <div className="text-xs text-muted-foreground">{match.date}</div>
                        </div>
                        <div className="flex-1 min-w-[150px] text-right">
                          <div className="font-semibold">{match.team2}</div>
                        </div>
                        <div className="min-w-[200px] text-right">
                          <Badge variant="outline">{match.tournament}</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        )}

        {activeSection === 'tournaments' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold text-primary">Турниры</h2>
            <Tabs defaultValue="active">
              <TabsList>
                <TabsTrigger value="active">Активные</TabsTrigger>
                <TabsTrigger value="finished">Завершенные</TabsTrigger>
              </TabsList>
              <TabsContent value="active" className="mt-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {mockTournaments.filter(t => t.status === 'Активен').map((tournament) => (
                    <Card key={tournament.id} className="hover:border-primary/50 transition-all hover-scale cursor-pointer">
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                          <span>{tournament.name}</span>
                          <Badge variant="destructive">Live</Badge>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Призовой фонд:</span>
                            <span className="font-semibold text-primary">{tournament.prize}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Команд:</span>
                            <span className="font-semibold">{tournament.teams}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Период:</span>
                            <span className="text-sm">{tournament.startDate} - {tournament.endDate}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="finished" className="mt-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {mockTournaments.filter(t => t.status === 'Завершен').map((tournament) => (
                    <Card key={tournament.id} className="hover:border-primary/50 transition-all hover-scale cursor-pointer">
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                          <span>{tournament.name}</span>
                          <Badge variant="secondary">Завершен</Badge>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Призовой фонд:</span>
                            <span className="font-semibold text-primary">{tournament.prize}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Команд:</span>
                            <span className="font-semibold">{tournament.teams}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Период:</span>
                            <span className="text-sm">{tournament.startDate} - {tournament.endDate}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        )}

        {activeSection === 'guts-ranking' && !selectedTeam && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold text-primary">GUTS Рейтинг команд</h2>
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-16">#</TableHead>
                      <TableHead>Команда</TableHead>
                      <TableHead className="text-right">Очки</TableHead>
                      <TableHead className="text-right">Изменение</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockTeamsRanking.map((team) => (
                      <TableRow 
                        key={team.rank} 
                        className="cursor-pointer hover:bg-primary/10"
                        onClick={() => setSelectedTeam(team)}
                      >
                        <TableCell className="font-bold">{team.rank}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{team.logo}</span>
                            <span className="font-semibold">{team.team}</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right font-semibold text-primary">{team.points}</TableCell>
                        <TableCell className="text-right">
                          {team.change === 0 ? (
                            <span className="text-muted-foreground">-</span>
                          ) : team.change > 0 ? (
                            <span className="text-green-500 flex items-center justify-end gap-1">
                              <Icon name="TrendingUp" size={16} />
                              {team.change}
                            </span>
                          ) : (
                            <span className="text-red-500 flex items-center justify-end gap-1">
                              <Icon name="TrendingDown" size={16} />
                              {Math.abs(team.change)}
                            </span>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'guts-ranking' && selectedTeam && (
          <div className="space-y-6 animate-fade-in">
            <Button variant="ghost" onClick={() => setSelectedTeam(null)} className="mb-4">
              <Icon name="ArrowLeft" size={20} className="mr-2" />
              Назад к рейтингу
            </Button>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-4">
                  <span className="text-4xl">{selectedTeam.logo}</span>
                  <div>
                    <div className="text-3xl">{selectedTeam.team}</div>
                    <div className="text-sm text-muted-foreground font-normal">
                      #{selectedTeam.rank} в GUTS рейтинге • {selectedTeam.points} очков
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-bold mb-4">Состав команды</h3>
                <div className="grid gap-3">
                  {selectedTeam.roster.map((player, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                        {player[0]}
                      </div>
                      <span className="font-semibold text-lg">{player}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'mlt-ranking' && !selectedTeam && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold text-primary">MLT Рейтинг команд</h2>
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-16">#</TableHead>
                      <TableHead>Команда</TableHead>
                      <TableHead className="text-right">Очки MLT</TableHead>
                      <TableHead className="text-right">Изменение</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockMLTRanking.map((team) => (
                      <TableRow 
                        key={team.rank} 
                        className="cursor-pointer hover:bg-primary/10"
                        onClick={() => setSelectedTeam(team)}
                      >
                        <TableCell className="font-bold">{team.rank}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{team.logo}</span>
                            <span className="font-semibold">{team.team}</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right font-semibold text-primary">{team.points}</TableCell>
                        <TableCell className="text-right">
                          {team.change === 0 ? (
                            <span className="text-muted-foreground">-</span>
                          ) : team.change > 0 ? (
                            <span className="text-green-500 flex items-center justify-end gap-1">
                              <Icon name="TrendingUp" size={16} />
                              {team.change}
                            </span>
                          ) : (
                            <span className="text-red-500 flex items-center justify-end gap-1">
                              <Icon name="TrendingDown" size={16} />
                              {Math.abs(team.change)}
                            </span>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'mlt-ranking' && selectedTeam && (
          <div className="space-y-6 animate-fade-in">
            <Button variant="ghost" onClick={() => setSelectedTeam(null)} className="mb-4">
              <Icon name="ArrowLeft" size={20} className="mr-2" />
              Назад к рейтингу
            </Button>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-4">
                  <span className="text-4xl">{selectedTeam.logo}</span>
                  <div>
                    <div className="text-3xl">{selectedTeam.team}</div>
                    <div className="text-sm text-muted-foreground font-normal">
                      #{selectedTeam.rank} в MLT рейтинге • {selectedTeam.points} очков
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-bold mb-4">Состав команды</h3>
                <div className="grid gap-3">
                  {selectedTeam.roster.map((player, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                        {player[0]}
                      </div>
                      <span className="font-semibold text-lg">{player}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'teams' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold text-primary">Все команды</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {allTeams.map((team) => (
                <Card key={team.id} className="hover:border-primary/50 transition-all hover-scale cursor-pointer">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <span className="text-3xl">{team.logo}</span>
                      <div>
                        <div>{team.name}</div>
                        <div className="text-sm text-muted-foreground font-normal">
                          {team.region} • #{team.rank}
                        </div>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-muted-foreground mb-2">Состав:</div>
                    <div className="space-y-1">
                      {team.roster.slice(0, 3).map((player, idx) => (
                        <div key={idx} className="text-sm">{player}</div>
                      ))}
                      {team.roster.length > 3 && (
                        <div className="text-sm text-primary">+{team.roster.length - 3} игроков</div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'players' && !selectedPlayer && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold text-primary">Топ игроки</h2>
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-16">#</TableHead>
                      <TableHead>Игрок</TableHead>
                      <TableHead>Команда</TableHead>
                      <TableHead className="text-right">Рейтинг</TableHead>
                      <TableHead className="text-right">Убийства</TableHead>
                      <TableHead className="text-right">HS%</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockPlayers.map((player) => (
                      <TableRow 
                        key={player.rank} 
                        className="cursor-pointer hover:bg-primary/10"
                        onClick={() => setSelectedPlayer(player)}
                      >
                        <TableCell className="font-bold">{player.rank}</TableCell>
                        <TableCell className="font-semibold">{player.name}</TableCell>
                        <TableCell className="text-muted-foreground">{player.team}</TableCell>
                        <TableCell className="text-right font-semibold text-primary">{player.rating}</TableCell>
                        <TableCell className="text-right">{player.kills}</TableCell>
                        <TableCell className="text-right">{player.headshots}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'players' && selectedPlayer && (
          <div className="space-y-6 animate-fade-in">
            <Button variant="ghost" onClick={() => setSelectedPlayer(null)} className="mb-4">
              <Icon name="ArrowLeft" size={20} className="mr-2" />
              Назад к списку
            </Button>
            <Card>
              <CardHeader>
                <CardTitle>
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center text-3xl font-bold text-primary">
                      {selectedPlayer.name[0]}
                    </div>
                    <div>
                      <div className="text-3xl">{selectedPlayer.name}</div>
                      <div className="text-sm text-muted-foreground font-normal">
                        {selectedPlayer.team} • #{selectedPlayer.rank} в мире
                      </div>
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm text-muted-foreground">Рейтинг</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-primary">{selectedPlayer.rating}</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm text-muted-foreground">Убийства</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">{selectedPlayer.kills}</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm text-muted-foreground">Хэдшоты</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">{selectedPlayer.headshots}</div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'news' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold text-primary">Последние новости</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...mockNews, ...mockNews].map((news, idx) => (
                <Card key={idx} className="overflow-hidden hover:border-primary/50 transition-all hover-scale cursor-pointer">
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <img src={news.image} alt={news.title} className="w-full h-full object-cover" />
                    <Badge className="absolute top-2 left-2">{news.category}</Badge>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2 text-lg">{news.title}</h3>
                    <p className="text-sm text-muted-foreground">{news.time}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </main>

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
    </div>
  );
};

export default Index;
