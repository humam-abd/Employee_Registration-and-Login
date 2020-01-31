//Schema and Model Creation
var mongoose = require("mongoose");
var Emp = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String,
    address: String
});
mongoose.model("Employee", Emp);

module.exports = mongoose.model("Employee");