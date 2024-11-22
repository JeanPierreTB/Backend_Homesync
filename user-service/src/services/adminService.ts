import { consumer} from "../utils/kafkaClient"; 
import { AppDataSource } from "../database"; 
import { Administrador } from "../models/Administrador";


export const iniciarConsumidor = async () => {  
    await consumer.connect();
    await consumer.subscribe({ topic: "Notificacion-solicitud", fromBeginning: true });

    const topicHandlers: Record<string, (message: any) => Promise<void>> = {
        "Notificacion": procesarsolicitud
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
    const {id,tipo,descripcion } = reservation;

    const adminRepository = AppDataSource.getRepository(Administrador);

   

   
};





