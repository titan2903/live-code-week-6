const { Food } = require('../models');

function authorization(req, res, next) {
    const id = req.params.id
    Food.findOne({
        where: {
            id: id
        }
    })
        .then((result) => {
            if (result) {
                if (result.UserId === req.userdata.id) {
                    next()
                } else {
                    res.status(400).json({
                        message: `error in Authorization`
                    })
                }
            } else {
                req.status(404).json({
                    message: `result not found`
                })
            }
        }).catch((err) => {
            res.status(500).json({ message: `internal server error` })
        });
}

module.exports = authorization