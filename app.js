const express = require('express');
const mssql = require("mssql");
const bodyParser = require('body-parser');


const app = express();
const PORT =process.env.PORT ||3000;
const Register =require("./routes/register");
const logIn =require("./routes/login");
const form =require("./routes/form");
 const FrontPageLog =require("./routes/log");
 const IMO_form = require("./routes/IMO_form");
 const IMO_Js = require("./routes/IMO");
 const authenticateToken =require("./Middleware/authentication");


 ///mssql configuration///
 const config = {
  user: 'prddb.enervamarine.com',
  password: 'UAT123!',
  server: 'your_server',
  database: 'uatuser',
};

 


///////////////////////////////////////////////
///middleware here///
app.use("/register", Register);
app.use("/login", logIn);
app.use("/log", FrontPageLog);
app.use("/form", form);
app.use("/Enerva", IMO_form);
app.use("/api/data",authenticateToken,IMO_Js);

////////////////////////////////////////////////

app.listen(PORT, () => {
  console.log(  `${PORT}`);
});
