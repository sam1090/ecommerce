const express = require('express');
const router = express.Router();
const brandController = require('../controller/brandController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/',authMiddleware.authMiddleware,authMiddleware.isAdmin,brandController.createBrand);
router.get('/',brandController.getAllBrand);
router.get('/:id',brandController.getBrand);
router.patch('/:id',authMiddleware.authMiddleware,authMiddleware.isAdmin,brandController.updateBrand);
router.delete('/:id',authMiddleware.authMiddleware,authMiddleware.isAdmin,brandController.deleteBrand);

module.exports = router;