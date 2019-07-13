import { INTERNAL_SERVER_ERROR, BAD_REQUEST } from 'http-status-codes';
import * as productService from '../services/ProductService';
import { errorResponse } from '../models/ResponseModels';
import { Catagory } from '../Constants/Constants';
import * as responseMessages from '../Constants/ResponseMessages';


export async function getProductById(req, res) {
	const product = await productService.getProductById(req.params.id);
	if (product === null || product === undefined) {
		res.status(INTERNAL_SERVER_ERROR);
		res.send(errorResponse(responseMessages.INTERNAL_SERVER_ERROR));
	}
	res.send(product);
}

export async function getAllProducts(req, res) {
	const products = await productService.getAllProducts();
	if (products === null || products === undefined) {
		res.status(INTERNAL_SERVER_ERROR);
		res.send(errorResponse(responseMessages.INTERNAL_SERVER_ERROR));
	}
	res.send(products);
}

export async function getProductsByCatagory(req, res) {
	// validate catagory
	if (!Catagory[req.params.catagory]) {
		res.status(BAD_REQUEST);
		res.send(errorResponse(responseMessages.INVALID_CATAGORY));
	}

	const products = await productService.getProductsByCatagory();
	if (products === null) {
		res.status(INTERNAL_SERVER_ERROR);
		res.send(errorResponse(responseMessages.INTERNAL_SERVER_ERROR));
	}
	res.send(products);
}