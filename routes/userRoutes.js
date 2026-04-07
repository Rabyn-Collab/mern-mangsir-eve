import express from "express";
import { getUser, login, register, updateUser } from "../controllers/userController.js";
import { methodNotAllow } from "../utils/methodNotAllow.js";
import { loginSchema, registerSchema, validator } from "../utils/validators.js";
import { checkUser } from "../middlewares/userCheck.js";



const router = express.Router();


router.route('/profile').get(checkUser, getUser).patch(checkUser, updateUser).all(methodNotAllow);

router.route('/login').post(validator.body(loginSchema), login).all(methodNotAllow);
router.route('/register').post(validator.body(registerSchema), register).all(methodNotAllow);





export default router;