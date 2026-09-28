const mongoose=require("mongoose");

async function connectDB() {
    await mongoose.connect("mongodb+srv://yt:fZuIwaK68RYHRTl5@yt-backend.o0wlet4.mongodb.net/halley")

    console.log("DB Connected Succesfully");
    
}
module.exports=connectDB;
