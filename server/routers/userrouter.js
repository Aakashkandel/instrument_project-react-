

const express = require('express');
const router = express.Router();
const userController = require('../controllers/usercontroller');
const productController=require('../controllers/productController');
const profileController=require('../controllers/ProfileController');
const adminbankController=require('../controllers/adminbankController');
const orderplaceController=require('../controllers/orderplaceController');
const cartController=require('../controllers/cartController');
const multer  = require('multer');
const auth = require('../middleware/auth');

 

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })

const upload = multer({storage})


router.post('/registerapi', userController.register);
router.post('/loginapi',userController.login);
router.post('/forgotpasswordapi',userController.forgotpassword);
router.post ('/changepasswordapi',userController.changepassword);



router.post('/productuploadsapi',auth,upload.single('image'),productController.productuploads);
router.get('/allproductapi',productController.allProduct);


//cart

router.post('/addcartapi',auth,cartController.add_cart);
router.get('/fetchcartapi',auth,cartController.fetch_cart);
router.delete('/deletecartapi/:id',auth,cartController.delete_cart);
//deleteandadd cart quantity
// router.post('/decreasequantity',auth,cartController.decreasequantity);
router.post('/increasequantity',auth,cartController.increasequantity);



//profile
router.post('/profileapi',auth,profileController.profile);
router.post('/addesewaapi',auth,profileController.addesewa);
router.post('/updateesewaapi',auth,profileController.updateesewa);

//orderplace
router.post('/orderplaceapi',auth,orderplaceController.orderplace);
router.get('/fetchorderapi',auth,orderplaceController.fetchorder);
router.get('/esewapaymentverifyapi',orderplaceController.EsewaPaymentVerify);
router.delete('/deleteorderapi/:id',auth,orderplaceController.deleteorder);


//adminbank
router.post('/addbankapi',adminbankController.addbank);





module.exports = router;
