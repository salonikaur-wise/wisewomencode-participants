import '@testing-library/jest-dom'
import {render, screen } from '@testing-library/react'
import CalculatorPage from '@/app/calculator/page'
import userEvent from '@testing-library/user-event'

// Mocking useRouter
jest.mock("next/navigation", () => ({
  useRouter() { // used in ResponsiveAppBar
    return {
      prefetch: () => null
    };
  }
}));


const MOCK_CALCULATOR = {
  "sourceAmount": "100",
  "sourceCurrency": "SGD",
  "targetCurrency": "USD",
  "fee": 1,
  "rate": 0.75,
  "targetAmount": "74.25"
}

describe('Transfers Page', () => {
  let originalFetch;
  beforeEach(() => {
    originalFetch = global.fetch;
  });

  afterEach(() => {
    global.fetch = originalFetch;
  });

  it('test that it can convert SGD to USD', async () => {

    const user = userEvent.setup();
    // setup
    // manual mocking here
    // proper way is to use something like msw or json-server
    const mockedFetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(MOCK_CALCULATOR)
    }));
    global.fetch = mockedFetch;

    // test
    render(<CalculatorPage />);
 
    // assert
    const input = screen.getByRole('spinbutton', {name: "You send"});
    await user.type(input, "100");
    expect(input.value).toBe("100");

    const result = screen.getByRole('spinbutton', {name: "Recipient gets"});
    expect(result.value).toBe("74.25");

  })
})