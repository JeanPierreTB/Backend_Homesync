import { Router } from "express";
import { crearAdministrador } from "../controllers/Administrador_controller";


const router_administrador=Router();


router_administrador.post('/crear-administrador',crearAdministrador);

export default router_administrador;