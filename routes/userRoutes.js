import express from "express";
import { login, register } from "../controllers/userController.js";
import { methodNotAllow } from "../utils/methodNotAllow.js";



const router = express.Router();

router.route('/login').post(login).all(methodNotAllow);
router.route('/register').post(register).all(methodNotAllow);





export default router;