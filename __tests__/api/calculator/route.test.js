/**
 * @jest-environment node
 */
import { POST } from "@/app/api/calculator/route"
import knex from '@/db/knex'


describe('POST /api/calculator', () => {

  beforeAll(async () => {
    await knex.migrate.latest();
    await knex.seed.run();
  })

  afterAll(async () => {
    await knex.destroy();
  })

  it('should return correct calculator information', async () => {
    const sourceAmount = 100;
    const sourceCurrency = "SGD";
    const targetCurrency = "USD";
    const req = {
      json: () => new Promise((resolve, reject) => resolve({
        sourceAmount, sourceCurrency, targetCurrency 
      }))
    };

    // kinda hacky way to bypass the date check in calculator route for rates
    await new Promise(res => setTimeout(res, 1000));

    const res = await POST(req);
    
    // usually POST returns 201 if it creates a resource,
    // but does this API create any resource?
    expect(res.status).toBe(200);
    
    const body = await res.json();
    expect(body).toEqual({
        "sourceAmount": 100,
        "sourceCurrency": "SGD",
        "targetCurrency": "USD",
        "fee": 1,
        "rate": 0.75,
        "targetAmount": "74.25"
      });
  });
});