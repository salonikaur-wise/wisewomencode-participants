const tableName = 'rates';

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex(tableName).del()
  await knex(tableName).insert([
    { id: 1, rate: 0.75, sourceCurrency: "SGD", targetCurrency: "USD", date: knex.fn.now() },
    { id: 2, rate: 1.10, sourceCurrency: "EUR", targetCurrency: "USD", date: knex.fn.now() },
    { id: 3, rate: 0.90, sourceCurrency: "USD", targetCurrency: "EUR", date: knex.fn.now() },
    { id: 4, rate: 0.68, sourceCurrency: "GBP", targetCurrency: "USD", date: knex.fn.now() },
    { id: 5, rate: 1.47, sourceCurrency: "USD", targetCurrency: "CAD", date: knex.fn.now() },
    { id: 6, rate: 1.60, sourceCurrency: "AUD", targetCurrency: "USD", date: knex.fn.now() }
  ]);
};
