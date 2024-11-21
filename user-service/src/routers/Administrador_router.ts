import { Router } from "express";
import { actualizar_datos_administrador, crearAdministrador, iniciar_sesion_administrador } from "../controllers/Administrador_controller";


const router_administrador=Router();


router_administrador.post('/crear-administrador',crearAdministrador);
router_administrador.post('/inicio-sesion-admin',iniciar_sesion_administrador);
router_administrador.post('/actualizar-datos-admin',actualizar_datos_administrador);


export default router_administrador;