import React, { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Search, Filter, X } from 'lucide-react';
import ProductCard from '../components/UI/ProductCard';
import { getProducts, getCategories } from '../data/products';
import { useRequestList } from '../context/RequestListContext';

const Products = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const initialCategory = searchParams.get('category') || 'All';

    const [activeCategory, setActiveCategory] = useState(initialCategory);
    const [searchQuery, setSearchQuery] = useState('');

    const products = getProducts();
    const categories = ['All', ...getCategories()];
    const { addToRequestList } = useRequestList();

    useEffect(() => {
        const cat = searchParams.get('category');
        if (cat && categories.includes(cat)) {
            setActiveCategory(cat);
        }
    }, [searchParams]);

    const handleCategoryClick = (cat) => {
        setActiveCategory(cat);
        if (cat === 'All') {
            setSearchParams({});
        } else {
            setSearchParams({ category: cat });
        }
    };

    const filteredProducts = products.filter(product => {
        const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen">
            <div className="bg-[#3e2615] text-white py-16 text-center">
                <div className="max-w-7xl mx-auto px-6">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#d4a373] mb-4">Our Catalog</h1>
                    <p className="text-lg text-[#e6ded8]">Explore our premium wholesale collection.</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="flex flex-col md:flex-row gap-8 mb-12 md:items-center md:justify-between">
                    <div className="relative flex-1 max-w-md">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6e5c53]" size={20} />
                        <input
                            type="text"
                            className="w-full pl-12 pr-10 py-3 border border-[#e6ded8] rounded-full focus:outline-none focus:border-[#5c3a21] focus:ring-4 focus:ring-[#5c3a21]/10 bg-white transition-all"
                            placeholder="Search products..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        {searchQuery && (
                            <button
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6e5c53] hover:text-white hover:bg-[#e07a5f] w-6 h-6 rounded-full flex items-center justify-center transition-colors"
                                onClick={() => setSearchQuery('')}
                                aria-label="Clear search"
                            >
                                <X size={14} />
                            </button>
                        )}
                    </div>

                    <div className="flex items-center gap-4 overflow-x-auto pb-2">
                        <Filter size={20} className="text-[#6e5c53] hidden md:block shrink-0" />
                        <div className="flex gap-2 shrink-0">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    className={`px-4 py-2 rounded-full border text-sm font-medium whitespace-nowrap transition-colors ${activeCategory === cat
                                            ? 'bg-[#5c3a21] text-white border-[#5c3a21]'
                                            : 'bg-white text-[#6e5c53] border-[#e6ded8] hover:bg-[#f7f4ef] hover:text-[#2b1f17]'
                                        }`}
                                    onClick={() => handleCategoryClick(cat)}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div>
                    {filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {filteredProducts.map(product => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                    onAddToList={addToRequestList}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-[#e6ded8]">
                            <h3 className="text-2xl text-[#5c3a21] font-bold mb-2">No products found</h3>
                            <p className="text-[#6e5c53] mb-6">Try adjusting your search or category filter.</p>
                            <button
                                className="inline-flex items-center justify-center px-5 py-2 text-base font-medium rounded-lg bg-transparent border border-[#5c3a21] text-[#5c3a21] hover:bg-[#5c3a21] hover:text-white transition-all duration-300"
                                onClick={() => {
                                    setSearchQuery('');
                                    handleCategoryClick('All');
                                }}
                            >
                                Clear all filters
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Products;
