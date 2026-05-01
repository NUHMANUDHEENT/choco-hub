import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CartDrawer from '../UI/CartDrawer';

const Layout = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);

    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden">
            <Navbar onOpenCart={() => setIsCartOpen(true)} />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
            <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </div>
    );
};

export default Layout;
