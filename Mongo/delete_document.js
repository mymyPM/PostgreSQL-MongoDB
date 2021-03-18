var MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://my:mymy0810@cluster0.4vqqy.mongodb.net/demo?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true";

//delete one
MongoClient.connect(url, function(err,db) {
    if(err) throw err;
    var dbo = db.db("demo");
    var myquery = {productname:"egg"};
    dbo.collection("products").deleteOne(myquery, function(err,res){
        if(err) throw err;
        console.log("1 document deleted!!!");
        db.close();
    });
});
//delete many
MongoClient.connect(url, function(err,db) {
    if(err) throw err;
    var dbo = db.db("demo");
    var myquery = {productname:/^m/};
    dbo.collection("products").deleteMany(myquery, function(err,res){
        if(err) throw err;
        console.log(res.deletedCount+ " document deleted!!!");
        db.close();
    });
});
