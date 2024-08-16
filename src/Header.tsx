import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useSWR, { useSWRConfig } from "swr";

export const Header: React.FC = () => {
  const { data: user } = useSWR("user");
  const { mutate } = useSWRConfig();

  const navigate = useNavigate();

  const createGame = () => {
    navigate("/game/create");
  };

  const onLogout = useCallback(() => {
    mutate(() => true, null, false);
    navigate("/register");
    toast.info("Logged out successfully");
  }, [mutate, navigate]);

  return (
    <header className="bg-sub w-full h-20 flex justify-between items-center px-8">
      {user ? (
        <div className="flex flex-1 justify-start items-center gap-4">
          <h2 className="text-xl">Hello {user?.name}</h2>
          <div>
            {user.admin ? (
              <button className="underline" onClick={createGame}>
                Create Game
              </button>
            ) : null}
          </div>
        </div>
      ) : (
        <div className="flex-1" />
      )}

      <p className="text-main text-center text-5xl flex-1">ITL - Game Show</p>

      {user ? (
        <div className="flex-1 flex justify-end cursor-pointer underline">
          <button onClick={onLogout}>Log-out</button>
        </div>
      ) : (
        <div className="flex-1" />
      )}
    </header>
  );
};
