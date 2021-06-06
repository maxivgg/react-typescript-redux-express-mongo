import { Provider } from "react-redux";
import Posts from "./Posts";
import { store } from "../store";
import { render } from "@testing-library/react";

function renderWithProviders(component) {
  return render(<Provider store={store}>{component}</Provider>);
}

test("title", () => {
  const { getByText } = renderWithProviders(<Posts />);
  getByText("Posts");
});

test("table and columns", () => {
  const { getByText } = renderWithProviders(<Posts />);
  getByText("Actions");
});
