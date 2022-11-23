var MongoClient=require('mongodb').MongoClient;
var url= "mongodb+srv://nahid191:1211744080@cluster0.yjcuvao.mongodb.net?retryWrites=true&w=majority";

MongoClient.connect(url,function (error,mc){
    if(error){
        console.log('connection is error')
    }
    else {
        console.log('connection is not error');

        DeleteAllItem(mc);

    }
});



function DeleteAllItem(mc) {
    var MyDataBase= mc.db("university");
    var MyCollection= MyDataBase.collection('student');
    MyCollection.deleteMany(function (error,Result){
        if(error){
            console.log('data is not Delete');
        }
        else {
            console.log(Result);
        }
    })
}