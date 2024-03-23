import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { config } from 'dotenv';
import router from './router/route.js';
import connect from './database/conn.js';
import data from './database/data.js'; // Verwende import anstatt require

const app = express();

/** app middlewares */
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
config(); // Lädt Umgebungsvariablen aus .env-Datei

/** appliation port */
const port = process.env.PORT || 8080;

/** routes */
app.use('/api', router); // APIs

app.get('/login', (req, res) => {
    try {
        res.json("Get Request");
    } catch (error) {
        res.json(error);
    }
});

app.get('/api/questions', (req, res) => {
  res.json(data);
});

/** start server only when we have valid connection */
connect().then(() => {
    try {
        app.listen(port, () => {
            console.log(`Server connected to http://localhost:${port}`);
        });
    } catch (error) {
        console.log("Cannot connect to the server", error);
    }
}).catch(error => {
    console.log("Invalid Database Connection", error);
});
