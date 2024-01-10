const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const bcrypt = require('bcrypt');
const users = require("../module/users");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


router.post("/", async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
    console.log(username);
    const newUser = {
      id: users.length + 1,
      username,
      password: hashedPassword,
    };
    users.push(newUser);

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.log(req.bofy);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports =router;
