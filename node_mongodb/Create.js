var MongoClient=require('mongodb').MongoClient;
var url= "mongodb+srv://nahid191:1211744080@cluster0.yjcuvao.mongodb.net?retryWrites=true&w=majority";

MongoClient.connect(url,function (error,mc){
    if(error){
        console.log('connection is error')
    }
    else {
        console.log('connection is not error');
        InsertData(mc);


    }
});
function  InsertData(mc){
    var db= mc.db("university");
    var MyCollection= db.collection('student');

    var MyData={name:"zarir",id:"191-15-12497",programme:"BSC IN CSE", city:'Dhaka',home_town:"Comilla"}
    MyCollection.insertOne(MyData,function (error){
        if(error){
            console.log('data is not insert')
        }
        else {
            console.log('Data insert success');


        }

    })

}

