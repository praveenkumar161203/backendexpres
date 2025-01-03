const express = require('express');///import express and store it in a variable called express
const app = express();///create an instance of express and store it in a variable app
app.set('view engine', 'ejs');//set the view engine to ejs
// app.get('/', (req, res) => {
//   console.log('heloooooo');
// //   res.status(300).send('Hello World!');///send a response to the client of status
// //   res.json({express:"learning"});
//     //  res.send("bro");
//     res.render('index',{tex :"wpzcjnvijsd"});//render the index.ejs file
// });
const userRoute = require('./routes/user');
app.use('/user',userRoute);
app.listen(3000);


