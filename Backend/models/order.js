const mongoose = require('mongoose');
const schema = mongoose.Schema;

const orderSchema = schema({
    client: {type: schema.Types.ObjectId, ref: 'Client'},
    amount: Number,
    title: String,
    description: String,
    deadline: {type: Date, default: Date.now},
    status: String
});

module.exports = mongoose.model('Order', orderSchema);