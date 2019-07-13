import Product from '../models/Product';

export function getAllProducts() {
	return new Promise((resolve, reject) => {
		Product.find({}, '-__v')
			.then((p) => {
				console.log(p);
				resolve(p);
			})
			.catch((err) => {
				console.log(ERROR_CANNOT_RETRIEVE_PRODUCTS, err);
				reject(new Error(ERROR_CANNOT_RETRIEVE_PRODUCTS));
			});
	});
}

export function getProductsByCatagory(catagory) {
	return new Promise((resolve, reject) => {
		Product.find({ catagory },  '-__v')
			.catch((err) => {
				console.log(ERROR_CANNOT_RETRIEVE_PRODUCTS, err);
				reject(new Error(ERROR_CANNOT_RETRIEVE_PRODUCTS));
			})
			.then((p) => {
				console.log(p);
				resolve(p);
			});
	});
}

export function getProductById(_id) {
	console.log('id', _id);
	return new Promise((resolve, reject) => {
		Product.findById({ _id },  '-__v')
			.catch((err) => {
				console.log(ERROR_CANNOT_RETRIEVE_PRODUCTS, err);
				reject(new Error(ERROR_CANNOT_RETRIEVE_PRODUCTS));
			})
			.then((p) => {
				console.log(p);
				resolve(p);
			});
	});
}
const ERROR_CANNOT_RETRIEVE_PRODUCTS = 'Error occured while retrieving products';