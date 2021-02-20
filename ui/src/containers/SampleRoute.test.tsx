import React from "react";
import * as EventService from "../service/EventService";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { SampleRoute } from "./SampleRoute";
import { act } from "react-dom/test-utils";

describe("Sample Route Container Tests", () => {
  const mockData = [
    [
      {
        id: "123",
        title: "Title1",
        description: "desc1",
        images: [],
      },
      {
        id: "45",
        title: "Titl3e2",
        description: "desc2",
        images: [],
      },
    ],
  ];

  beforeEach(() => {
    const container = document.createElement("div");
    document.body.appendChild(container);
  });

  it("should load data just fine", async () => {
    const spy = jest
      .spyOn(EventService, "getEventData")
      .mockImplementation(() => {
        return new Promise(() => mockData);
      });

    expect(spy).toHaveBeenCalledTimes(0);
    render(<SampleRoute />);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
