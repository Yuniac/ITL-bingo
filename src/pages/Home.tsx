import React from "react";
import { toast } from "react-toastify";
import useSWR from "swr";
import { AxiosClient } from "../axios/Axios.client";
import { Button } from "../components/Button";

export const Home: React.FC = () => {
  const { data: cards } = useSWR("cards", () =>
    AxiosClient.get("/card").then(({ data }) => data)
  );

  return (
    <div className="App flex flex-col gap-4 w-full">
      <h1>Welcome ITL - Game show</h1>
      <hr />
      <div className="flex justify-between">
        <h2>
          Below are the categories that we are going to use alongside their
          scores
        </h2>
        <Button
          loading={false}
          onClick={() => toast.info("Coming soon...")}
          text="Create new Game"
        />
      </div>
      <hr />
      <div className="grid grid-cols-8 gap-3">
        {cards?.map((card: any) => (
          <div
            key={card._id}
            className="gap-2 border-sub border-2 p-4 flex flex-col justify-between items-center"
            style={{
              height: "20rem",
              width: "10rem",
            }}
          >
            <h3 className="text-center text-wrap overflow-hidden break-words">
              {card.name}
            </h3>
            <p className="text-center">
              Score: <span className="text-sub">{card.score}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
