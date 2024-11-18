import express, { Request, Response } from 'express';
import { AppDataSource } from './database';
import dotenv from 'dotenv';
import { Kafka } from 'kafkajs';
import { Departamento } from './models/Departamento';

dotenv.config();

const app = express();
const port = 3004;

app.use(express.json());

AppDataSource.initialize()
  .then(() => {
    console.log('DataSource has been initialized!');
  })
  .catch((err: Error) => {
    console.error('Error during DataSource initialization', err);
  });

const kafka = new Kafka({
  clientId: 'reservation-service',
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

app.post('/create-department', async (req: any, res:any) => {
  const { imagen, precio, descripcion, piso, aforo, habitaciones } = req.body;

  if (!imagen || !precio || !descripcion || !piso || !aforo || !habitaciones) {
    return res.status(400).send('Faltan campos necesarios');
  }

  const departmentRepository = AppDataSource.getRepository(Departamento);
  const departamento = new Departamento(imagen, precio, descripcion, piso, aforo, habitaciones);
  await departmentRepository.save(departamento);

  await producer.send({
    topic: 'department-created',
    messages: [{ value: JSON.stringify({ imagen, precio, descripcion, piso, aforo, habitaciones }) }],
  });

  res.status(201).send('Department created');
});

app.listen(port, () => {
  console.log(`Reservation service is running at http://localhost:${port}`);
});
