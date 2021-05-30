const mongoose = require('mongoose');
const { dbname } = require('../config')

mongoose.connect(dbname, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});