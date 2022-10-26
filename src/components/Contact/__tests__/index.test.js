import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ContactForm from "..";

afterEach(cleanup);

describe("Contact Component", () => {
  it("renders", () => {
    render(<ContactForm></ContactForm>);
  });

  it("Contact snapshot", () => {
    const { asFragment } = render(<ContactForm></ContactForm>);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("Link visible", () => {
    it("Insert text into links", () => {
        const {getByTestId} = render(
            <ContactForm></ContactForm>
        )
        expect(getByTestId("Contact")).toHaveTextContent("Contact Me")
        expect(getByTestId("Button")).toHaveTextContent("Submit")
    })
})
