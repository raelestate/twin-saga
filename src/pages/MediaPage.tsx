import { Footer } from '../components/Footer';
import { Header } from '../components/header/Header';
import { Navbar } from '../components/navbar/Navbar';
import { MediaSection } from '../features/media';

const navLinks = [
  { label: 'Main', href: '/' },
  { label: 'Download', href: '/download' },
  { label: 'News', href: '/news' },
  { label: 'Changelog', href: '/changelog' },
  { label: 'Events', href: '/events' },
  { label: 'Ranking', href: '/ranking' },
  { label: 'Media', href: '/media' },
  { label: 'Wiki', href: '/wiki' },
];

export function MediaPage() {
  return (
    <>
      <Header />
      <Navbar links={navLinks} />
      <MediaSection />
      <Footer />
    </>
  );
}

export default MediaPage;
