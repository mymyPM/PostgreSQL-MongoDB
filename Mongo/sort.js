var MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://my:mymy0810@cluster0.4vqqy.mongodb.net/demo?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true";

//sort ascending
MongoClient.connect(url, function(err,db){
    if(err) throw err;
    var dbo = db.db("demo");
    var sort = {productname:1};
    dbo.collection("products").find({}).sort(sort).toArray(function(err,res) {
        if(err) throw err;
        console.log(res);
        db.close();
    });
});
//sort descending
MongoClient.connect(url, function(err,db){
    if(err) throw err;
    var dbo = db.db("demo");
    var sort = {productname:-1};
    dbo.collection("products").find({}).sort(sort).toArray(function(err,res) {
        if(err) throw err;
        console.log(res);
        db.close();
    });
});