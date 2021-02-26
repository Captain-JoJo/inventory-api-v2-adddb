const express = require('express')
const bodyParser = require("body-parser")
const cors = require("cors");
const app = express()
const getItemDataRoute = require('./routes/get-data')
const port = process.env.PORT || 5000

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))
app.use(express.json());
app.use(cors());

app.use(getItemDataRoute)

app.listen(port, () => {
    console.log(`Inventory app listening at ${port}`);
})