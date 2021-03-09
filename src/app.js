const express = require('express')
const cors = require("cors");
const app = express()
const itemRoutes = require('./routes/items/index')
const port = process.env.PORT || 5000

app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
app.use(express.json());
app.use(cors());

app.use(itemRoutes)

app.listen(port, () => {
    console.log(`Inventory app listening at ${port}`);
})
