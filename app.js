// require("dotenv").config(); // comment pour mise en ligne
require("./config/mongo");

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.json());
app.use(cors(["https://git.heroku.com/ultraviolettes-back.git", "https://ultraviolettes.herokuapp.com/"]));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// ROUTES
// app.use('/', require('./routes/index'));
// app.use('/user', require('./routes/user'));
// app.use('/project', require('./routes/project'));
// app.use('/sequencer', require('./routes/sequencer'));
// app.use('/synth', require('./routes/synth'));
// app.use('/sequence', require('./routes/sequence'));
// app.use('/effect', require('./routes/effect'));
// app.use('/sample', require('./routes/sample'));


app.get("/", (req, res) => res.send("yay, the uv app is working !"));
app.use("/api/media", require("./routes/api.media.js"));

app.use("/api/user", require("./routes/api.user"));
app.use("/api/submit", require("./routes/api.submit"));
app.use("/api/contact", require("./routes/api.contact"));
app.use("/test", require("./routes/routeTest"));
app.use("/api/auth", require("./routes/api.auth"));
// app.use("/api/article", require("./routes/api.article"));
// app.use("/api/comment", require("./routes/api.comment"));
// app.use("/api/country", require("./routes/api.country"));
// app.use("/api/job", require("./routes/api.job"));
// app.use("/api/genre", require("./routes/api.genre"));
// app.use("/api/faiseuse", require("./routes/api.faiseuse"));


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;