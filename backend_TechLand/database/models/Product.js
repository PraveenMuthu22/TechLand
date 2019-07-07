const mongoose = require('mongoose');

const Product = mongoose.model('Product', new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    brand: { type: String, required: true },
    specs: Array,
    unitsInStock: Number,
    unitPrice: Number,
    manualDocument: String,
    catagory: String,
    supplier: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier' },
    code: String,
    discount: Number,
    profilePic: String,
    otherPictures: Array,
    rating: { type: mongoose.Schema.Types.ObjectId, ref: 'Rating' },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
    colors: Array,
    warrantyPeriod: Date,
}));

module.exports = Product;
