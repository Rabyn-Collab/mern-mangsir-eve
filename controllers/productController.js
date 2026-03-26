import Product from "../models/Product.js";



export const getProducts = async (req, res) => {
  console.log(req.files);

  try {
    const products = await Product.find({});
    return res.status(200).json(products);

  } catch (err) {
    return res.status(400).json({ message: err.message });
  }

}


export const getProduct = async (req, res) => {
  try {
    const isExist = await Product.findById(req.id);
    if (!isExist) {
      return res.status(404).json({ message: 'Product Not Found' });
    }
    return res.status(200).json(isExist);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
}


export const createProduct = (req, res) => {
  return res.status(200).json({ message: 'Create Product' });
}


export const updateProduct = (req, res) => {
  return res.status(200).json({ message: 'Update Product' });
}

export const deleteProduct = (req, res) => {
  return res.status(200).json({ message: 'Delete Product' });
}