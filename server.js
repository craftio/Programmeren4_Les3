const express = require('express');

const app = require();

app.get('/hello', (req, res) => {
    res.json( {'msg': 'Hello you all'} );
});

app.listen(8000,  () => {
    console.log('npm server is ready!');
});