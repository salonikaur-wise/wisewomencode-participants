/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
    await knex.schema.createTable('rates', function (table) {
        table.increments('id').primary();
        table.double('rate').notNullable();
        table.string('sourceCurrency').notNullable();
        table.string('targetCurrency').notNullable();
        table.timestamp('date').defaultTo(knex.fn.now())
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
    await knex.schema.dropTable('rates');
};
