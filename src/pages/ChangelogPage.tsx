import { Header } from '../components/header/Header';
import { Navbar } from '../components/navbar/Navbar';
import { ChangelogSection } from '../components/changelog/ChangelogSection';
import { Footer } from '../components/Footer';

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

export function ChangelogPage() {
  return (
    <>
      <Header />
      <Navbar links={navLinks} />
      <ChangelogSection />
      <Footer />
    </>
  );
}

export default ChangelogPage;
