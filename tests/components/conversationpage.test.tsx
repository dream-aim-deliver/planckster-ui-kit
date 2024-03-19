import { expect, describe, it } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ConversationPage } from "@/components/ConversationPage";

describe("ConversationPage", () => {
  it("renders with the correct title", async () => {
    render(
      <ConversationPage convs={[{ id: "1", title: "Test Conversation" }]} />,
    );
    const pageTitle = screen.getByText("Conversations");
    expect(pageTitle).toBeTruthy();
  });

  it("opens modal when 'New Conversation' button is clicked", async () => {
    render(
      <ConversationPage convs={[{ id: "1", title: "Test Conversation" }]} />,
    );
    const addButton = screen.getByText("+ New Conversation");
    fireEvent.click(addButton);
    const modal = screen.getByText("Create New Conversation");
    expect(modal).toBeTruthy();
  });
});
