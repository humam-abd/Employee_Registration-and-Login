const jwt = require("jsonwebtoken");
var config = require("../config/token.config");
var response = require("../response/response");

function verifytoken (req, res, next) {
    var token;
    token = req.headers['x-access-token'];

    //For using Authorization and Bearers in headers
    // if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    //     token = req.headers.authorization.split(' ')[1];
    // }
    // console.log(req.headers.authorization)
    // console.log(token);

    if (!token) {
        return res.send(response.setresponse(false, "", "", "No Token found", {}));
    }
    //Verification of token
    jwt.verify(token, config.secret, function(err, decoded) {
        if (err) return res.send(response.setresponse(false, "", "", "Invalid Token", {}));

        //Values saved to requests for further cross-checks
        req.dataid = decoded.id;
        //For moving on to next argument in routing function in routing module(here, route in emproute.js)
        next();
    })
}
module.exports = verifytoken;