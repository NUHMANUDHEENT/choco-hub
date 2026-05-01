import React from 'react';
import { createPortal } from 'react-dom';
import { X, Trash2, ShoppingBag, Send } from 'lucide-react';
import { useRequestList } from '../../context/RequestListContext';
import Button from './Button';

const CartDrawer = ({ isOpen, onClose }) => {
    const { requestItems, removeFromRequestList, clearList, totalItems } = useRequestList();

    if (!isOpen) return null;

    const totalPrice = requestItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    return createPortal(
        <div className="fixed inset-0 z-[9999] overflow-hidden">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" onClick={onClose}></div>

            <div className="absolute inset-y-0 right-0 max-w-full flex">
                <div className="w-full max-w-md bg-[#fdfbf7] shadow-2xl flex flex-col animate-slide-in-right h-full">
                    <div className="flex items-center justify-between px-6 py-6 bg-white border-b border-[#e6ded8]">
                        <div className="flex items-center gap-3">
                            <ShoppingBag className="text-[#5c3a21]" size={24} />
                            <h2 className="text-xl font-bold text-[#5c3a21]">Your Request List</h2>
                        </div>
                        <button onClick={onClose} className="p-2 hover:bg-[#f7f4ef] rounded-full transition-colors">
                            <X size={24} />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto px-6 py-6 font-medium">
                        {requestItems.length === 0 ? (
                            <div className="h-full flex flex-col items-center justify-center text-center">
                                <div className="w-20 h-20 bg-[#f7f4ef] rounded-full flex items-center justify-center mb-4">
                                    <ShoppingBag size={32} className="text-[#d6ccc2]" />
                                </div>
                                <h3 className="text-lg font-bold text-[#2b1f17] mb-2">Your list is empty</h3>
                                <p className="text-[#6e5c53] text-sm max-w-[200px]">Add some products to your request list to start an inquiry.</p>
                                <Button variant="outline" className="mt-8" onClick={onClose}>Browse Products</Button>
                            </div>
                        ) : (
                            <div className="space-y-6">
                                {requestItems.map((item) => (
                                    <div key={item.id} className="flex gap-4 bg-white p-4 rounded-xl border border-[#e6ded8] shadow-sm">
                                        <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border border-[#e6ded8]">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-1 flex flex-col justify-between">
                                            <div>
                                                <h4 className="font-bold text-[#2b1f17] text-sm leading-tight mb-1">{item.name}</h4>
                                                <p className="text-[#6e5c53] text-xs">Qty: {item.quantity}</p>
                                            </div>
                                            <div className="flex justify-between items-end">
                                                <span className="font-bold text-[#5c3a21]">₹{(item.price * item.quantity).toFixed(2)}</span>
                                                <button
                                                    onClick={() => removeFromRequestList(item.id)}
                                                    className="text-[#e07a5f] hover:text-red-700 p-1 transition-colors"
                                                >
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {requestItems.length > 0 && (
                        <div className="px-6 py-8 bg-white border-t border-[#e6ded8] space-y-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-[#6e5c53] font-medium">Estimated Total</span>
                                <span className="text-2xl font-black text-[#5c3a21]">₹{totalPrice.toFixed(2)}</span>
                            </div>
                            <Button variant="primary" className="w-full py-4 text-lg" onClick={() => {
                                // Logic for sending request could go here
                                alert('Request inquiry submitted!');
                                clearList();
                                onClose();
                            }}>
                                <Send size={20} /> Send Inquiry Request
                            </Button>
                            <button
                                onClick={clearList}
                                className="w-full text-center text-sm text-[#6e5c53] hover:text-[#e07a5f] font-bold py-2"
                            >
                                Clear All Items
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>,
        document.body
    );
};

export default CartDrawer;
