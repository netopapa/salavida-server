import knex from 'knex';

export const db = knex({
    client: 'pg',
    connection: {
        host: "salavida_database",
        user: "postgres",
        password: "root",
        database: "salavida",
        port: 5432
    }
});