//******************************************************************************
//**************************** Chang Names!!!!! ********************************
console.log("models/survey.js")
//******************************************************************************
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SurveySchema = new mongoose.Schema({
  name: {type:String, required: true},
  question: {type: String, required: [true, "question required"], minlength: [8, 'at least 8 characters long']},
  one: {type: String, required: [true, "option required"], minlength: [3, 'at least 3 characters long']},
  two: {type: String, required: [true, "option required"], minlength: [3, 'at least 3 characters long']},
  three: {type: String, required: [true, "option required"], minlength: [3, 'at least 3 characters long']},
  four: {type: String, required: [true, "option required"], minlength: [3, 'at least 3 characters long']},
  likeone: {type:Number, default:0, required: true},
  liketwo: {type:Number, default:0, required: true},
  likethree: {type:Number, default:0, required: true},
  likefour: {type:Number, default:0, required: true},
  date: {type: Date,required: true}
});

mongoose.model('Survey', SurveySchema);
