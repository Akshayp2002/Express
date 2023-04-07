var express = require('express');
var router = express.Router();
var mongoClient = require('mongodb').MongoClient

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/submit',function(req,res){
  console.log(req.body);

  mongoClient.connect('mongodb+srv://akshay2002:tL9JTZLygG7a3Qf9@cluster0.snbwcue.mongodb.net/test',function(err,client){
    if(err)
      console.log("not connected")
    else
    console.log("Database connected");
    client.db('sample').collection('user').insertOne(req.body)
      console.log("Database inserted successfully");
    
  })

  res.send("got it");
})

module.exports = router;
