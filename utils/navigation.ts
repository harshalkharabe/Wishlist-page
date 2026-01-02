// Simple client-side navigation helper
export const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
};

// Create a navigation link component
export const createNavHandler = (path: string) => (e: MouseEvent) => {
    e.preventDefault();
    navigateTo(path);
};
