import { expect, describe, it } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ConversationPage } from "@/components/conversationpage";

describe("<ConversationPage />", () => {
  it("should render the ConversationPage component", () => {
    render(<ConversationPage />);
    expect(screen.getByText("Conversations")).toBeInTheDocument();
  });

  it("should add a new conversation on button click", () => {
    render(<ConversationPage />);
    fireEvent.click(screen.getByText("+ New Conversation"));
    // Add assertions here to verify that a new conversation is added
  });
});
