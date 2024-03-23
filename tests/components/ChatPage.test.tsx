import { render, fireEvent, screen } from "@testing-library/react";
import ChatPage from "@/components/ChatPage";
import "@testing-library/jest-dom";

describe("ChatPage Component", () => {
  test("renders chat messages correctly", () => {
    const chatMessages = [
      {
        senderName: "User 2",
        senderImage: "https://i.ibb.co/gvynGqz/clipart1363971.png",
        message: "Hello, how are you?",
        sentTime: "10:00",
      },
    ];

    render(<ChatPage chatMessageProps={chatMessages} />);

    // Ensure chat messages are rendered
    chatMessages.forEach((message) => {
      const senderNameElement = screen.getByText(message.senderName);
      const messageTextElement = screen.getByText(message.message);
      expect(senderNameElement).toBeInTheDocument();
      expect(messageTextElement).toBeInTheDocument();
    });
  });

  test("allows sending a new message", () => {
    render(<ChatPage chatMessageProps={[]} />);

    // Simulate typing a new message
    const inputElement = screen.getByPlaceholderText("Your message...");
    fireEvent.change(inputElement, { target: { value: "Test message" } });

    // Ensure message is typed correctly
    expect(inputElement).toHaveValue("Test message");

    // Simulate sending the message
    const sendButton = screen.getByText("Send message");
    fireEvent.click(sendButton);

    // Ensure message is sent and displayed
    const sentMessage = screen.getByText("Test message");
    expect(sentMessage).toBeInTheDocument();
  });
});
