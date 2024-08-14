import React from "react";
import { Link } from "react-router-dom";

export const Home: React.FC = () => {
  return (
    <div className="App flex flex-col gap-8 w-full">
      <h1 className="text-center text-3xl">Welcome to: ITL - Game show</h1>
      <hr />
      <div>
        <p>Useful links:</p>
        <Link to={"/cards"}>All categories</Link>
      </div>
      <div>
        <h3>How it works?</h3>
      </div>
    </div>
  );
};
