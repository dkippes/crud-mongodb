require('../connection');

const Product = require('../models/Product');

// Codigo moderno de JS
async function findAll() {
	const products = await Product.find({
		name: 'keyboard'
	});
	console.log(products);
}

findAll();