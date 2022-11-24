import { render, screen } from "@testing-library/react";
import FormEdit from "./FormEdit";

describe("Given a FormEdit component", () => {
  describe("When it's instantiated", () => {
    test("Then it should show an input and a button with a 'Update' as text", () => {
      const placeHolderText = "Updated your task";
      const buttonText = "Update";

      render(<FormEdit />);

      const elementsInForm = [
        screen.getByPlaceholderText(placeHolderText),
        screen.getByRole("button", { name: buttonText }),
      ];

      elementsInForm.forEach((element) => {
        expect(element).toBeInTheDocument();
      });
    });
  });
});
