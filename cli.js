#!/usr/bin/env node

const express = require('express');
const path = require('path');
const app = express();
const [, , ...args] = process.argv;
const port = 3603

app.use(express.static(path.join(args && args.length ? args[0] : __dirname, 'build')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(args && args.length ? args[0] : __dirname, 'build', 'index.html'));
});

app.listen(port, () => {
    console.log(args && args.length ? 'File path is ' + args[0] : 'Please provide build folder path');
    args && args.length ? console.log(`Example app listening at http://localhost:${port}`) : '';
})