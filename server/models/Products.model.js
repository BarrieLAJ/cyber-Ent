const mongoose = require('mongoose');

const Schema = mongoose.Schema

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    size:{
        type: String,
        required: true
    },
    unit_cost:{
        type: Number,
        required: true
    }
});


//model
const ProductsModel = mongoose.model('product', ProductSchema);


module.exports = ProductsModel;