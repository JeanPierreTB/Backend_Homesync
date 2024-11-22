import express from 'express';
import { AppDataSource } from './database';
import dotenv from 'dotenv';



dotenv.config();

const app = express();
const port = 3005;

app.use(express.json()); 



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
