import Product, { brands, categories } from "../models/Product.js";
import { removeFile } from "../utils/removeFile.js";

function convertQuery(queryObj) {
  const mongoQuery = {};

  for (const key in queryObj) {
    const match = key.match(/(\w+)\[(\w+)\]/);

    if (match) {
      const field = match[1];      // rating
      const operator = match[2];   // gt

      if (!mongoQuery[field]) mongoQuery[field] = {};

      mongoQuery[field][`$${operator}`] = Number(queryObj[key]);
    } else {
      mongoQuery[key] = queryObj[key];
    }
  }

  return mongoQuery;
}


export const getProducts = async (req, res) => {
  const queryObj = { ...req.query };
  const excludeFileds = ['page', 'sort', 'limit', 'fields', 'search'];
  try {

    excludeFileds.forEach(el => delete queryObj[el]);


    const mongoQuery = convertQuery(queryObj);
    let query = Product.find(mongoQuery);

    if (req.query.search) {
      const search = req.query.search;

      if (categories.some((n) => n.toLowerCase().includes(search.toLowerCase()))) {

        query.find({ category: { $regex: search, $options: "i" } });

      } else if (brands.some((n) => n.toLowerCase().includes(search.toLowerCase()))) {
        query.find({ brand: { $regex: search, $options: "i" } });
      } else {
        query.find({ title: { $regex: search, $options: "i" } });
      }


    }


    if (req.query.sort) {
      const sortBy = req.query.sort.split(',').join(' ');
      query = query.sort(sortBy);
    }


    if (req.query.fields) {
      const fields = req.query.fields.split(',').join(' ');
      query = query.select(fields);
    }

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const products = await query.skip(skip).limit(limit);

    const total = await Product.countDocuments({});
    const pages = Math.ceil(total / limit);

    return res.status(200).json({
      totalPages: pages,
      products,
    });

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
    await removeFile(`./uploads/${req.imagePath}`, res);
    return res.status(400).json({ message: err.message });

  }
}


export const updateProduct = async (req, res) => {
  const { title, description, price, category, brand, stock } = req.body || {};

  try {

    const isExist = await Product.findById(req.id);

    if (!isExist) {
      if (req.imagePath) {
        await removeFile(`./uploads/${req.imagePath}`, res);
        return res.status(404).json({ message: 'Product Not Found' });
      } else {
        return res.status(404).json({ message: 'Product Not Found' });
      }
    }

    isExist.title = title || isExist.title;
    isExist.description = description || isExist.description;
    isExist.price = price || isExist.price;
    isExist.category = category || isExist.category;
    isExist.brand = brand || isExist.brand;
    isExist.stock = stock || isExist.stock;

    if (req.imagePath) {
      await removeFile(`./uploads/${isExist.image}`, res);
      isExist.image = req.imagePath;
      isExist.save();
      return res.status(200).json({ message: 'Product Updated' });
    } else {
      isExist.save();
      return res.status(200).json({ message: 'Product Updated' });
    }


  } catch (err) {

    return res.status(400).json({ message: err.message });

  }






}



export const deleteProduct = async (req, res) => {

  try {

    const isExist = await Product.findById(req.id);

    if (!isExist) {
      return res.status(404).json({ message: 'Product Not Found' });
    }
    // delete file safely
    if (isExist.image) {
      return await removeFile(`./uploads/${isExist.image}`, res);
    }

    await isExist.deleteOne();

    return res.status(200).json({ message: 'Product Deleted' });


  } catch (err) {

    return res.status(400).json({ message: err.message });
  }

}


