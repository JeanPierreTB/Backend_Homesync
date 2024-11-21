import { Request, Response } from "express";
import { AppDataSource } from '../database';
import { Administrador } from "../models/Administrador";

export const crearAdministrador=async(req:Request,res:Response)=>{
  const {usuario,correo,contrasena,telefono}=req.body;
  const administradorRepository=AppDataSource.getRepository(Administrador);
  const administrador=new Administrador(usuario,correo,contrasena,telefono,"");
  await administradorRepository.save(administrador);

  res.status(201).send({"res":true,"mensaje":"Administrador creaod",administrador:administrador})
}