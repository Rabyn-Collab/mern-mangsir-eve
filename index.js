import express from 'express';
import morgan from 'morgan';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import mongoose from 'mongoose';
import fileUpload from 'express-fileupload';
import cors from 'cors';
import { rateLimit } from 'express-rate-limit'

const app = express();

const limiter = rateLimit({
  limit: 200,
  windowMs: 10 * 60 * 1000,
  message: 'Too many requests from this IP, please try again after an hour'
});


app.use(limiter);
app.use(express.json());
app.use(morgan('dev'));
app.use(fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 },
}));

app.use(cors({
  origin: ['http://localhost:5173'],
}));


mongoose.connect('mongodb+srv://rabyn900:moles900@cluster0.ikwdezp.mongodb.net/Shopping').then((val) => {

  app.listen(5000, () => {
    console.log('Database connected and Server is running on port 5000');
  })
}).catch((err) => {
  console.log(err);
});


app.get('/', (req, res) => {
  return res.status(200).json({ message: 'Welcome' });
});

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);


