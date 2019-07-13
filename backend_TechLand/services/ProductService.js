import * as productRepository from '../database/repositories/ProductRepository';

export async function getAllProducts() { return productRepository.getAllProducts(); }

export function getProductsByCatagory(catagory) { return productRepository.getProductsByCatagory(catagory); }

export function getProductById(id) { return productRepository.getProductById(id); }