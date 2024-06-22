/*
* @authors
* Mariano Camposeco {@literal (mariano1941@outlook.es)}
*/
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(bodyParser.json({ limit: '15mb' }));
app.use(cors());

const api = '/api';
const auth = api + '/auth';

const authRouter = require('./app/routes/auth.routes.js');

app.use(auth, authRouter);

module.exports = app;