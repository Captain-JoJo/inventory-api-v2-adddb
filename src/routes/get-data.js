const express = require('express')
const app = express()
const router = express.Router()
const cors = require("cors")
const mongoose = require("mongoose")
const inventorySchema = require('../db/models/item')

app.use(cors())
app.use("/", router)

router.route("/getData").get(function(req, res){
    const Item = mongoose.model("Item", inventorySchema)
    Item.find({}, function(err, result) {
        if(err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
})

module.exports = router