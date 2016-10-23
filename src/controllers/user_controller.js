// Load required packages
var uuid = require('uuid');
//var User = require('../models/user');

// Create endpoint /api/login for POST
exports.postLogin = function(req, res) {
    if(req.body.username == "admin" &&
        req.body.password == "password"
      ) {
            res.json({key: uuid.v1()});
        }
        else{
            res.status(403).send({errorCode:"No Auth"});
        }
};



//   var user = new User({
//     username: req.body.username,
//     password: req.body.password
//   });
// };
