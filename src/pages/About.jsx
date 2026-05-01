import React, { useEffect } from 'react';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="animate-fade-in">
            <div className="bg-[#3e2615] text-white py-24 text-center">
                <div className="max-w-7xl mx-auto px-6">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#d4a373] mb-4">About ChocoHub</h1>
                    <p className="text-lg text-[#e6ded8]">Your Dedicated Wholesale Distribution Partner Since 2010</p>
                </div>
            </div>

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1442544213729-6a15f1611937?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                alt="ChocoHub Founder and Warehouse"
                                className="rounded-2xl shadow-md w-full"
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-[#5c3a21] mb-6">Our Story</h2>
                            <p className="text-[#6e5c53] mb-6 text-lg leading-relaxed">
                                ChocoHub began with a simple mission: to make high-quality confectioneries and fancy items easily accessible to local retailers without the hassle of multiple distributors.
                            </p>
                            <p className="text-[#6e5c53] mb-6 text-lg leading-relaxed">
                                We understand the daily struggles of shop owners—not knowing what products are available, dealing with uncoordinated supply chains, and spending too much time tracking inventory. ChocoHub solves this by providing a unified, transparent, and rapidly updated digital catalog.
                            </p>
                            <p className="text-[#6e5c53] text-lg leading-relaxed">
                                Today, we serve hundreds of retail stores, ensuring their shelves are beautifully stocked with products that sell.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-[#fdfbf7]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-white p-12 rounded-2xl border border-[#e6ded8] shadow-sm">
                            <h2 className="text-2xl font-bold text-[#3e2615] mb-6">Our Mission</h2>
                            <p className="text-[#6e5c53] text-lg leading-relaxed">
                                To empower local retail businesses by providing a seamless, fast, and comprehensive wholesale supply of fast-moving consumer goods, allowing shop owners to focus on selling rather than sourcing.
                            </p>
                        </div>

                        <div className="bg-white p-12 rounded-2xl border border-[#e6ded8] shadow-sm">
                            <h2 className="text-2xl font-bold text-[#3e2615] mb-6">Our Vision</h2>
                            <p className="text-[#6e5c53] text-lg leading-relaxed">
                                To become the most reliable and technologically advanced B2B distribution network in the region, setting the standard for wholesale transparency and efficiency.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default About;
