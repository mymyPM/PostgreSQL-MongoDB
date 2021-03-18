var MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://my:mymy0810@cluster0.4vqqy.mongodb.net/demo?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true";

//find one
MongoClient.connect(url, function(err,db){
    if(err) throw err;
    var dbo = db.db("demo");
    dbo.collection("products").findOne({}, function(err,res){
        if(err) throw err;
        console.log(res);
        db.close();
    });
});
//find all
MongoClient.connect(url, function(err,db){
    if(err) throw err;
    var dbo = db.db("demo");
    dbo.collection("products").find({}).toArray(function(err,res){
        if(err) throw err;
        console.log(res);
        db.close();
    });
});
//find some
MongoClient.connect(url, function(err,db){
    if(err) throw err;
    var dbo = db.db("demo");
    dbo.collection("products").find({},{projection:{_id:0,price:1}}).toArray(function(err,res){
        if(err) throw err;
        console.log(res);
        db.close();
    });
});