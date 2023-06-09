const express = require('express');
const router = express.Router();
const couponController = require('../controller/couponController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/',authMiddleware.authMiddleware,authMiddleware.isAdmin,couponController.createCoupon);
router.get('/',couponController.getAllCoupon);
// router.get('/:id',couponController.getCoupon);
router.patch('/:id',authMiddleware.authMiddleware,authMiddleware.isAdmin,couponController.updateCoupon);
router.delete('/:id',authMiddleware.authMiddleware,authMiddleware.isAdmin,couponController.deleteCoupon);

module.exports = router;