import type { ReactNode } from 'react';

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-900 via-black to-gray-950">
      <div className="max-w-7xl mx-auto px-4 py-10">
        {children}
      </div>
    </div>
  );
}
