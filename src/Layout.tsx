import { Flex } from "antd";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useSWRConfig } from "swr";

export const Layout: React.FC = () => {
  const { cache, mutate } = useSWRConfig();
  const user = cache.get("user");
  console.log(user?.data);

  useEffect(() => {
    mutate(() => true, undefined, { revalidate: false });
  }, []);

  return (
    <Flex style={{ width: "100%", height: "100%" }}>
      <Flex className="w-full justify-between flex-col overflow-y-auto">
        <header className="bg-sub w-full h-20 flex justify-between items-center px-2">
          <div />

          <p className="text-main text-center text-3xl">ITL - Game Show</p>

          {user ? <p>Hello {user.data?.name}</p> : <div />}
        </header>
        <Outlet />
      </Flex>
    </Flex>
  );
};
