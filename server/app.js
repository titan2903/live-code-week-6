const express = require('express');
const app = express()
const Port = 3000
const cors = require('cors');

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('success')
})

app.listen(Port, () => {
    console.log(`Listening on Port: ${Port}`);
})
