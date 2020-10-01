const mongoose = require('mongoose');
const autoNumber = require('@safer-bwd/mongoose-autonumber')


const Schema = mongoose.Schema

const ProductSchema = new Schema ( {
    _id: {
        type: String,
        immutable: true,
        maxlength: 7,
        autonumber: {
          prefix: () => `PDT-`,
          addLeadingZeros: true
    }},
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
    },
    status: {
        type: String,
        default: 'active'
    }
}, {timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}});

ProductSchema.plugin(autoNumber)

//model
const ProductsModel = mongoose.model('product', ProductSchema);


module.exports = ProductsModel;