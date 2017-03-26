//******************************************************************************
console.log('config/mongoose.js');
//************************* Requires *******************************************
var mongoose    = require('mongoose'),
    path        = require('path'),
    fs          = require('fs');

//*************************** Mongoose CONNECT *********************************
//*************************** CHANGE DB NAME!  *********************************
mongoose.connect('mongodb://localhost/mean');

mongoose.connection.on('error', function (err) {
  console.error(`Mongoose Connection-Error:`, err);
});
mongoose.connection.on( 'connected', function () {
  console.log( `Mongoose Connected` );
});
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose Disconnected');
});

//*************************** MODEL SETUP **************************************
var models_path = path.join(__dirname, './../models');

fs.readdirSync(models_path).forEach(function(file) {
    if( file.indexOf('.js') >= 0 ) {
        require(models_path + '/' + file);
    }
})
