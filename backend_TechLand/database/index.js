const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

function connect() {
    mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true });

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
        console.log('db connected');
    });
}

module.exports = connect;
