const config=require('config');
const helmet=require('helmet');
const morgan=require('morgan');
const courses=require('./routes/courses');
const Joi=require('joi');
const logger=require('./logger');
const auth= require('./auth');
const express= require('express');
const app=express();

//question
//Enviomnet Variable.

//Templating Engine
// app.set('View engine,', 'pug');
// app.set('views','./views' );

//enviroment
// console.log('NODE_ENV: '+ process.env.NODE_ENV);
 console.log('app' + ' '+  app.get('env'));
//app.get('env') //if the env is not set..this will return development by default

//express middleware functions
app.use(express.json());
app.use(express.urlencoded({extended: true}))//=> Passes incoming request with url encoded payloads  i.e request with body like key=value&key=value
app.use(express.static('public')); //use to static assets like css,html,images
//new
app.use(helmet());
app.use('/api/courses',courses ); //=> this means use the 'courses' route
//when the request contains "/api/courses",
 
//Configuration
console.log('Application Name ' + config.get('name'));
console.log('Mail Server ' + config.get('mail.host')); 


if(app.get('env')==='development'){
    app.use(morgan('tiny'));
    console.log('Morgan enabled....');

}


app.use(function(req,res,next){
    console.log('Logging');
    next();
});

app.use(function(req,res,next){
    console.log('Authenticating');
    next();

})





//end
app.use(logger);
app.use(auth); 






const port= process.env.PORT || 3000;
router.listen(port, () => console.log(`Listening on port ${port}...`));


//a Middle ware fumc is basicly a function that takes a request object and
//either returns a response to the client  or passes control to another middelware
//function. 

//Templating engines
//pug
//Mustache
//EJS

//DATABase Integration
//MongoDb
//Mongoose
