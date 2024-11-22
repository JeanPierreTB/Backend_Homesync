import express from 'express';
import { AppDataSource } from './database';
import dotenv from 'dotenv';
import router_notification from './routers/Notificaction_router';
import { kafka } from './utils/kafkaClient';
import { iniciarConsumidor } from './services/Notification_service';

dotenv.config();

const app = express();
const port = 3005;

app.use(express.json()); 

app.use('/notificaciones',router_notification);

AppDataSource.initialize()
  .then(() => {
    console.log('DataSource has been initialized!');
  })
  .catch((err: Error) => {  
    console.error('Error during DataSource initialization', err);
  });

kafka.producer().connect()
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
  console.log(`User service is running at http://localhost:${port}`);
});
