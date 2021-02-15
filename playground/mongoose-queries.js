const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

var id = "502a084505c0b710d0ca6b17"

Todo.find({
    _id: id
}).then((todos) => {
    console.log(todos);
})

Todo.findOne({
    _id:id
}).then((todo) => {
    console.log(todo);
})

Todo.findById(id).then((res) => {
    if(!res){
        return console.log('id not found');
    }
    console.log('todo by id',res);
})

var userid="602a04479e862d1c945a0af9"

User.findById(userid)
.then((res) => {
    console.log(res);
},(err) => {
    console.log(err);
})