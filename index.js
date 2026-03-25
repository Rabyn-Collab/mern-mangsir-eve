import express from 'express';


const app = express();


app.use(express.json());


app.get('/', (req, res) => {

  console.log(req.body);
  const { number } = req.query;

  const oddEven = Number(number) % 2 === 0 ? 'even' : 'odd';
  return res.status(200).json({
    message: oddEven
  });
});


app.use('/hello', (req, res, next) => {
  console.log('hello jee');

  next();

})


app.get('/hello', (req, res) => {
  return res.status(200).json({
    message: 'hello'
  });
});


app.get('/bye', (req, res) => {
  return res.status(200).json({
    message: 'bye'
  });
});


app.listen(5000, () => {
  console.log('Server is running on port 5000');
})