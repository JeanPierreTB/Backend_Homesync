import { Request, Response } from "express";
import { AppDataSource } from '../database';
import { Administrador } from "../models/Administrador";
import { actualizar_datos, crear_usuario, iniciar_sesion } from "./User_controller";

export const crearAdministrador=async(req:Request,res:Response):Promise<any>=>{
  const administrador=await crear_usuario(Administrador,req.body);
  res.status(201).send({"res":true,"mensaje":"Administrador creaod",administrador:administrador})
}

export const iniciar_sesion_administrador=async(req:Request,res:Response):Promise<any>=>{
  const respuesta=await iniciar_sesion(Administrador,req.body);
  if(respuesta===null){
      return res.status(403).send({res:false,mensaje:"Usuario no encontrado"})
  }

  return res.status(200).send({res:true,mensaje:"Inicio de sesion exitoso",user:respuesta})
}


export const actualizar_datos_administrador=async(req:Request,res:Response):Promise<any>=>{
  const respuesta=await actualizar_datos(Administrador,req.body);
  if(respuesta===null){
      return res.status(403).send({res:false,mensaje:"Usuario no encontrado"})

  }

  return res.status(200).send({res:true,mensaje:"Datos actualizados",user:respuesta})


}