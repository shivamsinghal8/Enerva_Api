const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const fs = require("fs");


 



const rawData = fs.readFileSync("./csvjson.json");
const data = JSON.parse(rawData);

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


router.get("/", (req, res) => {
  const queryIMO =req.query.IMO;
 // const queryIMO = req.body["IMO Number"];
  
   
  if (queryIMO && data.length > 0) {
    // If IMO Number query parameter is provided and data is available
    const filteredData = data.filter(item => item["IMO Number"] === parseInt(queryIMO));
    res.json(filteredData);
  }
  
  
  else {
    console.log(queryIMO);
    // If no IMO Number query parameter is provided or data is empty, return all data
    res.json(data);
  }
});

module.exports = router;

