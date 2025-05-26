import { Outlet } from "react-router-dom";

import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout: React.FC = () => {


  return (
    <div className="w-full h-full">
      <div className="flex w-full justify-start items-center gap-4 flex-col overflow-y-auto">
        <Header />
        <div className="px-8 w-full h-full">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};
