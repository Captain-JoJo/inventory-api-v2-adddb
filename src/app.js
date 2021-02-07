const express = require('express')
const app = express()
const cors = require("cors")
const port = 5000
const mongoose = require("mongoose")
mongoose.connect('mongodb+srv://inventoryUser:inventory@inventorycluster0.4qlqj.mongodb.net/inventoryDB?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})

const router = express.Router()
app.use(cors())
app.use("/", router)

router.route("/getData").get(function(req, res){
    Item.find({}, function(err, result) {
        if(err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})

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

const Item = mongoose.model("Item", inventorySchema)

//Connect to text box in UI(CRUD)

const mango = new Item({
    name: "Mango",
    rating: 9, 
    review: "Great fruit!"
})

const pear = new Item({
    name: "Pear",
    rating: 7, 
    review: "Awesome fruit!"
})
mango.save()
pear.save()
