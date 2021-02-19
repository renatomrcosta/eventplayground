import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { EventCard } from "./EventCard";

describe("Event Card Tests", () => {
  it("Should render nicely", () => {
    const wrapper = render(<EventCard />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should fire an event on button click", () => {
    //Given
    const clickHandler = jest.fn();
    render(<EventCard onClick={clickHandler} />);

    //Then
    fireEvent.click(screen.getByText("Sample Button"));

    //Expect
    expect(clickHandler).toBeCalled();
  });
});
