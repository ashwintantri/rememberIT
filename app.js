const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const ideas = require('./routes/ideas');
const users = require('./routes/users');
const flash = require('connect-flash');
const passport = require('passport');
const db = require('./config/database');
const session = require('express-session');
const app = express();


mongoose.connect(db.mongoURI)
.then(()=>
            console.log('MongoDB connected.')
        ).catch(err => console.log(err));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

app.use(methodOverride('_method'));

require('./config/passport.js')(passport);
app.use(session({
    secret:'secret',
    resave: true,
    saveUninitialized:true
}));
app.use(passport.initialize());
app.use(passport.session());



app.use(flash());

app.use(function(req,res,next){
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null;
    next();
});

app.get('/',(req,res) => 
            {
                const vart = "Welcome!"
                res.render('index',{title:vart});
            });

app.get('/About',(req,res) => 
            {
                const vart = "About!"
                res.render('about',{title:vart});
            });

app.use('/ideas',ideas);
app.use('/users',users);
const port = process.env.PORT || 5000;

app.listen(port, () =>
                {
                    console.log(`Server started on port ${port}`);
                }); 