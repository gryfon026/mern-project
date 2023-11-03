import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';

import postRoutes from './routes/posts.js';

const app = express();

app.use('/posts', postRoutes);

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

const username = process.env.DB_USER || '';
const password = process.env.DB_PASS || '';
const cluster = process.env.DB_CLUSTER || '';
const PORT = process.env.PORT || 5000;

const uri = `mongodb+srv://${username}:${password}@${cluster}/?retryWrites=true&w=majority`;

const far = mongoose
    .connect(uri)
    .then(() =>
        app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
    )
    .catch((error) => console.log(error.message));
