const express = require('express')
const cors = require("cors");
const app = express()
const getItemRoute = require('./routes/get-items')
const insertItemRoute = require('./routes/insert-items')
const updateItemRoute = require('./routes/update-items')
const deleteItemRoute = require('./routes/delete-items')
const port = process.env.PORT || 5000

app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
app.use(express.json());
app.use(cors());

app.use(getItemRoute, insertItemRoute, updateItemRoute, deleteItemRoute)

app.listen(port, () => {
    console.log(`Inventory app listening at ${port}`);
})
