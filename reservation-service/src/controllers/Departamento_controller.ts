import {Request,Response} from 'express';
import { AppDataSource } from '../database';
import { Departamento } from '../models/Departamento';


export const crear_departamento=async (req:Request,res:Response):Promise<any>=>{
    const {descripcion,precio,piso,aforo,habitaciones,imagen}=req.body;
    const departamentoRepository=AppDataSource.getRepository(Departamento);
    const departamento=new Departamento({descripcion,precio,piso,aforo,habitaciones,imagen})
    await departamentoRepository.save(departamento);

    res.status(201).send({res:true,mensaje:"Departamento creado",departamento:departamento})

}


export const actualizar_departamento=async (req:Request,res:Response):Promise<any>=>{
    const {descripcion,precio,piso,aforo,habitaciones,imagen,id}=req.body;
    const departamentoRepository=AppDataSource.getRepository(Departamento);
    const departamento=await departamentoRepository.findOne({where:{id}});
    if(!departamento){
        return res.status(403).send({res:false,mensaje:"Departamento no existe"})
    }

    departamento.descripcion=descripcion;
    departamento.precio=precio;
    departamento.piso=piso;
    departamento.aforo=aforo;
    departamento.habitaciones=habitaciones;
    departamento.imagen=imagen;

    await departamentoRepository.save(departamento);
    return res.status(200).send({res:true,mensaje:"Departamento actualizado",departamento:departamento})

    

}


export const obtener_departamentos=async (req:Request,res:Response):Promise<any>=>{
    const departamentoRepository=AppDataSource.getRepository(Departamento);
    const departamentos=await departamentoRepository.find();

    if(departamentos.length===0){
        return res.status(403).send({res:false,mensaje:"No se encontraron departamentos disponibles"})
    }

    return res.status(200).send({res:true,mensaje:"Departamentos obtenidos",departamentos:departamentos});




}

