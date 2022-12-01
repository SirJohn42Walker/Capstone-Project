import {render, screen} from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders an octopus", () => {
    render(<Home />);

    const paragraph = screen.getByRole("paragraph", {
      name: /🐙/i,
    });

    expect(paragraph).toBeInTheDocument();
  });
});
