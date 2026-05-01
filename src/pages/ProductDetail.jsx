import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, XCircle, Plus, MessageCircle } from 'lucide-react';
import Button from '../components/UI/Button';
import Badge from '../components/UI/Badge';
import { getProductById } from '../data/products';
import { useRequestList } from '../context/RequestListContext';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [added, setAdded] = useState(false);
    const { addToRequestList } = useRequestList();

    useEffect(() => {
        window.scrollTo(0, 0);
        const item = getProductById(id);
        setProduct(item);
    }, [id]);

    if (!product) {
        return (
            <div className="max-w-7xl mx-auto px-6 py-32 text-center">
                <h2 className="text-3xl text-[#5c3a21] font-bold mb-6">Product not found</h2>
                <Link to="/products"><Button variant="primary">Back to Catalog</Button></Link>
            </div>
        );
    }

    const handleAddToList = () => {
        addToRequestList(product);
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

    const handleWhatsAppOrder = () => {
        const message = `*Inquiry for ${product.name}*\nID: ${product.id}\nPrice: ₹${product.price}\nImage: ${product.image}\n\nI am interested in this product. Please provide more details.`;
        const whatsappUrl = `https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="min-h-[80vh] bg-[#fdfbf7]">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <Link to="/products" className="inline-flex items-center gap-2 text-[#6e5c53] font-medium mb-8 hover:text-[#5c3a21] transition-colors">
                    <ArrowLeft size={16} /> Back to Products
                </Link>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    <div className="relative rounded-2xl overflow-hidden shadow-sm bg-white border border-[#e6ded8]">
                        <img src={product.image} alt={product.name} className="w-full aspect-square object-cover" />
                        <div className="absolute top-6 left-6 flex flex-col gap-2">
                            {product.isNew && <Badge variant="secondary">New</Badge>}
                            {product.isPopular && <Badge variant="primary">Popular</Badge>}
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <span className="text-[#d4a373] font-semibold uppercase tracking-wider text-sm mb-2">{product.category}</span>
                        <h1 className="text-4xl font-extrabold text-[#2b1f17] mb-6 leading-tight">{product.name}</h1>

                        <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-[#e6ded8]">
                            <span className="text-3xl font-bold text-[#5c3a21]">₹{product.price.toFixed(2)}</span>
                            {product.unit && <span className="text-lg text-[#6e5c53]">per {product.unit}</span>}
                        </div>

                        <div className="mb-6 font-medium">
                            {product.inStock ? (
                                <span className="flex items-center gap-2 text-[#81b29a]"><CheckCircle size={18} /> Available in Warehouse</span>
                            ) : (
                                <span className="flex items-center gap-2 text-[#e07a5f]"><XCircle size={18} /> Out of Stock (Contact for restock info)</span>
                            )}
                        </div>

                        <p className="text-lg text-[#6e5c53] leading-relaxed mb-10">{product.description}</p>

                        <div className="flex flex-col gap-4 mb-12">
                            <Button
                                variant="primary"
                                size="lg"
                                className="w-full md:max-w-xs"
                                disabled={!product.inStock}
                                onClick={handleAddToList}
                            >
                                <Plus size={20} />
                                {added ? 'Added to List!' : 'Add to Request List'}
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="w-full md:max-w-xs border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white"
                                onClick={handleWhatsAppOrder}
                            >
                                <MessageCircle size={20} />
                                Order via WhatsApp
                            </Button>
                            <p className="text-sm text-[#6e5c53]">Bulk orders above 10 units receive automatic 5% discount on final invoice.</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl border border-[#e6ded8]">
                            <p className="mb-2 text-sm text-[#6e5c53]"><strong className="text-[#2b1f17] mr-2">SKU:</strong> CHOCO-{product.id}-HB</p>
                            <p className="mb-2 text-sm text-[#6e5c53]"><strong className="text-[#2b1f17] mr-2">Category:</strong> {product.category}</p>
                            <p className="text-sm text-[#6e5c53]"><strong className="text-[#2b1f17] mr-2">Minimum Order:</strong> 1 {product.unit}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ProductDetail;
