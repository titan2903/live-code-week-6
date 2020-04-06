const { Food } = require('../models');


class Foods {
    static getFoods(req, res) {
        Food.findAll()
            .then((foods) => {
                res.status(200).json({ foods })
            }).catch((err) => {
                res.status(500).json({
                    message: `internal server error`
                })
            });
    }

    static getOneFood(req, res) {
        const id = req.params.id
        Food.findOne({ where: { id: id } })
            .then((food) => {
                if (food) {
                    res.status(200).json({ food })
                } else {
                    res.status(404).json({
                        message: `food not found`
                    })
                }
            }).catch((err) => {
                res.status(500).json({ message: `internal server error` })
            });
    }

    static createFood(req, res) {
        const { title, price, ingredients, tag } = req.body
        Food.create({
            title,
            price,
            ingredients,
            tag,
            UserId: req.userdata.id
        })
            .then((foods) => {
                res.status(201).json({ foods })
            }).catch((err) => {
                res.status(500).json({
                    message: `internal server error`
                })
            });
    }

    static deleteFood(req, res) {
        let id = Number(req.params.id)
        let foodDelete;

        Food.findOne({ where: { id: id } })
            .then((food) => {
                if (food) {
                    foodDelete = food
                    return Food.destroy({
                        where: { id: id }
                    })
                } else {
                    res.status(404).json({
                        message: `food not found`
                    })
                }
            })
            .then((result) => {
                res.status(200).json({ foodDelete })
            }).catch((err) => {
                res.status(500).json({
                    message: `internal server error`
                })
            });
    }
}

module.exports = Foods
