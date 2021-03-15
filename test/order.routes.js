const router = require('express').Router()
const Order = require("./order.model")

router.post("/", (req, res, next) => {
    new Order(req.body)
        .save()
        .then(doc => {
            res.status(200).json({ data: doc})
        })
        .catch(error => {
            res.status(500).json({ message: error.message})
        })
})

router.get("/", (req, res, next) => {
    res.status(200).json({ message: "Backend is Live"})
})

module.exports = router