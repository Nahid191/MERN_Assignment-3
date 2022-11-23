var MongoClient=require('mongodb').MongoClient;
var url= "mongodb+srv://nahid191:1211744080@cluster0.yjcuvao.mongodb.net?retryWrites=true&w=majority";

MongoClient.connect(url,function (error,mc){
    if(error){
        console.log('connection is error')
    }
    else {
        console.log('connection is not error');
        FindOne(mc);


    }
});



function FindOne(mc) {
    var MyDataBase= mc.db("university");
    var MyCollection= MyDataBase.collection('student');
    var Find={id: "191-15-12448"}
    MyCollection.findOne(Find,function (error,result) {
        console.log(result);
    })
}