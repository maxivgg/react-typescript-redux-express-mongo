import { Provider } from "react-redux";
import AddPost from "./AddPost";
import { store } from "../store";
import {
  fireEvent,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";

function renderWithProviders(component) {
  return render(<Provider store={store}>{component}</Provider>);
}

test("loads and displays title", () => {
  const { getByText } = renderWithProviders(<AddPost />);
  getByText("Add new post");
});

test("check title cannot be null", () => {
  renderWithProviders(<AddPost />);
  fireEvent.click(screen.getByText("Submit"));
  expect(screen.getByRole("alert")).toHaveTextContent("Please provide a title");
});

test("check button back", () => {
  renderWithProviders(<AddPost />);
  const backButton = screen.getByText('Back')
  fireEvent.click(backButton);
  waitForElementToBeRemoved(() => backButton)

});
