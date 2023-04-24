const { connect, connection } = require('mongoose');
// setting up the connection to mongoDB
connect('mongodb://localhost:27017/Swinger', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = connection;