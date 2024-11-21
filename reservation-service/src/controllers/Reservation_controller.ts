import { Request, Response } from "express";
import { crearReservacionService } from "../services/reservationService";
import { AppDataSource } from "../database";
import { Reservation } from "../models/Reservation";

export const crearReservacion = async (req: Request, res: Response): Promise<void> => {
    try {
        const data = req.body;
        const result = await crearReservacionService(data);
        res.status(201).send({ res: true, mensaje: "Reservación creada", reservation: result });
    } catch (error: any) {
        console.error(error);
        res.status(500).send({ res: false, mensaje: error.message });
    }
};


export const eliminarreservacion = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.body; // Obtienes el id desde el cuerpo de la petición

    try {
        const reservacionRepository = AppDataSource.getRepository(Reservation);

        // Eliminamos la reservación con el id proporcionado
        const result = await reservacionRepository.delete({ id });

        if (result.affected === 0) {
            res.status(404).json({ message: "Reservación no encontrada." });
        } else {
            res.status(200).json({ message: "Reservación eliminada con éxito." });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al eliminar la reservación." });
    }
};

