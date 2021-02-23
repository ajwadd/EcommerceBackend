exports.userSignUpValidator = (req, res, next) => {

    req.check('email', 'Name is Required !').notEmpty();

    req.check('email', 'Email is Required !')
        .notEmpty()
        .isEmail();

    req.check('password', 'Password Is Required!')
        .notEmpty()
        .isLength({ min: 6, max: 10 })
        .withMessage('Password must be between 6 nad 10 Caracteres')

    const errors = req.validationErrors()

    if (errors) {
        return res.status(400).json({error: errors[0].msg})
    }

    next()

}