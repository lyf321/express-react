"use strict";

const express = require('express');
const app = new express();
const path = require('path');
const fs=require('fs');

const fileName = 'test.json';


app.use(express.static(__dirname + '/public'));


app.get('/',(req,res) => {
    fs.readFile("test.json", "utf8", function (err, data) {
        res.json(data);
    });
})

app.listen(4000,() =>{
    console.log('Server start')
})