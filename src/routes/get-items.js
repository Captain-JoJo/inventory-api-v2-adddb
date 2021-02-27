const express = require('express')
const router = express.Router()
const mongoose = require("mongoose")
const inventorySchema = require('../db/models/item')

const Item = mongoose.model("Item", inventorySchema)

//Gets all data
router.route("/getData").get(function(req, res){
    Item.find({}, function(err, result) {
        if(!err) {
            res.send(result)
        } else {
            res.status(500).send(err)
        }
    })
})

module.exports = router