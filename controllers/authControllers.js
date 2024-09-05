const jwt = require('jsonwebtoken');
const AppError = require('../appError');
const { promisify } = require('util');

exports.logInUser = (req, res, next) => {
    // check email and password must present in payload
    if (!(req.body && req.body.username && req.body.password)) {
        next('please provide username and password', 400);
    }

    // check in db that user and pass is correct if yes then fetch user
    // TODO true in all case right now
    const userId = 'gfgfew3454634fdsdfa';

    const token = jwt.sign({userId}, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });

    res.cookie('JWT', token, {
        httpOnly: true,
        secure: true
    });

    res.status(200).json({
        status: 'success',
        user: {},
        token
    });
}

exports.signUpUser = (req, res) => {
    console.log(req.body);
    // TODO insert record in table/create user get id id
    const userId = 'gfgfew3454634fdsdfa';

    // create twt token
    const token = jwt.sign({userId: userId}, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });

    // send token in responce
    res.status(201).json({
        status: 'success',
        user: {},
        token: token
    });
}

exports.protect = async (req, res, next) => {
    // check token present in headers
    let token = '';
    if (req.headers && req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token = req.headers.authorization.split(' ')[1];
    }

    console.log(token);
    if (!token) {
        next(new AppError('not logged in please login first', 401))
    }

    // verify token
    const decoded= await promisify(jwt.verify)(token, process.env.JWT_SECRET_KEY);
    console.log('decoded ', decoded);

    // check user preset or not

    // check user change password after token generate

    // grant access
    req.user = {}
    next();
}
