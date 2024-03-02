import { expect, describe, it } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { SearchBar } from "@/components/searchbar";

describe("<SearchBar/>", () => {
  it("should render the search bar component", () => {
    render(<SearchBar onSearch={() => {}} />);
    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Search" })).toBeInTheDocument();
  });

  it("should perform search on button click", () => {
    const searchMock = () => {};
    render(<SearchBar onSearch={searchMock} />);
    fireEvent.click(screen.getByRole("button", { name: "Search" }));
    // After running the function
  });
});
