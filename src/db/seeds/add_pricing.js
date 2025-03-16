const tableName = 'pricing';

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex(tableName).del()
  await knex(tableName).insert([
    {id: 1, transferId: 1, fee: 0.01486, conversionRate: 0.74},
    {id: 2, transferId: 2, fee: 0.09999, conversionRate: 0.75},
    {id: 3, transferId: 3, fee: 0.04555, conversionRate: 0.73},
    {id: 4, transferId: 4, fee: 0.05214, conversionRate: 0.72},
    {id: 5, transferId: 5, fee: 0.03028, conversionRate: 0.76},
    {id: 6, transferId: 6, fee: 0.01736, conversionRate: 0.78},
    {id: 7, transferId: 7, fee: 0.09251, conversionRate: 0.71},
    {id: 8, transferId: 8, fee: 0.03695, conversionRate: 0.79},
    {id: 9, transferId: 9, fee: 0.02317, conversionRate: 0.77},
    {id: 10, transferId: 10, fee: 0.06982, conversionRate: 0.70},
    {id: 11, transferId: 11, fee: 0.01463, conversionRate: 0.82},
    {id: 12, transferId: 12, fee: 0.08571, conversionRate: 0.68},
    {id: 13, transferId: 13, fee: 0.04189, conversionRate: 0.80},
    {id: 14, transferId: 14, fee: 0.02850, conversionRate: 0.75},
    {id: 15, transferId: 15, fee: 0.07629, conversionRate: 0.69},
    {id: 16, transferId: 16, fee: 0.03472, conversionRate: 0.78},
    {id: 17, transferId: 17, fee: 0.01944, conversionRate: 0.81},
    {id: 18, transferId: 18, fee: 0.06183, conversionRate: 0.73},
    {id: 19, transferId: 19, fee: 0.04726, conversionRate: 0.77},
    {id: 20, transferId: 20, fee: 0.05387, conversionRate: 0.71},
    {id: 21, transferId: 21, fee: 0.01095, conversionRate: 0.85},
    {id: 22, transferId: 22, fee: 0.03962, conversionRate: 0.79},
    {id: 23, transferId: 23, fee: 0.05721, conversionRate: 0.72},
    {id: 24, transferId: 24, fee: 0.06543, conversionRate: 0.70},
    {id: 25, transferId: 25, fee: 0.03179, conversionRate: 0.78},
    {id: 26, transferId: 26, fee: 0.04328, conversionRate: 0.76},
    {id: 27, transferId: 27, fee: 0.01567, conversionRate: 0.82},
    {id: 28, transferId: 28, fee: 0.07281, conversionRate: 0.68},
    {id: 29, transferId: 29, fee: 0.05892, conversionRate: 0.72},
    {id: 30, transferId: 30, fee: 0.03675, conversionRate: 0.79},
    {id: 31, transferId: 31, fee: 0.02614, conversionRate: 0.77},
    {id: 32, transferId: 32, fee: 0.04827, conversionRate: 0.75},
    {id: 33, transferId: 33, fee: 0.02189, conversionRate: 0.81},
    {id: 34, transferId: 34, fee: 0.03597, conversionRate: 0.76},
    {id: 35, transferId: 35, fee: 0.06254, conversionRate: 0.73},
    {id: 36, transferId: 36, fee: 0.03728, conversionRate: 0.80}
  ]);
};
