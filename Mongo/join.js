var MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://my:mymy0810@cluster0.4vqqy.mongodb.net/demo?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true";

MongoClient.connect(url, function(err,db) {
    if(err) throw err;
    var dbo = db.db("demo");
    dbo.collection("orders").aggregate([
        {$lookup:{
            from:"products",
            localField:"product_id",
            foreignField:"_id",
            as: "price"
        }}
    ]).toArray(function(err,res) {
        if(err) throw err;
        console.log(JSON.stringify(res));
        db.close();
    });
});