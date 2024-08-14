import { Flex } from "antd";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export const Layout: React.FC = () => {
  return (
    <Flex style={{ width: "100%", height: "100%" }}>
      <Flex className="w-full justify-start items-center gap-4 flex-col overflow-y-auto">
        <Header />
        <Outlet />
      </Flex>
    </Flex>
  );
};
