import React from 'react';
import Logo from './Logo';

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="min-h-screen bg-zinc-950 text-white">
            {/* Header */}
            <header className="border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-xl sticky top-0 z-50">
                <div className="max-w-4xl mx-auto px-4 md:px-8 py-6">
                    <a href="/" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/'); window.dispatchEvent(new PopStateEvent('popstate')); }} className="flex items-center gap-3 w-fit hover:opacity-80 transition-opacity">
                        <Logo size="md" />
                        <span className="text-xl font-bold tracking-tight">Local Lence</span>
                    </a>
                </div>
            </header>

            {/* Content */}
            <main className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-16">
                <div className="mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Privacy Policy</h1>
                    <p className="text-zinc-400">Last Updated: December 18, 2024</p>
                </div>

                <div className="prose prose-invert prose-zinc max-w-none">
                    {/* Introduction */}
                    <section className="mb-10">
                        <p className="text-zinc-300 leading-relaxed mb-4 text-lg">
                            Your privacy is important to us. It is Local Lence's policy to respect your privacy regarding any information we may collect from you across our platform, including our website, mobile application, and other services we own and operate.
                        </p>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we're collecting it and how it will be used.
                        </p>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            This Privacy Policy explains how Local Lence collects, uses, shares, and protects your personal information in compliance with applicable data protection laws, including the EU General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA).
                        </p>
                    </section>

                    {/* Section 1 */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>

                        <h3 className="text-xl font-semibold text-white mb-3 mt-6">1.1 Information You Provide</h3>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            When you join our waitlist or create an account on Local Lence, we collect information that you voluntarily provide, including:
                        </p>
                        <ul className="list-disc pl-6 text-zinc-300 space-y-2 mb-4">
                            <li><strong>Account Information:</strong> Email address, name, username, password, and profile picture</li>
                            <li><strong>Profile Information:</strong> Travel preferences, favorite destinations, interests (e.g., coffee shops, bookstores, local hangouts)</li>
                            <li><strong>User-Generated Content:</strong> Reviews, ratings, photos, videos, comments, and recommendations you submit</li>
                            <li><strong>Payment Information:</strong> When purchasing premium guides or subscriptions, payment details are processed by our secure third-party payment processors</li>
                            <li><strong>Communications:</strong> Messages you send to us, customer support interactions, and survey responses</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-white mb-3 mt-6">1.2 Information Collected Automatically</h3>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            When you use Local Lence, we automatically collect certain information about your device and usage:
                        </p>
                        <ul className="list-disc pl-6 text-zinc-300 space-y-2 mb-4">
                            <li><strong>Device Information:</strong> Device type, operating system, browser type, IP address, and unique device identifiers</li>
                            <li><strong>Usage Data:</strong> Pages viewed, guides accessed, search queries, cities browsed, and interaction with content</li>
                            <li><strong>Location Data:</strong> With your permission, we may collect precise location data to provide city-specific recommendations and nearby experiences</li>
                            <li><strong>Cookies and Tracking:</strong> We use cookies, web beacons, and similar technologies to track user activity and preferences</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-white mb-3 mt-6">1.3 Information from Third Parties</h3>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            We may receive information about you from third-party sources:
                        </p>
                        <ul className="list-disc pl-6 text-zinc-300 space-y-2 mb-4">
                            <li><strong>Social Media:</strong> If you sign up using social media accounts, we receive your name, email, and public profile information</li>
                            <li><strong>Content Creators:</strong> Recommendations and content from travel influencers, TikTok creators, and local experts</li>
                            <li><strong>Integration Partners:</strong> Data from Google Maps and other integrated services to enhance functionality</li>
                        </ul>
                    </section>

                    {/* Section 2 */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            Local Lence uses the collected information for the following purposes:
                        </p>

                        <h3 className="text-xl font-semibold text-white mb-3 mt-6">2.1 Providing and Improving Services</h3>
                        <ul className="list-disc pl-6 text-zinc-300 space-y-2 mb-4">
                            <li>Create and manage your account</li>
                            <li>Deliver personalized travel recommendations and curated city guides</li>
                            <li>Process payments and subscriptions</li>
                            <li>Provide customer support and respond to inquiries</li>
                            <li>Analyze usage patterns to improve platform functionality and user experience</li>
                            <li>Develop new features and expand to new cities and categories</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-white mb-3 mt-6">2.2 Personalization</h3>
                        <ul className="list-disc pl-6 text-zinc-300 space-y-2 mb-4">
                            <li>Customize content based on your preferences and travel interests</li>
                            <li>Recommend hidden gems, coffee shops, bookstores, and local experiences tailored to you</li>
                            <li>Show location-based recommendations when you're exploring new cities</li>
                            <li>Remember your saved places and favorite guides</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-white mb-3 mt-6">2.3 Communication</h3>
                        <ul className="list-disc pl-6 text-zinc-300 space-y-2 mb-4">
                            <li>Send waitlist updates and early access invitations</li>
                            <li>Notify you about new guides, features, and destination launches</li>
                            <li>Send newsletters with travel inspiration and tips (you can opt out anytime)</li>
                            <li>Provide transaction confirmations and account updates</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-white mb-3 mt-6">2.4 Safety and Security</h3>
                        <ul className="list-disc pl-6 text-zinc-300 space-y-2 mb-4">
                            <li>Detect and prevent fraud, spam, and abuse</li>
                            <li>Monitor and analyze security threats</li>
                            <li>Enforce our Terms of Service</li>
                            <li>Comply with legal obligations and protect rights</li>
                        </ul>
                    </section>

                    {/* Section 3 */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">3. How We Share Your Information</h2>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            We don't share any personally identifying information publicly or with third parties, except in the following limited circumstances:
                        </p>

                        <h3 className="text-xl font-semibold text-white mb-3 mt-6">3.1 With Your Consent</h3>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            We may share your information when you explicitly consent or direct us to do so, such as when you publish reviews or share your travel experiences.
                        </p>

                        <h3 className="text-xl font-semibold text-white mb-3 mt-6">3.2 Service Providers</h3>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            We work with trusted third-party service providers who help us operate Local Lence:
                        </p>
                        <ul className="list-disc pl-6 text-zinc-300 space-y-2 mb-4">
                            <li>Payment processors (Stripe, PayPal, etc.)</li>
                            <li>Cloud hosting and storage providers</li>
                            <li>Email communication services</li>
                            <li>Analytics and performance monitoring tools</li>
                            <li>Customer support platforms</li>
                        </ul>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            These service providers are contractually obligated to protect your information and use it only for the purposes we specify.
                        </p>

                        <h3 className="text-xl font-semibold text-white mb-3 mt-6">3.3 Public Content</h3>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            Information you choose to make public on Local Lence, such as reviews, ratings, photos, and recommendations, may be visible to other users and may appear in search engine results.
                        </p>

                        <h3 className="text-xl font-semibold text-white mb-3 mt-6">3.4 Business Transfers</h3>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            If Local Lence is involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will notify you before your information becomes subject to a different privacy policy.
                        </p>

                        <h3 className="text-xl font-semibold text-white mb-3 mt-6">3.5 Legal Requirements</h3>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            We may disclose your information when required by law, such as to comply with a subpoena, court order, or other legal process, or to protect the rights, property, or safety of Local Lence, our users, or others.
                        </p>

                        <h3 className="text-xl font-semibold text-white mb-3 mt-6">3.6 Aggregated and De-identified Data</h3>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            We may share aggregated, de-identified, or anonymized data that cannot reasonably be used to identify you for research, analytics, marketing, or other business purposes.
                        </p>
                    </section>

                    {/* Section 4 */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">4. Data Storage and Retention</h2>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            We only retain collected information for as long as necessary to provide you with your requested service and fulfill the purposes outlined in this Privacy Policy.
                        </p>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            <strong>Account Data:</strong> We retain your account information for as long as your account is active or as needed to provide services. If you close your account, we may retain certain information for legal compliance, fraud prevention, and resolving disputes.
                        </p>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            <strong>User Content:</strong> Reviews, photos, and recommendations you submit may be retained even after account closure, but will be anonymized where possible.
                        </p>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            Any data we store is protected within commercially acceptable means to prevent loss, theft, unauthorized access, disclosure, copying, use, or modification.
                        </p>
                    </section>

                    {/* Section 5 */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            Local Lence takes data security seriously and implements industry-standard security measures to protect your personal information:
                        </p>
                        <ul className="list-disc pl-6 text-zinc-300 space-y-2 mb-4">
                            <li><strong>Encryption:</strong> We use SSL/TLS encryption for data transmission and encrypt sensitive data at rest</li>
                            <li><strong>Secure Authentication:</strong> Passwords are hashed and salted using strong cryptographic algorithms</li>
                            <li><strong>Access Controls:</strong> We limit access to personal information to authorized employees and contractors who need it to perform their duties</li>
                            <li><strong>Regular Audits:</strong> We conduct regular security assessments and vulnerability testing</li>
                            <li><strong>Monitoring:</strong> We monitor our systems for suspicious activity and security threats</li>
                        </ul>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            While we strive to protect your information, no method of transmission or storage is 100% secure. We cannot guarantee absolute security, but we continuously work to improve our security practices.
                        </p>
                    </section>

                    {/* Section 6 */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">6. Your Privacy Rights</h2>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            Depending on your location, you may have certain rights regarding your personal information:
                        </p>

                        <h3 className="text-xl font-semibold text-white mb-3 mt-6">6.1 Access and Portability</h3>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            You have the right to request a copy of the personal information we hold about you. You can export your data in a portable format.
                        </p>

                        <h3 className="text-xl font-semibold text-white mb-3 mt-6">6.2 Correction and Update</h3>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            You can update your account information and preferences at any time through your account settings. If you need assistance, contact our support team.
                        </p>

                        <h3 className="text-xl font-semibold text-white mb-3 mt-6">6.3 Deletion</h3>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            You have the right to request deletion of your personal information, subject to certain exceptions (e.g., legal obligations, fraud prevention). You can delete your account through account settings or by contacting us.
                        </p>

                        <h3 className="text-xl font-semibold text-white mb-3 mt-6">6.4 Opt-Out of Marketing</h3>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            You can opt out of promotional emails by clicking the "unsubscribe" link in any marketing email or by adjusting your email preferences in account settings.
                        </p>

                        <h3 className="text-xl font-semibold text-white mb-3 mt-6">6.5 Do Not Track</h3>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            Some browsers support "Do Not Track" signals. Currently, we do not respond to Do Not Track signals, but you can manage cookies through your browser settings.
                        </p>

                        <h3 className="text-xl font-semibold text-white mb-3 mt-6">6.6 California Privacy Rights (CCPA)</h3>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            California residents have additional rights under the California Consumer Privacy Act:
                        </p>
                        <ul className="list-disc pl-6 text-zinc-300 space-y-2 mb-4">
                            <li>Right to know what personal information is collected, used, shared, or sold</li>
                            <li>Right to delete personal information</li>
                            <li>Right to opt out of the sale of personal information (Note: Local Lence does not sell personal information)</li>
                            <li>Right to non-discrimination for exercising your privacy rights</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-white mb-3 mt-6">6.7 European Privacy Rights (GDPR)</h3>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            If you are located in the European Economic Area (EEA), you have additional rights under GDPR:
                        </p>
                        <ul className="list-disc pl-6 text-zinc-300 space-y-2 mb-4">
                            <li>Right to access your personal data</li>
                            <li>Right to rectification of inaccurate data</li>
                            <li>Right to erasure ("right to be forgotten")</li>
                            <li>Right to restrict processing</li>
                            <li>Right to data portability</li>
                            <li>Right to object to processing</li>
                            <li>Right to withdraw consent</li>
                            <li>Right to lodge a complaint with a supervisory authority</li>
                        </ul>
                    </section>

                    {/* Section 7 */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">7. Cookies and Tracking Technologies</h2>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            Local Lence uses cookies and similar tracking technologies to enhance your experience:
                        </p>

                        <h3 className="text-xl font-semibold text-white mb-3 mt-6">7.1 Types of Cookies We Use</h3>
                        <ul className="list-disc pl-6 text-zinc-300 space-y-2 mb-4">
                            <li><strong>Essential Cookies:</strong> Required for the platform to function properly (e.g., authentication, security)</li>
                            <li><strong>Performance Cookies:</strong> Help us understand how users interact with the platform</li>
                            <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                            <li><strong>Targeting Cookies:</strong> Deliver relevant content and measure advertising effectiveness</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-white mb-3 mt-6">7.2 Managing Cookies</h3>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            You can control and manage cookies through your browser settings. Note that disabling certain cookies may affect platform functionality.
                        </p>
                    </section>

                    {/* Section 8 */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">8. Third-Party Content and Services</h2>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            Local Lence integrates with third-party services to enhance your experience:
                        </p>

                        <h3 className="text-xl font-semibold text-white mb-3 mt-6">8.1 Embedded Content</h3>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            Our platform may feature embedded content from TikTok, Instagram, YouTube, and other social media platforms. When you interact with embedded content, these third parties may collect information about you according to their own privacy policies.
                        </p>

                        <h3 className="text-xl font-semibold text-white mb-3 mt-6">8.2 Google Maps Integration</h3>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            We integrate Google Maps to provide navigation and location services. Your use of Google Maps is subject to Google's Privacy Policy and Terms of Service.
                        </p>

                        <h3 className="text-xl font-semibold text-white mb-3 mt-6">8.3 External Links</h3>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            Our platform may contain links to external websites not operated by us. We have no control over the content or practices of these sites and cannot accept responsibility for their privacy policies. We encourage you to review the privacy policies of any third-party sites you visit.
                        </p>
                    </section>

                    {/* Section 9 */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">9. Children's Privacy</h2>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            Local Lence is not intended for children under the age of 13 (or 16 in the EEA). We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately, and we will take steps to delete the information.
                        </p>
                    </section>

                    {/* Section 10 */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">10. International Data Transfers</h2>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            Local Lence operates globally, and your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws.
                        </p>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            When we transfer personal data from the EEA to other countries, we use approved data transfer mechanisms, such as Standard Contractual Clauses, to ensure your data receives adequate protection.
                        </p>
                    </section>

                    {/* Section 11 */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">11. Data Controller and Processor</h2>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            Local Lence acts as both a data controller and a data processor with respect to the personal data we handle, in accordance with applicable data protection laws including GDPR.
                        </p>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            As a data controller, we determine the purposes and means of processing your personal information. As a data processor, we process certain data on behalf of our users when they create and share content.
                        </p>
                    </section>

                    {/* Section 12 */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">12. Search Data and Recommendations</h2>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            When you search for destinations, browse city guides, or interact with recommendations, this information is processed to generate personalized insights and improve our recommendation algorithm.
                        </p>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            We do not share your search history or browsing patterns with third parties for their own marketing purposes. Your data remains private unless you explicitly choose to publish or share it.
                        </p>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            All data processing is performed securely, and we implement appropriate technical and organizational measures to protect your data.
                        </p>
                    </section>

                    {/* Section 13 */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">13. Changes to This Privacy Policy</h2>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors.
                        </p>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            When we make material changes, we will notify you by email (if you have provided one) or through a prominent notice on the platform. Your continued use of Local Lence after any changes constitutes acceptance of the updated Privacy Policy.
                        </p>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
                        </p>
                    </section>

                    {/* Section 14 */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">14. Contact Us</h2>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                        </p>
                        <ul className="list-none text-zinc-300 space-y-2 mb-4">
                            <li><strong>Email:</strong> privacy@locallence.com</li>
                            <li><strong>Support:</strong> Through our in-app support channels</li>
                            <li><strong>Data Protection Officer:</strong> dpo@locallence.com</li>
                        </ul>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            We value your privacy and are committed to addressing your concerns promptly and transparently.
                        </p>
                    </section>

                    {/* Commitment */}
                    <section className="mb-10 p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl">
                        <h3 className="text-xl font-semibold text-white mb-3">Our Commitment to You</h3>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            At Local Lence, we're committed to protecting your privacy while helping you discover authentic travel experiences. We believe that personalized recommendations shouldn't come at the cost of your privacy.
                        </p>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            We will never sell your personal information to third parties. We use your data solely to provide you with better travel recommendations and improve your experience on our platform.
                        </p>
                        <p className="text-zinc-400 text-sm mt-4">
                            Thank you for trusting Local Lence with your travel journey. Together, let's explore the world beyond the tourist traps.
                        </p>
                    </section>
                </div>

                {/* Back to Home */}
                <div className="mt-12 pt-8 border-t border-zinc-800">
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
            </main>
        </div>
    );
};

export default PrivacyPolicy;
