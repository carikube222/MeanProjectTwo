//******************************************************************************
var path = require('path')
//******************************************************************************
//*************** ADD all your server/controllers/.js Here *********************
var surveys = require("./../controllers/surveys.js")

module.exports = function(app){
//******************************************************************************
  console.log('config/routes.js!');
//******************************************************************************
//************************* Change routes & friendS functions ******************
  // app.get('/', function(req, res){
  //   res.render('index')
  // }
  app.get('/surveys', function(req, res) {
    console.log("config/routes.js show all")
    surveys.index(req, res);
  });

  app.get('/surveys/:id', function(req, res) {
    surveys.show(req, res);
  })

  app.post('/surveys/new', function(req, res) {
    console.log("config/routes.js create")
    surveys.create(req, res);
  });

  app.put('/surveys/:id', function(req, res) {
    console.log("config/routes.js update")
    surveys.update(req, res);
  })

  app.delete('/surveys/:id', function(req, res) {
    console.log("config/routes.js delete")
    surveys.delete(req, res);
  })
//******************************************************************************
}
//******************************************************************************
