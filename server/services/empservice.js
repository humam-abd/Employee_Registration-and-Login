const Emp = require("../model/empmodel")
const response = require("../response/response")

exports.reg = async function(name, age, email, passwordOg, address, callback) {
    try {
        await Emp.create({
                name: name,
                age: age,
                email: email,
                password: passwordOg,
                address: address
            },
            function(err, emp) {
                if (err) return callback("Error adding employee");
                return callback(emp);
            });
    } catch (err) {
        return callback(response.setresponse("", "500", err.message, {}));
    }
}
exports.log = async function(email, password, callback) {
    try {
        Emp.findOne({ email: email, password: password }, function(err, data) {
            if (err) {
                return callback(response.setresponse("", "500", err.message, {}))
            }
            if (!data) {
                return callback(response.setresponse("", "500", "Not able to find data", {}))
            }
            return callback(response.setresponse("", "200", "Success", { data }))


        });
    } catch (err) {
        return callback(response.setresponse("", "500", err.message, {}))
    }
}