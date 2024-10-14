import { Sequelize } from "sequelize-typescript";

export const sequelize=new Sequelize("Homesync","postgres","postgre",{
    host:"localhost",
    dialect:"postgres",
})
