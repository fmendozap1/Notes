const {stablish_conection}=require("./db/connection");
const express=require("express");
const cors=require("cors");

//import de routes
const routesnote=require("./routes/notesroutes");

console.log("Start app")

stablish_conection();

const app=express();
const port=300;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/apinotes",routesnote);

app.listen(port,()=>{
    console.log("Server start in port "+port);
})