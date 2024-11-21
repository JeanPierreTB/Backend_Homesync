import { consumer } from "../utils/kafkaClient"; 
import { AppDataSource } from "../database"; 
import { Payment } from "../models/Payment";

export const iniciarConsumidor = async () => {  
    await consumer.connect();
    await consumer.subscribe({ topic: "reservations", fromBeginning: true });

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            const mensaje = JSON.parse(message.value?.toString() || "{}");
            console.log("Mensaje recibido de la reservación:", mensaje);

            await procesarPago(mensaje); 
        },
    });
};

const procesarPago = async (reservation: any) => {
    const { reservationId, monto} = reservation;

    const paymentRepository = AppDataSource.getRepository(Payment);

    const nuevoPago = new Payment({
        monto: monto,
        pagado: false, 
        fecha_pago: null, 
        reservation_id: reservationId,
    });

    await paymentRepository.save(nuevoPago);
    console.log(`Pago pendiente registrado para la reservación ${reservationId}`);

};


