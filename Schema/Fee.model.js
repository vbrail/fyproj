var mongoose = require("mongoose");
//===================================================================================
//=========================== Term Fee Schema =======================================
//===================================================================================
var TfeeSchema = new mongoose.Schema({
  'Enrollment No.'                : Number,
   Semester                       : Number,
  'tGovt. Education fees'         : Number,
  'Govt. Workshop-Lab Fees'       : Number,
  'Govt. Library Fees'            : Number,
  'Govt. Locker Fees'             : Number,
  'Non- Govt. Gymkhana Fees'      : Number,
  'Non- Govt. Internal Exam fees' : Number
})
//==================================================================================
//===========================Exam Fee Schema =======================================
//==================================================================================
var EfeeSchema = new mongoose.Schema({
  'Enrollment No.'       : Number,
  'Current Semester'     : Number,
  'Exam Type'            : String,
  'Exam Fee as per form' : Number,
  'Late Fee if any'      : Number

})

module.exports  = {TfeeSchema,EfeeSchema};
