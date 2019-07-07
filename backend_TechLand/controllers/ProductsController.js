const httpCodes = require('http-status-codes');
const productRepository = require('../database/repositories/ProductRepository');

exports.get_product_by_id = (req, res) => {
    res.send('NOT IMPLEMENTED:  GET');
};

exports.get_all_products = async (req, res) => {
    const products = await productRepository.getAllProducts();
    if (products === null) {
        res.status(httpCodes.INTERNAL_SERVER_ERROR);
        res.send('Error occured while retrieving products');
    }
    // res.status(200);
    res.send(products);
};

exports.get_products_by_catagory = (req, res) => {
    res.send('NOT IMPLEMENTED: GET');
};
