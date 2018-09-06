const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('hello caracolito2'));

const port = 5000;

app.listen(port, () => console.log(`listening on port ${port}`) );
