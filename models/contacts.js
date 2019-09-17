var connect = require('../utils/connect');
var contacts = connect.model('contacts', new connect.Schema({ 
	id : Number,
	first_name: String, 
	last_name: String, 
	email: String, 
	gender: String, 
	ip_address: String 
}))

module.exports = contacts;