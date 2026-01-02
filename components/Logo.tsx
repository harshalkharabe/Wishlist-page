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
            <img
                src="/logo.png"
                alt="WanderLust Logo"
                className="w-full h-full object-contain"
            />
        </div>
    );
};

export default Logo;
