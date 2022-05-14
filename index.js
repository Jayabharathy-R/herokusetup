const express=require('express');
const mongo=require('./shared');
const student_mentor=require('./router/stud_mentor');


const app=express();

app.use(express.json());

mongo.connect();

app.use('/',(req,res,next)=>{
next();
})

app.use('/student_mentor',student_mentor);

app.listen('3000');
