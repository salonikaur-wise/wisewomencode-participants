import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '@/app/page'
 
// Mocking useRouter
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null
    };
  }
}));


describe('Page', () => {
  it('renders the buttons', () => {
    render(<Page />)
 
    const buttons = screen.getAllByRole('button')
    buttons.forEach(button => expect(button).toBeInTheDocument())
  })
})