import { expect, describe, it } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Sort } from "@/components/sort";

describe("<Sort/>", () => {
  it("should render the sort component", () => {
    render(<Sort onSort={() => {}} />);
    expect(screen.getByLabelText("Sort By:")).toBeInTheDocument();
    expect(screen.getByLabelText("Sort Order:")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Apply Sort" })).toBeInTheDocument();
  });

  it("should apply sort on button click", () => {
    const applySortMock = () => {}; 
    render(<Sort onSort={applySortMock} />);
    fireEvent.click(screen.getByRole("button", { name: "Apply Sort" }));
    // After running the function
  });
});
