

const express = require('express');
const router = express.Router();
const userController = require('../controllers/usercontroller');
const productController=require('../controllers/productController');

router.post('/registerapi', userController.register);
router.post('/loginapi',userController.login);
router.post('/forgotpasswordapi',userController.forgotpassword);
router.post ('/changepasswordapi',userController.changepassword);

//vendor routes

router.post('/productuploadsapi',productController.productuploads);


module.exports = router;
