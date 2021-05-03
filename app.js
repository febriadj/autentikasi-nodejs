"use strict"

const 
  express = require('express')
, path = require('path')
, session = require('express-session')
, app = express()
, port = process.env.PORT || 3000;

app.set('view engine', 'pug');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// konfigurasi static file
app.use(express.static(path.join(__dirname, 'public/css')));

app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true
}));

app.use(require('./router/route'));

app.listen(port, function(){
  console.log(`listening on localhost:${port}`);
});