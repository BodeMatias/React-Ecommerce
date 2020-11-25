const express = require('express')
const router = express.Router()
const productController = require('../controllers/product.controller')
const multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})

var upload = multer({ storage: storage })

router.get('/products-test', productController.getProducts)
router.post('/products', upload.single('img'),  productController.addProduct)
router.put('/products/:id', productController.editProduct)
router.delete('/products/:id', productController.deleteProduct)
router.get('/products/search/:name', productController.searchProducts)

module.exports = router