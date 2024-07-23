import { render, screen } from "@testing-library/react";
import Home from "../components/Home";

test ('first test', () => {
    expect(true).toBe(true)
})

test ('renders intro text', () => {
    render(<Home/>)
    const introText = screen.getByText(/I'm Jacob, nice to meet you./i)
    expect(introText).toBeInTheDocument()
})