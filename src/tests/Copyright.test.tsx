import { render, screen } from "@testing-library/react";
import Copyright from "../components/Copyright";
import { MemoryRouter } from "react-router-dom";

const MockCopyrightComponent = () => {
  return (
    <MemoryRouter>
      <Copyright margin="auto" />
    </MemoryRouter>
  );
};

test("renders copyright text", () => {
  render(<MockCopyrightComponent />);
  const copyrightText = screen.getByText(
    /Website Copyright © Jacob Hewitson 2023/i
  );
  expect(copyrightText).toBeInTheDocument();
});

test("renders links", () => {
  render(<MockCopyrightComponent />);
  const termsText = screen.getByText(/Terms and Conditions/i);
  const privacyText = screen.getByText(/Privacy Policy/i);

  expect(termsText).toBeInTheDocument();
  expect(privacyText).toBeInTheDocument();
});
