import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ChatScreen from "@/components/Chatscreen";

describe("ChatScreen component", () => {
  test("initial messages state", () => {
    render(<ChatScreen />);

    // Test if initial state of messages is an empty array
    expect(screen.queryByText("Test message")).not.toBeInTheDocument();
  });

  test("chat input updates", () => {
    render(<ChatScreen />);

    // Simulate typing in the chat input
    const chatInputElement = screen.getByPlaceholderText("Your message...");
    fireEvent.change(chatInputElement, { target: { value: "Test typing" } });

    // Check if the input value changes
    expect(chatInputElement).toHaveValue("Test typing");
  });
});
