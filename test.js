const express = require('express');
const app = express();

function check(req, res, next){

    res.send('Welcome to the EMG BIG SAM')
}

app.get('/check', check)

function def(req, res, next){

res.send('The Page you are looking does not exist')
}

function start(req, res, next){
    console.log('THE SERVER IS LISTENING')
}

app.use(def)
app.listen(2000, start)