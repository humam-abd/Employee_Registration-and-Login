//Database Configuration
const mongoose = require("mongoose");
const dbp = "mongodb://localhost:27017/empdb";
mongoose.connect(dbp, {
    useMongoClient: true
});
const db = mongoose.connection;
db.on("error", () => {
    console.log("error occurred from the database");
});
db.once("open", () => {
    console.log("Successfully opened the database");
});
module.exports = mongoose;