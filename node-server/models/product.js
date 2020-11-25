const mongoose = require('mongoose')
const autoIncrement = require('mongoose-auto-increment')

autoIncrement.initialize(mongoose.connection);

const productSchema = mongoose.Schema({
    name: { type: String, required: true },
	description: { type: String, required: true },
	price: {type: Number, required: true},
	url: {type: String}
})

productSchema.plugin(autoIncrement.plugin, 'Product')

module.exports = mongoose.model('Product', productSchema)