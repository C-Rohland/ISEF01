import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { config } from 'dotenv';
import router from './router/route.js';
import connect from './database/conn.js';
import data from './database/data.js';

config();

const app = express();

// Definiere eine Liste von erlaubten Herkünften
const allowedOrigins = [
    'https://isef-01-ffntlkwgt-christines-projects-a764adc9.vercel.app',
    'isef-01.vercel.app'
];

// Konfiguriere CORS-Middleware, um dynamisch zu prüfen, ob die Anfrageherkunft erlaubt ist
app.use(cors({
    origin: function(origin, callback) {
        // Erlaube Anfragen ohne 'Origin' Header, z.B. Postman oder Server-zu-Server Anfragen
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            var msg = 'Die CORS-Richtlinie dieser Website erlaubt keinen Zugriff von der spezifizierten Herkunft.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));

app.use(morgan('tiny'));
app.use(express.json());

const port = process.env.PORT || 8080;

app.use('/api', router);

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

connect().then(() => {
    app.listen(port, '0.0.0.0', () => {
        console.log(`Server connected to http://localhost:${port}`);
    });
}).catch(error => {
    console.log("Invalid Database Connection", error);
});