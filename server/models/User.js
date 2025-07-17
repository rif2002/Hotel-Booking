import mongoose from "mongoose";

const userSchema=mongoose.Schema({          //You're defining the structure of a "User" in your database 
    _id:{type:String, required:true},
    username:{type:String, required:true},
    email:{type:String, required:true},
    image:{type:String, required:true},
    role:{type:String, enum:["user","hotelOwner"],default:"user"},
    recentSearchedCities:[{type:String,required:true}]
},{timestamps:true}) //timestamp : Automatically add createdAt and updatedAt fields to each 

const User = mongoose.model("User", userSchema);

export default User;