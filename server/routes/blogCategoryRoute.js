const express = require('express');
const router = express.Router();
const blogCategoryCtrl = require('../controller/blogCategoryController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/',authMiddleware.authMiddleware,authMiddleware.isAdmin,blogCategoryCtrl.createCategory);
router.get('/',blogCategoryCtrl.getAllCategory);
router.get('/:id',blogCategoryCtrl.getCategory);
router.patch('/:id',authMiddleware.authMiddleware,authMiddleware.isAdmin,blogCategoryCtrl.updateCategory);
router.delete('/:id',authMiddleware.authMiddleware,authMiddleware.isAdmin,blogCategoryCtrl.deleteCategory);

module.exports = router;