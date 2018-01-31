var express =require('express'),
    bodyparser=require('body-parser')
    mongoose = require("mongoose"),
    mongoXlsx = require("mongo-xlsx"),
    multer    = require("multer"),
    storage = multer.diskStorage({
        destination: function (req, file, cb) {cb(null, 'uploads/')},
        filename: function (req, file, cb) {cb(null, file.originalname)}
      });
var upload = multer({ storage: storage }),
     router=express.Router();


//===============================================================================
//======================= Accuring Schemas ======================================
//===============================================================================
var Students   = require('../Schema/student.model');
var model=null;
//===================================================================================
//======================  Reuest Routing ============================================
//===================================================================================
     router.get("/",function(req,res){
       console.log("get req initiated");
       res.render("index.ejs");
     })

     router.post("/",upload.single("file"),function(req,res){                               //-1
       console.log("post req initiated");
       console.log(req.body.fc);
       console.log(req.file.path);
       //+++++++++++++++++++++ For Term Fee ===================================== #1
       if(req.body.fc=="Tfee"){                                                          // -2
         console.log("Term fee Excel intiated");
         mongoXlsx.xlsx2MongoData("./"+req.file.path,model,function (err,mongoData){ //-3
           if(err){                                                                       //-4
             console.log("data conversion error");
           }                                                                              //4-
           else{                                                                          //-5
             console.log("data converted ducessfully");
             mongoData.forEach(ele =>{                                                    //-6
               Students.findById(ele['Enrollment No.'],function(err,data){                //-7
                 if(err){                                                                 //-8
                   console.log("searching time error",err);
                 }                                                                        //8-
                 else{                                                                    //-9
                   if(!data){                                                             //-10

                     ///////////////////////////////////////////////////////////
                     var _id    = ele['Enrollment No.'],
                         sem    = "s_"+ele.Semester,
                         total  = 0;
                         if(isNaN(ele['Govt. Education fees']))
                           {
                                         console.log(_id,"undefined");
                           }else{
                             total=total+ele['Govt. Education fees'];
                           }

                         total=total+ ele['Govt. Workshop-Lab Fees'] +
                                  ele['Govt. Library Fees'] + ele['Govt. Locker Fees'] +
                                  ele['Non- Govt. Gymkhana Fees'] + ele['Non- Govt. Internal Exam fees'];


                     var obj    = {_id:_id,[sem]:{Term_fee:total}};
                     Students.create(obj,function(err,data){
                       if(err){
                         console.log("error",_id," type:-",ele['Bank Reference No']);
                       }
                       else{
                       //  console.log("created",data);
                       }
                     })
                     //////////////////////////////////////////////////////////
                   }                                                                      //10-
                   else{                                                                  //-11
                     console.log("inserting fee data");
                     var _id    = ele['Enrollment No.'],
                         total  = ele['Govt. Education fees'] + ele['Govt. Workshop-Lab Fees'] +
                                  ele['Govt. Library Fees'] + ele['Govt. Locker Fees'] +
                                  ele['Non- Govt. Gymkhana Fees'] + ele['Non- Govt. Internal Exam fees'],
                         sem    = "s_"+ele.Semester;
                     console.log("_id : ",_id);
                     var obj    = {[sem]:{Term_fee:total}};
                     Students.findByIdAndUpdate(_id,obj,{overwrite: false},function(err, updatedItem){  //-12
                       if(err){                                                                         //-13
                         console.log("updating error",err);
                       }                                                                                //13-
                       else{                                                                            //-14
                         console.log("updated",updatedItem);
                       }                                                                                //14-
                     })                                                                                 //12-
                   }                                                                        //11-
                 }                                                                          //9-
               })                                                                           //7-
             })                                                                             //6-
           }                                                                                //5-
         })                                                                                 //3-
       }                                                                                    //2-
       //============================= Term Fees Over ===============================
       //++++++++++++++++++++++++++++++ Exaam Fee ================================== #2
       else if(req.body.fc=="Efee"){
         console.log("Exam Fee Excel initiated");
         mongoXlsx.xlsx2MongoData("./"+req.file.path,model,function (err,mongoData){
           if(err){
             console.log("conversion error [exam Fee]");
           }
           else{
             console.log("conversion Sucessful");
             mongoData.forEach(ele =>{
               Students.findById(ele['Enrollment No.'],function(err,data){
                 if(err){
                   console.log("searching Time error");
                 }
                 else{
                   if(!data){
                     console.log("no pre existing id",ele['Erollment No.']);
                     var _id    = ele['Enrollment No.'],
                         type   = ele['Exam Type'],
                         total  = ele['Exam Fee as per form'],
                         sem    = "s_"+ele['Current Semester'],
                         csem   = ele['Current Semester']
                         obj    = {};
                         obj    = {_id:_id, cur_sem :csem,[sem]:{Exam_fee_Reg:total}};
                     Students.create(obj)
                   }
                   else{
                     console.log("inserting fee data");
                     var _id    = ele['Enrollment No.'],
                         type   = ele['Exam Type'],
                         total  = ele['Exam Fee as per form']+ele['Late Fee if any'],
                         sem    = "s_"+ele['Current Semester'],
                         obj    = {};
                     if(Detain(ele['Current Semester'],ele['Enrollment No.'])){
                         sem    = "d_"+ele['Current Semester']
                     }
                     else{
                       if(type=="Regular"){
                          obj    = {[sem]:{Exam_fee_Reg:total}};
                       }
                       else if(type=="Remedial"){
                          obj    = {[sem]:{Exam_fee_Rem:total}};
                       }
                       console.log("=>",obj);
                       Students.findByIdAndUpdate(_id,obj,{overwrite: false},function(err, updatedItem){
                         if(err){
                           console.log("updating error",err);
                         }
                         else{
                           console.log("updated",updatedItem);
                         }
                       })
                     }
                   }
                 }
               })
             })
           }
         })
       }
     //============================== Exam Fee Over +++++++++++++++++++++++++++++++++ 1#
     //++++++++++++++++++++++++++++++ Marksheet     +++++++++++++++++++++++++++++++++
       else if(req.body.fc=="result"){
         console.log("Marksheet Excel initiated");
         mongoXlsx.xlsx2MongoData("./"+req.file.path,model,function (err,mongoData){
           if(err){
             console.log("excel conversion error",err);
           }
           else{
             console.log("conversion sucessfully");
             mongoData.forEach(ele =>{
             Students.findById(ele['MAP_NUMBER'],function(error,data){
               if(err){
                 console.log("search Time error");
               }
               else{
                 if(!data){
                   console.log(" No records found with with this data",ele['MAP_NUMBER']);
                 }
                 else{
                   /////////////////////////////////////////
                   var sem = "s_"+ele.sem;
                   Students.findByIdAndUpdate(ele['MAP_NUMBER'],{
                     [sem]:{
                       Tsubject:ele.TOTSUBCOUNT,
                       result:{
                         sub1:{
                           code   :ele.SUB1,     name   :ele.SUB1NA,  these  :ele.SUB1GRE, thpa   : ele.SUB1GRM,
                           thtot  :ele.SUB1GRTH, prese  :ele.SUB1GRV, prpa   :ele.SUB1GRI,
                           prtot  :ele.SUB1GRPR, grade  :ele.SUB1GR,  absen  :ele.SUB1AB,  backlog: ele.BCK1 },
                         sub2:{
                           code   :ele.SUB2,     name   :ele.SUB2NA,  these  :ele.SUB2GRE, thpa   : ele.SUB2GRM,
                           thtot  :ele.SUB2GRTH, prese  :ele.SUB2GRV, prpa   :ele.SUB2GRI,
                           prtot  :ele.SUB2GRPR, grade  :ele.SUB2GR,  absen  :ele.SUB2AB,  backlog: ele.BCK2 },
                         sub3:{
                           code   :ele.SUB3,     name   :ele.SUB3NA,  these  :ele.SUB3GRE, thpa   : ele.SUB3GRM,
                           thtot  :ele.SUB3GRTH, prese  :ele.SUB3GRV, prpa   :ele.SUB3GRI,
                           prtot  :ele.SUB3GRPR, grade  :ele.SUB3GR,  absen  :ele.SUB3AB,  backlog: ele.BCK3 },
                         sub4:{
                           code   :ele.SUB4,     name   :ele.SUB4NA,  these  :ele.SUB4GRE, thpa   : ele.SUB4GRM,
                           thtot  :ele.SUB4GRTH, prese  :ele.SUB4GRV, prpa   :ele.SUB4GRI,
                           prtot  :ele.SUB4GRPR, grade  :ele.SUB4GR,  absen  :ele.SUB4AB,  backlog: ele.BCK4 },
                         sub5:{
                           code   :ele.SUB5,     name   :ele.SUB5NA,  these  :ele.SUB5GRE, thpa   : ele.SUB5GRM,
                           thtot  :ele.SUB5GRTH, prese  :ele.SUB5GRV, prpa   :ele.SUB5GRI,
                           prtot  :ele.SUB5GRPR, grade  :ele.SUB5GR,  absen  :ele.SUB5AB,  backlog: ele.BCK5 },
                         sub6:{
                           code   :ele.SUB6,     name   :ele.SUB6NA,  these  :ele.SUB6GRE, thpa   : ele.SUB6GRM,
                           thtot  :ele.SUB6GRTH, prese  :ele.SUB6GRV, prpa   :ele.SUB6GRI,
                           prtot  :ele.SUB6GRPR, grade  :ele.SUB6GR,  absen  :ele.SUB6AB,  backlog: ele.BCK6 },
                         sub7:{
                           code   :ele.SUB7,     name   :ele.SUB7NA,  these  :ele.SUB7GRE, thpa   : ele.SUB7GRM,
                           thtot  :ele.SUB7GRTH, prese  :ele.SUB7GRV, prpa   :ele.SUB7GRI,
                           prtot  :ele.SUB7GRPR, grade  :ele.SUB7GR,  absen  :ele.SUB7AB,  backlog: ele.BCK7 },
                         sub8:{
                           code   :ele.SUB8,     name   :ele.SUB8NA,  these  :ele.SUB8GRE, thpa   : ele.SUB8GRM,
                           thtot  :ele.SUB8GRTH, prese  :ele.SUB8GRV, prpa   :ele.SUB8GRI,
                           prtot  :ele.SUB8GRPR, grade  :ele.SUB8GR,  absen  :ele.SUB8AB,  backlog: ele.BCK8 },
                         sub9:{
                           code   :ele.SUB9,     name   :ele.SUB9NA,  these  :ele.SUB9GRE, thpa   : ele.SUB9GRM,
                           thtot  :ele.SUB9GRTH, prese  :ele.SUB9GRV, prpa   :ele.SUB9GRI,
                           prtot  :ele.SUB9GRPR, grade  :ele.SUB9GR,  absen  :ele.SUB9AB,  backlog: ele.BCK9 },
                         sub10:{
                           code   :ele.SUB10,     name   :ele.SUB10NA,  these  :ele.SUB10GRE, thpa   : ele.SUB10GRM,
                           thtot  :ele.SUB10GRTH, prese  :ele.SUB10GRV, prpa   :ele.SUB10GRI,
                           prtot  :ele.SUB10GRPR, grade  :ele.SUB10GR,  absen  :ele.SUB10AB,  backlog: ele.BCK1 },

                       }
                     }
                   },
                   ///////////////////////////////////////////
                   {overwrite: false},function(err, updatedItem){
                     if(err){
                       console.log("updating error",err);
                     }
                     else{
                       console.log("updated",updatedItem);
                     }
                   })
                 }
               }
             })
             })
           }
         })
       }
     //============================== Marksheet Over+++++++++++++++++++++++++++++++++
       res.redirect("/");
     })                                                                                           //1-
//=====================================================================================================
//=======================================================================================================
module.exports = router;
