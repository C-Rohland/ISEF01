import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { config } from 'dotenv';
import router from './router/route.js';
import connect from './database/conn.js';
import data from './database/data.js';

config();

const app = express();
const port = process.env.PORT || 8080;

const corsOptions = {
    origin: 'https://isef-01.vercel.app', // Stelle sicher, dass dies die richtige URL deines Frontends ist
    methods: ['GET', 'POST'], // Erlaubte Methoden
    optionsSuccessStatus: 200 // Einige Legacy-Browser (IE11, verschiedene SmartTVs) schlagen sonst fehl
};

app.use(cors(corsOptions));

app.use(morgan('tiny'));
app.use(express.json());


app.use('/api', router);

app.post('/login', (req, res) => {
    res.json({ message: "Login-Endpoint erreicht" });
});
app.options('/login', cors(corsOptions));


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



