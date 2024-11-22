import express from 'express';
import { AppDataSource } from './database';
import dotenv from 'dotenv';
import { kafka } from './utils/kafkaClient';

dotenv.config();

const app = express();
const port = 3007;

app.use(express.json()); 


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



app.listen(port, () => {
  console.log(`Inquilin service is running at http://localhost:${port}`);
});
