import { AppDataSource } from "../database";
import { Reservation } from "../models/Reservation";
import { Departamento } from "../models/Departamento";
import { producer } from "../utils/kafkaClient";

export const crearReservacionService = async (data: any) => {
    const { fecha_inicio, fecha_fin, clienteId, departamentoId, monto } = data;

    const departamentoRepository = AppDataSource.getRepository(Departamento);
    const departamento = await departamentoRepository.findOne({ where: { id: departamentoId } });

    if (!departamento) {
        throw new Error("Departamento no existe");
    }

    const reservacionRepository = AppDataSource.getRepository(Reservation);
    const reservation = new Reservation({ fecha_inicio, fecha_fin, clienteId, departamentoId });

    await reservacionRepository.save(reservation);

    await producer.connect();
    await producer.send({
        topic: "reservations",
        messages: [
            {
                value: JSON.stringify({
                    reservationId: reservation.id,
                    monto: monto,
                }),
            },
        ],
    });
    await producer.disconnect();

    return reservation;
};
