// // import necessary react testing library helpers here
// // import the Counter component here
import React from "react";
import { render, screen, fireEvent} from "@testing-library/react";
import Counter from "../components/Counter";

// beforeEach(() => {
//   // Render the Counter component here
// })

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const welcomeMessage = screen.getByText(/Counter/i);
  expect(welcomeMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const countValue = screen.getByTestId("count");
  expect(countValue.textContent).toBe("0");
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const incrementButton = screen.getByText("+");
  const countValue = screen.getByTestId("count");

  fireEvent.click(incrementButton);
  expect(countValue.textContent).toBe("1");

  fireEvent.click(incrementButton);
  expect(countValue.textContent).toBe("2");
});

test('clicking - decrements the count', () => {
   render(<Counter />);
  const decrementButton = screen.getByText("-");
  const countValue = screen.getByTestId("count");

  fireEvent.click(decrementButton);
  expect(countValue.textContent).toBe("-1");

  fireEvent.click(decrementButton);
  expect(countValue.textContent).toBe("-2");
});

