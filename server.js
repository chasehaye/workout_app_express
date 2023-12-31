require('dotenv').config()
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
// const passport = require('passport')
const methodOverride = require('method-override');
require('./config/databaseConnect')
// require('./config/passport');



const routinesRouter = require('./routes/routines');
// const authRouter = require('./routes/userAuth')



const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser());
app.use(methodOverride('_method'));


app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}));
// app.use(passport.initialize());
// app.use(passport.session());

app.use(function (req, res, next) {
    res.locals.user = req.user;
    next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res)=>{
    res.render('home-page')
});
// app.use('/', authRouter)
app.use('/routines', routinesRouter)


app.use(function(req, res, next) {
    next(createError(404));
  });
app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    res.status(err.status || 500);
    res.render('error');
});
app.listen(3000, ()=>{
    console.log("express is running")
})
