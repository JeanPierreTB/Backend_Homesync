import { Router } from "express";
import { crearAdministrador, iniciar_sesion_administrador } from "../controllers/Administrador_controller";


const router_administrador=Router();


router_administrador.post('/crear-administrador',crearAdministrador);
router_administrador.post('/inicio-sesion-admin',iniciar_sesion_administrador);

export default router_administrador;