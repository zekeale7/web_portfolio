const express = require('express')
const app = express()
const port = 3000

app.get('/hello', (req, res) => {
    res.json({ "users": ["One", "Two", "Three"] })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})