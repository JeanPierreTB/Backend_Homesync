import { Router } from "express";
import { actualizar_datos_cliente, actualizarcontrasenacliente, crearcliente, iniciar_sesion_cliente } from "../controllers/Cliente_controller";

const router_cliente = Router();

router_cliente.post('/crear-cliente', crearcliente);  
router_cliente.post('/actualizar-contra-cliente', actualizarcontrasenacliente);
router_cliente.post('/inicio-sesion-cliente', iniciar_sesion_cliente);
router_cliente.post('/actualizar-datos-cliente',actualizar_datos_cliente);


export default router_cliente;
