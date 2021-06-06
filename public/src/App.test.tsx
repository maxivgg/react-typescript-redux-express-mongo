import { Provider } from "react-redux";
import App from "./App";
import { store } from "./store";
import { render } from "@testing-library/react";

function renderWithProviders(component) {
  return render(<Provider store={store}>{component}</Provider>);
}

test("init app", () => {
  const { getByRole } = renderWithProviders(<App />);
  getByRole("app");
});
