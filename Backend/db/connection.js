const {Sequelize}=require("sequelize");

const sequelize= new Sequelize("dbnotes","root","root",{
    host:"localhost",
    dialect:"mysql",
    port:"8889"
})

async function stablish_conection(){
    try{
        await sequelize.authenticate();
        console.log("Connection Success");
    }
    catch(error){
        console.error(error);
    }
}

module.exports={sequelize,stablish_conection}