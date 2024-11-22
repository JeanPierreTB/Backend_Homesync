import { Kafka } from "kafkajs";

export const kafka = new Kafka({
    clientId: "user-service",
    brokers: [process.env.KAFKA_BROKER || 'localhost:9092'],
});

export const consumer = kafka.consumer({ groupId: "user-group" });
