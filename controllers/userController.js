// Dependencies
const users = require("express").Router();
const db = require("../models");
const { User} = db; // USER is the variable to access database


// Find all Users
users.get("/", async (req, res) => {
  try {
    const foundUsers = await User.findAll();
    res.status(200).json(foundUsers);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Find a Specific User
users.get("/:user_id", async (req, res) => {
  try {
    const foundUser = await User.findOne({
      where: { user_id: req.params.user_id },
    //   include: [
    //     {
    //       model: Demo,
    //       as: "demographics",
    //       where: {
    //         user_id: req.query.user_id ,
    //       },
    //     },
    //   ],
    });
    res.status(200).json(foundUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Create a User
/*users.post('/', (req, res) => {
  console.log('POSTED!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
  const username = req.body.name
  const password = req.body.password

  User.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, password], (err, results) => {
      if (err){console.log(err)} else {res.send('values inserted')}
  })
})*/

users.post("/", async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(200).json({
      message: "Successfully inserted a new user",
      data: newUser,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update a User
users.put("/:user_id", async (req, res) => {
  try {
    const updatedUser = await User.update(req.body, {
      where: {
        user_id: req.params.user_id,
      },
    });
    res.status(200).json({
      message: `Successfully updated ${updatedUser}`,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete a User
users.delete("/:user_id", async (req, res) => {
  try {
    const deletedUser = await User.destroy({
      where: {
        user_id: req.params.user_id,
      },
    });
    res.status(200).json({
      message: `Successfully deleted ${deletedUser}`,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// EXPORT
module.exports = users;
