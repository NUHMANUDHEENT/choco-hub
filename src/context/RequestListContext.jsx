import React, { createContext, useContext, useState, useEffect } from 'react';

const RequestListContext = createContext();

export const useRequestList = () => useContext(RequestListContext);

export const RequestListProvider = ({ children }) => {
    // Initialize from localStorage if available
    const [requestItems, setRequestItems] = useState(() => {
        const saved = localStorage.getItem('choco_request_list');
        return saved ? JSON.parse(saved) : [];
    });

    // Save to localStorage whenever requestItems changes
    useEffect(() => {
        localStorage.setItem('choco_request_list', JSON.stringify(requestItems));
    }, [requestItems]);

    const addToRequestList = (product, qty = 1) => {
        setRequestItems((prev) => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                return prev.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + qty } : item
                );
            }
            return [...prev, { ...product, quantity: qty }];
        });
    };

    const updateQuantity = (id, quantity) => {
        if (quantity < 1) {
            removeFromRequestList(id);
            return;
        }
        setRequestItems(prev => prev.map(item =>
            item.id === id ? { ...item, quantity } : item
        ));
    };

    const removeFromRequestList = (id) => {
        setRequestItems(prev => prev.filter(item => item.id !== id));
    };

    const clearList = () => {
        setRequestItems([]);
    };

    const totalItems = requestItems.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = requestItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    return (
        <RequestListContext.Provider value={{
            requestItems,
            addToRequestList,
            updateQuantity,
            removeFromRequestList,
            clearList,
            totalItems,
            totalPrice
        }}>
            {children}
        </RequestListContext.Provider>
    );
};

