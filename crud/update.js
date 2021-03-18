require('../connection');

const User = require('../models/User');

const updateUsers = async () => {
	// El update remplaza todos los datos de la coleccion
	const user = await User.update({
		username: 'maria'
	}, {
		password: 'contraseñaMasSeguraParaMaria'
	});

	console.log(user);
}

const updateOneUser = async () => {
	// Busca el usuario y cambia los datos (Tambien es actualizarlo)
	const user = await User.findOne({username: 'gonzalo'});
	console.log(user);
	user.password = 'LaContraDeGonzalo';
	user.save();
}

const updateFindOneUser = async () => {
	const user = await User.findOneAndUpdate({
		username: 'pablo'
	}, {
		name: 'El super Pablo'
	}, {new: true});
	// El new: true es para que me muestre los datos cambiados, sino me trae los datos viejos
	console.log(user);
}

updateFindOneUser();