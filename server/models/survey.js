//***********************************************************************
//**************************** Chang Names!!!!! *************************
console.log("models/survey.js")
//***********************************************************************
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

// _user: {type: Schema.Types.ObjectId, ref: 'User'},
// text: {type: String, required: [true, "question required"], minlength: [15, 'question must be at least 15 characters long']},

//   _user: {type: Schema.Types.ObjectId, ref: 'User'},
//   _comment:{type: Schema.Types.ObjectId, ref: 'Comment'},

//   comments: [{type:mongoose.Schema.Types.ObjectId,ref:'Comment'}],
//    {type:Number, default:0, required: true},
//   {type:Number, default:0, required: true},
// }, {timestamps: true });
