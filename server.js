let express = require('express');
let app = express();
let port = process.env.port || 3000;
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://SaiPreethi:admin@cluster0.x6mcnwu.mongodb.net/?retryWrites=true&w=majority";
let collection;

app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

async function runDB() {
    try {
      await client.connect();
      collection = client.db().collection('Cities');
      console.log(collection);
    } catch (ex) {
        console.error(ex);
    }
}

function insertCity(city,callback) {
    collection.insertOne(city,callback);
}

function getAllCities(callback){
    collection.find({}).toArray(callback);
}

app.get('/', function (req,res) {
    res.render('index.html');
});

app.post('/api/city', (req,res)=>{
    let city = req.body;
    console.log(city);
    insertCity(city, (err,result) => {
        if(!err){
            res.json({statusCode:201,data:result,message:'success'});
        }
    });
});

app.get('/api/cities', (req,res)=>{
  getAllCities((err,result)=>{
        console.log(result);
        if(!err){
            res.json({statusCode:200,data:result,message:'success'});
        }
    });
});

app.listen(port, ()=>{
    console.log('express server started');
    runDB();
});

