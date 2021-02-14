const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db=client.db('TodoApp')

    // db.collection('Todos').findOneAndUpdate({
    //     "_id" :new ObjectID("60293e76b145022eb70dc2f4")
    // },{
    //     $set:{
    //         completed:true
    //     }
    // },{
    //     returnOriginal:false
    // }).then((doc) => {
    //     console.log(doc);
    // })

    db.collection('Users').findOneAndUpdate({
        "_id" : new ObjectID("6029394db145022eb70dc1f3")
    },{
        $set:{
            name:"saurav singh rauthan"
        },
        $inc:{
            age:1
        }
    },{
        returnOriginal:false
    }).then((doc) => {
        console.log(doc);
    })
})