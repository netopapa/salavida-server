import Knex from "knex";

export async function up(knex: Knex) {
    return knex.schema.createTable('customers', table => {
        table.increments('id').primary();
        table.string('name').notNullable().unique('customers_name_index');
        table.string('phone', 11);
        table.timestamp('updated_at', { useTz: false });

        table
            .timestamp('created_at', { useTz: false })
            .defaultTo(knex.fn.now())
            .notNullable();

        table
        .integer('company_id')
        .references('id')
        .inTable('companies');
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('customers');
}