const express = require('express');
const app = express();
const morgan = require('morgan');

const orderRoutes =require('./api/routes/orders');
const productRoutes = require('./api/routes/products');

app.use(morgan('dev'));

app.use('/products',productRoutes);
app.use('/orders',orderRoutes);
module.exports = app;