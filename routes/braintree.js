const express = require('express');

const { userById } = require('../middlewares/user');

const { requireSignIn, isAuth, isAdmin } = require('../middlewares/auth');

const { generateToken } = require('./../controllers/braintreeController')


const router = express.Router();

router.get('/getToken/:userId', [requireSignIn, isAuth, isAdmin], generateToken);

router.param('userId', userById)


module.exports = router;