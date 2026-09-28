const mongoose=require("mongoose");

const noteSchma= new mongoose.Schema({
    tittle:String,
    description:String
})

const noteModel=mongoose.model("note",noteSchma)
module.exports=noteModel

/*
CRUD
C-create-post
R-read-get
U-update-patch
D-delete-delete
*/