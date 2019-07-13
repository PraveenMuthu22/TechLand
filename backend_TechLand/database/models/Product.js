import { model, Schema } from 'mongoose';

const Product = model('Product', new Schema({
    name: { type: String, required: true },
    description: String,
    brand: { type: String, required: true },
    specs: Array,
    unitsInStock: Number,
    unitPrice: Number,
    manualDocument: String,
    catagory: String,
    supplier: { type: Schema.Types.ObjectId, ref: 'Supplier' },
    code: String,
    discount: Number,
    profilePic: String,
    otherPictures: Array,
    rating: { type: Schema.Types.ObjectId, ref: 'Rating' },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    colors: Array,
    warrantyPeriod: Date,
}));

export default Product;
