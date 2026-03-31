import User from "../models/User.js";
import bcrypt from "bcrypt"




export const login = (req, res) => {
  return res.status(200).json({ message: 'Login' });
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
