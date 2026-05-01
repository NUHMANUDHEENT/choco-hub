import React from 'react';

const Badge = ({ children, variant = 'primary', className = '' }) => {
    const variants = {
        primary: 'bg-[#5c3a21] text-white',
        secondary: 'bg-[#d4a373] text-[#3e2615]',
        success: 'bg-[#81b29a] text-white',
        error: 'bg-[#e07a5f] text-white',
        outline: 'bg-transparent border border-[#e6ded8] text-[#6e5c53]'
    };

    return (
        <span className={`inline-flex items-center justify-center px-2.5 py-1 text-xs font-semibold rounded-full leading-none ${variants[variant]} ${className}`}>
            {children}
        </span>
    );
};

export default Badge;
