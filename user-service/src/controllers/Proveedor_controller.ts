import { Request, Response } from "express";
import { AppDataSource } from '../database';
import { Proveedor } from "../models/Proveedor";


export const crearproveedor=async (req:Request,res:Response)=>{
    const {usuario,correo,contrasena,telefono}=req.body;
    const proveedorRepository=AppDataSource.getRepository(Proveedor);
    const proveedor=new Proveedor(usuario,correo,contrasena,telefono,"",null);
    await proveedorRepository.save(proveedor);
  
    res.status(201).send({"res":true,"mensaje":"Proveedor creado",proveedor:proveedor});
}