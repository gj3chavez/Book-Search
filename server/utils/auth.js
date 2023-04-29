const jwt = require('jsonwebtoken');

// set token secret and expiration date
const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
  authMiddleware: function ({req}) {

    let token = req.query.token || req.headers.authorization || req.body.token;

  
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch(err) {
      console.log('Invalid token');
      console.log(err)
    }
    return req;
  },
  signToken: function ({ email, name, _id }) {
    const payload = { email, name, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  }
};




