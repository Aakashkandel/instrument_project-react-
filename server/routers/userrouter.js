

const express = require('express');
const router = express.Router();
const userController = require('../controllers/usercontroller');

router.post('/registerapi', userController.register);

module.exports = router;
