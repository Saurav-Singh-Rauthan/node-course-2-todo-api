// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db=client.db('TodoApp')

    // db.collection('Todos').insertOne({
    //     name:'saurav',
    //     completed:false
    // },(err,result) => {
    //     if(err){
    //         return console.log('error',err);
    //     }

    //     console.log(JSON.stringify(result.ops,undefined,2));
    // })

    db.collection('Users').insertOne({
        name:'saurav',
        age:17,
        location:"india"
    },(err,result) => {
        if(err){
            return console.log('error',err);
        }

        console.log(JSON.stringify(result.ops ,undefined,2))
    })
    client.close()
})
