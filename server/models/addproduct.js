const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const productSchema=new Schema({
    productname:{
        type:String,
        required:true,

    },
    title:{
        type:String,
        required:true,
    },
    price:{
        regularprice:{
            type:Number,
            required:true,
        },
        saleprice:{
            type:Number,
            required:true,
        }
    },
    stock:{
        type:Number,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    visiblity:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    warrenty:{
        year:{
            type:Number,
            
        },
        month:{
            type:Number,
        }

    },
    image:{
        type:String,
        required:true,
    },

});
const product=mongoose.model('product',productSchema);
module.exports=product;