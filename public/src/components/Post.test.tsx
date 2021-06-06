import { Provider } from "react-redux";
import Post from "./Post";
import { store } from "../store";
import { render } from "@testing-library/react";

function renderWithProviders(component) {
  return render(<Provider store={store}>{component}</Provider>);
}

const post =  {
  _id: "asdasd",
  userId: 1,
  id: "asdasd",
  title: "asdasDaaaaa",
  body: "sdfsdafsadasdfasdf",
}

test("table and columns", () => {
  const { getByText } = renderWithProviders(<Post post={post}/>);
  getByText("delete");
});
