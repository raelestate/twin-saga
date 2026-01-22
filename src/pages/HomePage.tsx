import { ChangelogSection } from '../components/changelog/ChangelogSection';
import { Footer } from '../components/Footer';
import { Header } from '../components/header/Header';
import { HeroSection } from '../components/herosection/HeroSection';
import { Navbar } from '../components/navbar/Navbar';
import { CharacterClassesSection } from '../features/classes';
import { DownloadSection } from '../features/download';
import { EventsSection } from '../features/events';
import { MediaSection } from '../features/media';
import { NewsSection } from '../features/news';
import { RankingSection } from '../features/ranking';
import { WikiSection } from '../features/wiki';

const links = [
  {label: 'Main', href: '/'},
  {label: 'Download', href: '/download'},
  {label: 'News', href: '/news'},
  {label: 'Changelog', href: '/changelog'},
  {label: 'Events', href: '/events'},
  {label: 'Ranking', href: '/ranking'},
  {label: 'Media', href: '/media'},
  {label: 'Wiki', href: '/wiki'},
];

function HomePage() {

  return (
    <>
      <Header />
      <Navbar links={links}/>
      <HeroSection rotatingCircleSrc="images/Dr-Strange-Magic-Circle-Mystical-Energy-Effect-PNG.png" />
      <DownloadSection />
      <NewsSection />
      <ChangelogSection />
      <EventsSection />
      <RankingSection />
      <CharacterClassesSection />
      <MediaSection />
      <WikiSection />
      <Footer />
    </>
  )
}

export default HomePage;
