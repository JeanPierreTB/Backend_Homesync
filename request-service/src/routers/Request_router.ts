import { Router } from "express";
import { generar_solicitud, obtener_solicitudes_cliente, obtener_solicitudes_proveedor } from "../controllers/Request_controller";


const router_request=Router();


router_request.post('/crear-soliciud',generar_solicitud);
router_request.post('/obtener-solicitud-cliente',obtener_solicitudes_cliente);
router_request.post('/obtener-solicitud-admin',obtener_solicitudes_proveedor);



export default router_request;