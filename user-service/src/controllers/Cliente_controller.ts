import { Request, Response } from "express";
import { AppDataSource } from '../database';
import { Cliente } from "../models/Cliente";


export const crearcliente=async (req:Request,res:Response)=>{
    const {usuario,correo,contrasena,telefono}=req.body;
    const userRepository=AppDataSource.getRepository(Cliente);
    const user=new Cliente(usuario,correo,contrasena,telefono,"");
    await userRepository.save(user);
  
    res.status(201).send({"res":true,"mensaje":"Usuario creado",user:user});
}