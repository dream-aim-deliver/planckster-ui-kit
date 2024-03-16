import { render, screen, fireEvent } from "@testing-library/react";
import ChatScreen from "@/components/ChatScreen";

describe("ChatScreen component", () => {
  test("initial messages state", () => {
    // Mock initial messages
    const initialMessages = [
      {
        senderName: "User 1",
        senderImage: "https://i.ibb.co/gvynGqz/clipart1363971.png",
        message: "Test message",
        sentTime: "10:00 AM",
      },
    ];

    // Mock replyProps
    const replyProps = {
      senderName: "User 2",
      senderImage: "https://example.com/user2.jpg",
      message: "Reply message",
      sentTime: "10:05 AM",
    };

    render(
      <ChatScreen initialMessages={initialMessages} replyProps={replyProps} />,
    );

    // Test if initial message is rendered
    expect(screen.getByText("Test message")).toBeInTheDocument();
  });

  test("chat input updates", () => {
    // Mock replyProps
    const replyProps = {
      senderName: "User 2",
      senderImage: "https://example.com/user2.jpg",
      message: "Reply message",
      sentTime: "10:05 AM",
    };

    render(<ChatScreen replyProps={replyProps} />);

    // Simulate typing in the chat input
    const chatInputElement = screen.getByPlaceholderText("Your message...");
    fireEvent.change(chatInputElement, { target: { value: "Test typing" } });

    // Check if the input value changes
    expect(chatInputElement).toHaveValue("Test typing");
  });
});
