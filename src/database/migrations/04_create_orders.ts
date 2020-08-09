import Knex from "knex";

export async function up(knex: Knex) {
    return knex.schema.createTable('orders', table => {
        table.increments('id').primary();
        table.float('total_price', 2).notNullable();
        table.timestamp('updated_at', { useTz: false });

        table
            .timestamp('created_at', { useTz: false })
            .defaultTo(knex.fn.now())
            .notNullable();

        table
        .integer('customer_id')
        .references('id')
        .inTable('customers');
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('orders');
}