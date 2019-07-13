import { Router } from 'express';

import { getProductById, getAllProducts, getProductsByCatagory } from '../controllers/ProductsController';

const router = Router();

router.get('/byId/:id', getProductById);
router.get('/all', getAllProducts);
router.get('/byCatagory/:catagory', getProductsByCatagory);

export default router;
