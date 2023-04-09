const express = require('express')
const router = express.Router();
const userController = require('../controller/userController')
const authMiddleware= require('../middlewares/authMiddleware')

router.post('/register',userController.createUser);
router.post('/login',userController.loginUserCtrl);
router.get('/all-users',userController.getallUsers);
router.get('/refresh',userController.handleRefreshToken);
router.get('/logout',userController.logout);
router.get('/:id',authMiddleware.authMiddleware,authMiddleware.isAdmin,userController.getaUser);
router.delete('/:id',userController.deleteaUser);
router.put('/edit-user',authMiddleware.authMiddleware,userController.updateaUser);
router.put('/block-user/:id',authMiddleware.authMiddleware,authMiddleware.isAdmin,userController.blockUser);
router.put('/unblock-user/:id',authMiddleware.authMiddleware,authMiddleware.isAdmin,userController.unblockUser);

module.exports = router