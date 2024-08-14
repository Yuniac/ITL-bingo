import { useNavigate } from "react-router-dom";
import useSWR, { useSWRConfig } from "swr";

export const Header: React.FC = () => {
  const { data: user } = useSWR("user");
  const { mutate } = useSWRConfig();

  const navigate = useNavigate();

  const onLogout = () => {
    mutate(() => true, null, false);
    navigate("/register");
  };

  return (
    <header className="bg-sub w-full h-20 flex justify-between items-center px-8">
      {user ? (
        <h2 className="text-xl flex-1">Hello {user?.name}</h2>
      ) : (
        <div className="flex-1" />
      )}

      <p className="text-main text-center text-3xl flex-1">ITL - Game Show</p>

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
