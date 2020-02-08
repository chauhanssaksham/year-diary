//vvvvvvvv========Intialize Node.js
const express = require('express');
const app = express();
const port = 2020;
const expressLayouts = require('express-ejs-layouts'); //Initialize Layouts

//Add the static Folder, '/assets'
app.use(express.static('./assets'));

//Express Layout Settings
app.use(expressLayouts);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

//Set up EJS as our View Engine
app.set('view engine', 'ejs');
app.set('views', './views');

//Add Routes to the App
app.use('/', require('./routes'));

//vvvvvvvv========The server listens and runs on PORT
app.listen(port, function(err){
    if(err){
        console.log(`Error in running the Server: ${err}`);
    }
    else{
        console.log(`Server up and running on port: ${port}`);
    }
});