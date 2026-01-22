import { useState, type FC } from 'react';
import { Logo } from '../shared/Logo';
import { NavLink } from './NavLink';
import { Button } from '../Button';
import { FaDiscord, FaYoutube, FaFacebookF } from 'react-icons/fa';
interface NavItem {
    label: string;
    href: string;
}

interface NavbarProps {
    links: NavItem[];
}

export const Navbar: FC<NavbarProps> = ({ links }) => {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <nav className="bg-gray-900">
            <div className="mx-auto max-w-96xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Center: Logo */}
                    <div className="flex justify-center md:justify-center relative z-10">
                        <Logo size="lg" href="/" />
                    </div>

                    {/* Left: Links (desktop only) */}
                    <div className="hidden md:flex md:gap-x-10 flex-wrap">
                        {links.map((link) => (
                            <NavLink key={link.href} href={link.href}>
                                {link.label}
                            </NavLink>
                        ))}
                    </div>
                    {/* Social icons */}
                    <div className="flex items-center gap-3 ml-6">
                        <a
                            href="https://discord.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Discord"
                            className="text-yellow-400 hover:text-yellow-300"
                        >
                            <FaDiscord className="w-5 h-5" />
                        </a>
                        <a
                            href="https://youtube.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="YouTube"
                            className="text-yellow-400 hover:text-yellow-300"
                        >
                            <FaYoutube className="w-5 h-5" />
                        </a>
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            className="text-yellow-400 hover:text-yellow-300"
                        >
                            <FaFacebookF className="w-5 h-5" />
                        </a>
                    </div>
                    {/* Right: Start Button + Mobile Hamburger */}
                    <div className="flex items-center gap-2">
                        {/* Start Button hidden on mobile optional */}
                        <div className="hidden md:block">
                            <Button class="text-white cursor-pointer w-max">Start</Button>
                        </div>

                        {/* Hamburger Menu Button */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            type="button"
                            className="inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white md:hidden"
                            aria-controls="mobile-menu"
                            aria-expanded={mobileOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {mobileOpen ? (
                                // X icon
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                // Hamburger icon
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3 flex flex-col gap-y-1">
                        {links.map((link) => (
                            <NavLink
                                key={link.href}
                                href={link.href}
                                className="block px-3 py-2 rounded-md uppercase font-bold"
                            >
                                {link.label}
                            </NavLink>
                        ))}
                        <div className="flex items-center gap-3 mt-2">
                            <a href="https://discord.com" aria-label="Discord" className="text-yellow-400 hover:text-yellow-300">
                                <FaDiscord className="w-5 h-5" />
                            </a>
                            <a href="https://youtube.com" aria-label="YouTube" className="text-yellow-400 hover:text-yellow-300">
                                <FaYoutube className="w-5 h-5" />
                            </a>
                            <a href="https://facebook.com" aria-label="Facebook" className="text-yellow-400 hover:text-yellow-300">
                                <FaFacebookF className="w-5 h-5" />
                            </a>
                        </div>
                        {/* Optional: mobile start button */}
                        <Button className="w-full mt-2 custom-frame">Start</Button>
                    </div>
                </div>
            )}
        </nav>
    );
};
