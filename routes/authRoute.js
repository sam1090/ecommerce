const express = require('express')
const router = express.Router();
const userController = require('../controller/userController')
const authMiddleware= require('../middlewares/authMiddleware')

router.post('/register',userController.createUser);
router.post('/login',userController.loginUserCtrl);
router.post('/admin-login',userController.loginAdmin );
router.get('/all-users',userController.getallUsers);
router.get('/refresh',userController.handleRefreshToken);
router.get('/logout',userController.logout);
router.put('/password',authMiddleware.authMiddleware,userController.updatePassword);
router.get('/forgot-password',userController.forgotPassword);
router.put('/reset-password/:token',userController.resetPassword);
router.get('/wishlist',authMiddleware.authMiddleware, userController.getWishlist);
router.post('/cart',authMiddleware.authMiddleware, userController.userCart);
router.get('/cart',authMiddleware.authMiddleware, userController.getUserCart);
router.delete('/cart',authMiddleware.authMiddleware, userController.emptyCart);
router.post('/cart/applyCoupon',authMiddleware.authMiddleware, userController.applyCoupon);
router.get('/:id',authMiddleware.authMiddleware,authMiddleware.isAdmin,userController.getaUser);
router.delete('/:id',userController.deleteaUser);
router.put('/edit-user',authMiddleware.authMiddleware,userController.updateaUser);
router.put('/address',authMiddleware.authMiddleware,userController.saveAddress);
router.put('/block-user/:id',authMiddleware.authMiddleware,authMiddleware.isAdmin,userController.blockUser);
router.put('/unblock-user/:id',authMiddleware.authMiddleware,authMiddleware.isAdmin,userController.unblockUser);

module.exports = router