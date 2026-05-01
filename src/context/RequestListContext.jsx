import React, { createContext, useContext, useState } from 'react';

const RequestListContext = createContext();

export const useRequestList = () => useContext(RequestListContext);

export const RequestListProvider = ({ children }) => {
    const [requestItems, setRequestItems] = useState([]);

    const addToRequestList = (product) => {
        setRequestItems((prev) => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                return prev.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    };

    const removeFromRequestList = (id) => {
        setRequestItems(prev => prev.filter(item => item.id !== id));
    };

    const clearList = () => {
        setRequestItems([]);
    };

    const totalItems = requestItems.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <RequestListContext.Provider value={{
            requestItems,
            addToRequestList,
            removeFromRequestList,
            clearList,
            totalItems
        }}>
            {children}
        </RequestListContext.Provider>
    );
};
