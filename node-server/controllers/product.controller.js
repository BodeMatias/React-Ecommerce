const Product = require('../models/product')
const mongo = require('mongodb')
const fs = require('fs')
const path = require('path'); 
const productController = {}


productController.getProducts = async (req, res) => {
	const products = await Product.find()

	products.map( p => {
		p.img = fs.readFileSync(__basedir + `/public/uploads/${p.url}`)
	})
	console.log(products)
	res.json(products)
}

productController.addProduct = async (req, res) => {
	let product = new Product()

	product.name = req.body.name
	product.description = req.body.description
	product.price = parseInt(req.body.price)
	product.url = req.file.filename

	Product.create(product)

	res.status(200);
	res.send('Product added to database.')
}

productController.deleteProduct = async (req, res) => {
	let id = req.params.id
	await Product.deleteOne({_id: id})
	res.json({success: id})
}

productController.editProduct = async (req, res) => {
	let id = req.params.id;
    await Product.findOne({_id: id}, (err, product) => {
		product.name = req.body.name
		product.description = req.body.description
		product.price = req.body.price
		product.url = req.body.url
        product.save();
        res.json(product);
    })
}

productController.searchProducts = async (req, res) => {

}

module.exports = productController