import { LightBlue2 } from "./assets";

export const Header: React.FC = () => {
  return (
    <header className="w-full flex justify-between items-center py-4 px-8">
      <div className="flex-1" />
      <div className="flex flex-col items-center justify-center gap-4">
        <div>
          <img
            src={LightBlue2}
            alt="site logo"
            className="mx-auto mb-8 drop-shadow-[0_0_40px_rgba(75,226,255,0.5)]"
          />
        </div>
        <div className="flex flex-col items-center justify-center mt-4 mb-12">
          <h1 className="text-main text-4xl md:text-5xl font-extrabold tracking-wide text-center drop-shadow-lg underline underline-offset-8 decoration-main/30">
            IN THE LIGHT
          </h1>
          <div className="text-sub text-xl md:text-2xl text-center mt-2 tracking-wider drop-shadow">
            GAMES SHOWS BINGO
          </div>
        </div>
      </div>
      <div className="flex-1" />
    </header>
  );
};
