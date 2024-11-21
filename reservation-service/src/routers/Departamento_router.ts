import { Router } from "express";
import { actualizar_departamento, crear_departamento, obtener_departamentos } from "../controllers/Departamento_controller";


const router_departamento=Router();


router_departamento.post('/crear-departamento',crear_departamento);
router_departamento.post('/actualizar-departamento',actualizar_departamento);
router_departamento.get('/obtener-departamentos',obtener_departamentos);



export default router_departamento;