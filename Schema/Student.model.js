var mongoose = require("mongoose");

var studentSchema = new mongoose.Schema({
  _id            :Number,
  cur_sem        :Number,
  basic:{
    course       :String,
    name         :String,
    age          :Number,
    gender       :String,
    category     :String,
    mode_of_adm  :String,
    mob_no       :Number,
    email        :String,
    add_t        :String,
    add_p        :String,
    twf          :String,
    branch       :String,
    dob          :String

  },
  s_1:{
    Term_fee     :Number,
    Exam_fee_Reg :Number,
    semTotBklog  :Number,
    spi          :Number,
    cpi          :Number,
    Tsubject     :Number,
    status       :String,
    result:{
      sub1:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub2:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub3:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub4:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub5:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub6:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub7:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub8:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub9:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub10:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
    }


  },
  s_2:{
    Term_fee     :Number,
    Exam_fee_Reg :Number,
    Exam_fee_Rem :Number,
    semTotBklog  :Number,
    spi          :Number,
    cpi          :Number,
    Tsubject     :Number,
    status       :String,
    result:{
      sub1:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub2:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub3:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub4:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub5:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub6:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub7:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub8:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub9:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub10:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
    }
  },
  D_2:{
    Exam_fee_Rem :Number
  },
  s_3:{
    Term_fee     :Number,
    Exam_fee_Reg :Number,
    Exam_fee_Rem :Number,
    semTotBklog  :Number,
    spi          :Number,
    cpi          :Number,
    Tsubject     :Number,
    status       :String,
    result:{
      sub1:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub2:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub3:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub4:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub5:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub6:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub7:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub8:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub9:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub10:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
    }
  },
  D_3:{
    Exam_fee_Rem :Number
  },
  s_4:{
    Term_fee     :Number,
    Exam_fee_Reg :Number,
    Exam_fee_Rem :Number,
    semTotBklog  :Number,
    spi          :Number,
    cpi          :Number,
    Tsubject     :Number,
    status       :String,
    result:{
      sub1:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub2:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub3:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub4:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub5:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub6:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub7:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub8:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub9:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub10:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
    }
  },
  D_4:{
    Exam_fee_Rem :Number
  },
  s_5:{
    Term_fee     :Number,
    Exam_fee_Reg :Number,
    Exam_fee_Rem :Number,
    semTotBklog  :Number,
    spi          :Number,
    cpi          :Number,
    Tsubject     :Number,
    status       :String,
    result:{
      sub1:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub2:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub3:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub4:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub5:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub6:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub7:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub8:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub9:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub10:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
    }
  },
  D_5:{
    Exam_fee_Rem :Number
  },
  s_6:{
    Term_fee     :Number,
    Exam_fee_Reg :Number,
    Exam_fee_Rem :Number,
    semTotBklog  :Number,
    spi          :Number,
    cpi          :Number,
    Tsubject     :Number,
    status       :String,
    result:{
      sub1:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub2:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub3:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub4:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub5:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub6:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub7:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub8:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub9:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub10:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
    }
  },
  D_6:{
    Exam_fee_Rem :Number
  },
  s_7:{
    Term_fee     :Number,
    Exam_fee_Reg :Number,
    Exam_fee_Rem :Number,
    semTotBklog  :Number,
    spi          :Number,
    cpi          :Number,
    Tsubject     :Number,
    status       :String,
    result:{
      sub1:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub2:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub3:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub4:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub5:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub6:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub7:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub8:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub9:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub10:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
    }
  },
  D_7:{
    Exam_fee_Rem :Number
  },
  s_8:{
    Term_fee     :Number,
    Exam_fee_Reg :Number,
    Exam_fee_Rem :Number,
    semTotBklog  :Number,
    spi          :Number,
    cpi          :Number,
    Tsubject     :Number,
    status       :String,
    result:{
      sub1:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub2:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub3:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub4:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub5:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub6:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub7:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub8:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub9:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
      sub10:{
        code   :Number, name   :String,    these  :String,  thpa   : String,
        thtot  :String, prese  :String,    prpa   :String,
        prtot  :String, grade  :String,    absen  :String,  backlog: Number },
    }
  },
  D_8:{
    Exam_fee_Rem :Number
  },

});

module.exports = mongoose.model('Students', studentSchema);
