const mongoose = require('mongoose');

export default mongoose.model('Customer', new mongoose.Schema({
    firstName: { String, required: true },
    lastName: { String, required: true },
    email: { String, required: true },
    phone: { String, required: true },
    address: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
    cart: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
}));
