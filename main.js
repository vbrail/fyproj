var express =require('express'),
    bodyparser=require('body-parser')
    mongoose = require("mongoose"),
    mongoXlsx = require("mongo-xlsx"),
    multer    = require("multer"),
    storage = multer.diskStorage({
        destination: function (req, file, cb) {cb(null, 'uploads/')},
        filename: function (req, file, cb) {cb(null, file.originalname)}
      });
var upload = multer({ storage: storage });
//==============================================================================
//======================  connecting database  ==================================
//==============================================================================
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/db1",function(err,data){
  if(err){
    console.log("db connection failed : ",err);
  }
  else{
    console.log("connnection sucessful: ");
  }
});

//===================================================================================
//========================= Starting Server =========================================
//===================================================================================
app=express();
app.use(bodyparser.urlencoded({
  extended:true
}));

app.listen(7777,function(){
console.log("server started");
})

//============================================================================
//===================== acquiring router =====================================
//============================================================================
var rindex =require("./routes/rindex")
    rview  =require("./routes/rview");
app.use(rindex);
app.use(rview);
//============================================================================
//=============================================================================
