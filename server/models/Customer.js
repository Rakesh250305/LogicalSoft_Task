const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String});

const customerModel = mongoose.model('customers', customerSchema);

module.exports = customerModel;