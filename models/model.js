
let client = require('../dbConnection');
let collection = client.db().collection('Cities');


function insertCity(city,callback) {
    collection.insertOne(city,callback);
}

function getAllCities(callback){
    collection.find({}).toArray(callback);
}

function deleteCity(city,callback) {
    collection.deleteOne(city,callback);
}

module.exports = {insertCity,getAllCities,deleteCity}