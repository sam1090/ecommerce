const express = require('express');
const router = express.Router();
const blogController = require('../controller/blogController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/',authMiddleware.authMiddleware,authMiddleware.isAdmin,blogController.createBlog);
router.get('/',blogController.getAllBlogs);
router.put('/likes',authMiddleware.authMiddleware,blogController.likeBlog);
router.put('/dislikes',authMiddleware.authMiddleware,blogController.disLikeBlog);
router.get('/:id',blogController.getBlog);
router.patch('/:id',authMiddleware.authMiddleware,authMiddleware.isAdmin,blogController.updateBlog);
router.delete('/:id',authMiddleware.authMiddleware,authMiddleware.isAdmin,blogController.deleteBlog);


module.exports = router;