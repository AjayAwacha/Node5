const express = require('express');

const limiters = require('../limiters');
const contracts = require('../contracts');

const userControllers = require('../controllers/userControllers');
const authControllers = require('../controllers/authControllers');

const router = express.Router();

router.get('/getAll', limiters.getAllUserLimiter, authControllers.protect , userControllers.getAllUser);

router.post('/create', contracts.myPostContracts, userControllers.createUser);

router.get('/getById/:userId', userControllers.getUserById);

// authRoute
router.post('/login', authControllers.logInUser);
router.post('/signup', contracts.myCreateUserContract, authControllers.signUpUser)

module.exports = router;
