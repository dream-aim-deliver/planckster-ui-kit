import { expect, describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { LoginPage } from "@/components/loginpage";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { act } from "react-dom/test-utils";

describe("LoginPage", () => {
  it("renders with the correct title", async () => {
    // Your mock setup for axios requests
    const mock = new MockAdapter(axios);
    mock
      .onGet("/api/login")
      .reply(200, [{ id: "1", title: "Test Conversation" }]);

    // Render the LoginPage component
    await act(async () => {
      render(<LoginPage />);
    });

    // Assertion for the page title
    const pageTitle = screen.getByTestId("login-title");
    expect(pageTitle).toBeTruthy();
  });
});
