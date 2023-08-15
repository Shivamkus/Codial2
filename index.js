const express = require('express');
const app = express();
const port = 5000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
const cookie = require('cookie-parser');
const cookieParser = require('cookie-parser');
// use session cookies
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-stratgy');



// const MongoStore = require ('connect-mongo');
const MongoStore = require('connect-mongo');

app.use(express.urlencoded());
app.use(cookieParser());
app.use(express.static('./assets'));

app.use(expressLayouts);

// extract style and scripts from pages into the layout
app.set('layout extractStyles' , true);
app.set('layout extractScripts' , true);



app.set('view engine', 'ejs');
app.set('views', './views');

// session store in mongo db
app.use(session({
    name:'codeial',
    // todo change the secrete before the deployment in production mode
    secret:'blashesomething',
    saveUninitialized:false,
    resave:false,
    cookie: {
        maxAge:(1000 * 60 * 100)
    },
    store: MongoStore.create(
        {
            mongoUrl:'mongodb://127.0.0.1:27017/codial_development' ,
            autoRemove:'disabled'

        },
        function(err){
            console.log(err || "connect session to the db")
        }
        )
}));
app.use(passport.initialize());
app.use(passport.session())

app.use(passport.setAuthenticatedUser);

app.use('/', require('./routes'))

app.listen(port, function(err){
 
    if(err){
        console.log('Error on running server:',err);
    }
    console.log('server is running on port:',port);
});
