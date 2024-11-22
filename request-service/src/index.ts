import express from 'express';
import { AppDataSource } from './database';
import dotenv from 'dotenv';
import router_request from './routers/Request_router';

dotenv.config();

const app = express();
const port = 3003;

app.use(express.json());
app.use('/request',router_request);  

AppDataSource.initialize()
  .then(() => {
    console.log('DataSource has been initialized!');
  })
  .catch((err: Error) => {  
    console.error('Error during DataSource initialization', err);
  });



app.listen(port, () => {
  console.log(`Request service is running at http://localhost:${port}`);
});
