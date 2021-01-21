const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const path = require('path');
const http = require('http');
const esession = require('express-session');
const uuid = require('uuid');

app.use(cors());

const routes = require('./routes');

const port = process.env.port || 80;




const staticRoute = path.join(__dirname, '/public'); 


app.use(express.static(staticRoute));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/', routes);


http.createServer(app).listen(port, () => {
    console.log('Http server is running!');
});