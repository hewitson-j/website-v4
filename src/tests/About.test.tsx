import { render, screen } from "@testing-library/react";
import About from "../components/About";
import { MemoryRouter } from "react-router-dom";

test("renders intro text", () => {
  render(
    <MemoryRouter>
      <About />
    </MemoryRouter>
  );
  const introText = screen.getByText(/It's really nice to meet you/i);
  expect(introText).toBeInTheDocument();
});

test("renders image", () => {
  render(
    <MemoryRouter>
      <About />
    </MemoryRouter>
  );

  const image = screen.getByAltText(/Jacob Hewitson Profile Pic/i);

  expect(image).toBeInTheDocument();
});
