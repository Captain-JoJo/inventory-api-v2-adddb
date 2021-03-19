const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const inventorySchema = require("../../db/models/item");
const ObjectId = require("mongodb").ObjectID;

const Item = mongoose.model("Item", inventorySchema);

//Updates many data items
router.route("/updateMany").put(function (req, res) {
  Item.updateMany({}, function (err, result) {
    if (!err) {
      res.send(result);
      console.log("Updated MANY items", result);
    } else {
      res.status(500).send(err);
    }
  });
});

//Updates one item
router.route("/updateOne/:id").put(function (req, res) {
  const _id = req.params.id;

  Item.updateOne(
    { _id: new ObjectId(req.params.id) },
    { $set: req.body },
    function (err, result) {
      if (!err) {
        console.log("this is the ID I want to update", _id);
        console.log("all params", req.params);
        res.send(result);
        console.log("Updated ONLY 1 item", result);
      } else {
        res.status(500).send(err);
      }
    }
  );
});

module.exports = router;
