const mongoose = require("mongoose");
require("dotenv").config();

const connected_string = process.env.MONGO_URI_DEV;
mongoose.connect(connected_string);

module.exports = mongoose;
