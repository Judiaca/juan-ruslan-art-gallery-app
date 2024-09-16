import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navigation from "./Navigation";

// Mock useRouter to provide a mock router object
jest.mock("next/router", () => ({
  useRouter() {
    return {
      pathname: "/",
      push: jest.fn(),
    };
  },
}));

describe("Navigation Component", () => {
  it("renders the Spotlight and Pieces navigation links", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Navigation />
      </MemoryRouter>
    );

    const spotlightLink = screen.getByRole("link", { name: /Spotlight/i });
    const piecesLink = screen.getByRole("link", { name: /Pieces/i });

    expect(spotlightLink).toBeInTheDocument();
    expect(piecesLink).toBeInTheDocument();
  });
});
