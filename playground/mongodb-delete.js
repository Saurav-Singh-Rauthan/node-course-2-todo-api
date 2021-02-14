const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db=client.db('TodoApp')

    // deleteMany
    // db.collection('Todos').deleteMany({
    //     "text" : "todo 2"
    // }).then((result) => {
    //     console.log(result);
    // },(err) => {
    //     console.log(err);
    // })

    // deleteOne
    // db.collection('Todos').deleteOne({
    //     "text" : "todo 2"
    // }).then((result) => {
    //         console.log(result);
    //     },(err) => {
    //         console.log(err);
    //     })

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({
    //     completed:false
    // }).then((res) => {
    //     console.log(res);
    // })

    db.collection('Users').findOneAndDelete({
        "_id" :new ObjectID('60292e0a3a46a734c8ccda0c')
    }).then((doc) => {
        console.log(doc);
    })
})