import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, Sun, Moon } from 'lucide-react';
import { useRequestList } from '../../context/RequestListContext';
import { useTheme } from '../../context/ThemeContext';

const Navbar = ({ onOpenCart }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const location = useLocation();
    const { totalItems } = useRequestList();
    const { isDarkMode, toggleTheme } = useTheme();

    useEffect(() => {
        const controlNavbar = () => {
            if (typeof window !== 'undefined') {
                if (window.scrollY > lastScrollY && window.scrollY > 100) { // scrolling down
                    setIsVisible(false);
                } else { // scrolling up
                    setIsVisible(true);
                }
                setLastScrollY(window.scrollY);
            }
        };

        window.addEventListener('scroll', controlNavbar);
        return () => window.removeEventListener('scroll', controlNavbar);
    }, [lastScrollY]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/products' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 transform ${isVisible ? 'translate-y-0' : '-translate-y-full shadow-none'} ${lastScrollY > 20 ? 'bg-white/90 dark:bg-[#1a120b]/90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
                <Link to="/" className="text-3xl font-black text-[#5c3a21] dark:text-[#d4a373] flex items-center tracking-tight">
                    Choco<span className="text-[#d4a373] dark:text-white">Hub</span>
                </Link>

                <nav className={`md:flex gap-10 ${isMobileMenuOpen ? 'absolute top-24 left-0 right-0 bg-white dark:bg-[#1a120b] shadow-xl flex flex-col p-8 animate-fade-in' : 'hidden'}`}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-lg font-bold tracking-wide relative pb-1 transition-all duration-300 ${isActive(link.path) ? 'text-[#5c3a21] dark:text-white after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#5c3a21] dark:after:bg-[#d4a373]' : 'text-[#6e5c53] dark:text-[#d6ccc2] hover:text-[#5c3a21] dark:hover:text-white hover:after:w-full after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#d4a373] after:transition-all'}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-4 md:gap-6">
                    {/* Theme Toggle Button */}
                    <button
                        onClick={toggleTheme}
                        className="p-2.5 rounded-full bg-[#f7f4ef] dark:bg-[#2b1f17] text-[#5c3a21] dark:text-[#d4a373] hover:scale-110 transition-all duration-300 border border-[#e6ded8] dark:border-[#3e2615]"
                        aria-label="Toggle Theme"
                    >
                        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>

                    <button
                        className="text-[#2b1f17] dark:text-[#f7f4ef] hover:text-[#5c3a21] dark:hover:text-[#d4a373] p-2 rounded-full hover:bg-[#f7f4ef] dark:hover:bg-[#2b1f17] relative transition-all duration-300 transform hover:scale-110"
                        aria-label="Request List"
                        onClick={onOpenCart}
                    >
                        <ShoppingCart size={28} />
                        {totalItems > 0 && (
                            <span className="absolute top-0 right-0 bg-[#e07a5f] text-white text-[11px] font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-white dark:border-[#1a120b] shadow-sm">
                                {totalItems}
                            </span>
                        )}
                    </button>

                    <button
                        className="md:hidden text-[#2b1f17] dark:text-[#f7f4ef] p-2 hover:bg-[#f7f4ef] dark:hover:bg-[#2b1f17] rounded-lg transition-colors"
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
