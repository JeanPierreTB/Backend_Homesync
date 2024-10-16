import Solicitudes from "../../models/Solicitudes";
import { Request, Response } from 'express';

class Solicitudes_Controller {
    async crearSolicitud(req: Request, res: Response) {
        try {
            const { fecha, descripcion, tipo, usuarioId } = req.body;
            const nuevaSolicitud = await Solicitudes.create({ fecha, descripcion, tipo, usuarioId });
            res.status(201).json({ message: 'Solicitud creada exitosamente', solicitud: nuevaSolicitud });
        } catch (error) {
            res.status(500).json({ message: 'Error al crear la solicitud', error });
        }
    }

    async obtenerSolicitudes(req: Request, res: Response) {
        try {
            const solicitudes = await Solicitudes.findAll();
            res.json(solicitudes);
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener las solicitudes', error });
        }
    }

    async obtenerSolicitudPorId(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const solicitud = await Solicitudes.findByPk(id);
            if (solicitud) {
                res.json(solicitud);
            } else {
                res.status(404).json({ message: 'Solicitud no encontrada' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener la solicitud', error });
        }
    }

    async actualizarSolicitud(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { fecha, descripcion, tipo } = req.body;
            const solicitud = await Solicitudes.findByPk(id);
            if (solicitud) {
                await solicitud.update({ fecha, descripcion, tipo });
                res.json({ message: 'Solicitud actualizada exitosamente', solicitud });
            } else {
                res.status(404).json({ message: 'Solicitud no encontrada' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error al actualizar la solicitud', error });
        }
    }

    async eliminarSolicitud(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const solicitud = await Solicitudes.findByPk(id);
            if (solicitud) {
                await solicitud.destroy();
                res.json({ message: 'Solicitud eliminada exitosamente' });
            } else {
                res.status(404).json({ message: 'Solicitud no encontrada' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error al eliminar la solicitud', error });
        }
    }
}

export default Solicitudes_Controller;