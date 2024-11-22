import { Request,Response } from "express"
import { crearequestservice } from "../services/requestService";
import { AppDataSource } from "../database";
import { RequestC } from "../models/RequestC";

export const generar_solicitud=async(req:Request,res:Response):Promise<any>=>{
 const data=req.body;
 const result=await crearequestservice(data);
 res.status(201).send({res:true,mensaje:"Solicitud generada",solicitud:result})


}


export const obtener_solicitudes_cliente=async(req:Request,res:Response):Promise<any>=>{
    const {id}=req.body;

    const requestRepository=AppDataSource.getRepository(RequestC);
    const requestclass=await requestRepository.find({where:{id}});

    if(requestclass.length===0){
        return res.status(403).send({res:false,mensaje:"No se encontro solicitudes"})
    }

    return res.status(200).send({res:true,mensaje:"Solicitudes encontradas",requestclass:requestclass})
    
}

export const obtener_solicitudes_proveedor=async(req:Request,res:Response):Promise<any>=>{
    const requestRepository=AppDataSource.getRepository(RequestC);
    const requestclass=await requestRepository.find({where:{estado:2}});

    if(requestclass.length===0){
        return res.status(403).send({res:false,mensaje:"No se encontro solicitudes"})
    }

    return res.status(200).send({res:true,mensaje:"Solicitudes encontradas",requestclass:requestclass})
}




