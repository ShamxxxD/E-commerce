import express from 'express';
const router = express.Router();

import ProductController from '../controllers/Product.controller';

router.use('/', ProductController.index);

export default router;
