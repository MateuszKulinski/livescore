const express = require('express');
const app = express();
const {
    port
} = require('./config/config');
const apiRouter = require('./routes/api');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('./config/local');

passport;

require('./db/mongoose');

app.use(bodyParser.json());

app.use(cors());

app.use('/api/', apiRouter);

//server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});