import { Request,Response } from "express"
import { AppDataSource } from "../database"

export const obtener_notificaciones=async (req:Request,res:Response):Promise<any>=>{
    const notificationrepository=AppDataSource.getRepository(Notification);
    const notificationclass=await notificationrepository.find();
    if(notificationclass.length===0){
        return res.status(403).send({res:false,mensaje:"No hay notificaciones"})
    }

    return res.status(200).send({res:true,mensaje:"Notificaciones encontradas",notificiones:notificationclass})
    
}