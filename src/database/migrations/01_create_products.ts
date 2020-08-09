import Knex from "knex";

export async function up(knex: Knex) {
    return knex.schema.createTable('products', table => {
        table.increments('id').primary();
        table.string('name').notNullable().unique('products_name_index');
        table.float('price', 2).notNullable();
        table.timestamp('updated_at', { useTz: false });

        table
            .timestamp('created_at', { useTz: false })
            .defaultTo(knex.fn.now())
            .notNullable();
    });


}

export async function down(knex: Knex) {
    return knex.schema.dropTable('products');
}