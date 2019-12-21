const mongoose = require('mongoose');
const app = require('./app');
const NODE_PORT = 3900;
const MONGO_PORT = 27017;

mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;
mongoose.connect(
    `mongodb://localhost:${MONGO_PORT}/fiverr_orders_management`,
    { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('connected to MongoDB');

        app.listen(NODE_PORT, () => {
            console.log(`Server running at https://localhost:${NODE_PORT}`);
        });
    });