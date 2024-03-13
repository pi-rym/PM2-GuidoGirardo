const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const routes = require('./routes/routes');
app.use('/', routes);

module.exports = app;