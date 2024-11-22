import { Request,Response } from "express";
import { AppDataSource } from "../database";
import { Payment } from "../models/Payment";


export const pagar_reservacion=async (req:Request,res:Response):Promise<any>=>{
    const {reservation_id,fecha_pago}=req.body;

    const pagoRepository=AppDataSource.getRepository(Payment);
    const pagoclass:any=pagoRepository.findOne({where:reservation_id});
    if(!pagoclass){
        return res.status(403).send({"Res":false,"Mensaje":"Reservacion no encontrada"});

    }

    pagoclass.fecha_pago=fecha_pago;
    pagoclass.pagado=true;

    return res.status(200).send({"Res":false,"Mensaje":"Departamento pagado",pagoclass:pagoclass});

}


