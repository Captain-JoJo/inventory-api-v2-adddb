const express = require('express')
const router = express.Router()
const mongoose = require("mongoose")
const inventorySchema = require('../../db/models/item')

const Item = mongoose.model("Item", inventorySchema)

router.route("/insertData").post((request, response) => {
    console.log('get-data request body', request.body);
    console.log('get-data request params', request.params);
    console.log('get-data request query', request.query);
    
    const newItem = new Item(request.body)

    newItem.save(function(err, result){
        if(!err){
            response.send(result);
            console.log('Added new Item in the DB', result);
        } else {
            response.status(500).send(err)
        }
    })
  });

  module.exports = router