const mongoose = require('mongoose');
const autoNumber = require('@safer-bwd/mongoose-autonumber')
const autoPopulatePlugin = require('mongoose-autopopulate');

const Schema = mongoose.Schema

const OrderSchema = new Schema({
    _id: {
        type: String,
        immutable: true,
        maxlength: 7,
        autonumber: {
          prefix: () => `ORD-`,
          addLeadingZeros: true
    }},
    total_cost:{
        type: Number,
        required: true
    },
    quantity:{
        type: Number,
        required: true,
        default: 1
    },
    product:{
        type: String,
        ref: 'product',
        required: true,
        autopopulate: true
    },
    customer: {
        type: String,
        ref: 'customer',
        required: true,
        autopopulate: true
    },
    status: {
        type: String,
        default: 'active'
    }
}, {timestamps: {createdAt: 'created_at'}});


OrderSchema.plugin(autoNumber)
OrderSchema.plugin(autoPopulatePlugin)

//model
const OrderModel = mongoose.model('order', OrderSchema);


module.exports = OrderModel;