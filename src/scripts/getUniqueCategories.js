import { readProducts } from "../utils/readProducts.js";


export const getUniqueCategories = async () => {
    const products = await readProducts();
    const categories = products.filter(category => category.category);
    console.log(categories);
};
    
    getUniqueCategories();