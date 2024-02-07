import { describe, expect, it  } from "vitest";
import ErrorMessage from "./ErrorMessage";
import { render, screen } from "@testing-library/react";

describe("Errormessage", () => {
  it("it should render default error message", () => {
    const testId = "ErrorMessageId";
    const message = "Something went wrong";
    render(<ErrorMessage  />);
    expect(screen.getByTestId(testId)).toHaveTextContent(message)//.toBeInTheDocument();
    //screen.debug();
   // screen.getByText(message);
  });

  it("it should render passed error message", () => {
    const testId = "ErrorMessageId";
    const message = "Something went wrong again    ";
    render(<ErrorMessage message={message} />);
    expect(screen.getByTestId(testId)).toHaveTextContent(/Something went wrong again/i)//.toBeInTheDocument();
    //screen.debug();
   // screen.getByText(message);
  });
});