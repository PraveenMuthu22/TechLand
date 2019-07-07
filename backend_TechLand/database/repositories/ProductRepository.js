const Product = require('../models/Product');
const { Catagory } = require('../../Constants/Constants');

module.exports = {
	getAllProducts: () => {
		let products;
		Product.find({})
			.exec()
			.then((p) => { products = p; })
			.catch((err) => {
				console.log('Error occured retrieving all products', err);
			});
			return products;
	},

	getProductsByCatagory: (catagory) => {
		Product.find({ catagory: catagory }, (err, products) => {
			if (err) {
				console.log(err);
				return null;
			}
			return products;
		});
	},

	addProducts: (product) => {
		console.log('Not implemented');
	}
}
