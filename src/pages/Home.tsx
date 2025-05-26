import React from "react";
import { default as games } from "../data/games.json";
import { EventCard } from "../components/EventCard";
import { Event } from "../model/Event";

export const Home: React.FC = () => {
  const events = games.events.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  ) as Array<Event>;

  return (
    <div className="App flex flex-col gap-8 w-full h-vh">
      <hr />
      <div className="flex flex-col gap-16 text-2xl text-center">
        <h3>Past Events</h3>
      </div>
      {events?.map((event) => <EventCard key={event.id} event={event} />)}
      <hr />
      <div className="max-w-xl mx-auto mb-8 px-2">
        <div className="bg-white/10 rounded-lg px-4 py-3 text-center">
          <h4 className="text-main font-semibold text-base mb-1">
            What is this?
          </h4>
          <p className="text-gray-400 text-sm">
            This site is a record of our past gaming events. It showcases the
            event we watched, the winners and their prizes alongside other info.
            If you would like to join and place, join our discord server and
            participate in the next event!
          </p>
        </div>
      </div>
    </div>
  );
};
