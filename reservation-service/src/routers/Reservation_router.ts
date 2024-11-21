import { Router } from "express";
import { crearReservacion, eliminarreservacion } from "../controllers/Reservation_controller";


const router_reservation=Router();


router_reservation.post('/crear-reservacion',crearReservacion);
router_reservation.post('/borrar-reservacion',eliminarreservacion)




export default router_reservation;