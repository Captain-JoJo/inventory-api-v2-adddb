const express = require('express')
const router = express.Router()
const mongoose = require("mongoose")
const inventorySchema = require('../db/models/item')

const Item = mongoose.model("Item", inventorySchema)

router.route("/insertData2").post((request, response) => {
    console.log('get-data request body', request.body);
    console.log('get-data request params', request.params);
    console.log('get-data request query', request.query);
    
    //const newItem = new Item(request.body)

    const newItem = new Item(request.body)

    console.log("new item indeed", newItem);
    // collection.insertOne(req.body, (error, result) => {
    //   if (error) return res.status(500).send(error);
    //   res.send(result); // send back the new item ID
    // });
    newItem.save(function(err, result){
        if(!err){
            response.send(result);
            console.log('result back from body', result);
        } else {
            //res.send("Item did not save in the DB", err)
            response.status(500).send(err)
            
        }
    })
  });

//Inserts One all data
// router.route("/insertData").get(function(req, res){
//     res.header("Access-Control-Allow-Origin", "*");
//     const body = req.body
//     const body2 = res.body
//     console.log('get-data request body', body);
//     console.log('get-data response body', body2);
//     console.log('get-data request headers', req.headers);
//     console.log('get-data request params', req.params);
//     console.log('get-data request query', req.query);

//     //Create new MongoDB schema model
//     const newItem = new Item({
//         name: req.query.name
//     })
//     newItem.save(function(err, result){
//         if(!err){
//             res.send(result._id);
//             //res.send("Saved new Item in DB")
//             console.log('result back from body', result._id);
//         } else {
//             res.send("Item did not save in the DB", err)
            
//         }
//     })
// })

//Gets all data
router.route("/getData").get(function(req, res){
    res.header("Access-Control-Allow-Origin", "*");
    Item.find({}, function(err, result) {
        if(err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
})

//Deletes all data
router.route("/deleteAll").get(function(req, res){
    res.header("Access-Control-Allow-Origin", "*");
    Item.deleteMany({}, function(err, result) {
        if(err) {
            res.send(err)
        } else {
            res.send(result)
            console.log('removed everything', result);
        }
    })
})

//Deletes one item
router.route("/deleteOne").get(function(req, res){
    res.header("Access-Control-Allow-Origin", "*");
    Item.deleteOne({}, function(err, result) {
        if(err) {
            res.send(err)
        } else {
            res.send(result)
            console.log('deleted one result', result);
        }
    })
})

module.exports = router


//res.header("Access-Control-Allow-Origin", "http://localhost:3000");


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

//module.exports = {corsRouter}






// router.route("/insertData").get(function(req, res){
//     res.header("Access-Control-Allow-Origin", "https://captain-jojo.github.io");
//     res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//     const body = req.body
//     const body2 = res.body
//     console.log('get-data request body', body);
//     console.log('get-data response body', body2);
//     console.log('get-data request headers', req.headers);
//     console.log('get-data request params', req.params);
//     console.log('get-data request query', req.query);

//     //Create new MongoDB schema model
//     const newItem = new Item({
//         name: req.query.name
//     })
//     newItem.save(function(err){
//         if(!err){
//             res.send("Saved new Item in DB")
//         } else {
//             res.send("Item did not save in the DB", err)
//         }
//     })
// })