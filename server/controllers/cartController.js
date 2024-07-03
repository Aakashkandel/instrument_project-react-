

const Product = require('../models/addproduct');
const Cart = require('../models/addtocart');

//add to cart controller

const add_cart = async (req, res) => {
    const { product_id, user_id, quantity, status, price } = req.body;
    console.log(product_id, user_id, quantity, status, price);


    const cartData = await Cart.findOne({ product_id, user_id });
    if (cartData) {
        return res.status(400).json({ message: "Already add to Cart", status: false })
    }



    try {
        const newcart = Cart({
            product_id, user_id, quantity, status, price
        });
        await newcart.save();
        return res.status(200).json({ message: "Cart is successfully inserted", success: true, newcart });
    } catch (err) {
        return res.status(400).json({ message: err.message || "Unable to insert cart", success: false });
    }





}

//fetch cart controller

const fetch_cart = async (req, res) => {
    const user_id = req.user.id;

    try {
        console.log("Searching for user_id:", user_id);
        const allcart = await Cart.find({ user_id });
        console.log("Cart items:", allcart);

        const productids = allcart.map(cartitems => cartitems.product_id);
        const productData = [];
        console.log(productids);
        for (const productid of productids) {
            const product = await Product.findOne({ _id: productid });
            productData.push(product);
        }

        console.log(productData);


        return res.status(200).json({ message: "cart is successfully fetch", success: true, product: productData, cart: allcart });


    } catch (err) {
        console.error("Error fetching cart details:", err);
        return res.status(400).json({ message: "Unable to fetch cart details", success: false });
    }
}


//delete cart controller

const delete_cart = async (req, res) => {
    const _id = req.params.id;

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


const increasequantity=async(req,res)=>{
    const userid=req.user.id;
    const{product_id,quantity}=req.body;
    console.log(product_id,quantity);
    const cartData=await Cart.findOne({product_id,user_id:userid});
    if(cartData){
        cartData.quantity=quantity;
        await cartData.save();
        return res.status(200).json({message:"Quantity is successfully updated",success:true});
    }
    else{
        return res.status(400).json({message:"Cart is not found",success:false});
    }
}

module.exports = {  add_cart, fetch_cart, delete_cart,increasequantity };