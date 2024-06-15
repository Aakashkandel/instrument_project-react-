
const User = require('../models/usermodels');
const Vendor = require('../models/vendormodels');
const Product = require('../models/addproduct');
const Cart =require('../models/addtocart');
const cart = require('../models/addtocart');



const productuploads =  async(req, res) => {

    console.log(req.user);


    if (req.file.mimetype == 'image/png' || req.file.mimetype == 'image/jpg' || req.file.mimetype == 'image/jpeg') {
        if (req.file.size <= 1 * 1024 * 1024) {
            var image= req.file.path;
        }
        else {
            return res.status(400).json({ message: "Too large size image" })
        }

    }
    else {
        return res.status(400).json({ message: "unsupported format" });
    }

    if (req.body) {
        const { product_name, title, regular_price, sales_price, stock, category, visibility, description } = req.body;
        const { warrenty_year, warrenty_month } = req.body;
       const user_id=req.user.id;
       console.log(user_id);
        const newProduct = new Product({
            user_id,
            product_name,
            title,
            price:
            {
                regular_price,
                sales_price

            },
            stock,
            category,
            visibility,
            description,
            warrenty:
            {
                warrenty_year,
                warrenty_month
            },
            image
        });

        await newProduct.save();

        return res.status(200).json({ message: "Successfully add product" });
    }

}

const allProduct =async(req,res)=>{

    try{
        const userData=await Product.find();
        console.log(userData);
        return res.status(200).json(userData);

    }catch(error)
    {
      return res.status(400).json("unbale to fetch data");
    }
}

const add_cart=async(req,res)=>{
    const{product_id,user_id,quantity,status,price}=req.body;
    console.log(product_id,user_id,quantity,status,price);


    const cartData = await Cart.findOne({ product_id, user_id });
    if(cartData)
        {
            return res.status(400).json({message:"Already add to Cart",status:false})
        }

  
    
    try {
        const newcart = Cart({
            product_id, user_id, quantity, status,price
        });
        await newcart.save();
        return res.status(200).json({ message: "Cart is successfully inserted", success: true, newcart });
    } catch (err) {
        return res.status(400).json({ message: err.message || "Unable to insert cart", success: false });
    }
    

    


}

const fetch_cart = async (req, res) => {
    const user_id=req.user.id;

    try {
        console.log("Searching for user_id:", user_id);
        const allcart = await Cart.find({ user_id });
        console.log("Cart items:", allcart);

        const productids=allcart.map(cartitems=>cartitems.product_id);
        const productData=[];
        console.log(productids);
        for(const productid of productids)
            {
                const product=await Product.findOne({_id:productid});
                productData.push(product);
            }

            console.log(productData);
            
       
            return res.status(200).json({message:"cart is successfully fetch",success:true,product:productData,cart:allcart});
        
       
    } catch (err) {
        console.error("Error fetching cart details:", err);
        return res.status(400).json({ message: "Unable to fetch cart details", success: false });
    }
}

const delete_cart = async (req, res) => {
    const _id= req.params.id;
    
console.log(_id);
    try {
        const cartData = await Cart.findByIdAndDelete(_id);
        if (cartData) {
            return res.status(200).json({ message: "Cart is successfully deleted", success: true });
        }
        else {
            return res.status(400).json({ message: "Cart is not found", success: false });
        }
    } catch (err) {
        return res.status(400).json({ message: "Unable to delete cart", success: false });
    }
}





module.exports = { productuploads,allProduct,add_cart,fetch_cart,delete_cart, 
 };