import { Request,Response } from "express"
import { AppDataSource } from "../database"
import { Notification_user } from "../models/Notificacion_user";
import { In } from "typeorm";
import { Notification } from "../models/Notification";

export const obtener_notificaciones=async (req:Request,res:Response):Promise<any>=>{
    const {id}=req.params;
    
    const notificationrepository = AppDataSource.getRepository(Notification);
    const notification_userRepository = AppDataSource.getRepository(Notification_user);

    const notification_userclass = await notification_userRepository.find({ where: { id_user: id } });

    if (notification_userclass.length === 0) {
        return res.status(403).send({ res: false, mensaje: "No hay notificaciones" });
    }

    const notificationIds = notification_userclass.map(nu => nu.id_notificacion);

    const notificationclass = await notificationrepository.find({
        where: {
            id: In(notificationIds),
        },
    });

    if (notificationclass.length === 0) {
        return res.status(403).send({ res: false, mensaje: "No hay notificaciones disponibles" });
    }

    return res.status(200).send({ res: true, notifications: notificationclass });
    
}