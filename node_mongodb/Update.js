var MongoClient=require('mongodb').MongoClient;
var url= "mongodb+srv://nahid191:1211744080@cluster0.yjcuvao.mongodb.net?retryWrites=true&w=majority";

MongoClient.connect(url,function (error,mc){
    if(error){
        console.log('connection is error')
    }
    else {
        console.log('connection is not error');
        UpdateData(mc);


    }
});


function UpdateData(mc){
    var MyDataBase= mc.db("university");
    var MyCollection= MyDataBase.collection('student');

    var data={id:"191-15-12448"};
    var nv={$set:{name:"Md. Nahidul Islam",home_town:"Chandpur_sadar"}}

    MyCollection.updateOne(data,nv,function (error,result) {
        console.log(result);
    })
}

