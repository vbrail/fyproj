var express   = require('express'),
    bodyparser= require('body-parser')
    mongoose  = require("mongoose"),
    mongoXlsx = require("mongo-xlsx"),
    multer    = require("multer"),
    router    = express.Router(),
    vgolbal   = require("../validate/validation");

//==============================================================================
//========================= routing request ====================================
//==============================================================================
router.get("/abc",function(req,res){

  res.render("data.ejs");
})

//==============================================================================
//==============================================================================
module.exports = router;
