import express from 'express';
import { AppDataSource } from './database';
import dotenv from 'dotenv';
import router_notification from './routers/Notificaction_router';



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





app.listen(port, () => {
  console.log(`User service is running at http://localhost:${port}`);
});
