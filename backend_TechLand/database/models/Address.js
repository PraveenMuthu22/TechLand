const mongoose = require('mongoose');

export default mongoose.model('Address', new mongoose.Schema({
    addressOne: { String, required: true },
    addressTwo: String,
    city: { String, required: true },
    postalCode: { String, required: true },
    country: { String, required: true },
    phone: String,
}));
