import { DataSource } from 'typeorm';
import { User } from './User';
import dotenv from 'dotenv';

dotenv.config(); // Cargar las variables de entorno desde el archivo .env

// Validar que las variables de entorno están definidas
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

if (!DB_HOST || !DB_PORT || !DB_USER || !DB_PASSWORD || !DB_NAME) {
  throw new Error("Faltan variables de entorno en el archivo .env. Asegúrate de definir: DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME.");
}

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: DB_HOST,  // Usar la variable de entorno
  port: parseInt(DB_PORT), // Convertir el puerto a número
  username: DB_USER,  // Usar la variable de entorno
  password: DB_PASSWORD,  // Usar la variable de entorno
  database: DB_NAME,  // Usar la variable de entorno
  entities: [User],
});
