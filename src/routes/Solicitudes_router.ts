import express from 'express';
import Solicitudes_Controller from '../services/Solicitudes/Solicitudes_controller';

const router = express.Router();
const solicitudesController = new Solicitudes_Controller();

router.post('/', solicitudesController.crearSolicitud);
router.get('/', solicitudesController.obtenerSolicitudes);
router.get('/:id', solicitudesController.obtenerSolicitudPorId);
router.put('/:id', solicitudesController.actualizarSolicitud);
router.delete('/:id', solicitudesController.eliminarSolicitud);

export default router;