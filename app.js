const express = require('express');
const app = express();
const morgan = require('morgan');

const orderRoutes =require('./api/routes/orders');
const productRoutes = require('./api/routes/products');

app.use(morgan('dev'));

app.use('/products',productRoutes);
app.use('/orders',orderRoutes);

app.use((req, res, next)=>{
    const error = new Error('not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message
        }
    });
});

module.exports = app;