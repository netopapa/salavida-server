import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('guests', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('cpf', 14).unique('guests_cpf_index');
        table.string('phone').unique('guests_phone_index');
        table.timestamp('updated_at', { useTz: false });
        
        table
            .timestamp('created_at', { useTz: false })
            .defaultTo(knex.fn.now())
            .notNullable();
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('guests');
}