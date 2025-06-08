import React from "react";
import { Event } from "../model/Event";
import * as Assets from "../assets";

const standingToText = (standing: number): string => {
  switch (standing) {
    case 1:
      return "1st Place";
    case 2:
      return "2nd Place";
    case 3:
      return "3rd Place";
    default:
      return `${standing}th Place`;
  }
};

export const EventCard: React.FC<{ event: Event }> = ({ event }) => {
  const logoSrc =
    Assets[event.logo.replace(/\.[a-z]+$/i, "") as keyof typeof Assets] ||
    event.logo;

  return (
    <div className="flex items-center justify-center min-h-screen bg-black p-4">  
      <div className="bg-gradient-to-br from-main to-sub rounded-2xl animated-gradient-border shadow-2xl w-full max-w-xl mx-auto p-1">
        <div className="bg-black rounded-2xl p-8 flex flex-col items-center min-h-[600px]">
          <img
            src={logoSrc}
            alt={event.name + " logo"}
            className="h-32 object-contain rounded-xl shadow mb-6"
          />
          <h2 className="text-3xl font-bold text-main mb-2 text-center hover:underline">
            {event.name}
          </h2>
          <p className="text-gray-400 text-center mb-4">{event.description}</p>
          <div className="flex flex-col gap-1 w-full mb-4">
            <span>
              <span className="font-semibold text-sub">Host: </span>
              <a
                href={event.host}
                target="_blank"
                rel="noopener noreferrer"
                className="text-main underline break-all"
              >
                {event.host}
              </a>
            </span>
            <span>
              <span className="font-semibold text-sub">Date: </span>
              <span className="text-main">{event.date}</span>
            </span>
          </div>
          <div className="w-full mb-4">
            <span className="font-semibold text-sub block mb-1">
              Participants:
            </span>
            {event.participants?.length ? (<ul className="space-y-2">
              {event.participants
                .sort((a, b) => a.standing - b.standing)
                .map((p) => (
                  <li
                    key={p.id}
                    className="grid grid-cols-3 items-center bg-white/5 rounded px-3 py-2 hover:filter hover:bg-white/10 transition"
                  >
                    <span className="font-medium text-main col-span-1">
                      {p.name}
                    </span>
                    <span
                      className={`text-xs col-span-1 text-center ${
                        p.standing === 1
                          ? "text-yellow-300/80"
                          : p.standing === 2
                            ? "text-gray-400/80"
                            : p.standing === 3
                              ? "text-orange-400/80"
                              : "text-gray-500"
                      }`}
                    >
                      {standingToText(p.standing)}
                    </span>
                    {p.prize ? (
                      <a
                        href={p.prize.steam}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-sub underline text-right"
                      >
                        {p.prize.name}
                      </a>
                    ) : (
                      <span className="text-xs text-gray-500 col-span-1 text-right">
                        No prize
                      </span>
                    )}
                  </li>
                ))}
            </ul>) :   <div className="text-center text-gray-400 italic py-4">
              No bingo game was run for this event.
            </div>}
          </div>
          <a
            href={event.vod}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block bg-main text-black font-bold px-6 py-3 rounded-lg shadow hover:bg-sub hover:text-white transition"
          >
            Watch VOD
          </a>
        </div>
      </div>
    </div>
  );
};
