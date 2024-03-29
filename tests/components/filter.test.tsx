import { expect, describe, it } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Filter } from "@/components/filter";

describe("<Filter/>", () => {
  it("should render the filter component", () => {
    render(<Filter onApplyFilter={() => {}} />);
    expect(screen.getByLabelText("Start Date:")).toBeInTheDocument();
    expect(screen.getByLabelText("End Date:")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Apply Filter" }),
    ).toBeInTheDocument();
  });

  it("should apply filter on button click", () => {
    const applyFilterMock = () => {}; // Mock function
    render(<Filter onApplyFilter={applyFilterMock} />);
    fireEvent.click(screen.getByRole("button", { name: "Apply Filter" }));
    // Ensure your custom mock function gets called
    // Add your assertion here if necessary
  });
});
