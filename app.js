const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./api/models');
const Role = db.role;
const security = require('./api/controllers/security.controller');

const app = express();

const corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 8080;

require('./api/routes/security.routes')(app);

app.get('/', (req, res) => {
    res.json({ message: 'Hello World' })
})

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
});