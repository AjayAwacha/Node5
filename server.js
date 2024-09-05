// load envieonment variable using dotenv
require('dotenv').config();

const express = require('express');
const app = express();

const userRoutes = require('./routes/userRoutes');

// custom middleware
app.use((req, res, next) => {
    console.log('Server receive request on URL : ', req.url);
    console.log('Environment is ', process.env.currEnv);
    next();
});

// build in middleware
app.use(express.json());
app.use('/myStaticSrcUrl', express.static(`${__dirname}/public`));

app.use('/user', userRoutes);

// Global Error Handling middleware
app.use((err, req, res, next) => {
    res.status(err.statusCode).json(({
        status: err.status,
        message: err.message,
        stack: err.stack
    }))
});

const port = 3600;
app.listen(port, '127.0.0.1', () => {
    console.log('Express Server Listen on port ', port);
});
