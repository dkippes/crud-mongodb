require('../connection');

const Product = require('../models/Product');

const deleteAllProducts = async () => {
	const result = await Product.deleteMany({name: 'keyboard'})
	console.log(result);
}

const deleteOneProduct = async () => {
	// Busca todos y elimina uno
	const result = await Product.deleteOne({name: 'laptop'})
	console.log(result);

	// Busca uno y elimina ese sin recorrer todo
	// const result = await Product.findOneAndDelete({name: 'laptop'})
	
	// Busca por el id y lo elimina
	//const result = await Product.findByIdAndDelete({name: 'laptop'})
}

deleteOneProduct();