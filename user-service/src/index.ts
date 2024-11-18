import express from 'express';
import { AppDataSource } from './database';
import dotenv from 'dotenv';
import { Kafka } from 'kafkajs';
import { Cliente } from './models/Cliente';

dotenv.config();

const app = express();
const port = 3001;

app.use(express.json());  // Permite recibir cuerpos JSON en las peticiones

// Configuración de la base de datos con TypeORM
AppDataSource.initialize()
  .then(() => {
    console.log('DataSource has been initialized!');
  })
  .catch((err: Error) => {  // Aquí especificamos que 'err' es de tipo 'Error'
    console.error('Error during DataSource initialization', err);
  });

// Configuración de Kafka
const kafka = new Kafka({
  clientId: 'user-service',
  brokers: [process.env.KAFKA_BROKER || 'localhost:9092'],
});
const producer = kafka.producer();

producer.connect()
  .then(() => {
    console.log('Kafka producer connected');
  })
  .catch((err: Error) => {  // Aquí también especificamos el tipo de 'err'
    console.error('Error connecting to Kafka:', err);
  });

// Ruta para crear un usuario
app.post('/create-user', async (req, res) => {
  const { usuario, correo,contrasena,telefono,foto} = req.body;

  // Crear el usuario en la base de datos
  const userRepository = AppDataSource.getRepository(Cliente);
  const user = new Cliente(0, usuario,correo,contrasena,telefono,foto); // Inicializamos 'id' a 0 para un nuevo usuario
  await userRepository.save(user);

  // Enviar mensaje a Kafka sobre el nuevo usuario
  await producer.send({
    topic: 'user-created',
    messages: [{ value: JSON.stringify({ usuario,correo,contrasena,telefono,foto }) }],
  });

  res.status(201).send('User created');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`User service is running at http://localhost:${port}`);
});
