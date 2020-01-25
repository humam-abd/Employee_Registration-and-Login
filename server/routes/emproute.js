const express = require("express")
const route = express.Router();

const empcontroller = require("../controllers/empcontroller")
route.post("/acc/reg", empcontroller.reg);
route.post("/acc/log", empcontroller.log);
module.exports = route