const express = require("express");
const path =require("path");
const router = express.Router();

const filePath = path.join(__dirname, '..', '/auth.html');

router.get("/", (req, res) => {
  res.sendFile(filePath);
});


module.exports =router;