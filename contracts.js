const AppError = require("./appError");

exports.myPostContracts = function(req, res, next) {
    // my custom contracts we can use any package here as well
    const isBodyValid = req.body && req.body.name && req.body.age && req.body.profession;
    if (!isBodyValid) {
        next(new AppError('request body is not valid', 400));
    }
    next();
}

exports.myCreateUserContract = (req, res, next) => {
    const isBodyValid = req.body && req.body.name && req.body.age && req.body.profession;
    if (!isBodyValid) {
        next(new AppError('request body is not valid', 400));
    }
    next();
}
