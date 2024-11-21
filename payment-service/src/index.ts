import express from 'express';
import { AppDataSource } from './database';
import dotenv from 'dotenv';
import { iniciarConsumidor } from './services/Payment_service';  
import { kafka } from './utils/kafkaClient'; 

dotenv.config();

const app = express();
const port = 3002;

app.use(express.json());  

AppDataSource.initialize()
  .then(() => {
    console.log('DataSource has been initialized!');
  })
  .catch((err: Error) => {  
    console.error('Error during DataSource initialization', err);
  });

const producer = kafka.producer();

producer.connect()
  .then(() => {
    console.log('Kafka producer connected');
  })
  .catch((err: Error) => {  
    console.error('Error connecting to Kafka:', err);
  });

iniciarConsumidor().catch((err: any) => {
  console.error('Error al iniciar el consumidor Kafka:', err);
});

app.listen(port, () => {
  console.log(`Payment service is running at http://localhost:${port}`);
});
