import { model, Schema } from 'mongoose';

const Comment = model('Comment', new Schema({
    title: { String, required: true },
    body: { String, required: true },
    customer: { type: Schema.Types.ObjectId, ref: 'Customer', required: true },
    dateCreated: Date,
    dateModified: Date,
}));

export default Comment;
