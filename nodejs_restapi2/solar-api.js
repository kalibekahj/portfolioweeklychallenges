// EASY CHALLENGE

// npm init
const fs = require('fs');
const express = require('express'); // npm install --save express
const bodyParser = require('body-parser'); // npm install --save body-parser

const app = express();

app.use(bodyParser.json());

// build an api that adds, edits, get, & deletes a planet in the 
// solar.json file.

const solar = JSON.parse(fs.readFileSync('./solar.json', 'utf-8'));

// GET:
app.get('/solar', (req, res) => {
    // we want to return all planets in the
    // solar.json file.
    res.send(solar);
})

// GET certain planet based on their ID
app.get('/solar/:id', (req, res) => {
    const id = parseInt(req.params.id);
    for(let i = 0; i < solar.length; i++) {
        if (solar[i].id === id) {
            return res.send(solar[i]);
        }
    }

    res.status(400).send("Unable to find id");
})

app.listen(3001)