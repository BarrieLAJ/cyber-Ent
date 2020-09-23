const mongoose = require('mongoose');
const autoNumber = require('@safer-bwd/mongoose-autonumber')

const Schema = mongoose.Schema

const CustomerSchema = new Schema({
    _id: {
        type: String,
        immutable: true,
        maxlength: 7,
        autonumber: {
          prefix: () => `CST-`,
          addLeadingZeros: true
    }},
    name:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    phone_number:{
        type: String,
        required: true
    }
});


CustomerSchema.plugin(autoNumber)

//model
const CustomerModel = mongoose.model('customer', CustomerSchema);


module.exports = CustomerModel;