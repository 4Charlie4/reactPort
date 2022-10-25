import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PhotoList from "..";

const currentCategory = {
  name: "portraits",
  description: "Portraits of people in my life",
};

afterEach(cleanup);

describe("PhotoList is rendering", () => {
  it("renders", () => {
    render(<PhotoList category={currentCategory.name} />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(
      <PhotoList category={currentCategory.name} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
