const express = require("express")
const route = express.Router();
const vtoken = require("../auth/verifytoken")
const empcontroller = require("../controllers/empcontroller")

//GETs and POSTs
route.post("/acc/reg", empcontroller.reg);
route.post("/acc/log", empcontroller.log);
route.get("/acc/wtoken", vtoken.verifytoken, empcontroller.tkdetails);
route.get("/acc/widtoken", vtoken.verifytoken, empcontroller.tkid);
module.exports = route