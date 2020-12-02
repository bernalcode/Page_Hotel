const express = require('express');
const path = require('path');
const morgan = require('morgan');



//initializations
const app = express();





app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);



//middlewares
app.use(morgan('dev'));


//routes
app.use(require('./routes/index'));






//static files
app.use(express.static(path.join(__dirname, 'public')));




// listening the server
app.listen(app.get('port'), () => {
    console.log('Server on Port', app.get('port'));
});