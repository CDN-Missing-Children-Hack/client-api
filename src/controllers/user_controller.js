// Load required packages
var uuid = require('uuid');
var user = require('../models/user_model');

user.username = 'Admin';
user.password = 'password';
user.firstname = 'Bob';
user.lastname = 'Brady';
user.token = uuid.v1();

// Create endpoint /api/login for POST
exports.postLogin = function(req, res) {
    if(req.body.username == user.username &&
        req.body.password == user.password
      ) {
            res.json({
                username : user.username,
                firstname: user.firstname,
                lastname: user.lastname,
                token: user.token});
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
