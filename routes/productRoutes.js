import express from "express";
import { createProduct, getProducts } from "../controllers/productController.js";
import { methodNotAllow } from "../utils/methodNotAllow.js";


const router = express.Router();


router.route('/').get(getProducts).post(createProduct).all(methodNotAllow);




export default router;