'use strict';

var Uber = require('node-uber');

var uber = new Uber({
    client_id: process.env.UBER_CLIENT_ID,
    client_secret: process.env.UBER_CLIENT_SECRET,
    server_token: process.env.UBER_SERVER_TOKEN,
    redirect_uri: process.env.UBER_REDIRECT_URL,
    name: process.env.UBER_APP_NAME,
    language: 'en_US', // optional, defaults to en_US
    sandbox: process.env.UBER_SANDBOX // optional, defaults to false
});

uber.products.getAllForLocation(3.1357, 101.6880, function (err, res) {
    if (err) {
        console.error(err);
    } else {
        console.log(res);
    }
});
