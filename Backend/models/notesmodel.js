const {Sequelize, Model, DataTypes}=require("sequelize");
const {sequelize}=require("../db/connection");

//definition of model
const Notes=sequelize.define("Notes",{
    idNote:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    titleNote:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    contentNote:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    archiveNote:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
    }
},{
    sequelize,
    modelName:"Notes",
});

module.exports=Notes;