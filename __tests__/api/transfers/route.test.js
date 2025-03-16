/**
 * @jest-environment node
 */
import { GET } from "@/app/api/transfers/[transfer]/route";
import knex from '@/db/knex'


describe('GET /api/transfers', () => {

  beforeAll(async () => {
    await knex.migrate.latest();
    await knex.seed.run();
  })

  afterAll(async () => {
    await knex.destroy();
  })

  it('should return single transfer information', async () => {
    const req = {}
    const reqParams = {params: {transfer: 1}};
    const res = await GET(req, reqParams);
    
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body).toEqual(
      // we do not check "updated_at" and "created_at" because these fields always change
      expect.objectContaining({
      "id": 1,
      "transferId": 1,
      "paymentMode": "Bank Transfer",
      "paymentReference": "forex",
      "sourceAmount": 12.23,
      "sourceCurrency": "SGD",
      "targetAmount": 9.04,
      "targetCurrency": "USD",
      "fee": 0.01486,
      "conversionRate": 0.74
    }));
  });

  it('should return 404 if transfer does not exist', async () => {
    const req = {}
    const reqParams = {params: {transfer: 999}};
    const res = await GET(req, reqParams);
    
    expect(res.status).toBe(404);
  });
});