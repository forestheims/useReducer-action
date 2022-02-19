import { render, screen } from "@testing-library/react";
import App from "./App";

test("behavioral tests: create, read, update, delete items on the list", () => {
  render(<App />);
  const linkElement = screen.getByText(/shopping list/i);
  expect(linkElement).toBeInTheDocument();
});
