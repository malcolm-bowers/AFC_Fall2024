// FOUNDATION
// Where is all my stuff coming from?
require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// If deployed do not run a logger
if(!process.env.NODE_ENV || process.env.NODE_ENV !== 'production') {
    const logger = require('morgan')
    app.use(logger('dev'));
}

// When working with a database you need to know three things:
// CONNECTION
const conn = require('./connections/pgconnection.js');

// BLUEPRINTS

// QUERIES

// ROUTE HANDLERS
// when we go to a certain route, what happens?
app.get("/", (req, res) => {
    res.send("Server running")
})

// CRUD
// READ
app.get('/api/todos', (req, res) => {
    res.send("Api Todos Route")
})

// LISTENER
app.listen(port, console.log(`ToDo App with Express on port ${port}`))