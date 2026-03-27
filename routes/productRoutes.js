import express from "express";
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from "../controllers/productController.js";
import { methodNotAllow } from "../utils/methodNotAllow.js";
import mongoose from "mongoose";
import { fileCheck } from "../middlewares/fileCheck.js";

const router = express.Router();


router.route('/').get(getProducts).post(fileCheck, createProduct).all(methodNotAllow);


router.param('id', (req, res, next, id) => {

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid ID' });
  }
  req.id = id;
  next();
});

router.route('/:id').get(getProduct).patch(updateProduct).delete(deleteProduct).all(methodNotAllow);






export default router;