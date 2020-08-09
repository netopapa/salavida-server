import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('cpf', 14).notNullable().unique('users_cpf_index');
        table.string('password').notNullable();
        table.string('avatar');

        table
            .timestamp('created_at', { useTz: false })
            .defaultTo(knex.fn.now())
            .notNullable();
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('users');
}