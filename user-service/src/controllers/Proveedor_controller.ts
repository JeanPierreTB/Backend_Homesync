import { Request, Response } from "express";
import { AppDataSource } from '../database';
import { Proveedor } from "../models/Proveedor";
import { actualizar_contrasena, crear_usuario, iniciar_sesion } from "./User_controller";


export const crearproveedor=async (req:Request,res:Response):Promise<any>=>{
    const proveedor=await crear_usuario(Proveedor,req.body);
    res.status(201).send({"res":true,"mensaje":"Proveedor creado",proveedor:proveedor});
}


export const actualizarcontrasenaproveedor=async (req:Request,res:Response):Promise<any>=>{
    const proveedor=await actualizar_contrasena(Proveedor,req.body);
    if(proveedor===null){
       return res.status(403).send({res:false,mensaje:"Proveedor no encontrado"})
    }
    res.status(200).send({res:true,mensaje:"Contraseña actualizada con exito",proveedor:proveedor})
}


export const iniciar_sesion_proveedor=async(req:Request,res:Response):Promise<any>=>{
    const respuesta=await iniciar_sesion(Proveedor,req.body);
    if(respuesta===null){
        return res.status(403).send({res:false,mensaje:"Usuario no encontrado"})
    }

    return res.status(200).send({res:true,mensaje:"Inicio de sesion exitoso",user:respuesta})
}