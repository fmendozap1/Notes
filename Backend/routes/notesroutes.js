const express =require("express");
const router = express.Router();

const  notecontroller=require("../controller/notescontroller");

router.post("/create",notecontroller.createNote);
router.put("/edit/:id",notecontroller.editNote);
router.delete("/delete/:id",notecontroller.deleteNote);
router.put("/archive/:id",notecontroller.archive);
router.put("/unarchive/:id",notecontroller.unarchive);
router.get("/list",notecontroller.listNote);
router.get("/listarchive",notecontroller.listNoteArchive);
router.get("/listunarchive",notecontroller.listNoteUnarchive);

module.exports=router;