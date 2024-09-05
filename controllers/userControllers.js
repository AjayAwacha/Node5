
exports.getAllUser = (req, res) => {
    res.status(200).json({
        status: 'success',
        message: '',
        data: []
    });
}

exports.createUser = (req, res) => {
    console.log('Body ', req.body);
    res.status(201).json({
        status: 'success',
        message: '',
        data: []
    });
}

exports.getUserById = (req, res) => {
    console.log('request parameter ', req.params);
    console.log('query params', req.query);
    res.status(200).json({
        status: 'success',
        message: '',
        data: []
    });
}
