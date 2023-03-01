import express from 'express';
const router = express.Router();

import ProductController from '../controllers/product.controller';

router.use('/', ProductController.index);

export default router;
