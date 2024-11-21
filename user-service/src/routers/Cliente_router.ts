import { Router } from "express";
import { crearcliente } from "../controllers/Cliente_controller";


const router_cliente=Router();


router_cliente.post('/crear-cliente',crearcliente);

export default router_cliente;