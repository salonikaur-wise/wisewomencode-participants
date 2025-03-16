import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import TransferPage from '@/app/transfers/[transfer]/page'
 


// Mocking useParams
jest.mock("next/navigation", () => ({
  useParams() {
    return {
      transfer: "1"
    };
  },
  useRouter() {
    return {
      prefetch: () => null
    };
  }
}));


const MOCK_TRANSFER = {
  "id": "1",
  "transferId": "1",
  "paymentMode": "Credit Card",
  "paymentReference": "forex",
  "sourceAmount": 45.25,
  "sourceCurrency": "AUD",
  "targetCurrency": "USD",
  "targetAmount": 38.40,
  "fee": 0.03695,
  "conversionRate": 0.79
};

describe('Transfers Page', () => {
  let originalFetch;
  beforeEach(() => {
    originalFetch = global.fetch;
  });

  afterEach(() => {
    global.fetch = originalFetch;
  });

  it('test that it can display one transfer', async () => {

    // setup
    // manual mocking here
    // proper way is to use something like msw or json-server
    const mockedFetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(MOCK_TRANSFER)
    }));
    global.fetch = mockedFetch;

    // test
    render(<TransferPage />);
 
    // assert
    expect(await screen.findByRole('heading', { level: 1 })).toHaveTextContent('Transfer 1');
    const headings = await screen.findAllByRole('heading', { level: 5 });
    expect(headings.length).toBe(5);
    // hint: which one is the fee?
    expect(headings[0]).toHaveTextContent("45.25 AUD")
    expect(headings[1]).toHaveTextContent("0.03695 AUD")
    expect(headings[2]).toHaveTextContent("45.21305 AUD")
    expect(headings[3]).toHaveTextContent("0.79")
    expect(headings[4]).toHaveTextContent("Credit Card")
  })
})