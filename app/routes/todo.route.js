var Todo   = require('../models/todo');

exports.list = function(req, res){
    Todo.find(function(err, todos) {
          if(err)
            res.json({ response : err });

            res.json({response:todos});
    });
};

exports.view = function(req, res){

  var id = req.params.id;
  
  Todo.findById(id, function(err, todo) {
    if(err)
        res.json({ response:err });

        res.json({ response : todo });
        
  });
};


exports.create = function(req, res){
    var todo = new Todo();
    todo.name = req.body.name;

    //
    todo.save(function(err) {
      if(err)
        res.json({ response:err });

        res.json({ response : 'Todo Created' });
    });
};


exports.update = function(req, res){
    Todo.findById(req.params.id, function(err,todo) {
      if(err)
        res.json({ response:err });

        todo.name = req.body.name;

        todo.save(function(err) {
          if(err)
            res.json({ response:err });

          res.json({ response : 'Todo Updated' });
        });
    });
};  

exports.delete = function(req, res){
    var id = req.params.id;

    Todo.remove({_id:id}, function(err, todo) {
      if(err)
        res.json({ response:err });

        res.json({ response : 'Successfully deleted'});
    });
};