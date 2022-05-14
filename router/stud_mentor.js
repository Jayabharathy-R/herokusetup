const express=require('express');
const router=express.Router();
const stud_mentorModule=require('../module/stud_mentor');

router.post('/createMentor',stud_mentorModule.createMentor);
router.post('/createStudent',stud_mentorModule.createStudent);
 router.put('/assignStudent/:mentorId',stud_mentorModule.assignStudent);
router.put('/assignMentor/:studentId',stud_mentorModule.assignMentor);
router.get('/getStudent/:mentorId',stud_mentorModule.getStudent);


module.exports=router;