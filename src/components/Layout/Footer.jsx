import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#3e2615] text-white pt-16 mt-auto">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                <div className="col-span-1 md:col-span-2">
                    <Link to="/" className="text-2xl font-extrabold text-white flex items-center mb-4">
                        Choco<span className="text-[#d4a373]">Hub</span>
                    </Link>
                    <p className="text-[#e6ded8] mb-6 max-w-sm">
                        Your Trusted Wholesale Partner for Chocolates, Toys & Fancy Items. We supply shops with the best quality products at affordable prices.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" aria-label="Instagram" className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-[#d4a373] hover:-translate-y-1 transition-all"><Instagram size={20} /></a>
                        <a href="#" aria-label="Facebook" className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-[#d4a373] hover:-translate-y-1 transition-all"><Facebook size={20} /></a>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-6 text-[#d4a373]">Quick Links</h3>
                    <ul className="flex flex-col gap-4">
                        <li><Link to="/" className="text-[#e6ded8] hover:text-white hover:underline transition-colors">Home</Link></li>
                        <li><Link to="/products" className="text-[#e6ded8] hover:text-white hover:underline transition-colors">All Products</Link></li>
                        <li><Link to="/about" className="text-[#e6ded8] hover:text-white hover:underline transition-colors">About Us</Link></li>
                        <li><Link to="/contact" className="text-[#e6ded8] hover:text-white hover:underline transition-colors">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-6 text-[#d4a373]">Contact Us</h3>
                    <ul className="flex flex-col gap-4 text-[#e6ded8]">
                        <li className="flex gap-4 items-start">
                            <MapPin size={18} className="shrink-0 mt-1" />
                            <span>123 Wholesale Market, City Name, 12345</span>
                        </li>
                        <li className="flex gap-4 items-start">
                            <Phone size={18} className="shrink-0 mt-1" />
                            <span>+1 (234) 567-8900</span>
                        </li>
                        <li className="flex gap-4 items-start">
                            <Mail size={18} className="shrink-0 mt-1" />
                            <span>supply@chocohub.com</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="bg-[#2b1f17] py-6 text-center text-[#e6ded8] text-sm">
                <div className="max-w-7xl mx-auto px-6">
                    <p>&copy; {new Date().getFullYear()} ChocoHub Wholesale. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
