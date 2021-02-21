import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { EventCard, Props } from "./EventCard";

describe("Event Card Tests", () => {
  const defaultProps: Props = {
    title: "Some title",
    description: "Some description",
  };
  it("Should render nicely", () => {
    const wrapper = render(<EventCard {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should fire an event on button click", () => {
    //Given
    const clickHandler = jest.fn();
    render(<EventCard {...defaultProps} onClick={clickHandler} />);

    //Then
    fireEvent.click(screen.getByText("Im interested!"));

    //Expect
    expect(clickHandler).toBeCalled();
  });
});
