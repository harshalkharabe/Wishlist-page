import React, { useState, useEffect } from 'react';
import App from './App';
import About from './components/About';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';

const Router: React.FC = () => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const handlePopState = () => {
            setCurrentPath(window.location.pathname);
        };

        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, []);

    // Simple routing logic
    if (currentPath === '/about' || currentPath === '/about.html') {
        return <About />;
    } else if (currentPath === '/privacy' || currentPath === '/privacy.html') {
        return <PrivacyPolicy />;
    } else if (currentPath === '/terms' || currentPath === '/terms.html') {
        return <TermsAndConditions />;
    }

    return <App />;
};

export default Router;
