const empservice = require("../services/empservice");
const response = require("../response/response");

//Registration
exports.reg = async function(req, res) {
    try {
        if (req.body.password == req.body.passwordOg) {
            await empservice.reg(req.body.name,
                req.body.age,
                req.body.email,
                req.body.passwordOg,
                req.body.address,
                function(data) {
                    res.send(data);
                });
        } else {
            res.send("Password mismatch!!");
        }
    } catch (err) {
        res.send(response.setresponse(false, "", "500", err.message, {}));
    }
}

//Login
exports.log = async function(req, res) {
    try {
        await empservice.log(req.body.email,
            req.body.password,
            function(data) {
                res.send(data);
            });
    } catch (err) {
        res.send(response.setresponse(false, "", "500", err.message, {}));
    }
}

//Details with email and token
exports.tkdetails = async function(req, res) {
    try {
        await empservice.tkdetails(req.query.email, function(data) {
            res.send(data);
        })
    } catch (err) {
        res.send(response.setresponse(false, "", "500", err.message, {}));
    }
}

//Details with id and token
exports.tkid = async function(req, res) {
    try {
        await empservice.tkid(req.dataid, function(data) {
            res.send(data);
        })
    } catch (err) {
        res.send(response.setresponse(false, "", "", err.message, {}))
    }
}