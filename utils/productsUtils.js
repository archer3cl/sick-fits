import fs from 'fs';
import path from 'path';

// PRODUCTS_PATH is useful when you want to get the path to a specific file
export const PRODUCTS_PATH = path.join(process.cwd(), 'products');

// productFilePaths is the list of all mdx files inside the PRODUCTS_PATH directory
export const productFilePaths = fs
  .readdirSync(PRODUCTS_PATH)
  // Only include json files
  .filter((filePath) => /\.json?$/.test(filePath));

export const getProducts = () => {
  return productFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(PRODUCTS_PATH, filePath));
    return JSON.parse(source);
  });
};

export const getProduct = (id) => {
  const filePath = path.join(PRODUCTS_PATH, `${id}.json`);
  const source = fs.readFileSync(filePath);
  return JSON.parse(source);
};
