import { Header } from "./Header";
import { Footer } from "./Footer";
import { Home } from "./pages/Home";

export const Layout: React.FC = () => {
  return (
    <div className="w-full h-full">
      <div className="flex w-full justify-start items-center gap-4 flex-col overflow-y-auto">
        <Header />
        <div className="px-8 w-full h-full">
          <Home />
        </div>
        <Footer />
      </div>
    </div>
  );
};
