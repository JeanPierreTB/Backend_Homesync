import Reservas from "../../models/Reservas";
import { Request, Response } from 'express';

class Reservas_Controller {
    async crearReserva(req: Request, res: Response) {
        try {
            const { des, precio, foto, usuarioId } = req.body;
            const nuevaReserva = await Reservas.create({ des, precio, foto, usuarioId });
            res.status(201).json({ message: 'Reserva creada exitosamente', reserva: nuevaReserva });
        } catch (error) {
            res.status(500).json({ message: 'Error al crear la reserva', error });
        }
    }

    async obtenerReservas(req: Request, res: Response) {
        try {
            const reservas = await Reservas.findAll();
            res.json(reservas);
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener las reservas', error });
        }
    }

    async obtenerReservaPorId(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const reserva = await Reservas.findByPk(id);
            if (reserva) {
                res.json(reserva);
            } else {
                res.status(404).json({ message: 'Reserva no encontrada' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener la reserva', error });
        }
    }

    async actualizarReserva(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { des, precio, foto } = req.body;
            const reserva = await Reservas.findByPk(id);
            if (reserva) {
                await reserva.update({ des, precio, foto });
                res.json({ message: 'Reserva actualizada exitosamente', reserva });
            } else {
                res.status(404).json({ message: 'Reserva no encontrada' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error al actualizar la reserva', error });
        }
    }

    async eliminarReserva(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const reserva = await Reservas.findByPk(id);
            if (reserva) {
                await reserva.destroy();
                res.json({ message: 'Reserva eliminada exitosamente' });
            } else {
                res.status(404).json({ message: 'Reserva no encontrada' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error al eliminar la reserva', error });
        }
    }
}

export default Reservas_Controller;