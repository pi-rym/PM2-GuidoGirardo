const express = require("express");
const app = express();

const routes = require('./routes/routes');
app.use('/', routes);

module.exports = app;