import cors from 'cors';
import express from 'express';
import { DB_HOST, NODE_ENV } from '../config';
import routes from './routes';

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

console.log(`Setting env to: ${NODE_ENV}`);
console.log(`Check db host: ${DB_HOST}`);