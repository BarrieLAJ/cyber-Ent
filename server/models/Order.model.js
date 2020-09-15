const mongoose = require('mongoose');

const Schema = mongoose.Schema

const OrderSchema = new Schema({
    total_cost:{
        type: Number,
        required: true
    },
    quantity:{
        type: Number,
        required: true,
        default: 1
    },
    product_id:{
        type: String,
        required: true
    }
});

//model
const OrderModel = mongoose.model('order', OrderSchema);


module.exports = OrderModel;