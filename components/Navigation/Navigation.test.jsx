import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      pathname: "/",
    };
  },
}));

describe("Navigation Component", () => {
  it("renders the Spotlight and Art Pieces navigation links", () => {
    render(<Navigation />);

    const spotlightLink = screen.getByRole("link", { name: /Spotlight/i });
    const piecesLink = screen.getByRole("link", { name: /Art Pieces/i });
    const favoritesLink = screen.getByRole("link", { name: /Favorites/i });

    expect(spotlightLink).toBeInTheDocument();
    expect(piecesLink).toBeInTheDocument();
    expect(favoritesLink).toBeInTheDocument();
  });
});
