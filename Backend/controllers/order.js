const validator = require('validator');
const Order = require('../models/order');
const Client = require('../models/client');

const controller = {
    test: (req, res) => res.status(200).send({
        testMsg: 'Everything works fine'
    })
}

module.exports = controller;