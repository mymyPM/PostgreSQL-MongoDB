var MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://my:mymy0810@cluster0.4vqqy.mongodb.net/demo?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true";

MongoClient.connect(url, function(err,db){
    if(err) throw err;
    var dbo = db.db("demo");
    var query = {price:100};
    dbo.collection("products").find(query).toArray(function(err,res){
        if(err) throw err;
        console.log(res);
        db.close();
    });
});