import express from 'express';
const router = express.Router();

import UserController from '../controllers/user.controller';

router.get('/', UserController.getUsers);
router.post('/', UserController.createUser);

export default router;
