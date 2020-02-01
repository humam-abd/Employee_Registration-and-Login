const Emp = require("../model/empmodel")
const response = require("../response/response")
const jwt = require("jsonwebtoken")
const config = require("../config/token.config")
var encrytp = require("bcryptjs")

//Registration
exports.reg = async function (name, age, email, passwordOg, address, callback) {
    try {
        var hash = encrytp.hashSync(passwordOg, 8);
        await Emp.create({
            name: name,
            age: age,
            email: email,
            password: hash,
            address: address
        },
            function (err, emp) {
                if (err) return callback("Error adding employee");
                return callback(emp);
            });
    } catch (err) {
        return callback(response.setresponse(false, "", "500", err.message, {}));
    }
}

//Login
exports.log = async function (email, password, callback) {
    try {
        Emp.findOne({ email: email }, function (err, data) {
            if (err) {
                return callback(response.setresponse(false, "", "500", err.message, {}))
            }
            if (!data) {
                return callback(response.setresponse(false, "", "500", "Not able to find data", {}))
            }
            var passvalid = encrytp.compareSync(password, data.password)
            if (!passvalid) {
                return callback(response.setresponse(false, '', "401", "invalid password", {}));
            }
            var token = jwt.sign({ id: data._id, role: "user" }, config.secret, {
                expiresIn: 500
            });
            return callback({ data, token })

        });
    } catch (err) {
        return callback(response.setresponse(false, "", "500", err.message, {}))
    }
}

//Details with email and token
exports.tkdetails = async function (email, callback) {
    try {
        Emp.findOne({ email: email }, function (err, empl) {
            if (err) {
                return callback(response.setresponse(false, "", "", err.message, {}))
            }
            if (!empl) {
                return callback(response.setresponse(false, "", "", "Not found", {}))
            }
            return callback(empl)
        })
    } catch (err) {
        return callback(response.setresponse(false, "", "", "Error", {}))
    }
}

//Details with id and token
exports.tkid = async function (id, callback) {
    try {
        Emp.findOne({ _id: id }, function (err, result) {
            if (err) {
                return callback(response.setresponse(false, "", "", err.message, {}));
            }
            if (!result) {
                return callback(response.setresponse(false, "", "", err.message, {}));
            }
            return callback(result);
        })
    } catch (err) {
        return callback(response.setresponse(false, "", "", err.message, {}));
    }
}