import { expect, describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { ResearchContextPage } from "@/components/ResearchContextPage";

describe("ResearchContextPage", () => {
  it("renders with the correct title", async () => {
    render(
      <ResearchContextPage cards={[{ id: "1", title: "Test Conversation" }]} />,
    );
    const pageTitle = screen.getByText("Research Context");
    expect(pageTitle).toBeTruthy();
  });

  it("contains at least one card", async () => {
    render(
      <ResearchContextPage cards={[{ id: "1", title: "Test Conversation" }]} />,
    );
    const card = screen.getByTestId("card");
    expect(card).toBeTruthy();
  });
});
