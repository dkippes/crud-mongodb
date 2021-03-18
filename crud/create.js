require('../connection');

const Product = require('../models/Product');

// Codigo moderno de JS
const createProduct = async () => {
	const laptop = new Product({
		name: 'laptop hp',
		description: 'htp 15'
	})
	await laptop.save();
}

createProduct();