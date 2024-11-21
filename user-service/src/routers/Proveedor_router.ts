import { Router } from "express";
import { crearproveedor } from "../controllers/Proveedor_controller";


const router_proveedor=Router();


router_proveedor.post('/crear-proveedor',crearproveedor);


export default router_proveedor;