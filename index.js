var express = require("express");
var axios = require('axios');
var app = express();

var config = {
    method: 'get',
    url: 'https://superheroapi.com/api/2896918083892052/',
    headers: { }
  };
//--------------------------------------------------------
app.get("/searchid/:HEROID", (req, res) => {
    config.url='https://superheroapi.com/api/2896918083892052/'+req.params.HEROID;
    axios(config)
    .then(function (response) {
        res.send(response.data);
    });
});
//--------------------------------------------------------
app.get("/searchid/:HEROID/powerstats", (req, res) => {
    config.url='https://superheroapi.com/api/2896918083892052/'+req.params.HEROID+'/powerstats';
    axios(config)
    .then(function (response) {
        res.send(response.data['name']);
    });
});

app.listen(3000, () => {
	console.log("Server listening on port 3000!");
});
