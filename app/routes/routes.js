module.exports = function (app) {
    var express    = require('express');
    var router = express.Router();    
    var index = require('./index.route');
    var todoRoute = require('./todo.route');

 
    router.use(function(req, res, next) {
        next(); 
    });

    //
    router.get('/', index.index );


    //todo crus operations

    //get all
    router.get('/todos',todoRoute.list );

    //get todo by id
    router.get('/todos/:id',todoRoute.view );

    //post(create) todo
    router.post('/todos',todoRoute.create);

    //update todo
    router.put('/todos/:id',todoRoute.update);

    //delete todo
    router.delete('/todos/:id',todoRoute.delete);
    
    app.use('/api', router);
}