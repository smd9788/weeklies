const express = require('express');
const cors = require('cors');

const db = require('./models');
const security = require('./controllers/security.controller');

const app = express();

const corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 8080;

require('./routes/security.routes')(app);

app.get('/', (req, res) => {
    res.json({ message: 'Hello World' })
})

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
});