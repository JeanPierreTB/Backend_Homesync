import { Request,Response } from "express";
import { AppDataSource } from "../database";
import { RequestC } from "../models/RequestC";

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