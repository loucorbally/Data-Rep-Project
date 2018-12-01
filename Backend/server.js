var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var mongoDB = 'mongodb://admin:123hello@ds253353.mlab.com:53353/datarepproject';

mongoose.connect(mongoDB);

var Schema = mongoose.Schema;
var postSchema = new Schema({
    title: String,
    content: String,
    content2: String,
    date: String,
    completed: Boolean
})
var ToDoModel = mongoose.model('post', postSchema);


//Here we are configuring express to use body-parser as middle-ware. 
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, PATCH");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });
    
app.post('/name', function(req, res){
    res.send("Hello you sent " +
    req.body.firstname + " " +
    req.body.lastname);
})

app.get('/', function (req, res) {
   res.send('Hello from Express');
})

app.post('/api/posts', function(req, res){
    console.log("post successful");
    console.log(req.body.title);
    console.log(req.body.content);

    ToDoModel.create({
        title: req.body.title,
        content: req.body.content,
        content2: req.body.content2,
        date: req.body.date,
        completed: false,
    }).then((abc)=>{
  //TODO - REMOVE LATER
  console.log(abc)
  res.json('Item added');
    });
  


})

app.get('/api/posts', function(req, res){
    ToDoModel.find(function(err, data){
        res.json(data);
    });
})

app.get('/api/posts/:id', function(req, res){
    console.log("Read post " +req.params.id);

    //ToDoModel.find({_id : req.params.id}, 
    ToDoModel.findById(req.params.id,
        function (err, data) {
            res.json(data);
        });
})

app.put('/api/posts/:id', function(req, res){
    console.log("Update Post" +req.params.id);
    console.log(req.body.title);
    console.log(req.body.content);

    ToDoModel.findByIdAndUpdate(req.params.id, req.body, 
        function(err, data){
            res.send(data);
        })
})
//Completed toggle 
app.patch('/api/posts/:id', function(req, res){
    console.log("Update Post" +req.params.id);
  

    ToDoModel.findById(req.params.id,
        function (err, data) {
            data["completed"] = !data["completed"]
            ToDoModel.findByIdAndUpdate(req.params.id, data, 
                function(err, data){
                    res.json(data);
                })
        });
   
})

app.delete('/api/posts/:id', function(req, res){
    console.log(req.params.id);

    ToDoModel.deleteOne({_id:req.params.id},
    function(err, data)
    {
        if(err)
            res.send(err);
        res.send(data);
    })
})


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})

