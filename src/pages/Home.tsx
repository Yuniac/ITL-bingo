import React from "react";
import { Link } from "react-router-dom";
import { GoogleButton } from "../components/GoogleButton";
import useSWR from "swr";

export const Home: React.FC = () => {
  const { data: user } = useSWR("user");

  return (
    <div className="App flex flex-col gap-8 w-full h-vh">
      <div className="App flex flex-col gap-4 w-full">
        <h1 className="text-center text-3xl">Welcome to: ITL - Game show</h1>
        <hr />
        <div className="max-w-96 self-center flex gap-4 flex-col">
          <p className="text-center text-xl">Useful links:</p>
          <div className="flex justify-between gap-8">
            <Link className="underline text-l" to={"/cards"}>
              All categories
            </Link>
            <Link className="underline text-l" to={"/cards"}>
              Previous games
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-col gap-16">
        <p className="text-xl">How it works?</p>
        <ul className="list-disc list-inside">
          <li>
            Admin user creates a game, setting its date and allowed participants
          </li>
          <li>Game begins, players start earning points</li>
          <li>
            At the end of the game, the scores are calculated and the player
            with the most points wins
          </li>
        </ul>
        {!user ? (
          <div className="flex flex-col gap-4 justify-center items-center">
            <p className="text-xl">Ready to play? Sign up below</p>
            <GoogleButton />
          </div>
        ) : null}
      </div>
    </div>
  );
};
