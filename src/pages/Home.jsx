import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Package, Truck, Award, ShieldCheck } from 'lucide-react';
import Button from '../components/UI/Button';
import ProductCard from '../components/UI/ProductCard';
import { getPopularProducts } from '../data/products';

const Home = () => {
    const popularProducts = getPopularProducts().slice(0, 4);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-[#fdfbf7] py-20">
                {/* Background Image with Gradient Mask */}
                <div
                    className="absolute top-0 right-0 w-full lg:w-2/3 h-full z-0 opacity-20 lg:opacity-100"
                    style={{
                        backgroundImage: 'url(/src/assets/home.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center right',
                        maskImage: 'linear-gradient(to right, transparent, black 50%)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent, black 50%)'
                    }}
                ></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                    <div className="max-w-2xl animate-fade-in-center text-center lg:text-left">
                        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-[#2b1f17] mb-6">
                            Your Trusted Wholesale Partner for Chocolates, Toys & Fancy Items
                        </h1>
                        <p className="text-lg md:text-xl text-[#6e5c53] mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0">
                            ChocoHub is the premier wholesale supplier dedicated to bridging the gap between quality products and retail success. Let us stock your shelves with items your customers love.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link to="/products">
                                <Button variant="primary" size="lg" className="w-full sm:w-auto">Explore Products</Button>
                            </Link>
                            <Link to="/about">
                                <Button variant="outline" size="lg" className="w-full sm:w-auto">Learn More</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Preview */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#5c3a21] mb-4">Our Categories</h2>
                        <p className="text-lg text-[#6e5c53] max-w-2xl mx-auto">Discover a wide range of products tailored for your retail shop.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {['Chocolates', 'Toys', 'Fancy Items'].map((cat, i) => (
                            <Link key={cat} to={`/products?category=${cat}`} className="relative rounded-2xl overflow-hidden aspect-[3/4] block group">
                                <img src={[
                                    "https://www.yuvaflowers.com/cdn/shop/files/special-chocolates-in-basket-gift-hamper-manual-yuvaflowers-bestgifts-1732-default-title-42715876491544.jpg?v=1711900379",
                                    "https://naturespath.com/cdn/shop/articles/Kids_playing_toys-393205.jpg?v=1725927752",
                                    "https://i.ytimg.com/vi/r-qp8VCAnm8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBObvmA-mZezhuEkj7vW3gejONNRw"
                                ][i]} alt={cat} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#2b1f17]/80 to-transparent flex flex-col justify-end p-8 text-white">
                                    <h3 className="text-2xl font-bold mb-2">{cat}</h3>
                                    <span className="flex items-center gap-2 font-semibold text-[#d4a373] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">Shop Now <ArrowRight size={16} /></span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Key Benefits */}
            <section className="py-20 pb-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#5c3a21] mb-4">Why Choose ChocoHub?</h2>
                        <p className="text-lg text-[#6e5c53] max-w-2xl mx-auto">We make wholesale supply seamless, reliable, and affordable.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: <Package size={32} />, title: 'Wide Variety', desc: 'An extensive catalog of products regularly updated with new market trends.' },
                            { icon: <Award size={32} />, title: 'Affordable Pricing', desc: 'Highly competitive wholesale rates ensuring excellent profit margins.' },
                            { icon: <Truck size={32} />, title: 'Fast Supply', desc: 'Efficient delivery networks that ensure your shelves are never empty.' },
                            { icon: <ShieldCheck size={32} />, title: 'Trusted Partner', desc: 'Years of experience serving countless local retail shops with reliability.' }
                        ].map((b, i) => (
                            <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-[#e6ded8] hover:shadow-md hover:-translate-y-1 transition-all">
                                <div className="mb-6 text-[#5c3a21] bg-[#f7f4ef] w-16 h-16 rounded-full flex items-center justify-center">{b.icon}</div>
                                <h3 className="text-xl font-bold text-[#3e2615] mb-3">{b.title}</h3>
                                <p className="text-[#6e5c53] text-sm leading-relaxed">{b.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Popular Products */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                        <div>
                            <h2 className="text-3xl font-bold text-[#5c3a21] mb-2">Popular Products</h2>
                            <p className="text-[#6e5c53]">Top choices from our current inventory.</p>
                        </div>
                        <Link to="/products">
                            <Button variant="outline">Browse Full Catalog</Button>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {popularProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Warehouse Showcase */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="bg-[#3e2615] rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 text-white">
                        <div className="p-10 md:p-16 flex flex-col justify-center">
                            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-[#d4a373] mb-6">Always Stocked.<br />Ready for Delivery.</h2>
                            <p className="text-lg text-[#e6ded8] mb-10 leading-relaxed">Our centralized distribution warehouse is fully equipped to handle bulk orders of any size. Say goodbye to supply delays and unexpected product shortages.</p>
                            <div>
                                <Link to="/contact">
                                    <Button variant="primary">Become a Retail Partner</Button>
                                </Link>
                            </div>
                        </div>
                        <div className="h-64 lg:h-auto">
                            <img src="https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="ChocoHub Warehouse shelves" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
