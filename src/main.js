const express = require('express');
const app = express();
const path = require('path')


app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, '/views'));
// set the view engine to ejs
app.set('view engine', 'ejs');
// use res.render to load up an ejs view file


/** 
 **Routes**
 **/
// index page
app.get('/', function(req, res) {
    res.locals = {
        title: 'Home'
      };
  res.render('index');
});
app.get('/login', function(req, res) {
  res.locals = {
      title: 'Login'
    };
res.render('pages/login');
});

// about page
app.get('/about', function(req, res) {
  res.render('./src/views/about');
});
// pakages
app.get("/pakages", function(req, res) {
  res.render('pages/pakages');
});
app.get("/contact", function(req, res) {
  res.render('pages/contact');
});
// registration
app.get("/reg", function(req, res) {
  res.render('pages/registration');
});
app.get("/dashboard", function(req, res) {
  res.render('pages/dashboard');
});

// admin part



app.get("/admin", function(req, res) {
  res.render('admin/admin');
});


app.listen(80);
console.log('Server is listening on port 80');