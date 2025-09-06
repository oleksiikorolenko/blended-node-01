
import { createFakeProduct } from '../utils/createFakeProduct.js';
import { readProducts } from '../utils/readProducts.js';
import { writeProducts } from '../utils/writeProducts.js';


const generateProducts = async (count) => {
    const array = await readProducts();
    
    for (let i = 0; i < count; i += 1) {
        const product = createFakeProduct();
        array.push(product);
    }
    await writeProducts(array);
};


generateProducts(6);