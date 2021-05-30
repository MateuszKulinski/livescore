const express = require('express');
const app = express();
const { port } = require('./config');
const apiRouter = require('./routes/api');
const bodyParser = require('body-parser');
const cors = require('cors');

require('./db/mongoose');

app.use(bodyParser.json());

app.use(cors());

app.use('/api/', apiRouter);

//server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});