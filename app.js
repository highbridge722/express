var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
<<<<<<< HEAD
var cors = require('cors'); // 追加

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const MongoClient = require('mongodb').MongoClient;

var app = express();

app.use(cors()); // CORSミドルウェアを追加

=======

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var notesRouter = require('./routes/notes'); 
var catRouter = require('./routes/cat'); 

var app = express();

>>>>>>> f245b80847a920c8e988ee89927a186aa772e994
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
<<<<<<< HEAD

// MongoDBの接続設定
const uri = "mongodb+srv://highbridge722:kntknt198007@cluster0.zk86k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error(err);
  }
}

run().catch(console.dir);

// `/notes` ルートの設定
app.get('/notes', async (req, res) => {
  try {
    const database = client.db('notes');
    const notes = database.collection('notes');
    const data = await notes.find().toArray();
    res.json(data); // データをJSON形式で返す
  } catch (err) {
    res.status(500).send('Internal Server Error');
  }
});
=======
app.use('/notes', notesRouter); 
app.use('/cat', catRouter); 
>>>>>>> f245b80847a920c8e988ee89927a186aa772e994

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
<<<<<<< HEAD
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
=======
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
>>>>>>> f245b80847a920c8e988ee89927a186aa772e994
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
<<<<<<< HEAD



=======
>>>>>>> f245b80847a920c8e988ee89927a186aa772e994
