const express = require("express")
const path = require("path");
const router = express.Router();


const filePath = path.join(__dirname,'..', '/login.html');
router.get("/", (req, res) => {
    console.log(filePath);
  res.sendFile(filePath);
});


module.exports =router;