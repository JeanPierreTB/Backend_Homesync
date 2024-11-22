import { Kafka } from "kafkajs";

export const kafka = new Kafka({
    clientId: "notification-service",
    brokers: [process.env.KAFKA_BROKER || 'localhost:9092'],
});

export const consumer = kafka.consumer({ groupId: "notification-group" });
export const producer = kafka.producer(); 
