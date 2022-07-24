
//const cors = require('cors')
const express = require("express"); // importing express js library
const app = express(); // assigning express package to be used
const port = 3001; // will run on localhost:3001
const cors = require('cors')// for cors policy
const { Sequelize } = require('sequelize')

//                      MIDDLEWARE
app.use(express.static('public')) // serve static files such as images, css files, and javascript files

require("dotenv").config();
app.use(cors()) // using cors middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cors)


// SEQUELIZE CONNECTION
const sequelize = new Sequelize(process.env.PG_URI)

try {
    sequelize.authenticate() 
    console.log(`Connected with Sequelize at ${process.env.PG_URI}`) 
} catch(err) {
    console.log(`Unable to connect to PG: ${err}`) 
}


/*const userController = require("./controllers/userController");
app.use("/users", userController); */

//                      CONTROLLERS
const userController = require("./controllers/userController");
app.use("/users", userController);

const messageController = require("./controllers/messageController");
app.use("/users/", messageController);

const demoController = require("./controllers/demoController");
app.use("/users/", demoController);
//                       ROUTES

// Landing page GET request----  localhost:3000 on your local machine
app.get('/', (req, res) => {
    res.send('Hello World!')
})

//Calling listen method to connect to local machine's port
app.listen(port, () => {
    console.log(`running server on port ${port}`)
}) 
