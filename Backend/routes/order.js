const express = require('express');
const orderController = require('../controllers/order');
const clientController = require('../controllers/client');
const router = express.Router();

router.get('/test', orderController.test);
router.post('/saveClient', clientController.saveClient);
router.get('/getClients', clientController.getClients);

module.exports = router;