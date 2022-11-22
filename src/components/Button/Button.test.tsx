import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it's instantiated", () => {
    test("Then it should show a button with 'Add task' as text", () => {
      const buttonText = "Add task";
      render(<Button text={buttonText} type="submit" />);

      const button = screen.getByRole("button", { name: buttonText });

      expect(button).toBeInTheDocument();
    });
  });
});
