import { render, screen } from "@testing-library/react";
import Home from "../components/Home";
import { MemoryRouter } from "react-router-dom";

test("renders intro text", () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
  const introText = screen.getByText(/I'm Jacob, nice to meet you./i);
  expect(introText).toBeInTheDocument();
});

test("renders profile pic", () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  const image = screen.getByAltText(/Jacob's Profile Picture/i);

  expect(image).toBeInTheDocument();
});
