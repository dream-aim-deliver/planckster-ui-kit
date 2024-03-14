import { expect, describe, it } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ConversationPage } from "@/components/conversationpage";

describe("ConversationPage", () => {
  it("renders with the correct title", async () => {
    render(<ConversationPage />);
    const pageTitle = screen.getByText("Conversations");
    expect(pageTitle).toBeTruthy();
  });
  it("opens modal when 'New Conversation' button is clicked", async () => {
    render(<ConversationPage />);
    const addButton = screen.getByText("+ New Conversation");
    fireEvent.click(addButton);
    const modal = screen.getByText("Create New Conversation");
    expect(modal).toBeTruthy();
  });
});
