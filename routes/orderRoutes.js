import express from 'express';
import { createOrder, getOrder, getOrders } from '../controllers/orderController.js';
import mongoose from 'mongoose';
import { checkUser } from '../middlewares/userCheck.js';
import { methodNotAllow } from '../utils/methodNotAllow.js';


const router = express.Router();


router.param('id', (req, res, next, id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({ message: "Invalid order id" });
  req.productId = id;
  next();
});

router.route('/').get(checkUser, getOrders).post(checkUser, createOrder).all(methodNotAllow);

router.route('/:id').get(getOrder).all(methodNotAllow);


export default router;