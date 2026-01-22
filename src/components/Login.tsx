import type { FC } from 'react';
import { FaSignOutAlt } from 'react-icons/fa';

interface LoginLinkProps {
  href?: string;
  className?: string;
}

export const LoginLink: FC<LoginLinkProps> = ({ href = '/login', className = '' }) => {
  
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 font-cinzel text-yellow-400 hover:text-yellow-300 text-lg ${className}`}
    >
      <span>Login</span>
      <FaSignOutAlt className="w-5 h-5" aria-hidden="true" />
    </a>
  );
};
