import { Router } from "express";
import { pagar_reservacion } from "../controllers/Payment_controller";


const router_pago=Router();


router_pago.post('/pagar-departamento',pagar_reservacion);




export default router_pago;