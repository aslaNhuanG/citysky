module.exports = function(app){

    app.get('/', function(req, res){
        res.render('login');
    });

    app.get('/login', function(req, res){
        res.render('login');
    });

    app.post('/checkLogin', function(req, res){

        res.render('index');
    });
}