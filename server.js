//                        DEPENDENCIES
const express = require('express') // importing express js library
const app = express() // assigning express package to be used

require("dotenv").config();
const { Sequelize } = require('sequelize')

// SEQUELIZE CONNECTION
const sequelize = new Sequelize({
  storage: process.env.PG_URI,
  dialect: 'postgres',
  username: 'postgres',
  password: 'UNCJeff5000'
})

//                      MIDDLEWARE
app.use(express.static('public')) // serve static files such as images, css files, and javascript files
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// try {
//   const result = JSON.parse('');
//   console.log(result);
// } catch (err) {
//   // 👇️ SyntaxError: Unexpected end of JSON input
//   console.log('error', err);
// }

//                      CONTROLLERS
const userController = require("./controllers/userController");
app.use("/users", userController);

const messageController = require("./controllers/messageController");
app.use("/users/", messageController);

const demoController = require("./controllers/demoController");
app.use("/users/", demoController);
//                       ROUTES



//Calling listen method to connect to local machine's port
app.listen(process.env.PORT, () => {
    console.log(`running server on port ${process.env.PORT}`)
}) 
