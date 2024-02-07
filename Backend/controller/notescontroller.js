const Notes=require("../models/notesmodel");
const validator=require("validator");

//create note
async function createNote(req,res){
    const {title,content,archive}= req.body;
    const addnote= new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let p1   =!validator.isEmpty(title);
            let p2   =!validator.isEmpty(content);
            let p3   =!validator.isEmpty(archive);
            
            if(p1 && p2 && p3){
                resolve("correct note");
            }
            else{
                reject("incorrect note");
            }
        },200);
    });

    try{
        const msg=await addnote;
        const newnote = await Notes.create({titleNote:title,contentNote: content,archiveNote: archive,});
        console.log("Nota creada con exito",newnote);
        return res.status(200).json({
            Message:msg,
            Status:"Success",
            Note:newnote
        });
    }
    catch(error)
    {
        console.error(error.message);
        return res.status(400).json({
            Status:"failed",
            Error:error,
            Details:error.message
        });
    }
}

//edit note
async function editNote(req,res){
    const register=req.params.id;
    const {title,content,archive}=req.body;
    
    try{
        const data = await Notes.findByPk(register);
        if(!data){
            return res.status(400).json({
                Status:"failed",
                Error:error,
                Details:error.message
            });
        }

        await Notes.update({
            titleNote: title || data.titleNote,
            contentNote: content || data.contentNote,
            archiveNote: archive || data.archiveNote
        },
        {
            where:{
                idNote:register,
            }
        });

        return res.status(200).json({
            Status:"Success",
        });

    }
    catch(error){
        console.error(error.message);
        return res.status(400).json({
            Status:"failed",
            Error:error,
            Details:error.message
        });
    }

}

//delete note
async function deleteNote(req,res){
    const register=req.params.id;

    const findnote= new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let p1   =!validator.isEmpty(register);
            const data= Notes.findByPk(register); 
            if(p1 && data.size!=0){
                resolve("valid id");
            }
            else{
                reject("invalid id");
            }
        },200);
    });

    try{
        await findnote;
        const deletenote= await Notes.destroy({
            where:{
                idNote:register,
            }
        });
        return res.status(200).json({
            Status:"Success",
            Note:deletenote
        });
    }
    catch(error)
    {
        console.error(error.message);
        return res.status(400).json({
            Status:"failed",
            Error:error,
            Details:error.message
        });
    }
}

//list note
async function listNote(req,res){
    try{
        const data= await Notes.findAll(); 
        return res.status(200).json({
            Status:"Success",
            Note:data
        });
    }
    catch(error)
    {
        console.error(error.message);
        return res.status(400).json({
            Status:"failed",
            Error:error,
            Details:error.message
        });
    }
}

//archive note
async function archive(req,res){
    const register=req.params.id;
    
    try{
        const data = await Notes.findByPk(register);
        if(!data){
            return res.status(400).json({
                Status:"failed",
                Error:error,
                Details:error.message
            });
        }

        await Notes.update({
            archiveNote: true
        },
        {
            where:{
                idNote:register,
            }
        });

        return res.status(200).json({
            Status:"Success",
        });

    }
    catch(error){
        console.error(error.message);
        return res.status(400).json({
            Status:"failed",
            Error:error,
            Details:error.message
        });
    }
}

//unarchive note
async function unarchive(req,res){
    const register=req.params.id;
    
    try{
        const data = await Notes.findByPk(register);
        if(!data){
            return res.status(400).json({
                Status:"failed",
                Error:error,
                Details:error.message
            });
        }

        await Notes.update({
            archiveNote: false
        },
        {
            where:{
                idNote:register,
            }
        });

        return res.status(200).json({
            Status:"Success",
        });

    }
    catch(error){
        console.error(error.message);
        return res.status(400).json({
            Status:"failed",
            Error:error,
            Details:error.message
        });
    }
}

//list note Archived
async function listNoteArchive(req,res){
    try{
        const data= await Notes.findAll({
            where:{
                archiveNote:1,
            }
        }); 
        return res.status(200).json({
            Status:"Success",
            Note:data
        });
    }
    catch(error)
    {
        console.error(error.message);
        return res.status(400).json({
            Status:"failed",
            Error:error,
            Details:error.message
        });
    }
}

//list note UnArchived
async function listNoteUnarchive(req,res){
    try{
        const data= await Notes.findAll({
            where:{
                archiveNote:0,
            }
        }); 
        return res.status(200).json({
            Status:"Success",
            Note:data
        });
    }
    catch(error)
    {
        console.error(error.message);
        return res.status(400).json({
            Status:"failed",
            Error:error,
            Details:error.message
        });
    }
}

module.exports={
    createNote,
    editNote,
    deleteNote,
    listNote,
    archive,
    unarchive,
    listNoteArchive,
    listNoteUnarchive
};