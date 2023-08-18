
let express = require('express');
let router = express.Router();
let controller = require('../controllers/controller');


router.post('/', (req,res)=>{
    controller.postCity(req,res);
});

router.get('/', (req,res)=>{
    controller.getAllCities(req,res);
});

module.exports = router;