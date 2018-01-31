var express   = require('express'),
    bodyparser= require('body-parser')
    mongoose  = require("mongoose"),
    mongoXlsx = require("mongo-xlsx"),
    multer    = require("multer"),
    router    = express.Router(),
    vgolbal   = require("../validate/validation"),
    Students   = require('../Schema/student.model');

//==============================================================================
//========================= routing request ====================================
//==============================================================================
router.get("/data",function(req,res){
  //var obj = Students.findById(req.query.search_query);
    Students.findById(req.query.search_query,function(err,data){
      if (err) {
        console.log(err);

      } else {
        console.log("sucessfully loaded");
        if(!data){
          res.render("error.ejs");
        }
        else{

          res.render("data.ejs",{data:data});
        }
          }
    })
})

//==============================================================================
//==============================================================================
module.exports = router;
