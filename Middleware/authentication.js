const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
    const token =req.query.t;
    const filter =req.query.IMO;
    if (token == null) return res.sendStatus(401);
  
    jwt.verify(token, 'Shiv@123@', (err, user) => {
      if (err) return res.sendStatus(403);
      else
      req.user = user; 
      next();
    });
  }
  module.exports = authenticateToken;