const { Schema, model } = require("mongoose")

const Order = new Schema({
    Side: {
        type: String,
        enum: ["sell", "buy"],
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

module.exports = model("orders", Order)