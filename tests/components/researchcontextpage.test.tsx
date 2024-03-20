import { expect, describe, it, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ResearchContextPage } from "@/components/researchcontextpage";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { act } from "react-dom/test-utils";

const onClickCallback: () => boolean = () => {
  return true;
};

const mocks = {
  onClickCallback,
};

describe("ResearchContextPage", () => {
  it("renders with the correct title", async () => {
    const mock = new MockAdapter(axios);
    mock
      .onGet("/api/researchcontexts")
      .reply(200, [{ id: "1", title: "Test Conversation" }]);

    await act(async () => {
      render(
        <ResearchContextPage
          cards={[{ id: "1", title: "Test Conversation" }]}
          apiUrl="/api/researchcontexts"
          onAddContextClick={() => {}}
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
      render(
        <ResearchContextPage
          cards={[{ id: "1", title: "Test Conversation" }]}
          apiUrl="/api/researchcontexts"
          onAddContextClick={() => {}}
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
      render(
        <ResearchContextPage
          cards={[{ id: "1", title: "Test Conversation" }]}
          apiUrl="/api/researchcontexts"
          onAddContextClick={() => {}}
        />,
      );
    });
    const addButton = screen.getByText("+ New Research Context");
    fireEvent.click(addButton);

    const modal = screen.getByText("Create New Research Context");
    expect(modal).toBeTruthy();
  });

  it("ensures onClick is called", async () => {
    const onAddContextClick = vi.spyOn(mocks, "onClickCallback");

    await act(async () => {
      render(
        <ResearchContextPage
          cards={[{ id: "1", title: "Test Conversation" }]}
          apiUrl="/api/researchcontexts"
          /* eslint-disable @typescript-eslint/no-explicit-any */
          onAddContextClick={onAddContextClick as any}
        />,
      );
    });
    const addButton = screen.getByText("+ New Research Context");
    fireEvent.click(addButton);
    expect(onAddContextClick).toHaveBeenCalledTimes(1);
  });
});
