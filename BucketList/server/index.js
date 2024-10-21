// FOUNDATION
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const data = require('./fakedata.json');

// ROUTE HANDLERS
app.get("/", (req, res) => {
    res.redirect('/api/items')
})


// Read
// 1) Route - /api/items, GET method
app.get('/api/items', (req, res) => {
    // 1.5) Get data from DB
    // 2) JSON
    // 3) Everything Back
    // 4) Array of objects
    res.send(data)
})


// LISTENER
app.listen(port, console.log(`Bucketlist server started on port ${port}`))
