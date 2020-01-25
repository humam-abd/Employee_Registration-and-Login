const empservice = require("../services/empservice");
const response = require("../response/response");

exports.reg = async function(req, res) {
    try {
        if (req.body.password == req.body.passwordOg) {
            await empservice.reg(req.body.name,
                req.body.age,
                req.body.email,
                req.body.passwordOg,
                req.body.address,
                function(data) {
                    res.send(response.setresponse("", "200", "Success ", { data }));
                });
        } else {
            res.send("Password mismatch!!");
        }
    } catch (err) {
        res.send(response.setresponse("", "500", err.message, {}));
    }
}
exports.log = async function(req, res) {
    try {
        await empservice.log(req.body.email,
            req.body.password,
            function(data) {
                res.send(data);
            });
    } catch (err) {
        res.send(response.setresponse("", "500", err.message, {}));
    }
}