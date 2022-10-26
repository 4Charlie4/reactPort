import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Modal from "..";

const currentPhoto = {
  name: "Park bench",
  category: "landscape",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
  index: 1,
};

const mockToggleModal = jest.fn();

afterEach(cleanup);

describe("Modal Component", () => {
  it("renders", () => {
    render(<Modal currentPhoto={currentPhoto} onClose={mockToggleModal} />);
  });

  it("Modal Snapshot", () => {
    const { asFragment } = render(
      <Modal currentPhoto={currentPhoto} onClose={mockToggleModal} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("Click Event", () => {
  it("calls onClose Click handler", () => {
    const { getByText } = render(
      <Modal currentPhoto={currentPhoto} onClose={mockToggleModal} />
    );
    fireEvent.click(getByText("Close This Modal"));
    expect(mockToggleModal).toHaveBeenCalledTimes(1);
  });
});
