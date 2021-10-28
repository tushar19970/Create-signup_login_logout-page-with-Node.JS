require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());

const home = require('./routes/user')
app.use('/', home)

const port = 3000 || process.env.PORT ;

app.listen(port, () => {
    console.log(`We have connected to ${port}`)
})


