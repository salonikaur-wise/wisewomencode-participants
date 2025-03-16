const tableName = 'pricing';

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema.createTable(tableName, function (table) {
    table.increments('id').primary();
    table.integer('transferId').notNullable();
    table.double('fee').notNullable();
    table.double('conversionRate').notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema.dropTable(tableName);
};
