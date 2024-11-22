import { Router } from "express";
import { obtener_notificaciones } from "../controllers/Notification_controller";


const router_notification=Router();


router_notification.post('/obtener-notificaciones/:id',obtener_notificaciones);



export default router_notification;