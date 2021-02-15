const expect = require('expect');
const request = require('supertest');

const {app} = require('../server');
const {Todo} = require('../models/todo');
const { ObjectID } = require('mongodb');
const todos=[
    {
        _id: new ObjectID(),
        text:"first todo"
    },
    {
        _id:new ObjectID(),
        text:"hey there todo"
    },
    {
        _id:new ObjectID(),
        text:"third todo"
    }
]

beforeEach((done) => {
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos)
    }).then(() => {
        done();
    }) //delete all todo
})

describe('POST /todos', () => {    
    it('should create todo',(done) => {
       var text='test todo text'
       request(app)
       .post('/todos')
       .send({
           text
       })
       .expect(200)
       .expect((res) => {
           expect(res.body.text).toBe(text)
       })
       .end((err,res) => {
           if(err){
               return done(err);
           }

           Todo.find({text}).then((todos) => {
               expect(todos.length).toBe(1)
               expect(todos[0].text).toBe(text)
               done()
           }).catch((err) => {
               done(err)
           })
       })
    })

    it('should not create todo',(done) => {
        request(app)
        .post('/todos')
        .send({})
        .expect(400)
        .end((err,res) => {
            if(err){
                return done(err)
            }

            Todo.find().then((todos) => {
                expect(todos.length).toBe(3)
                done()
            }).catch((err)=>done(err))
        })
    })
})

describe('GET /todos', () => {
  it('should get all todos',(done) => {
      request(app)
      .get('/todos')
      .expect(200)
      .expect((res) => {
        console.log(res.body)
          expect(res.body.todos.length).toBe(3)
      })
      .end(done)
  })
})

describe('GET /todo/:id', () => {
    it('should return particular document',(done) => {
        request(app)
        .get(`/todos/${todos[0]._id.toHexString()}`)
        .expect(200)
        .expect((res) => {
            // console.log(res.body)
            expect(res.body.text).toBe(todos[0].text)
        })
        .end(done)
    }) 

    it('should return 404',(done) => {
        var id =new ObjectID().toHexString
        request(app)
        .get(`/todos/${id}`)
        .expect(404)
        .end(done)
    })
})


