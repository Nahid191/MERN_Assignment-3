var MongoClient=require('mongodb').MongoClient;
var url= "mongodb+srv://nahid191:1211744080@cluster0.yjcuvao.mongodb.net?retryWrites=true&w=majority";

MongoClient.connect(url,function (error,mc){
    if(error){
        console.log('connection is error')
    }
    else {
        console.log('connection is not error');
        FindAllData(mc);


    }
});
function FindAllData(mc) {
    var db= mc.db("university");
    var MyCollection= db.collection('student');
    MyCollection.find().toArray(function (error,result) {
        console.log(result)
    })
}

