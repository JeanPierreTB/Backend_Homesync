import { Sequelize } from "sequelize-typescript"; 
import Usuario from "../models/Usuario";
import Reservas from "../models/Reservas";
import Solicitudes from "../models/Solicitudes";

export const sequelize = new Sequelize("Homesync", "postgres", "postgre", {
    host: "localhost",
    dialect: "postgres",
    models:[Usuario,Reservas,Solicitudes]
});