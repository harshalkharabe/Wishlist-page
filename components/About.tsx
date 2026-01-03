import React from 'react';
import Logo from './Logo';

const About: React.FC = () => {
    return (
        <div className="min-h-screen bg-zinc-950 text-white">
            {/* Header */}
            <header className="border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-xl sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 md:px-8 py-6">
                    <a href="/" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/'); window.dispatchEvent(new PopStateEvent('popstate')); }} className="flex items-center gap-3 w-fit hover:opacity-80 transition-opacity">
                        <Logo size="md" />
                        <span className="text-xl font-bold tracking-tight">Local Lence</span>
                    </a>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative py-20 md:py-28 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-500/5 blur-[120px] -z-10" />
                <div className="absolute bottom-0 left-0 w-1/2 h-full bg-purple-600/5 blur-[120px] -z-10" />

                <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                        About
                        <span className="block gradient-text mt-2">Local Lence</span>
                    </h1>
                    <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                        We're building the future of travel discovery for those who seek authenticity over algorithms.
                    </p>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-16 md:py-20 border-t border-zinc-800/50">
                <div className="max-w-4xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
                    </div>
                    <div className="prose prose-invert prose-zinc max-w-none">
                        <p className="text-zinc-300 text-lg leading-relaxed mb-6">
                            Local Lence was born from a simple frustration: traditional travel websites were sending everyone to the same overcrowded places. As travelers ourselves, we knew there was a better way to explore cities—through the eyes of locals and fellow adventurers who actually know where to go.
                        </p>
                        <p className="text-zinc-300 text-lg leading-relaxed mb-6">
                            We believe travel should be about discovery, not following the crowd. That's why we're creating a platform that helps modern travelers find hidden gems, authentic experiences, and the kind of places that make you feel like you've discovered something special.
                        </p>
                        <p className="text-zinc-300 text-lg leading-relaxed">
                            We're still in the early stages, building something we wish existed when we were planning our own adventures. Join us on this journey, and let's redefine what it means to truly explore.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Mission */}
            <section className="py-16 md:py-20 border-t border-zinc-800/50 bg-zinc-900/20">
                <div className="max-w-4xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
                    </div>
                    <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 md:p-12">
                        <p className="text-zinc-300 text-xl leading-relaxed text-center">
                            To empower travelers to discover authentic, off-the-beaten-path experiences by connecting them with curated recommendations from locals and fellow explorers who share their passion for genuine adventure.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-16 md:py-20 border-t border-zinc-800/50">
                <div className="max-w-4xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl">
                            <div className="w-12 h-12 rounded-lg bg-teal-500/10 flex items-center justify-center mb-4">
                                <span className="text-2xl">🌟</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Authenticity</h3>
                            <p className="text-zinc-400">
                                We prioritize genuine experiences over tourist traps. Every recommendation is vetted to ensure quality and authenticity.
                            </p>
                        </div>

                        <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl">
                            <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                                <span className="text-2xl">🤝</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Community</h3>
                            <p className="text-zinc-400">
                                Travel is better together. We're building a community of explorers who share their discoveries and help each other travel better.
                            </p>
                        </div>

                        <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl">
                            <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                                <span className="text-2xl">✨</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Quality Over Quantity</h3>
                            <p className="text-zinc-400">
                                We'd rather have 10 perfect recommendations than 100 mediocre ones. Quality curation is at the heart of everything we do.
                            </p>
                        </div>

                        <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl">
                            <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
                                <span className="text-2xl">🚀</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                            <p className="text-zinc-400">
                                We're reimagining travel discovery for the modern age, combining the best of social media, local knowledge, and smart curation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 md:py-20 border-t border-zinc-800/50 bg-zinc-900/20">
                <div className="max-w-4xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">The Team</h2>
                        <p className="text-zinc-400 text-lg">
                            A small, passionate team of travelers and technologists
                        </p>
                    </div>
                    <div className="text-center p-8 bg-zinc-900/50 border border-zinc-800 rounded-2xl">
                        <p className="text-zinc-300 text-lg leading-relaxed mb-6">
                            Local Lence is being built by a dedicated team of travel enthusiasts and technology experts who understand the frustrations of modern travel planning. We're combining our love for exploration with our technical expertise to create something truly special.
                        </p>
                        <p className="text-zinc-400">
                            We're a fully remote team, spread across different cities and time zones—which means we're constantly discovering new places and testing our own platform. If you share our vision, we'd love to hear from you.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="py-16 md:py-20 border-t border-zinc-800/50">
                <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
                    <p className="text-zinc-400 text-lg mb-8">
                        Have questions, feedback, or want to collaborate?
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="mailto:hello@locallence.com"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-teal-500/50 text-white font-medium rounded-full transition-all duration-200"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            hello@locallence.com
                        </a>
                    </div>
                </div>
            </section>

            {/* Back to Home */}
            <div className="max-w-4xl mx-auto px-4 md:px-8 pb-12">
                <div className="pt-8 border-t border-zinc-800">
                    <a
                        href="/"
                        onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/'); window.dispatchEvent(new PopStateEvent('popstate')); }}
                        className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors font-medium"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Home
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;
