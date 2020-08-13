import path from 'path';

module.exports = {
    client: 'pg',
    connection: {
        host: "salavida_database",
        user: "postgres",
        password: "root",
        database: "salavida",
        port: 5432
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    }
};