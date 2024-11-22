import { Request,Response } from "express";
import { Request_admin } from "../models/Request_admin";
import { AppDataSource } from "../database";


export const actualizar_estado=async(req:Request,res:Response)=>{
    const {AdministradorId,SolicitudId,tipo_pago,descripcion}=req.body;

    const request_adminRepository=AppDataSource.getRepository(Request_admin);

    const request_admin_class=new Request_admin({tipo_pago,estado:false,descripcion,SolicitudId,AdministradorId})

    await request_adminRepository.save(request_admin_class);

    return res.status(200).send({res:true,mensaje:"Enviado al proveedor"});

}



