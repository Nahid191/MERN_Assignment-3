var MongoClient=require('mongodb').MongoClient;
var url= "mongodb+srv://nahid191:1211744080@cluster0.yjcuvao.mongodb.net?retryWrites=true&w=majority";

MongoClient.connect(url,function (error,mc){
    if(error){
        console.log('connection is error');
    }
    else {
        console.log('connection is not error');

        DeleteOneItem(mc);

    }
});


function DeleteOneItem(mc){
    var db= mc.db("university");
    var MyCollection= db.collection('student');

    var DeleteItem={home_town:"bogura"};

    MyCollection.deleteOne(DeleteItem,function (error){
        if(error){
            console.log('data is not Delete')
        }
        else {
            console.log('Data Delete success');


        }

    })
}