const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    user_id: {
        type: String,
        required: true,
    },
    product_name: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    price: {
        regular_price: {
            type: Number,
            required: true,
        },
        sales_price: {
            type: Number,
            required: true,
        }
    },
    stock: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    visibility: { 
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    warranty: { // Corrected field name
        warranty_year: {
            type: Number,
        },
        warranty_month: {
            type: Number,
        }
    },
    image: {
        type: String,
        required: true,
    },

});
const Product = mongoose.model('Product', productSchema); // Corrected model name
module.exports = Product;
