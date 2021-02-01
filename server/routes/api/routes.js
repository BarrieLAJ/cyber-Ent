const express = require("express");

const router = express.Router();

//getting models
const ProductsModel = require("../../models/Products.model");
const CustomerModel = require("../../models/Customer.model");
const OrderModel = require("../../models/Order.model");
const PaymentModel = require("../../models/Payment.model");
const { response } = require("express");

//get
router.get("/customer/:id", (req, res) => {
  CustomerModel.findById(req.params.id)
    .then((customer) => {
      res.send(customer);
    })
    .catch((err) => {
      res.status(500).send({ err: err });
    });
});
router.get("/products", (req, res) => {
  ProductsModel.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ err: err });
    });
});

router.get("/customers", (req, res) => {
  CustomerModel.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ err: err });
    });
});

router.get("/payments", (req, res) => {
  PaymentModel.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ err: err });
    });
});

router.get("/orders", (req, res) => {
  OrderModel.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ err: err });
    });
});

// router.get('/reciepts', (req,res) => {
//     res.send({name: 'Reciepts'});
// });

//posts
router.post("/product", (req, res) => {
  ProductsModel.create(req.body)
    .then((product) => {
      res.json(product);
    })
    .catch((err) => {
      res.send({ err: err });
    });
});

router.post("/customer", (req, res) => {
  CustomerModel.create(req.body)
    .then((customer) => {
      res.json(customer);
    })
    .catch((err) => {
      res.status(500).send({ err: err });
    });
});

router.post("/payment", (req, res) => {
  PaymentModel.create(req.body)
    .then((payment) => {
      res.json(payment);
    })
    .catch((err) => {
      res.status(500).send({ err: err });
    });
});

router.post("/order", (req, res) => {
  OrderModel.create(req.body)
    .then((order) => {
      res.json(order);
    })
    .catch((err) => {
      res.status(500).send({ err: err });
    });
});

// router.post('reciepts', (req,res) => {
//     res.send({name: 'Reciepts'});
// });

//update
router.patch("/product/:id", (req, res) => {
  // console.log(req.body)
  ProductsModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((doc) => {
        res.json(doc);
    //   ProductsModel.findById(doc._id).then((product) => {
    //     res.json(product);
    //   });

    })
    .catch((err) => {
      res.status(500).send({ err: err });
    });
});

router.patch("/customer/:id", (req, res) => {
    CustomerModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((doc) => {
        res.json(doc);
    //   CustomerModel.findById(doc._id).then((customer) => {
    //     res.json(customer);
    //   });

    })
    .catch((err) => {
      res.status(500).send({ err: err });
    });
});

router.patch("/payment/:id", (req, res) => {
    PaymentModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((doc) => {
        res.json(doc);
    //   PaymentModel.findById(doc._id).then((payment) => {
    //     res.json(payment);
    //   });

    })
    .catch((err) => {
      res.status(500).send({ err: err });
    });
});

router.patch("/order/:id", (req, res) => {
    OrderModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((doc) => {
        res.json(doc);
    //   OrderModel.findById(doc._id).then((order) => {
    //     res.json(order);
    //   });

    })
    .catch((err) => {
      res.status(500).send({ err: err });
    });
});

// router.patch('reciepts', (req,res) => {

// });

//delete
router.delete("/product/:id", (req, res) => {
    ProductsModel.findByIdAndUpdate(req.params.id, {status: 'deleted'}, {new: true})
    .then((doc) => {
        res.json(doc);
    //   ProductsModel.findById(doc._id).then((product) => {
    //     res.json(product);
    //   });

    })
    .catch((err) => {
      res.status(500).send({ err: err });
    });
});

router.delete("/customer/:id", (req, res) => {
    CustomerModel.findByIdAndUpdate(req.params.id, {status: 'deleted'}, {new: true})
    .then((doc) => {
        res.json(doc);
    //   CustomerModel.findById(doc._id).then((customer) => {
    //     res.json(customer);
    //   });

    })
    .catch((err) => {
      res.status(500).send({ err: err });
    });
});

router.delete("/payment/:id", (req, res) => {
    PaymentModel.findByIdAndUpdate(req.params.id, {status: 'deleted'}, {new: true})
    .then((doc) => {
        res.json(doc);
    //   PaymentModel.findById(doc._id).then((payment) => {
    //     res.json(payment);
    //   });

    })
    .catch((err) => {
      res.status(500).send({ err: err });
    });
});

router.delete("/order/:id", (req, res) => {
    OrderModel.findByIdAndUpdate(req.params.id, {status: 'deleted'}, {new: true})
    .then((doc) => {
        res.json(doc);
    //   OrderModel.findById(doc._id).then((order) => {
    //     res.json(order);
    //   });

    })
    .catch((err) => {
      res.status(500).send({ err: err });
    });
});

// router.delete('reciepts', (req,res) => {

// });

module.exports = router;
