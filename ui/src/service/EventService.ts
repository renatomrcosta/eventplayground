export interface EventData {
  id: string;
  title: string;
  description: string;
  images: string[];
}

export const getEventData: () => Promise<EventData[]> = () => {
  return fetch("/event")
    .then((response) => response.json())
    .then((data: EventData[]) => data);
};
