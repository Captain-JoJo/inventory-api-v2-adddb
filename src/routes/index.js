const getData = require('./get-items')
const insertData = require('./insert-items')
const deleteData = require('./delete-items')
const updateData = require('./update-items')

module.exports = async function() {
    try {
        console.log('I am trying to route all functions through index here')
        await getData
        await insertData
        await deleteData
        await updateData
    } catch (error) {
        console.log(error);
    }
}