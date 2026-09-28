const mongoose=require("mongoose");

async function connectDB() {
    await mongoose.connect("connection string with database name")

    console.log("DB Connected Succesfully");
    
}
module.exports=connectDB;
