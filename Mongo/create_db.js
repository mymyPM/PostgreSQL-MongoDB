var MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://my:mymy0810@cluster0.4vqqy.mongodb.net/demo?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true";

MongoClient.connect(url, function(err,db){
    if(err) throw err;
    console.log("Database created!!!");
    db.close();
});