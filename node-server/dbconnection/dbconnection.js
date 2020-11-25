var mongoose = require('mongoose')
require("dotenv").config();

mongoose.connect(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true})
		.then((db) => console.log("db connected"))
		.catch((err) => console.log(err));

module.exports = mongoose;