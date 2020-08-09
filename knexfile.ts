import path from 'path';

module.exports = {
    client: 'pg',
    connection: {
        host: "localhost",
        user: "postgres",
        password: "root",
        database: "salavida",
        port: 5439
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    }
};