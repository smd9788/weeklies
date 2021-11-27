const express = require('express');

const app = express();
const port = process.env.PORT;


app.get('/', (req, res) => {
    res.json({ message: 'Hello World' })
})

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
});