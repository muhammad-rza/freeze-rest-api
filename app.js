global.MAIN_ROOT_PATH = __dirname;
global.APP_ROOT_PATH = __dirname + '/app/';


//global path
require('./config/global_path');


// express
var express = require('express');
var app = express();

//cors
// var cors = require("cors");
// app.use(cors());

//body parser
// var bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));


//cookie parser
// app.use(cookieParser());


// express validator
// app.use(expressValidator());

if(NODE_ENV == 'production') {

    var compression = require('compression');
    app.use(compression());

}else {
    //
}



//routes
app.use(APP_INIT.APP_API_PREFIX, require(API_ROUTE_PATH)); //api routes



app.use((req, res, next) => {
    res.locals = {
        example : 'example',
    };
    next();
});

app.use((req, res, next) => {

    var err = new Error('Not Found');
    err.status = 404;
    next(err);

});





// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = NODE_ENV === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500).json(err);

    // res.send('page not found')
});


module.exports = app;