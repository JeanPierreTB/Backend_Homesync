import { Router } from "express";
import { generar_solicitud } from "../controllers/Request_controller";


const router_request=Router();


router_request.post('/crear-soliciud',generar_solicitud);



export default router_request;