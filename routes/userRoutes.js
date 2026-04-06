import express from "express";
import { login, register } from "../controllers/userController.js";
import { methodNotAllow } from "../utils/methodNotAllow.js";
import { loginSchema, registerSchema, validator } from "../utils/validators.js";



const router = express.Router();

router.route('/login').post(validator.body(loginSchema), login).all(methodNotAllow);
router.route('/register').post(validator.body(registerSchema), register).all(methodNotAllow);





export default router;