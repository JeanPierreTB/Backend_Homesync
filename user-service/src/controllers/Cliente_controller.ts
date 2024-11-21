import { Request, Response } from "express";
import { Cliente } from "../models/Cliente";
import { actualizar_contrasena, iniciar_sesion } from "./User_controller";
import { crear_usuario } from "./User_controller";

export const crearcliente = async (req: Request, res: Response): Promise<any> => {
    
    const cliente=await crear_usuario(Cliente,req.body);
    res.status(201).send({ res: true, mensaje: "Usuario creado", cliente: cliente });
    
};

export const actualizarcontrasenacliente = async (req: Request, res: Response): Promise<any> => {
   
        const cliente=await actualizar_contrasena(Cliente,req.body);
        if(cliente===null){
            return res.status(404).send({res:false,mensaje:"Cliente no encontrado"})
        }
        res.status(200).send({ res: true, mensaje: 'Contraseña actualizada con éxito', cliente: cliente });
    
};

export const iniciar_sesion_cliente = async (req: Request, res: Response): Promise<any> => {
 
        const respuesta = await iniciar_sesion(Cliente, req.body);
        if (respuesta === null) {
            return res.status(403).send({ res: false, mensaje: "Usuario no encontrado" });
        }
        return res.status(200).send({ res: true, mensaje: "Inicio de sesión exitoso", user: respuesta });
    
};
