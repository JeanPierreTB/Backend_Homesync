import express from 'express';
import { AppDataSource } from './database';
import { Request } from './models/Request';
import dotenv from 'dotenv';
import { Kafka } from 'kafkajs';

dotenv.config();

const app = express();
const port = 3003;

app.use(express.json());  

AppDataSource.initialize()
  .then(() => {
    console.log('DataSource has been initialized!');
  })
  .catch((err: Error) => {  
    console.error('Error during DataSource initialization', err);
  });

const kafka = new Kafka({
  clientId: 'user-service',
  brokers: [process.env.KAFKA_BROKER || 'localhost:9092'],
});
const producer = kafka.producer();

producer.connect()
  .then(() => {
    console.log('Kafka producer connected');
  })
  .catch((err: Error) => { 
    console.error('Error connecting to Kafka:', err);
  });

app.post('/create-request', async (req, res) => {
  const { tipo, descripcion, estado, reservacionId, pagoId } = req.body;

  const requestRepository = AppDataSource.getRepository(Request);
  const request = new Request(tipo, descripcion, estado, reservacionId, pagoId);
  await requestRepository.save(request);

  await producer.send({
    topic: 'request-created',
    messages: [{ value: JSON.stringify({ tipo, descripcion, estado, reservacionId, pagoId }) }],
  });

  res.status(201).send('Request created');
});

app.listen(port, () => {
  console.log(`Request service is running at http://localhost:${port}`);
});
