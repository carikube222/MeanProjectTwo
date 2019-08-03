//******************************************************************************
var mongoose  = require('mongoose'),
    Survey   = mongoose.model('Survey')
//************* Change to the right mongoose.model *****************************
//******************************************************************************
module.exports = (function() {
  return {
//******************************************************************************
    index: function(req, res) {
      console.log('index');
      Survey.find({}, function(err, data) {
        if (err) {
          console.log(err);
          res.json(err);
        } else {
          res.json(data);
        }
      })
    },
    show: function(req, res) {
      console.log(req.params);
      Survey.findOne({_id: req.params.id}, function(err,data) {
        if (err) {
          console.log(err);
          res.json(err);
        } else {
          console.log(data);
          res.json(data);
        }
      })
    },
    create: function(req, res) {
      var survey = new Survey({
        name:req.body.name,
        question:req.body.question,
        one:req.body.one,
        two: req.body.two,
        three:req.body.three,
        four:req.body.four,
        likeone:req.body.likeone,
        liketwo:req.body.liketwo,
        likethree:req.body.likethree,
        likefour:req.body.likefour,
        date:req.body.date
      });
      survey.save(function(err, data) {
        if (err) {
          console.log(err);
          res.json(err);
        } else {
          res.json(data);
          console.log("saved", data)
        }
      })
    },
    update: function(req, res) {
      console.log(req.params, req.body);
      Survey.findOne({_id: req.params.id}, function(err, data) {
        for (var i in req.body) {
          if (req.body[i] != data[i]) {
          data[i] = req.body[i];
          }
        }
        console.log(data);
        data.save(function(err, data) {
          if (err) {
            console.log("didn't update", err);
            res.json(err);
          } else {
            console.log("updated!",data);
            res.json(data);
          }
        })
      })
    },
    delete: function(req, res) {
      console.log(req.params.id);
      Survey.findOne({_id: req.params.id}, function(err, data) {
        if (err) {
          console.log(err);
          res.json(err);
        } else {
          Survey.remove(data, function(error, datum) {
            if (error) {
              console.log("didn't remove it", error);
              res.json(error);
            } else {
              console.log("deleted!", datum);
              res.json(datum);
            }
          })
        }
      });
    }
  }
//******************************************************************************
})();
//******************************************************************************
