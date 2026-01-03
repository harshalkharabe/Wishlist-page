import React from 'react';

interface LogoProps {
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', className = '' }) => {
    const sizeClasses = {
        sm: 'w-8 h-8',
        md: 'w-10 h-10',
        lg: 'w-12 h-12',
    };

    return (
        <div className={`${sizeClasses[size]} ${className} flex-shrink-0`}>
            <svg
                viewBox="0 0 512 512"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
                aria-label="Local Lence Logo"
            >
                <defs>
                    <linearGradient id="logo_gradient" x1="0" y1="0" x2="512" y2="512" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#2dd4bf" /> {/* Teal-400 */}
                        <stop offset="100%" stopColor="#7e22ce" /> {/* Purple-700 */}
                    </linearGradient>
                </defs>
                <rect width="512" height="512" rx="128" fill="url(#logo_gradient)" />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M256 112C176.6 112 112 176.6 112 256C112 360 256 480 256 480C256 480 400 360 400 256C400 176.6 335.4 112 256 112ZM256 192L304 256L256 320L208 256L256 192Z"
                    fill="white"
                />
            </svg>
        </div>
    );
};

export default Logo;
