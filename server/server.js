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
const cors = require('cors');
const express = require('express');

app.use(cors({
    origin: 'isef-01.vercel.app',
    methods: ['GET', 'POST'], 
}));

app.use(morgan('tiny'));
app.use(express.json());


app.use('/api', router);

app.post('/login', (req, res) => {
    res.json({ message: "Login-Endpoint erreicht" });
});


app.get('/api/questions', (req, res) => {
  res.json(data);
});

connect().then(() => {
    app.listen(port, () => {
        console.log(`Server connected to http://localhost:${port}`);
    });
}).catch(error => {
    console.log("Invalid Database Connection", error);
});



