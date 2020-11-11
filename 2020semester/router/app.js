const express = require('express');
const logger = require('morgan');
const router = require('./routers');
const app = express();

app.use(logger('dev'));
app.use('/', router);

app.listen(8080);
