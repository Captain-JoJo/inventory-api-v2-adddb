const express = require('express')
const router = express.Router()
const mongoose = require("mongoose")
const inventorySchema = require('../../db/models/item')
const ObjectId = require("mongodb").ObjectID;

const Item = mongoose.model("Item", inventorySchema)

//Deletes all data
router.route("/deleteAll").delete(function(req, res){
    Item.deleteMany({}, function(err, result) {
        if(!err) {
            res.send(result)
            console.log('Removed everything', result);
        } else {
            res.status(500).send(err)
        }
    })
})

//Deletes one item
router.route("/deleteOne/:id").delete(function(req, res){
    Item.deleteOne({ _id: new ObjectId(req.params.id) }, function(err, result) {
        if(!err) {
            res.send(result)
            console.log('Removed ONLY 1 item', result);
        } else {
            res.status(500).send(err)
        }
    })
})

module.exports = router