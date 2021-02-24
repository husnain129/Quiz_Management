const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.route('/').get(userController.getAllUser);
router.post('/forgotPassword', userController.forgotPassword);
router.route('/resetPassword/:token').get(userController.resetPassword);
// router.route('/updateMyPassword').post(userController.updateMyPassword);
router.route('/updateMyPassword').patch(userController.protect, userController.updatePassword);
router.route('/:id').get(userController.getUser);
router.route('/signup').post(userController.signup);
router.route('/login').post(userController.login);

module.exports = router;
