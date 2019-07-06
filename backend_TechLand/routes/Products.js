const express = require('express');

const router = express.Router();

const productsController = require('../controllers/ProductsController');

router.get('/byId', productsController.get_product_by_id);
router.get('/all', productsController.get_all_products);
router.get('/byCatagory', productsController.get_products_by_catagory);

module.exports = router;
