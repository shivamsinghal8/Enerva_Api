// Endpoint for user login and token generation

const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const users = require("../module/users");
////////////////////////////////

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

//////////////////////////////////
router.post("/", async (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username);
  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign({ username: user.username }, "Shiv@123@", {
      expiresIn: "1h",
    });
    res.json({ accessToken });
  } else {
    res.status(401).json({ error: "Invalid username or password" });
  }
});

module.exports =router;