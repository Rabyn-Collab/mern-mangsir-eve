import Product from "../models/Product.js";
import fs from 'fs';


export const getProducts = async (req, res) => {

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


export const createProduct = async (req, res) => {
  const { title, description, price, category, brand, stock } = req.body || {};
  try {

    await Product.create({
      title,
      description,
      price,
      category,
      brand,
      stock,
      image: req.imagePath
    });
    return res.status(201).json({ message: 'Product Created' });

  } catch (err) {

    fs.unlink(`./uploads/${req.imagePath}`, (imageErr) => {
      return res.status(400).json({ message: err.message });
    });


  }
}


export const updateProduct = (req, res) => {
  return res.status(200).json({ message: 'Update Product' });
}



export const deleteProduct = async (req, res) => {

  try {

    const isExist = await Product.findById(req.id);

    if (!isExist) {
      return res.status(404).json({ message: 'Product Not Found' });
    }

    fs.unlink(`./uploads/${isExist.image}`, async (imageErr) => {
      if (imageErr) {
        return res.status(400).json({ message: imageErr.message });
      }
      await isExist.deleteOne();
      return res.status(200).json({ message: 'Product Deleted' });
    })

  } catch (err) {
    return res.status(400).json({ message: err.message });
  }

}