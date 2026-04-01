import User from "../models/User.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"




export const login = async (req, res) => {

  const { email, password } = req.body || {};
  try {
    const isExist = await User.findOne({ email });

    if (!isExist) {
      return res.status(404).json({ message: 'User Not Found' });
    }

    const isMatch = bcrypt.compareSync(password, isExist.password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid Password' });
    }
    const token = jwt.sign({
      id: isExist._id,
      role: isExist.role
    }, 'secret', { expiresIn: '1d' });

    return res.status(200).json({
      role: isExist.role,
      token
    });


  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
}


export const register = async (req, res) => {
  const { username, email, password } = req.body || {};
  try {

    const isExist = await User.findOne({ email });

    if (isExist) {
      return res.status(409).json({ message: 'User already exist' });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    await User.create({ username, email, password: hashedPassword });
    return res.status(201).json({ message: 'User Created' });


  } catch (err) {
    return res.status(400).json({ message: err.message });

  }

}
