const express = require('express');

const app = express();

const port = process.env.PORT || 8080;

app.get('/hello', (req, res) => {
    res.json( {'msg': 'Hello you all'} );
});

app.listen(port,  () => {
    console.log('npm server is ready, running @ : ' + port);
});