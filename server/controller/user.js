const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class Users {
    static register(req, res, next) {
        const data = req.body
        User.create({
            email: data.email,
            password: data.password
        })
            .then((User) => {
                res.status(200).json(User)
            }).catch((err) => {
                res.status(500).json({
                    message: `internal server error`
                })
            });
    }

    static login(req, res, next) {
        User.findOne({
            where: {
                email: req.body.email
            }
        })
            .then((result) => {
                if (result) {
                    if (bcrypt.compareSync(req.body.password, result.password)) {
                        let token = jwt.sign({ id: result.id, email: result.email }, 'rahasia')
                        res.status(200).json({ token: token })
                    }
                } else {
                    res.status(400).json({
                        message: `password wrong`
                    })
                }
            }).catch((err) => {
                res.status(500).json({
                    message: `internal server error`
                })
            });
    }
}


module.exports = Users
