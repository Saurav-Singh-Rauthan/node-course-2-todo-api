const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const { User } = require('./models/user');
const { ObjectID } = require('mongodb');
const { request } = require('express');
const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())

app.post('/todos', (req, res) => {
    // console.log(req.body);

    var newtodo= new Todo({
        text:req.body.text
    })

    newtodo.save().then((doc) => {
        res.send(doc)
    },(err) => {
        res.status(400).send(err)
    })
});

app.get("/todos", (req, res) => {
    Todo.find()
    .then((todos) => {
        res.status(200).
        send({
            todos
        })
    },
    (err) => {
        res.status(400).send(err)
    })
});

app.get('/todos/:id', (req, res) => {
    var id= req.params.id
    if(!ObjectID.isValid(id)){
        return res.status(404).send()
    }

    Todo.findById(id)
    .then((todo) => {
        if(!todo){
            return res.status(404).send()
        }
        res.send(todo)
    },(err) => {
        res.status(404).send()   
    })
});

app.delete("/todos/:id", (req, res) => {
    var id =req.params.id
    if(!ObjectID.isValid(id)){
        return req.status(404).send()
    }

    Todo.findByIdAndRemove(id)
        .then((todo) => {
            if(todo.length){
                return res.status(404)
            }
            res.send(todo)
        }).catch((err) => {
            res.status(404).send()
        })
});

app.patch("/todos/:id", (req, res) => {
    // const _ = require('lodash');
    var id = req.params.id
    var body = _.pick(req.body, ['text','completed']) //required arguments to update

    if(!ObjectID.isValid(id)){
        return req.status(404).send()
    }

    if(_.isBoolean(body.completed)){
        body.completedAt = new Date().getTime()
    }else{
        body.completed =false
        body.completedAt= null
    }

    Todo.findByIdAndUpdate(id,{
        $set: body
    },{
        new:true
    })
    .then((todo) => {
        if(!todo){
            return res.status(404).status();
        }

        res.send({
            todo
        })
    })
.catch((err) => {
    res.status(404).send()
})
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports ={
    app
}
  

