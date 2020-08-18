import path from 'path';
import { DB_HOST, DB_USER, DB_PASS, DB_NAME, DB_PORT } from './config';

module.exports = {
    client: 'pg',
    connection: {
        host: DB_HOST,
        user: DB_USER,
        password: DB_PASS,
        database: DB_NAME,
        port: DB_PORT
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    }
};
