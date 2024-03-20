import { expect, describe, it } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ResearchContextPage } from "@/components/researchcontextpage";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { act } from "react-dom/test-utils";

describe("ResearchContextPage", () => {
  it("renders with the correct title", async () => {
    const mock = new MockAdapter(axios);
    mock
      .onGet("/api/researchcontexts")
      .reply(200, [{ id: "1", title: "Test Conversation" }]);

    await act(async () => {
      // Wrap state updates in act
      render(
        <ResearchContextPage
          cards={[{ id: "1", title: "Test Conversation" }]}
          apiUrl="/api/researchcontexts"
        />,
      );
    });

    const pageTitle = screen.getByText("Research Context");
    expect(pageTitle).toBeTruthy();
  });

  it("contains at least one card", async () => {
    const mock = new MockAdapter(axios);
    mock
      .onGet("/api/researchcontexts")
      .reply(200, [{ id: "1", title: "Test Conversation" }]);

    await act(async () => {
      // Wrap state updates in act
      render(
        <ResearchContextPage
          cards={[{ id: "1", title: "Test Conversation" }]}
          apiUrl="/api/researchcontexts"
        />,
      );
    });

    const card = screen.getByTestId("card"); // Assuming card id is unique
    expect(card).toBeTruthy();
  });

  it("opens modal when 'New Research Context' button is clicked", async () => {
    const mock = new MockAdapter(axios);
    mock
      .onGet("/api/researchcontexts")
      .reply(200, [{ id: "1", title: "Test Conversation" }]);
    mock
      .onPost("/api/researchcontexts")
      .reply(200, { id: "2", title: "New Test Conversation" });

    await act(async () => {
      // Wrap state updates in act
      render(
        <ResearchContextPage
          cards={[{ id: "1", title: "Test Conversation" }]}
          apiUrl="/api/researchcontexts"
        />,
      );
    });
    const addButton = screen.getByText("+ New Research Context");
    fireEvent.click(addButton);
    const modal = screen.getByText("Create New Research Context"); // Assuming modal text
    expect(modal).toBeTruthy();
  });
});
