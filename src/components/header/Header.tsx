import { type FC, useState } from 'react';
import { Sidebar } from './Sidebar';
import { LoginLink } from '../Login';
import { FaCoins, FaLifeRing } from 'react-icons/fa';
export const Header: FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <header className="bg-gray-900 text-white px-4 py-3 border-b border-b-gray-600">
        <div className="max-w-96xl mx-auto flex justify-between items-center">
          {/* Four-dot button */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Open sidebar"
          >
            {/* Four-dot icon */}
            <div className="grid grid-cols-2 gap-1">
              <span className="block w-2 h-2 bg-yellow-400 rounded-full"></span>
              <span className="block w-2 h-2 bg-yellow-400 rounded-full"></span>
              <span className="block w-2 h-2 bg-yellow-400 rounded-full"></span>
              <span className="block w-2 h-2 bg-yellow-400 rounded-full"></span>
            </div>
          </button>

          {/* Login button */}
          <LoginLink />
        </div>
      </header>

      {/* Sidebar */}
<Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)}>
  <a
    href="/support"
    className="flex items-center gap-3 font-cinzel text-lg font-medium text-yellow-400 hover:text-yellow-300"
  >
    <FaLifeRing className="text-xl" />
    Support
  </a>

  <a
    href="/recharge"
    className="flex items-center gap-3 font-cinzel text-lg font-medium text-yellow-400 hover:text-yellow-300"
  >
    <FaCoins className="text-xl" />
    Recharge
  </a>
</Sidebar>

    </>
  );
};
