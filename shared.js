const {MongoClient}=require('mongodb');

module.exports={
    slectedDb:{},
    async connect(){
        try{
           const client=await MongoClient.connect('mongodb+srv://Jayabharathy:b39vipuYk66LlMO5@cluster0.tzkph.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
         this.slectedDb=client.db("Mentor-Student");
         console.log(this.slectedDb);
        }
        catch(err){
            console.log(err)
        }
    }
}