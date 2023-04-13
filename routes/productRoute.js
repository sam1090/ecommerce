const express = require('express');
const productController  = require('../controller/productController');
const {isAdmin, authMiddleware} = require('../middlewares/authMiddleware')
const router= express.Router();

router.post('/',authMiddleware,isAdmin,productController.createProduct);
router.get('/',productController.getAllProducts);
router.get('/:id',productController.getaProduct);
router.put('/:id',authMiddleware,isAdmin,productController.updateProduct);
router.delete('/:id',authMiddleware,isAdmin,productController.deleteProduct);


module.exports = router;