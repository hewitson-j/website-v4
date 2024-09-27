import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";

const MockErrorComponent = () => {
  return (
    <MemoryRouter>
      <ErrorPage />
    </MemoryRouter>
  );
};

test("renders Error Page", () => {
  render(<MockErrorComponent />);

  const errorTitle = screen.getByText(/Error!/i);
  const errorMessage = screen.getByText(
    /Something went wrong. Please click the button below to be redirected home./
  );

  expect(errorTitle).toBeInTheDocument();
  expect(errorMessage).toBeInTheDocument();
});
