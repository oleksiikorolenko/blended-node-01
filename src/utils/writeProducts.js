import fs from 'node:fs/promises';
import { PATH_DB } from '../contacts/products.js';

export const writeProducts = async (data) => {
    try {
        const dataToString = JSON.stringify(data, null, 2);
        fs.writeFile(PATH_DB, dataToString, 'utf-8');
    } catch (error) {
        console.log('Error');
    }
};