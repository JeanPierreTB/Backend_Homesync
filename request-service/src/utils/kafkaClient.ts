import { Kafka } from "kafkajs";

export const kafka = new Kafka({
    clientId: "request-service",
    brokers: [process.env.KAFKA_BROKER || 'localhost:9092'],
});

export const producer = kafka.producer();
