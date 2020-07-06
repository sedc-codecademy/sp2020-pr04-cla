const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const http = require('http');
const esession = require('express-session');
const uuid = require('uuid');

const routes = require('./routes');

const port = process.env.port || 80,
    ip = '0.0.0.0';


const staticRoute = path.join(__dirname, '/public'); 


app.use(express.static(staticRoute));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/', routes);

http.createServer(app).listen(port, ip, () => {
    console.log('Http server is running!');
});