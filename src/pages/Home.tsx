import React from "react";
import useSWR from "swr";

export const Home: React.FC = () => {
  const { data: user } = useSWR("user");

  return <div className="App">Welcome to my app</div>;
};
