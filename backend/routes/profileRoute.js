const express = require('express');
const profileController = require('../controllers/profileController');
const router = express.Router();

router.route('/').get(profileController.getAllProfile).post(profileController.createProfile);

module.exports = router;
