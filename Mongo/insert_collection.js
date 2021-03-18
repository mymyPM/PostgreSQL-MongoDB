var MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://my:mymy0810@cluster0.4vqqy.mongodb.net/demo?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true";

MongoClient.connect(url, function(err,db){
    var dbo = db.db("demo");
    dbo.createCollection("products", function(err,res){
        if(err) throw err;
        console.log("Collection created!!!");
        db.close();
    });
});