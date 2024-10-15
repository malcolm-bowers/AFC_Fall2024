// FOUNDATION
// import in Node is to require
const express = require('express');
const app = express();
// console.log(process)
// if hosting site, else use 3000
const port = process.env.PORT || 3000;

// ROUTE HANDLERS
app.get("/", (req, res) => {
    console.log(req)
    res.send("I am from the backend")
    res.redirect("/home")
})

app.get

// LISTENERS
app.listen(3000, console.log(`Basic Server app running on port ${port}`))