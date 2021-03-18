var MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://my:mymy0810@cluster0.4vqqy.mongodb.net/demo?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true";

MongoClient.connect(url, function(err,db){
    var dbo = db.db("demo");
    var obj2 = [{_id:4,productname:"milk", price:"10"},
                {_id:5,productname:"meat", price:"100"}];
    dbo.collection("products").insertMany(obj2, function(err,res){
        if(err) throw err;
        console.log(res.insertedCount + " document inserted!!!");
        db.close();
    });
});