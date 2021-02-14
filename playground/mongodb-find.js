const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db=client.db('TodoApp')

    // db.collection('Todos').find().toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2))
    // },(err) => {
    //     console.log('error',err);
    // })

    // db.collection('Todos').find({completed:false}).toArray().then((docs) => {
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err) => {
    //     console.log('error',err);
    // })

    // db.collection('Todos').find({
    //     _id:new ObjectID("60292cdd9d7c724ec409fa30")
    // }).toArray().then((docs) => {
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err) => {
    //     console.log('error',err);
    // })

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // },(err) => {
    //     console.log('error',err);
    // })

    // db.collection('Users').find({
    //     name:"saurav"
    // }).toArray()
    //     .then((docs) => {
    //         console.log(JSON.stringify(docs,undefined,2));
    //     },(err) => {
    //         console.log('error',err);
    //     })

})

