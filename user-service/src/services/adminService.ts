import { consumer } from "../utils/kafkaClient"



export const iniciarconsumidro= async ()=>{
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
}


const procesarsolicitud =async( request:any)=>{
    const {requestid}=request;
    
}