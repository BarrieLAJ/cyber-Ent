const express = require('express');

const router = express.Router();

//getting models
const ProductsModel = require('../../models/Products.model');
const CustomerModel = require('../../models/Customer.model');
const OrderModel = require('../../models/Order.model');
const PaymentModel = require('../../models/Payment.model');



//get
router.get('/product',(req,res) => {
    ProductsModel.find().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({"err": err })
    })
});

router.get('/customer', (req,res) => {
    CustomerModel.find().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({"err": err })
    })
});

router.get('/payment', (req,res) => {
    PaymentModel.find().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({"err": err })
    })
});

router.get('/order', (req,res) => { 
    OrderModel.find()
              .then(data => {
                    res.send(data);
                })
              .catch(err => {
                    res.status(500).send({"err": err })
                })
});

// router.get('/reciepts', (req,res) => {
//     res.send({name: 'Reciepts'});
// });



//posts
router.post('/product',(req,res) => {
    ProductsModel
        .create(req.body)
        .then((product) => {res.json(product)})
        .catch(err => {res.status(500).send({err: err})})
});

router.post('/customer', (req,res) => {
    CustomerModel
        .create(req.body)
        .then((customer) => {res.json(customer)})
        .catch(err => {res.status(500).send({err: err})})
});

router.post('/payment', (req,res) => {
    PaymentModel
        .create(req.body)
        .then((payment) => {res.json(payment)})
        .catch(err => {res.status(500).send({err: err})})
});

router.post('/order', (req,res) => { 
    OrderModel
        .create(req.body)
        .then((order) => {res.json(order)})
        .catch(err => {res.status(500).send({err: err})})
});

// router.post('reciepts', (req,res) => {
//     res.send({name: 'Reciepts'});
// });


//update
router.patch('/product',(req,res) => {
    
});

router.patch('/customer', (req,res) => {

});

router.patch('/payment', (req,res) => {
    
});

router.patch('/order', (req,res) => {

});

// router.patch('reciepts', (req,res) => {

// });

//delete
router.delete('/product',(req,res) => {
    
});

router.delete('/customer', (req,res) => {

});

router.delete('/payment', (req,res) => {
    
});

router.delete('/order', (req,res) => {

});

// router.delete('reciepts', (req,res) => {

// });


module.exports = router;
