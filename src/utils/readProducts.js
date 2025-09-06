import fs from 'node:fs/promises';
import { PATH_DB } from '../contacts/products.js';


export const readProducts = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error("Error");
        return [];
    }
};