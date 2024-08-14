const express = require('express');
const router = express.Router();
const prodCategoryCtrl = require('../controller/prodCategoryController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/',authMiddleware.authMiddleware,authMiddleware.isAdmin,prodCategoryCtrl.createCategory);
router.get('/',prodCategoryCtrl.getAllCategory);
router.get('/:id',prodCategoryCtrl.getCategory);
router.patch('/:id',authMiddleware.authMiddleware,authMiddleware.isAdmin,prodCategoryCtrl.updateCategory);
router.delete('/:id',authMiddleware.authMiddleware,authMiddleware.isAdmin,prodCategoryCtrl.deleteCategory);

module.exports = router;