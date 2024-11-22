import { consumer, producer } from "../utils/kafkaClient"; 
import { AppDataSource } from "../database"; 
import { Notification } from "../models/Notification";
import { Notification_user } from "../models/Notificacion_user";

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
    const { tipo, descripcion,id } = reservation;

    const notificactionRepository = AppDataSource.getRepository(Notification);
    const notification_userRepository=AppDataSource.getRepository(Notification_user)

    const nuevanotificacion = new Notification({
        titulo: "Nueva solicitud",
        descripcion: `Se solicita servicio ${tipo} para ${descripcion}`,
        tipo: 0
    });

    

    const data=await notificactionRepository.save(nuevanotificacion);
    const nuevanotficacion_user=new Notification_user({
        id_user:id,
        id_notificacion:data.id
    })

    await notification_userRepository.save(nuevanotficacion_user);
    console.log(`Se agregó una nueva notificación de tipo ${nuevanotificacion.tipo}`);

    
};





