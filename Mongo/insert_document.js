var MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://my:mymy0810@cluster0.4vqqy.mongodb.net/demo?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true";
//insert 1 document
MongoClient.connect(url, function(err,db){
    var dbo = db.db("demo");
    var obj1 = {_id:1,productname:"milk", price:"10"};
    dbo.collection("products").insertOne(obj1, function(err,res){
        if(err) throw err;
        console.log("1 document inserted!!!");
        db.close();
    });
});
//insert multiple document
MongoClient.connect(url, function(err,db){
    var dbo = db.db("demo");
    var obj2 = [{_id:2,productname:"meat", price:"200"},
                {_id:3,productname:"bread", price:"15"}];
    dbo.collection("products").insertMany(obj2, function(err,res){
        if(err) throw err;
        console.log(res.insertedCount + " document inserted!!!");
        db.close();
    });
});