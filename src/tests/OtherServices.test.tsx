import { render, screen } from "@testing-library/react";
import OtherServices from "../components/pages/OtherServices";
import { MemoryRouter } from "react-router-dom";

const MockOtherServicesComponent = () => {
  return (
    <MemoryRouter>
      <OtherServices />
    </MemoryRouter>
  );
};

test("renders OtherServices", () => {
  render(<MockOtherServicesComponent />);
  const notaryText = screen.getByText(/Notary Public - Utah, Remote/i);
  expect(notaryText).toBeInTheDocument();
});
