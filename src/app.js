const  express = require("express")
const noteModel=require("./models/note.model")

const app = express()
app.use(express.json())

module.exports=app

app.post("/notes",async(req,res)=>{
    data=req.body
    await noteModel.create({
        tittle:data.tittle,
        description:data.description
    })
    res.status(201).json({
        message:"note created successfully"
    })
})

app.get("/notes",async(req,res)=>{

    const notes = await noteModel.find() //find returns array[]

    res.status(200).json({
        message:"notes fetched successfully",
        data:notes
})
})
 
app.delete("/notes/:id",async(req,res)=>{

    const id = req.params.id

    await noteModel.findOneAndDelete({_id:id})
    res.status(200).json({
        message:"note deleted successfully"
    })
})

app.patch("/notes/:id",async(req,res)=>{
   const id = req.params.id

   const description = req.body.description

   await noteModel.findOneAndUpdate({_id:id},{description:description})

   res.status(200).json({
    message:"note updated successfully"
   })
})

/*
POST /notes=>CREATE A NOTES 
GET /notes=>READ ALL NOTES
PATCH /notes/:id=>UPDATE A NOTE
DELETE /notes/:id=>DELETE A NOTE
*/