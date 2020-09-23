const mongoose = require('mongoose');
const autoNumber = require('@safer-bwd/mongoose-autonumber')
const autoPopulatePlugin = require('mongoose-autopopulate');

const Schema = mongoose.Schema

const PaymentSchema = new Schema({
    _id: {
        type: String,
        immutable: true,
        maxlength: 7,
        autonumber: {
          prefix: () => `PMT-`,
          addLeadingZeros: true
    }},
    amount:{
        type: Number,
        required: true
    },
    balance:{
        type: Number,
        required: true
    },
    payment_type:{
        type: String,
        required: true
    },
    customer: {
        type: String,
        ref: 'customer',
        autopopulate: true,
        required: true
    },
    order: {
        type: String,
        ref: 'order',
        autopopulate: true,
        required: true
    }
}, {timestamps: { createdAt: 'created_at' }});

PaymentSchema.plugin(autoNumber)
PaymentSchema.plugin(autoPopulatePlugin)


//model
const PaymentModel = mongoose.model('payment', PaymentSchema);


module.exports = PaymentModel;