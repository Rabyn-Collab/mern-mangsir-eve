import fs from "fs";


if (fs.existsSync('./uploads')) {
  fs.rmdir('./uploads', (err) => {
    console.log(err);
  });
} else {
  fs.mkdir('./uploads', (err) => {
    console.log(err);
  });
}

// fs.mkdir('./uploads', (err) => {

// });



// const m = fs.readFileSync('./dummy.txt', 'utf-8');
// console.log(m);

// fs.readFile('./dummy.txt', 'utf-8', (err, data) => {

//   console.log(data);

// });

// fs.writeFile('./dummy.txt', 'hello jee', (err) => {
//   console.log(err);
// });

// fs.appendFile('./dummy.txt', ' hello jee', (err) => {
//   console.log(err);
// });

