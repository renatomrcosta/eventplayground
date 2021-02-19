import React from "react";
import { EventCard } from "../components/EventCard";

export const SampleRoute: React.FC = () => {
  return <EventCard onClick={() => alert("banana")} />;
};
