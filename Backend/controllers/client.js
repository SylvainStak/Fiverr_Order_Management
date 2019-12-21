const validator = require('validator');
const Order = require('../models/order');
const Client = require('../models/client');

var controller = {
    saveClient: (req, res) => {
        var params = req.body;

        try{
            var validName = !validator.isEmpty(params.name);
            var validAlias = !validator.isEmpty(params.alias);
            var validCountry = !validator.isEmpty(params.country);
        }catch(err){
            return res.status(400).send({
                status: 'Error',
                message: 'There is some data left'
            });
        }

        if(validName && validAlias && validCountry){
            let newClient = new Client();

            newClient.name = params.name;
            newClient.alias = params.alias;
            newClient.country = params.country;

            newClient.save((err, clientStored) => {
                if(err || !clientStored){
                    return res.status(404).send({
                        status: 'Error',
                        message: 'There was an error storing the client'
                    });
                }

                return res.status(200).send({
                    status: 'Success',
                    clientStored: newClient
                });
            });
        }else{
            return res.status(404).send({
                status: 'Error',
                message: 'The data is not valid'
            });
        }
    },

    getClients: (req, res) => {
        let query = Client.find({});

        query.exec((err, clients) => {
            if(err || !clients){
                return res.status(500).send({
                    status: 'Error',
                    message: 'There was an error retrieving the clients',
                });
            }else{
                return res.status(200).send({
                    status: 'Success',
                    clients
                });
            }
        });
    }
}

module.exports = controller;