const mongoose = require('mongoose');
const dotenv = require('dotenv');

// const sampleData = require('./SampleData');

dotenv.config();


function connect() {
    mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true })
    .then(
        () => console.log('connected to database'),
        err => console.log('Error connecting to database', err),
    );

    // sampleData();
}

module.exports = connect;
