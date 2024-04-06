

const express = require('express');
const router = express.Router();
const userController = require('../controllers/usercontroller');

router.post('/registerapi', userController.register);
router.post('/loginapi',userController.login);
router.post('/forgotpasswordapi',userController.forgotpassword);
router.post ('/changepasswordapi',userController.changepassword);


module.exports = router;
