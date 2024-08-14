import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "./Header";
import useSWR from "swr";
import { AxiosClient } from "./axios/Axios.client";

export const Layout: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  const { data } = useSWR(
    mounted ? `${process.env.REACT_APP_API_URL}/api/auth/refresh-token` : null,
    () => AxiosClient.post("/auth/refresh-token").then(({ data }) => data)
  );

  useEffect(() => {
    if (data?.token) {
      localStorage.setItem(
        process.env.REACT_APP_LOCAL_STORAGE_TOKEN_KEY!,
        data.token
      );
    }
  }, [data]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="w-full h-full">
      <div className="flex w-full justify-start items-center gap-4 flex-col overflow-y-auto">
        <Header />
        <div className="px-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
