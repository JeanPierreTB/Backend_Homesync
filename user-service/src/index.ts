import express from 'express';
import { AppDataSource } from './database';
import dotenv from 'dotenv';
import router_cliente from './routers/Cliente_router';
import router_proveedor from './routers/Proveedor_router';
import router_administrador from './routers/Administrador_router';
import cors from 'cors';

dotenv.config();

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());


app.use("/cliente",router_cliente);
app.use('/proveedor',router_proveedor);
app.use('/administrador',router_administrador);

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
