import { Router } from "express";
import { actualizarcontrasenaproveedor, crearproveedor, iniciar_sesion_proveedor } from "../controllers/Proveedor_controller";


const router_proveedor=Router();


router_proveedor.post('/crear-proveedor',crearproveedor);
router_proveedor.post('/actualizar-contra-proveedor',actualizarcontrasenaproveedor);
router_proveedor.post('/inicio-sesion-proveedor',iniciar_sesion_proveedor)


export default router_proveedor;