// FOUNDATION
// import in Nope is to require
const express = require('express');
const router = express.Router();
const port = process.env.PORT || 3000;
const app = express();

// ROUTE HANDLERS
app.get('/', (req, res) => {
    res.redirect("/home")
})

app.get('/home', (req, res) => {
    res.send("I am a home page!!!")
})

app.get('/about', (req, res) => {
    res.send("I am an about page.")
})

app.get('/contact', (req, res) => {
    res.send("I am an contact page.")
})

app.get('/fruit/:doggy', (req, res) => {
    res.end(`I am a ${req.params.doggy}`)
})

app.get("/name/:name/bank/:money", (req, res) => {
    if (isNaN(req.params.money)) res.send("Money is not a valid number!")
    res.send(`My name is ${req.params.name} and I have $${req.params.money}`)
})

app.get("*", (req, res) => {
    res.send("I am a problem page.")
})

// LISTENERS
app.listen(3000, console.log(`Basic Server app running on port ${port}`))