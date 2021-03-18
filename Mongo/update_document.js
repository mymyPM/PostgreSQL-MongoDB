var MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://my:mymy0810@cluster0.4vqqy.mongodb.net/demo?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true";

//update 1 document
MongoClient.connect(url, function(err,db){
    var dbo = db.db("demo");
    var myquery = {productname:"milk"};
    var newvalues = {$set:{productname:"egg",supplier_id:1}};
    dbo.collection("products").updateOne(myquery,newvalues, function(err,res){
        if(err) throw err;
        console.log("1 document updated!!!");
        db.close();
    });
});
//update only specific field
MongoClient.connect(url, function(res,db){
    var dbo = db.db("demo");
    var myquery = {productname:"meat"};
    var newvalues = {$set:{productname:"beaf"}};
    dbo.collection("products").updateOne(myquery,newvalues, function(err,res){
        if(err) throw err;
        console.log("1 document updated!!!");
        db.close();
    });
});
//update multiple document
MongoClient.connect(url, function(err,db){
    var dbo = db.db("demo");
    var myquery = {productname: /^b/ };
    var newvalues = {$set:{price:100}};
    dbo.collection("products").updateMany(myquery,newvalues, function(err,res){
        if(err) throw err;
        console.log(res.result.nModified + " document updated!!!");
        db.close();
    });
});