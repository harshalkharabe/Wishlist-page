import React from 'react';

const LandingPage: React.FC = () => {
    return (
        <div className="bg-zinc-950 text-white">
            {/* Problem Section */}
            <section className="py-16 md:py-24 border-t border-zinc-800/50">
                <div className="max-w-6xl mx-auto px-4 md:px-12 lg:px-24">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center px-4 py-2 rounded-full border border-red-500/20 bg-red-500/10 mb-6">
                            <span className="text-red-400 text-sm font-semibold">The Problem</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                            Tired of the Same Tourist Traps?
                        </h2>
                        <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
                            Traditional travel sites have homogenized the travel experience. SEO-optimized results lead everyone to the same overcrowded places.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl">
                            <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-4">
                                <span className="text-2xl">🏙️</span>
                            </div>
                            <h3 className="text-lg font-semibold mb-2 text-white">SEO-Dominated Results</h3>
                            <p className="text-zinc-400 text-sm">
                                Sites like TripAdvisor dominate search, creating homogenized experiences
                            </p>
                        </div>

                        <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl">
                            <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-4">
                                <span className="text-2xl">😕</span>
                            </div>
                            <h3 className="text-lg font-semibold mb-2 text-white">Missing Authenticity</h3>
                            <p className="text-zinc-400 text-sm">
                                Millennials and Gen Z seek unique experiences current platforms don't provide
                            </p>
                        </div>

                        <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl">
                            <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-4">
                                <span className="text-2xl">📱</span>
                            </div>
                            <h3 className="text-lg font-semibold mb-2 text-white">Same Everywhere</h3>
                            <p className="text-zinc-400 text-sm">
                                Everyone ends up at the same coffee shops and restaurants
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solution Section */}
            <section className="py-16 md:py-24 border-t border-zinc-800/50 bg-zinc-900/20">
                <div className="max-w-6xl mx-auto px-4 md:px-12 lg:px-24">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center px-4 py-2 rounded-full border border-teal-500/20 bg-teal-500/10 mb-6">
                            <span className="text-teal-400 text-sm font-semibold">Our Solution</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                            Discover Like a <span className="gradient-text">Local</span>
                        </h2>
                        <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
                            WanderLust is a TikTok-inspired platform featuring personalized travel guides and hidden local gems you won't find anywhere else.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-gradient-to-br from-teal-500/5 to-transparent border border-teal-500/20 rounded-xl">
                            <div className="w-12 h-12 rounded-lg bg-teal-500/10 flex items-center justify-center mb-4">
                                <span className="text-2xl">✨</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-white">Curated Local Experiences</h3>
                            <p className="text-zinc-400">
                                Discover coffee shops, bookstores, and hidden gems that locals actually visit
                            </p>
                        </div>

                        <div className="p-6 bg-gradient-to-br from-purple-500/5 to-transparent border border-purple-500/20 rounded-xl">
                            <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                                <span className="text-2xl">🎬</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-white">Visual Storytelling</h3>
                            <p className="text-zinc-400">
                                Video carousels showcase aesthetics and vibes before you visit
                            </p>
                        </div>

                        <div className="p-6 bg-gradient-to-br from-blue-500/5 to-transparent border border-blue-500/20 rounded-xl">
                            <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                                <span className="text-2xl">🗺️</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-white">City-Specific Guides</h3>
                            <p className="text-zinc-400">
                                Organized by categories and integrated with Google Maps for easy navigation
                            </p>
                        </div>

                        <div className="p-6 bg-gradient-to-br from-orange-500/5 to-transparent border border-orange-500/20 rounded-xl">
                            <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
                                <span className="text-2xl">💫</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-white">Influencer Content</h3>
                            <p className="text-zinc-400">
                                TikTok videos and recommendations from trusted travel creators
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section id="features" className="py-16 md:py-24 border-t border-zinc-800/50 scroll-mt-20">
                <div className="max-w-6xl mx-auto px-4 md:px-12 lg:px-24">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                            Everything You Need
                        </h2>
                        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                            Powerful features to help you discover authentic local experiences
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Feature cards */}
                        {[
                            { icon: '🗺️', title: 'City-Specific Guides', desc: 'Curated guides organized by categories like coffee shops and bookstores' },
                            { icon: '🎥', title: 'Video Carousels', desc: 'Engaging video content showcasing destination aesthetics' },
                            { icon: '🧭', title: 'Maps Integration', desc: 'Seamless Google Maps integration for easy navigation' },
                            { icon: '💎', title: 'Premium Guides', desc: 'Access full curated lists for just $0.99 per city' },
                            { icon: '🤖', title: 'AI-Powered', desc: 'Smart curation using AI tools and local insights' },
                            { icon: '📍', title: 'Featured Locations', desc: 'Premium placement for exceptional venues' },
                        ].map((feature, idx) => (
                            <div key={idx} className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-teal-500/50 transition-all group">
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-500/20 to-purple-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <span className="text-2xl">{feature.icon}</span>
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                                <p className="text-zinc-400 text-sm">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-16 md:py-24 border-t border-zinc-800/50 bg-zinc-900/20">
                <div className="max-w-6xl mx-auto px-4 md:px-12 lg:px-24">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                            How WanderLust Works
                        </h2>
                        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                            A sustainable model that keeps quality high and content authentic
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-8 bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 border border-zinc-800 rounded-2xl">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-teal-500/20 flex items-center justify-center">
                                    <span className="text-xl">💎</span>
                                </div>
                                <h3 className="text-xl font-semibold">Premium Guides</h3>
                            </div>
                            <p className="text-zinc-400 mb-4">
                                Pay-per-guide model (e.g., $0.99) for access to comprehensive curated lists
                            </p>
                            <ul className="space-y-2 text-sm text-zinc-500">
                                <li className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    Full access to hidden gems
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    Detailed venue information
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    Insider tips
                                </li>
                            </ul>
                        </div>

                        <div className="p-8 bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 border border-zinc-800 rounded-2xl">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                                    <span className="text-xl">📍</span>
                                </div>
                                <h3 className="text-xl font-semibold">Featured Placement</h3>
                            </div>
                            <p className="text-zinc-400 mb-4">
                                Advertising for exceptional locations that align with our mission
                            </p>
                            <ul className="space-y-2 text-sm text-zinc-500">
                                <li className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    Premium visibility
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    Quality-vetted only
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    Transparent labels
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Roadmap */}
            <section id="roadmap" className="py-16 md:py-24 border-t border-zinc-800/50 scroll-mt-20">
                <div className="max-w-4xl mx-auto px-4 md:px-12 lg:px-24">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                            Our Roadmap
                        </h2>
                        <p className="text-zinc-400 text-lg">
                            Starting focused, expanding thoughtfully
                        </p>
                    </div>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500 via-purple-500 to-transparent hidden md:block" />

                        <div className="space-y-8">
                            {/* Phase 1 */}
                            <div className="relative pl-0 md:pl-16">
                                <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center shadow-lg shadow-teal-500/30 hidden md:flex">
                                    <span className="text-white font-bold">1</span>
                                </div>
                                <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                                    <div className="flex items-center gap-3 mb-3 md:hidden">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center">
                                            <span className="text-white text-sm font-bold">1</span>
                                        </div>
                                        <h3 className="text-xl font-semibold">Launch Phase</h3>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2 hidden md:block">Launch Phase</h3>
                                    <p className="text-zinc-400 mb-3">
                                        Start with coffee shops and bookstores in select cities
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-teal-500/10 text-teal-400 text-sm rounded-full">Coffee Shops</span>
                                        <span className="px-3 py-1 bg-teal-500/10 text-teal-400 text-sm rounded-full">Bookstores</span>
                                        <span className="px-3 py-1 bg-teal-500/10 text-teal-400 text-sm rounded-full">Local Hangouts</span>
                                    </div>
                                </div>
                            </div>

                            {/* Phase 2 */}
                            <div className="relative pl-0 md:pl-16">
                                <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/30 hidden md:flex">
                                    <span className="text-white font-bold">2</span>
                                </div>
                                <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                                    <div className="flex items-center gap-3 mb-3 md:hidden">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                                            <span className="text-white text-sm font-bold">2</span>
                                        </div>
                                        <h3 className="text-xl font-semibold">Category Expansion</h3>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2 hidden md:block">Category Expansion</h3>
                                    <p className="text-zinc-400 mb-3">
                                        Expand to new categories based on demand
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-sm rounded-full">Restaurants</span>
                                        <span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-sm rounded-full">Art Galleries</span>
                                        <span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-sm rounded-full">Music Venues</span>
                                    </div>
                                </div>
                            </div>

                            {/* Phase 3 */}
                            <div className="relative pl-0 md:pl-16">
                                <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30 hidden md:flex">
                                    <span className="text-white font-bold">3</span>
                                </div>
                                <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                                    <div className="flex items-center gap-3 mb-3 md:hidden">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                                            <span className="text-white text-sm font-bold">3</span>
                                        </div>
                                        <h3 className="text-xl font-semibold">Geographic Growth</h3>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2 hidden md:block">Geographic Growth</h3>
                                    <p className="text-zinc-400 mb-3">
                                        Scale to more cities worldwide
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-sm rounded-full">New Cities</span>
                                        <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-sm rounded-full">International</span>
                                        <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-sm rounded-full">Community</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
