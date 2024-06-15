

const express = require('express');
const router = express.Router();
const userController = require('../controllers/usercontroller');
const productController=require('../controllers/productController');
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

router.post('/addcartapi',auth,productController.add_cart);
router.get('/fetchcartapi',auth,productController.fetch_cart);
router.delete('/deletecartapi/:id',auth,productController.delete_cart);


module.exports = router;
