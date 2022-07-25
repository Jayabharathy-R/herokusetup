const mongo=require('../shared');
const {ObjectId}=require('mongodb');


module.exports.createMentor=async (req,res,next)=>{
   try{
     const response=await mongo.slectedDb.collection('Mentor').insertOne(req.body);
     res.send(response);
    }
   catch(err){
       console.log(err);
   }
}


module.exports.createStudent=async (req,res,next)=>{
   try{
     const response=await mongo.slectedDb.collection('Student').insertOne(req.body);
     res.send(response);
    }
   catch(err){
       console.log(err);
   }
}

module.exports.assignStudent=async (req,res,next)=>{
    try{
      const response=await mongo.slectedDb.collection('Mentor').updateOne(
          {_id:ObjectId(req.params.mentorId)} ,
          {$set: {...req.body}}
          );
      res.send(response);
     }
    catch(err){
        console.log(err);
    }
 }

 module.exports.assignMentor=async (req,res,next)=>{
    try{
      const response=await mongo.slectedDb.collection('Student').updateOne(
          {_id:ObjectId(req.params.studentId)} ,
          {$set: {...req.body}}
          );
      res.send(response);
     }
    catch(err){
        console.log(err);
    }
 }

 module.exports.getStudent=async (req,res,next)=>{
    try{
      const response=await mongo.slectedDb.collection('Mentor').find({_id:ObjectId(req.params.mentorId)},{_id:0,menteeId:1}).toArray()
        
      res.send(response);
     }
    catch(err){
        console.log(err);
    }
 }

 