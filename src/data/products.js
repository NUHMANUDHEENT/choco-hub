import { toys } from './toys';
import { candies } from './candies';

export const products = [
    ...toys,
    ...candies
];

export const getProducts = () => products;
export const getPopularProducts = () => products.filter(p => p.isPopular);
export const getNewProducts = () => products.filter(p => p.isNew);
export const getCategories = () => [...new Set(products.map(p => p.category))];
export const getProductById = (id) => products.find(p => p.id === id);
