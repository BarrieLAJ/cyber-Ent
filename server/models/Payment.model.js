const mongoose = require('mongoose');

const Schema = mongoose.Schema

const PaymentSchema = new Schema({
    amount:{
        type: Number,
        required: true
    },
    date:{
        type: Date,
        required: true,
        default: Date.now
    },
    balance:{
        type: Number,
        required: true
    },
    payment_type:{
        type: String,
        required: true
    },
    customer_id: {
        type: String,
        required: true
    },
    order_id: {
        type: String,
        required: true
    }
});

//model
const PaymentModel = mongoose.model('payment', PaymentSchema);


module.exports = PaymentModel;