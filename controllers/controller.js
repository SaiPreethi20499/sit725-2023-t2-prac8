
let collection = require('../models/model')

const postCity = (req,res) => {    
    let city = req.body;
    collection.insertCity(city, (err,result) => {
        if(!err){
            res.json({statusCode:201,data:result,message:'success'});
        }
    });
}

const getAllCities = (req,res) => {
    collection.getAllCities((err,result)=>{   
        if(!err){
            res.json({statusCode:200,data:result,message:'success'});
        }
    });
}

module.exports = {postCity,getAllCities}