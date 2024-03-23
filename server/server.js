import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { config } from 'dotenv';
import router from './router/route.js';
import connect from './database/conn.js';
import data from './database/data.js';

config();

const app = express();


// Konfiguriere CORS-Middleware, um dynamisch zu prüfen, ob die Anfrageherkunft erlaubt ist
app.use(cors({
    origin: ['https://isef-01.vercel.app', 'https://isef-01-ffntlkwgt-christines-projects-a764adc9.vercel.app', 'https://isef-01-jwu8q9u1k-christines-projects-a764adc9.vercel.app'],
    methods: ["GET", "POST"], // Füge weitere Methoden hinzu, die dein Frontend verwendet
    credentials: true // Falls deine Anfragen Credentials wie Cookies benötigen
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