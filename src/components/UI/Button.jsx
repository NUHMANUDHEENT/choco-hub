import React from 'react';

const Button = ({ children, variant = 'primary', size = 'md', className = '', ...props }) => {
    const variants = {
        primary: 'bg-[#5c3a21] text-white hover:bg-[#3e2615]',
        secondary: 'bg-[#d4a373] text-[#3e2615] hover:bg-[#c49666]',
        outline: 'bg-transparent border border-[#5c3a21] text-[#5c3a21] hover:bg-[#5c3a21] hover:text-white',
    };
    const sizes = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-5 py-2 text-base',
        lg: 'px-7 py-3 text-lg',
    };

    return (
        <button
            className={`inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-300 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
