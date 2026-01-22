import { Link } from 'react-router-dom';
import { useAuth } from '../store/AuthContext';

export function Footer() {
  const { isAuthenticated, logout, user } = useAuth();

  const navigationLinks = [
    { name: 'Home', href: '/' },
    { name: 'News', href: '/news' },
    { name: 'Events', href: '/events' },
    { name: 'Ranking', href: '/ranking' },
    { name: 'Media', href: '/media' },
    { name: 'Wiki', href: '/wiki' },
  ];

  const downloadLinks = [
    { name: 'Windows', href: '#download-windows' },
    { name: 'macOS', href: '#download-macos' },
    { name: 'Linux', href: '#download-linux' },
  ];

  return (
    <footer className="bg-black border-t border-yellow-400 border-opacity-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo Section */}
          <div className="flex flex-col items-start">
            <div className="mb-2">
              <img src="src/assets/images/LargerResLogo.png" alt="Twin Saga Logo" className="h-auto w-100 object-contain"/>
            </div>
            <p className="text-gray-400 text-sm">
              Experience the world of Twin Saga. Magic, adventure, and heroes await.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-yellow-400 font-cinzel text-lg mb-4 drop-shadow-lg">
              Navigation
            </h3>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Download Buttons */}
          <div>
            <h3 className="text-yellow-400 font-cinzel text-lg mb-4 drop-shadow-lg">
              Download
            </h3>
            <ul className="space-y-2">
              {downloadLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-yellow-400 transition-colors text-sm flex items-center"
                  >
                    <span className="mr-2">📥</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Authentication Section */}
          <div>
            <h3 className="text-yellow-400 font-cinzel text-lg mb-4 drop-shadow-lg">
              Account
            </h3>
            {isAuthenticated ? (
              <div className="space-y-2">
                <p className="text-gray-400 text-sm">
                  Welcome, <span className="text-yellow-400">{user?.username}</span>!
                </p>
                <div className="space-y-2">
                  <Link
                    to="/dashboard"
                    className="block text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                  >
                    Go to Dashboard
                  </Link>
                  <button
                    onClick={logout}
                    className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                <Link
                  to="/login"
                  className="block text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                >
                  Login
                </Link>
                <Link
                  to="/login"
                  className="block text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-yellow-400 border-opacity-20 my-8"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-500 text-sm">
            &copy; 2026 Twin Saga. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Published and developed by DevHubPH. All trademarks and copyrights belong to their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
}
