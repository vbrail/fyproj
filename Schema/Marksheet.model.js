var mongoose = require("mongoose");

var MarksheetSchema = new mongoose.Schema({
  MAP_NUMBER:Number,
  exam:String,
  AcademicYear:Date,
  sem:Number,
    // Subject code
  SUB1:Number,	SUB2:Number,	SUB3:Number,	SUB4:Number,	SUB5:Number,
  SUB6:Number,	SUB7:Number,	SUB8:Number,	SUB9:Number,	SUB10:Number,
  // Subject Name
  SUB1NA:String,	SUB2NA:String,	SUB3NA:String,	SUB4NA:String,	SUB5NA:String,
  SUB6NA:String,	SUB7NA:String,	SUB8NA:String,	SUB9NA:String,	SUB10NA:String,
  // Subject credit
  SUB1CR:Number,	SUB2CR:Number,	SUB3CR:Number,	SUB4CR:Number,	SUB5CR:Number,
  SUB6CR:Number,	SUB7CR:Number,	SUB8CR:Number,	SUB9CR:Number,	SUB10CR:Number,
  // Subject Grade
  SUB1GR:String,	SUB2GR:String,	SUB3GR:String,	SUB4GR:String,	SUB5GR:String,
  SUB6GR:String,	SUB7GR:String,	SUB8GR:String,	SUB9GR:String,	SUB10GR:String,
  // Subject Absent
  SUB1AB:String,	SUB2AB:String,	SUB3AB:String,	SUB4AB:String,	SUB5AB:String,
  SUB6AB:String,	SUB7AB:String,	SUB8AB:String,	SUB9AB:String,	SUB10AB:String,
  // Practical Grade : PA
  SUB1GRI:String,	SUB2GRI:String,	SUB3GRI:String,	SUB4GRI:String,	SUB5GRI:String,
  SUB6GRI:String,	SUB7GRI:String,	SUB8GRI:String,	SUB9GRI:String,	SUB10GRI:String,
  // Theory Grade    : total
  SUB1GRTH:String,	SUB2GRTH:String,	SUB3GRTH:String,	SUB4GRTH:String,	SUB5GRTH:String,
  SUB6GRTH:String,	SUB7GRTH:String,	SUB8GRTH:String,	SUB9GRTH:String,	SUB10GRTH:String,
  // Theory Grade    : ESE
  SUB1GRE:String,	SUB2GRE:String,	SUB3GRE:String,	SUB4GRE:String,	SUB5GRE:String,
  SUB6GRE:String,	SUB7GRE:String,	SUB8GRE:String,	SUB9GRE:String,	SUB10GRE:String,
  // Theory Grade    : PA
  SUB1GRM:String,	SUB2GRM:String,	SUB3GRM:String,	SUB4GRM:String,	SUB5GRM:String,
  SUB6GRM:String,	SUB7GRM:String,	SUB8GRM:String,	SUB9GRM:String,	SUB10GRM:String,
  // Practical Grade : total
  SUB1GRPR:String,	SUB2GRPR:String,	SUB3GRPR:String,	SUB4GRPR:String,	SUB5GRPR:String,
  SUB6GRPR:String,	SUB7GRPR:String,	SUB8GRPR:String,	SUB9GRPR:String,	SUB10GRPR:String,
  //Practical Grade  : ESE
  SUB1GRV:String,	SUB2GRV:String,	SUB3GRV:String,	SUB4GRV:String,	SUB5GRV:String,
  SUB6GRV:String,	SUB7GRV:String,	SUB8GRV:String,	SUB9GRV:String,	SUB10GRV:String,
  //Backlog
  BCK1:Number,	BCK2:Number,	BCK3:Number,	BCK4:Number,	BCK5:Number,
  BCK6:Number,	BCK7:Number,	BCK8:Number,	BCK9:Number,	BCK10:Number,

  TOTBACKL:Number,
  CURBACKL:Number,
  SPI:Number,
  CPI:Number,
  CGPA:Number,
  TRIAL:Number,
  RESULT:String,
  UFM:String

})


module.exports = { MarksheetSchema};
