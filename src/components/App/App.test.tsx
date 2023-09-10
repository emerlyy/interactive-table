import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import App from "./App"

test("Renders the main page", () => {
  render(<App />)
  const table = screen.getByTestId('table');
  expect(table).toBeInTheDocument();
})