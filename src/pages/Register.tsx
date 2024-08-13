import { GoogleButton } from "../components/GoogleButton";

export const Register: React.FC = () => {
  return (
    <div className="w-full h-full flex justify-center items-center self-center flex-col gap-4">
      <h1>To get started, sign up using the button below:</h1>

      <GoogleButton />
    </div>
  );
};
