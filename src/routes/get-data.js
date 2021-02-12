const express = require('express')
const app = express()
const router = express.Router()
const cors = require("cors")
const mongoose = require("mongoose")
const inventorySchema = require('../db/models/item')

// const corsOptions = {
//     origin: 'https://captain-jojo.github.io',
// }

// function corsRouter(app) {
//     app.use(cors())
//     app.use("/", router)
//     app.get('/getData', cors(), function (req, res, next) {
//         res.json({msg: 'This is CORS-enabled for a Single Route'})
//     })
// }

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });


//Single router
// function corsRouter() {
//     app.get('getData', cors(), function (req, res, next) {
//         const Item = mongoose.model("Item", inventorySchema)
//         Item.find({}, function(err, result) {
//             if(err) {
//                 res.send(err)
//             } else {
//                 res.send(result)
//             }
//         })
//       })
// }

router.route("/getData").get(function(req, res,next){
    // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // next();
    const Item = mongoose.model("Item", inventorySchema)
    Item.find({}, function(err, result) {
        if(err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
})

//module.exports = {corsRouter}

module.exports = router