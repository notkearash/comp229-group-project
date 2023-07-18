import morgan from 'morgan';
import mongoose, { Error } from 'mongoose';
import express, { Response } from 'express';
import { router as surveysRouter } from './routes/surveys.routes';
require('dotenv').config();

const app = express();

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', (err: Error): void => console.log(err));
db.once('open', (): void => console.log('connected to db'));

app.use(express.json());
app.use(morgan('tiny'));

app.use('/api', surveysRouter);
app.use((res: Response): Response => res.status(404).json({ message: "404 not found" }));

app.listen(process.env.PORT, (): void => console.log(`listening on ${process.env.PORT}`));
