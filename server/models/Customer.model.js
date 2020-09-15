const mongoose = require('mongoose');

const Schema = mongoose.Schema

const CustomerSchema = new Schema({
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

//model
const CustomerModel = mongoose.model('customer', CustomerSchema);


module.exports = CustomerModel;