require('../connection');

const User = require('../models/User');

// Codigo moderno de JS
async function getUser() {
	// Si no lo encuentra devuelve null
	const user = await User.findOne({
		username: 'diegokippes'
	});
	console.log(user);
}

getUser();