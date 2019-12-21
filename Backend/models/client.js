const mongoose = require('mongoose');
const schema = mongoose.Schema;

const clientSchema = schema({
    name: String,
    alias: String,
    country: String
});

module.exports = mongoose.model('Client', clientSchema);