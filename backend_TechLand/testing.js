const mongoose = require('mongoose');

const Comment = mongoose.model('Comment', new mongoose.Schema({
	title: { String, required: true },
	body: { String, required: true },
	customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
	dateCreated: Date,
	dateModified: Date,
}));

module.exports = Comment;
