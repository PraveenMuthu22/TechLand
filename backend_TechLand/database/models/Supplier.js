const mongoose = require('mongoose');

export default mongoose.model('Supplier', new mongoose.Schema({
    name: { String, required: true },
    primaryContact: { String, required: true },
    secondaryContact: String,
    address: { type: mongoose.Schema.Types.ObjectId, ref: 'Address' },
}));
