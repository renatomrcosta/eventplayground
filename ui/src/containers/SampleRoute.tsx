import React, { useEffect, useState } from "react";
import { EventCard } from "../components/EventCard";
import * as EventService from "../service/EventService";
import { EventData } from "../service/EventService";
export const SampleRoute: React.FC = () => {
  const [events, setEvents] = useState<EventData[]>([]);

  useEffect(() => {
    EventService.getEventData().then((data) => setEvents(data));
  }, [events]);

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
