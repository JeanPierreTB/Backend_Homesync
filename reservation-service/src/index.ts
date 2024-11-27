import express from "express";
import { AppDataSource } from "./database";
import dotenv from "dotenv";
import router_departamento from "./routers/Departamento_router";
import router_reservation from "./routers/Reservation_router";
import cors from 'cors';



dotenv.config();

const app = express();
const port = 3004;

app.use(express.json());
app.use(cors());

app.use("/departamento",router_departamento);
app.use("/reservacion",router_reservation);


AppDataSource.initialize()
    .then(() => {
        console.log("DataSource has been initialized!");
    })
    .catch((err: Error) => {
        console.error("Error during DataSource initialization", err);
    });

app.listen(port, () => {
    console.log(`Reservation service is running at http://localhost:${port}`);
});