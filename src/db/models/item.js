const mongoose = require("mongoose")
const db = require('../config')
mongoose.connect(db.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
//mongoose.connect('mongodb+srv://${MONGO_USER}:${MONOG_PASS}@inventorycluster0.4qlqj.mongodb.net/inventoryDB?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
//mongoURI: 'mongodb+srv://${MONGO_USER}:${MONOG_PASS}@inventorycluster0.4qlqj.mongodb.net/inventoryDB?retryWrites=true&w=majority'
//mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/inventoryDB', {useNewUrlParser: true, useUnifiedTopology: true})

//MongoDB schema
const inventorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Need a name"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
})

// const Item = mongoose.model("Item", inventorySchema)
// const pear = new Item({
//     name: "Pear",
//     rating: 7, 
//     review: "Awesome fruit!"
// })
// pear.save()

module.exports = inventorySchema