const mongoose = require('mongoose');

module.exports.createConnection = async () => {
    //async y await en cas desperar respota exterior
    try {
        await mongoose.connect(
        process.env.DB_URL,
        );

        console.log(`DB Connected!`);
        mongoose.connection.on('error', (error) => {
        console.log('ERROR The connection was interrupted: ', error);
        });
    } catch (error) {
    console.log(`ERROR Cannot connect to the DB: `, error);
    }
};