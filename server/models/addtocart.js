const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const cartSchema=Schema({
 product_id:{
    type:String,
    require:true,

 },

 price:{
   type:Number,
   require:true,
 }
,
 quantity:{
    type:Number,
    require:true,
 },
 user_id:{
    type:String,
    require:true,
 },

 status:{
    type:String,
    require:true,
 }
 
});

const cart=mongoose.model('carts',cartSchema);;
module.exports=cart;