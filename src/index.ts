import express, { Request, Response } from 'express';
import { sequelize } from './database/database';
const app = express();
const port =3001;

app.use(express.json());

const verificarconexion = async () => {
    try {
      await sequelize.authenticate();
      await sequelize.sync({force:true});
      console.log("Conexion a base de datos exitosa");
    } catch (e) {
      console.error("No se logró conectar ", e);
    }
};

app.get('/', (req: Request, res: Response) => {
  res.send('Servidor de Homesync');
});

app.listen(port, () => {
  console.log(`Servidor corriendo en  http://localhost:${port}`);
  verificarconexion();
});
