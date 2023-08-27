import "./events.css";
import { EventCard } from "./eventCard";

export function Events() {
  const events = [
    {
      id: 1,
      location: "Distler Performance Hall",
      date: "2023-12-17",
      state: "Medfort, MA",
      link: "https://www.google.com",
      background: "card_demo_1.png",
    },
    {
      id: 2,
      location: "Distler Performance Hall",
      date: "2023-12-17",
      state: "Medfort, MA",
      link: "https://www.google.com",
      background: "card_demo_2.png",
    },
    {
      id: 3,
      location: "Distler Performance Hall",
      date: "2023-12-17",
      state: "Medfort, MA",
      link: "https://www.google.com",
      background: "card_demo_3.png",
    },
    {
      id: 4,
      location: "Distler Performance Hall",
      date: "2023-12-17",
      state: "Medfort, MA",
      link: "https://www.google.com",
      background: "card_demo_4.png",
    },
  ];

  return (
    <>
      <div className="bg-wrap">
        <img className="bg-image" src="/events_bg.png" alt="" />
        {events.map((event) => (
          <EventCard event={event} key={event.id} />
        ))}
      </div>
    </>
  );
}
