import { connect as _connect, connection } from 'mongoose';
import { config } from 'dotenv';

import sampleData from './SampleData';

config();


function connect() {
    _connect(process.env.CONNECTION_STRING, { useNewUrlParser: true })
        .then(
            () => console.log('connected to database'),
            err => console.log('Error connecting to database', err),
        );

        connection.on('connected', () => {
            console.log('Mongoose default connection open to ');
        });

        // If the connection throws an error
        connection.on('error', (err) => {
            console.log(`Mongoose default connection error: ${err}`);
        });

        // When the connection is disconnected
        connection.on('disconnected', () => {
            console.log('Mongoose default connection disconnected');
        });

        connection.on('reconnected', () => {
            console.log('Mongoose default connection reconnected');
        });
        
    // sampleData();
}

export default connect;
