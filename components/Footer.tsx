import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative w-full border-t border-zinc-800/50 bg-zinc-950/80 backdrop-blur-xl">
            {/* Container */}
            <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-24 py-12 md:py-16">
                {/* Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                    {/* Left Section - Brand */}
                    <div className="md:col-span-5 lg:col-span-4">
                        {/* Logo & Brand Name */}
                        <div className="flex items-center gap-3 mb-4">
                            <Logo size="md" />
                            <span className="text-xl font-bold tracking-tight text-white">WanderLust</span>
                        </div>

                        {/* Tagline */}
                        <p className="text-zinc-400 text-sm leading-relaxed mb-4 max-w-sm">
                            Travel without the tourist mindset. Curated local experiences and hidden gems for authentic adventures.
                        </p>

                        {/* Built with love */}
                        <div className="flex items-center gap-2 text-zinc-500 text-xs">
                            <span>Built with</span>
                            <span className="text-red-500 animate-pulse">❤️</span>
                            <span>and</span>
                            <span className="text-teal-400">✨</span>
                            <span>by WanderLust Team</span>
                        </div>

                        {/* Version */}
                        <p className="text-zinc-600 text-xs mt-4">
                            Version: v1.0.0
                        </p>
                    </div>

                    {/* Middle Section - Links */}
                    <div className="md:col-span-4 lg:col-span-4 grid grid-cols-2 gap-8">
                        {/* Product Links */}
                        <div>
                            <h3 className="text-white font-semibold text-sm mb-4 tracking-wide uppercase text-xs">
                                Product
                            </h3>
                            <ul className="space-y-3">
                                <li>
                                    <a
                                        href="#features"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document.getElementById('features')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                        }}
                                        className="text-zinc-400 text-sm hover:text-teal-400 transition-colors duration-200 inline-block hover:translate-x-1 transform cursor-pointer"
                                    >
                                        Features
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#pricing"
                                        className="text-zinc-400 text-sm hover:text-teal-400 transition-colors duration-200 inline-block hover:translate-x-1 transform"
                                    >
                                        Pricing
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#roadmap"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document.getElementById('roadmap')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                        }}
                                        className="text-zinc-400 text-sm hover:text-teal-400 transition-colors duration-200 inline-block hover:translate-x-1 transform cursor-pointer"
                                    >
                                        Roadmap
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Company Links */}
                        <div>
                            <h3 className="text-white font-semibold text-sm mb-4 tracking-wide uppercase text-xs">
                                Company
                            </h3>
                            <ul className="space-y-3">
                                <li>
                                    <a
                                        href="/about"
                                        onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/about'); window.dispatchEvent(new PopStateEvent('popstate')); }}
                                        className="text-zinc-400 text-sm hover:text-teal-400 transition-colors duration-200 inline-block hover:translate-x-1 transform"
                                    >
                                        About Us
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Section - Legal & Social */}
                    <div className="md:col-span-3 lg:col-span-4">
                        <h3 className="text-white font-semibold text-sm mb-4 tracking-wide uppercase text-xs">
                            Legal
                        </h3>
                        <ul className="space-y-3 mb-6">
                            <li>
                                <a
                                    href="/privacy"
                                    onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/privacy'); window.dispatchEvent(new PopStateEvent('popstate')); }}
                                    className="text-zinc-400 text-sm hover:text-teal-400 transition-colors duration-200 inline-block hover:translate-x-1 transform"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/terms"
                                    onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/terms'); window.dispatchEvent(new PopStateEvent('popstate')); }}
                                    className="text-zinc-400 text-sm hover:text-teal-400 transition-colors duration-200 inline-block hover:translate-x-1 transform"
                                >
                                    Terms & Conditions
                                </a>
                            </li>
                        </ul>

                        {/* Social Links */}
                        <h3 className="text-white font-semibold text-sm mb-4 tracking-wide uppercase text-xs">
                            Follow Us
                        </h3>
                        <div className="flex gap-3">
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-teal-500/50 flex items-center justify-center transition-all duration-200 group"
                                aria-label="Twitter"
                            >
                                <svg className="w-4 h-4 text-zinc-400 group-hover:text-teal-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                </svg>
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-teal-500/50 flex items-center justify-center transition-all duration-200 group"
                                aria-label="Instagram"
                            >
                                <svg className="w-4 h-4 text-zinc-400 group-hover:text-teal-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-teal-500/50 flex items-center justify-center transition-all duration-200 group"
                                aria-label="LinkedIn"
                            >
                                <svg className="w-4 h-4 text-zinc-400 group-hover:text-teal-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-zinc-800/50">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-zinc-500 text-sm">
                            © {currentYear} WanderLust. All rights reserved.
                        </p>
                        <div className="flex items-center gap-2 text-zinc-500 text-sm">
                            <span>Made with passion for travelers</span>
                            <span className="text-teal-400">✈️</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Subtle gradient at top of footer */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" />
        </footer>
    );
};

export default Footer;
