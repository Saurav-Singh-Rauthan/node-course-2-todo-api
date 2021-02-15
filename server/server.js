const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const app = express()
const port =3000

app.use(bodyParser.json())

app.post('/todos', (req, res) => {
    // console.log(req.body);

    var newtodo= new Todo({
        text:req.body.text
    })

    newtodo.save().then((doc) => {
        res.send(doc)
    },(err) => {
        res.send(err)
    })
});

// app.get("/todos", (req, res) => {
  
// });

app.listen(port, () => console.log(`Example app listening on port port!`))

  