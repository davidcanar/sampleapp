
var express = require ('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
var data = [{date:new Date(2017,06,29), value:250000},{date: new Date(2017,06,30), value: 150000}];
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/myproject';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  db.close();
});

var insertItem = function(db, item, callback) {
  var collection = db.collection('items');
  // Insert some documents
  collection.insertMany([
    item
  ], function(err, result) {
    console.log(err);
    callback(result);
  });
}

var saveTransaction = function(item, callback){
    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        insertItem(db, item, callback);
        db.close();
    });
}

var getTransactions = function(callback){
    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        findTransactions(db, callback);
        db.close();
    });
}

var findTransactions = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('items');
  // Find some documents
  var order = { date:-1 };
  collection.find({}).sort(order).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
  });
}

app.get('/getTransactions', (req,res)=>{
    getTransactions(function(result){
        console.log(result);
        res.json(result);
    });
} );

app.post('/saveTransaction', (req,res)=>{
    console.log(req.body);
    var result = new Object();
    result.result = true;
    result.message = "Saved!";
    saveTransaction(req.body, function(result){
        console.log(result);
    });
    res.json(result);
} );


app.listen(1234);