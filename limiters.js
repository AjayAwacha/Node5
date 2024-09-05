const rateLimit = require('express-rate-limit');

exports.getAllUserLimiter = rateLimit({
    windowMs: 1000 * 60 * 15,
    max: 3,
    message: 'to many request from this IP address please try again after 15 min'
});
