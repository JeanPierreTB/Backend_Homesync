import { DataSource } from 'typeorm';
import { Request } from './models/RequestC';
import dotenv from 'dotenv';
import { Request_admin } from './models/Request_admin';

dotenv.config();


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
  host: DB_HOST,  
  port: parseInt(DB_PORT), 
  username: DB_USER, 
  password: DB_PASSWORD,  
  database: DB_NAME,  
  entities: [Request,Request_admin],
  synchronize: true,  

});
