import { expect, describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { CardPage } from "@/components/cardpage";

describe("<CardPage />", () => {
  it("should render the CardPage component", () => {
    render(<CardPage />);
    expect(screen.getByText("Canada Wildfires")).toBeInTheDocument();
    expect(screen.getByText("Hurricane Fiona")).toBeInTheDocument();
    expect(screen.getByText("Mauii Widlfires")).toBeInTheDocument();
  });

  it("should render cards with correct titles and descriptions", () => {
    render(<CardPage />);
    const cards = screen.getAllByTestId("card");
    // expect(cards.length).toBe(3); // Assuming there are three cards
    expect(cards[0]).toHaveTextContent("Canada Wildfires");
    expect(cards[0]).toHaveTextContent("Disaster management expert");
    expect(cards[1]).toHaveTextContent("Hurricane Fiona");
    expect(cards[1]).toHaveTextContent("Ecological damage assesment");
    expect(cards[2]).toHaveTextContent("Mauii Widlfires");
    expect(cards[2]).toHaveTextContent("Real-time heatmaps analysis");
  });
});
