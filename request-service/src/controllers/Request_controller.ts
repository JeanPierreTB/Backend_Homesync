import { Request,Response } from "express"
import { crearequestservice } from "../services/requestService";
import { AppDataSource } from "../database";
import { RequestC } from "../models/RequestC";

export const generar_solicitud=async(req:Request,res:Response):Promise<any>=>{
 const data=req.body;
 const result=await crearequestservice(data);
 res.status(201).send({res:true,mensaje:"Solicitud generada",solicitud:result})


}


export const obtener_solicitudes=async (req:Request,res:Response):Promise<any>=>{
    const requestRepository=AppDataSource.getRepository(RequestC);
    const resultado=await requestRepository.find({
        where:{
            estado:2
        }
    });

    if(resultado.length===0){
        return res.status(403).send({res:false,mensaje:"No hay solicitudes pendientes"})
    }

    return res.status(200).json({res:true,mensaje:"Solicitudes pendientes",resultado:resultado})





}