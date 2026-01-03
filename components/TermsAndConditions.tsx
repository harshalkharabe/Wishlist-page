import React from 'react';
import Logo from './Logo';

const TermsAndConditions: React.FC = () => {
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
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Terms and Conditions</h1>
                    <p className="text-zinc-400">Last Updated: December 18, 2024</p>
                </div>

                <div className="prose prose-invert prose-zinc max-w-none">
                    {/* Section 1 */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            By accessing and using Local Lence, you accept and agree to be bound by the terms and provisions of this agreement. Local Lence is a personalized travel discovery platform that connects modern travelers with authentic local experiences, hidden gems, and curated city guides. When using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
                        </p>
                    </section>

                    {/* Section 2 */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">2. Agreement to Terms</h2>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Local Lence ("we," "us" or "our"), concerning your access to and use of the Local Lence website, mobile application, and any other media form, media channel, or platform related, linked, or otherwise connected thereto (collectively, the "Platform").
                        </p>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            By accessing the Platform, you agree that you have read, understood, and agree to be bound by all of these Terms of Service. If you do not agree with all of these terms, you are expressly prohibited from using the Platform and must discontinue use immediately.
                        </p>
                    </section>

                    {/* Section 3 */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">3. User Accounts and Waitlist</h2>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            When you join our waitlist or create an account on Local Lence, you agree to provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                        </p>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            We reserve the right to terminate accounts, remove or edit content at our sole discretion. Early access to Local Lence may be granted based on waitlist position, and early subscribers may receive exclusive benefits including priority access to new features and special pricing.
                        </p>
                    </section>

                    {/* Section 4 */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property Rights</h2>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            Unless otherwise indicated, the Platform and its proprietary content, including but not limited to curated travel guides, city-specific recommendations, video content, photographs, graphics, user interface designs, databases, functionality, and software (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us.
                        </p>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            All Content and Marks are protected by copyright, trademark, and other intellectual property laws. You are granted a limited license to access and use the Platform for personal, non-commercial purposes. You may not reproduce, distribute, modify, create derivative works, publicly display, or exploit any Content without our express written permission.
                        </p>
                    </section>

                    {/* Section 5 */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">5. User-Generated Content</h2>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            Local Lence may allow users to submit reviews, recommendations, photos, videos, and other content ("User Content"). By submitting User Content, you grant Local Lence a worldwide, non-exclusive, royalty-free, perpetual, and transferable license to use, reproduce, distribute, prepare derivative works of, display, and perform the User Content in connection with the Platform.
                        </p>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            You represent and warrant that: (a) you own or have the necessary rights to submit the User Content; (b) the User Content does not violate any third-party rights; and (c) the User Content does not contain any unlawful, harmful, or offensive material.
                        </p>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            We reserve the right to remove any User Content that violates these terms or is otherwise objectionable at our sole discretion.
                        </p>
                    </section>

                    {/* Section 6 */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">6. Travel Guides and Recommendations</h2>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            Local Lence provides curated travel guides, local recommendations, and destination information. While we strive to ensure accuracy and quality, we do not guarantee that all information is current, complete, or error-free. Venues may close, change hours, or alter their offerings without notice.
                        </p>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            Our recommendations are based on curation, user reviews, and third-party content. Local Lence is not responsible for the quality, safety, or availability of any venues, services, or experiences recommended on the Platform.
                        </p>
                    </section>

                    {/* Section 7 */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">7. Paid Services and Subscriptions</h2>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            Local Lence may offer paid services including premium city guides, full access to curated lists, and subscription-based features. Pricing and available features may vary based on your subscription plan.
                        </p>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            <strong>Payment and Billing:</strong> By purchasing a paid service, you agree to pay all applicable fees and charges. Payments are processed through secure third-party payment processors. Subscription fees are billed on a recurring basis until cancelled.
                        </p>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            <strong>Pricing Changes:</strong> Local Lence reserves the right to modify pricing for future subscriptions. Early subscribers will be notified of any pricing changes and may be grandfathered into existing rates or offered special pricing.
                        </p>
                    </section>

                    {/* Section 8 */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">8. Refunds and Cancellations</h2>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            Due to the nature of digital content and instant access to travel guides and premium features, Local Lence subscriptions and paid guides are generally non-refundable once access is granted. However, we evaluate refund requests on a case-by-case basis and may offer refunds at our sole discretion.
                        </p>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            You may cancel your subscription at any time, and you will continue to have access to premium features until the end of your current billing period. No refunds will be issued for partial subscription periods.
                        </p>
                    </section>

                    {/* Section 9 */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">9. Third-Party Content and Links</h2>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            Local Lence may feature embedded content from third-party sources including TikTok videos, Instagram posts, YouTube content, and recommendations from travel influencers and content creators. We may also integrate with third-party services such as Google Maps for navigation.
                        </p>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            We do not control or endorse third-party content and are not responsible for its accuracy, legality, or appropriateness. Your interactions with third-party services are governed by their respective terms and privacy policies.
                        </p>
                    </section>

                    {/* Section 10 */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">10. Featured Locations and Advertising</h2>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            Local Lence may feature sponsored or advertised locations within our guides and recommendations. Featured locations will be clearly marked as "Featured" or "Sponsored." The inclusion of featured locations does not affect our commitment to quality and authenticity.
                        </p>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            Businesses interested in featured placement should contact us through our business partnerships channel. All featured content must meet our quality standards and align with our mission of providing authentic local experiences.
                        </p>
                    </section>

                    {/* Section 11 */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">11. Prohibited Activities</h2>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            You agree not to engage in any of the following prohibited activities:
                        </p>
                        <ul className="list-disc pl-6 text-zinc-300 space-y-2 mb-4">
                            <li>Systematically retrieve data or content from the Platform to create a collection, database, or directory</li>
                            <li>Circumvent, disable, or interfere with security features of the Platform</li>
                            <li>Engage in unauthorized framing of or linking to the Platform</li>
                            <li>Use the Platform to transmit spam, chain letters, or other unsolicited communications</li>
                            <li>Submit false, misleading, or defamatory reviews or recommendations</li>
                            <li>Use automated systems to access the Platform without permission</li>
                            <li>Interfere with or disrupt the Platform or servers connected to it</li>
                            <li>Impersonate another user or person</li>
                        </ul>
                    </section>

                    {/* Section 12 */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">12. Disclaimer of Warranties</h2>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            THE PLATFORM IS PROVIDED ON AN "AS-IS" AND "AS-AVAILABLE" BASIS. LOCAL LENCE MAKES NO WARRANTIES, EXPRESS OR IMPLIED, REGARDING THE PLATFORM, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, OR NON-INFRINGEMENT.
                        </p>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            Local Lence does not warrant that the Platform will meet your requirements, be uninterrupted, timely, secure, or error-free. We do not warrant the accuracy, completeness, or reliability of any content or recommendations on the Platform.
                        </p>
                    </section>

                    {/* Section 13 */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">13. Limitation of Liability</h2>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            TO THE FULLEST EXTENT PERMITTED BY LAW, LOCAL LENCE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
                        </p>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            Local Lence is not responsible for any experiences, services, or venues you visit based on our recommendations. We are not liable for any injuries, losses, damages, or other issues that may arise from your travel activities.
                        </p>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            If Local Lence is found liable to you for any claim, our total liability is limited to the amount you actually paid to Local Lence in the twelve (12) months preceding the event giving rise to the liability, or $100, whichever is greater.
                        </p>
                    </section>

                    {/* Section 14 */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">14. Indemnification</h2>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            You agree to indemnify, defend, and hold harmless Local Lence and its officers, directors, employees, agents, and affiliates from any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys' fees) arising out of or related to: (a) your use of the Platform; (b) your violation of these Terms; (c) your User Content; or (d) your violation of any rights of another party.
                        </p>
                    </section>

                    {/* Section 15 */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">15. Data Ownership and Privacy</h2>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            You retain ownership of any personal data you provide to Local Lence. We collect and process your information in accordance with our Privacy Policy. By using the Platform, you consent to our data practices as described in the Privacy Policy.
                        </p>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            Local Lence uses your data to provide personalized recommendations, improve our services, and enhance your travel discovery experience. We do not sell your personal information to third parties.
                        </p>
                    </section>

                    {/* Section 16 */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">16. Modifications to the Platform</h2>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            Local Lence reserves the right to modify, suspend, or discontinue any aspect of the Platform at any time, with or without notice. We may also modify these Terms at any time. Your continued use of the Platform following any changes constitutes acceptance of those changes.
                        </p>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            We will make reasonable efforts to notify users of material changes to these Terms via email or through the Platform.
                        </p>
                    </section>

                    {/* Section 17 */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">17. Geographic Expansion</h2>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            Local Lence may start with specific cities and categories (such as coffee shops, bookstores, and local hangout spots) and expand to additional destinations and categories over time. Availability of guides and features may vary by location.
                        </p>
                    </section>

                    {/* Section 18 */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">18. Governing Law and Dispute Resolution</h2>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions. Any disputes arising out of or related to these Terms or the Platform shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
                        </p>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            You waive any right to participate in a class action lawsuit or class-wide arbitration against Local Lence.
                        </p>
                    </section>

                    {/* Section 19 */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">19. Severability</h2>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect. The invalid or unenforceable provision shall be deemed modified to the extent necessary to make it valid and enforceable.
                        </p>
                    </section>

                    {/* Section 20 */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">20. Contact Information</h2>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            If you have any questions, concerns, or feedback about these Terms of Service, please contact us through our support channels or email us at legal@locallence.com
                        </p>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            We value your input and are committed to providing exceptional service to our community of modern travelers.
                        </p>
                    </section>

                    {/* Acceptance */}
                    <section className="mb-10 p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl">
                        <p className="text-zinc-300 leading-relaxed">
                            <strong className="text-white">By using Local Lence, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.</strong>
                        </p>
                        <p className="text-zinc-400 text-sm mt-4">
                            Thank you for choosing Local Lence - where authentic travel experiences await.
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

export default TermsAndConditions;
