import Knex from "knex";

export async function up(knex: Knex) {
    return knex.schema.createTable('order_products', table => {
        table.increments('id').primary();

        table
            .integer('order_id')
            .references('id')
            .inTable('orders');

        table
            .integer('product_id')
            .references('id')
            .inTable('products');
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('order_products');
}