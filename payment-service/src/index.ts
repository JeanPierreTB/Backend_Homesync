import express from 'express';
import { AppDataSource } from './database';
import { Payment} from './Payment';
import dotenv from 'dotenv';
import { Kafka } from 'kafkajs';

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


app.post('/create-payment', async (req, res) => {
    const { monto, fecha_pago, reservation_id } = req.body;
  
    const paymentRepository = AppDataSource.getRepository(Payment);
    const payment = new Payment(monto, fecha_pago, reservation_id);  
    await paymentRepository.save(payment);
  
    await producer.send({
      topic: 'payment-created',
      messages: [{ value: JSON.stringify({ monto, fecha_pago, reservation_id }) }],
    });
  
    res.status(201).send('Payment created');
});
  

app.listen(port, () => {
  console.log(`Payment service is running at http://localhost:${port}`);
});