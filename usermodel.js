const mongoose =require ('mongoose');

mongoose.connect(`mongodb://127.0.0.1:27017/user`);

const userSchema=mongoose.Schema({
    name:String,
    username:String,
    email:String,
  
})

// model plural banega -- user - users
module.exports=mongoose.model("user",userSchema) //exports ek property hai
// model ke dwara ---CRUD