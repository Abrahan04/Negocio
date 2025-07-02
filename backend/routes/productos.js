import express from 'express';
import { getProductos } from '../controller/productoscontroller.js';

const router = express.Router();

router.get('/', getProductos);

export default router;
