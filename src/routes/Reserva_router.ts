import express from 'express';
import Reservas_Controller from '../services/Reservas/Reservas_controller';

const router = express.Router();
const reservasController = new Reservas_Controller();

router.post('/', reservasController.crearReserva);
router.get('/', reservasController.obtenerReservas);
router.get('/:id', reservasController.obtenerReservaPorId);
router.put('/:id', reservasController.actualizarReserva);
router.delete('/:id', reservasController.eliminarReserva);

export default router;