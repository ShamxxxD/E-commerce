import express from 'express';

const router = express.Router();

import productController from '../controllers/product.controller';
import categoryController from '../controllers/category.controller';

router.post('/', productController.createProduct);
router.post('/create-category', categoryController.createCategory);
router.get('/:slug', productController.getProductDetail);
router.get('/', productController.getProducts);

export default router;
