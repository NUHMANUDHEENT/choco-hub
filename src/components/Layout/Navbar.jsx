import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useRequestList } from '../../context/RequestListContext';
const Navbar = ({ onOpenCart }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const { totalItems } = useRequestList();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/products' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-[100] border-b border-[#e6ded8]/50">
            <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
                <Link to="/" className="text-3xl font-black text-[#5c3a21] flex items-center tracking-tight">
                    Choco<span className="text-[#d4a373]">Hub</span>
                </Link>

                <nav className={`md:flex gap-10 ${isMobileMenuOpen ? 'absolute top-24 left-0 right-0 bg-white shadow-xl flex flex-col p-8 animate-fade-in' : 'hidden'}`}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-lg font-bold tracking-wide relative pb-1 transition-all duration-300 ${isActive(link.path) ? 'text-[#5c3a21] after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#5c3a21]' : 'text-[#6e5c53] hover:text-[#5c3a21] hover:after:w-full after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#d4a373] after:transition-all'}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-6">
                    <button
                        className="text-[#2b1f17] hover:text-[#5c3a21] p-2 rounded-full hover:bg-[#f7f4ef] relative transition-all duration-300 transform hover:scale-110"
                        aria-label="Request List"
                        onClick={onOpenCart}
                    >
                        <ShoppingCart size={28} />
                        {totalItems > 0 && (
                            <span className="absolute top-0 right-0 bg-[#e07a5f] text-white text-[11px] font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                                {totalItems}
                            </span>
                        )}
                    </button>

                    <button
                        className="md:hidden text-[#2b1f17] p-2 hover:bg-[#f7f4ef] rounded-lg transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
