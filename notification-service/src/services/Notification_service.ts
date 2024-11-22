import { consumer, producer } from "../utils/kafkaClient"; 
import { AppDataSource } from "../database"; 
import { Notification } from "../models/Notification";

export const iniciarConsumidor = async () => {  
    await consumer.connect();
    await consumer.subscribe({ topic: "Request", fromBeginning: true });

    const topicHandlers: Record<string, (message: any) => Promise<void>> = {
        "request": procesarsolicitud
    };

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            const mensaje = JSON.parse(message.value?.toString() || "{}");

            const handler = topicHandlers[topic];
            if (handler) {
                console.log(`Mensaje recibido del tema ${topic}:`, mensaje);
                await handler(mensaje);
            } else {
                console.warn(`No se encontró manejador para el tema ${topic}`);
            }
        },
    });
};

const procesarsolicitud = async (reservation: any) => {
    const { tipo, descripcion } = reservation;

    const notificactionRepository = AppDataSource.getRepository(Notification);

    const nuevanotificacion = new Notification({
        titulo: "Nueva solicitud",
        descripcion: `Se solicita servicio ${tipo} para ${descripcion}`,
        tipo: 0
    });

    await notificactionRepository.save(nuevanotificacion);
    console.log(`Se agregó una nueva notificación de tipo ${nuevanotificacion.tipo}`);

    try {
        await producer.send({
            topic: "Notificacion-solicitud",  
            messages: [
                {
                    value: JSON.stringify({
                        id: nuevanotificacion.id,
                        titulo: nuevanotificacion.titulo,
                        descripcion: nuevanotificacion.descripcion
                    }),
                },
            ],
        });
        console.log("Mensaje enviado a Kafka: Notificacion-solicitud");
    } catch (error) {
        console.error("Error al enviar mensaje a Kafka:", error);
    }
};





