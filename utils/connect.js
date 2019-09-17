const mongoose = require('mongoose');
const db = require('../config/keys').mongoURI;
mongoose
	.connect(db)
	.then(() => {
		console.log('MongoDB Connected');
	})
	.catch(err => {
		console.log(err);
		console.log('\x1b[31m\x1b[1m MongoDB Not Connected');
	});

module.exports = mongoose;