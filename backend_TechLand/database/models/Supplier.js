const mongoose = require('mongoose');

const Supplier = mongoose.model('Supplier', new mongoose.Schema({
    name: { String, required: true },
    primaryContact: { String, required: true },
    secondaryContact: String,
    address: { type: mongoose.Schema.Types.ObjectId, ref: 'Address' },
}));

module.exports = Supplier;
