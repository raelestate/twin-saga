import type { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Sidebar: FC<SidebarProps> = ({ isOpen, onClose, children }) => {
  if (typeof document === 'undefined') return null; 

  return createPortal(
    <div
      className={`fixed inset-0 z-50 flex ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300`}
    >
      <div
        className="fixed inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative z-10 w-64 bg-gray-900 text-white p-6 flex flex-col gap-4">
        {children}
      </div>
    </div>,
    document.body
  );
};
