import React, { useCallback } from "react";
import { EventCard } from "../components/EventCard";

interface EventData {
  id: string;
  title: string;
  description: string;
  images: string[];
}

export const SampleRoute: React.FC = () => {
  const getData = useCallback(() => {
    return [
      {
        id: "123",
        title: "Title1",
        description: "desc1",
        images: [],
      },
      {
        id: "45",
        title: "Title2",
        description: "desc2",
        images: [],
      },
    ];
  }, []);
  // Given a collection of items, render the event cards
  const events: EventData[] = getData();
  return (
    <>
      {events.map((event) => {
        return (
          <EventCard
            key={event.id}
            title={event.title}
            description={event.description}
            onClick={() => alert(event.id)}
          />
        );
      })}
    </>
  );
};
