const mongoose = require("mongoose")
const db = require('../config')
mongoose.connect(db.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})

//MongoDB schema
const inventorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Need a name"]
    },
    qty: {
        type: Number,
        required: [true, "Need a quantity"]
    },
})

// const Item = mongoose.model("Item", inventorySchema)
// const pear = new Item({
//     name: "Pear",
//     qty: 7
// })
// pear.save()

module.exports = inventorySchema