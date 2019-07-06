const mongoose = require('mongoose');

export default mongoose.model('Product', new mongoose.Schema({
    name: { String, required: true },
    description: String,
    brand: { String, required: true },
    specs: String,
    unitsInStock: Number,
    unitPrice: Number,
    manualDocument: String,
    catagory: String,
    supplier: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier' },
    MSRP: String,
    discount: Number,
    profilePic: String,
    otherPictures: Array,
    rating: { type: mongoose.Schema.Types.ObjectId, ref: 'Rating' },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
    colors: Array,
    warrantyPeriod: Date,
}));
