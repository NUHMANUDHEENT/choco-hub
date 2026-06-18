import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CartDrawer from '../UI/CartDrawer';

const Layout = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);

    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden bg-[#fdfbf7] dark:bg-[#1a120b] text-[#2b1f17] dark:text-[#f7f4ef] transition-colors duration-300">
            <Navbar onOpenCart={() => setIsCartOpen(true)} />
            <main className="flex-grow pt-24">
                {children}
            </main>
            <Footer />
            <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </div>
    );
};


export default Layout;
