import React from 'react';
import { Link } from 'react-router-dom';
import { PlusCircle } from 'lucide-react';
import Badge from './Badge';
import Button from './Button';

const ProductCard = ({ product, onAddToList }) => {
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-[#e6ded8] flex flex-col h-full group">
            <Link to={`/products/${product.id}`} className="relative overflow-hidden aspect-[4/3] block">
                <img
                    src={product.image || 'https://via.placeholder.com/400x300?text=No+Image'}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex flex-col gap-2 items-start z-10">
                    {product.isNew && <Badge variant="secondary">New</Badge>}
                    {product.isPopular && <Badge variant="primary">Popular</Badge>}
                    {!product.inStock && <Badge variant="error">Out of Stock</Badge>}
                </div>
            </Link>

            <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-center mb-2 text-sm">
                    <span className="text-[#d4a373] font-semibold uppercase tracking-wider text-xs">{product.category}</span>
                    <span className={`font-medium ${product.inStock ? 'text-[#81b29a]' : 'text-[#e07a5f]'}`}>
                        {product.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                </div>

                <Link to={`/products/${product.id}`}>
                    <h3 className="text-xl font-bold text-[#2b1f17] mb-2 hover:text-[#5c3a21] transition-colors leading-snug">{product.name}</h3>
                </Link>
                <p className="text-[#6e5c53] text-sm mb-6 flex-1 line-clamp-2">{product.description}</p>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#e6ded8]">
                    <div className="text-lg font-bold text-[#5c3a21]">
                        {product.price ? `₹${product.price}` : 'Contact for price'}
                        {product.unit && <span className="text-sm font-normal text-[#6e5c53]"> / {product.unit}</span>}
                    </div>

                    <Button
                        variant="outline"
                        size="sm"
                        className="p-2"
                        disabled={!product.inStock}
                        onClick={() => onAddToList && onAddToList(product)}
                        aria-label="Add to request list"
                    >
                        <PlusCircle size={18} />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
