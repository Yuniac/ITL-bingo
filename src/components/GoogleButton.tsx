import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useSWRConfig } from "swr";
import { AxiosClient } from "../axios/Axios.client";

export const GoogleButton: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { cache, mutate } = useSWRConfig();
  const { data: user } = cache.get("user") || {};

  const [isLoading, setIsLoading] = useState(false);

  const googleAuth = async () => {
    setIsLoading(true);
    try {
      const { data: googleAuthUrl } = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/auth/create-google-auth-link`
      );

      window.open(googleAuthUrl, "_self");
    } catch (error: any) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const verifyAndLogUser = useCallback(
    async (code: string) => {
      try {
        const { data } = await AxiosClient.post("/auth/google", { code });

        if (data.user) {
          mutate("user", data.user);
          mutate("token", data.token);
          localStorage.setItem(
            process.env.REACT_APP_LOCAL_STORAGE_TOKEN_KEY!,
            data.token
          );
          navigate("/home", { replace: true });
          toast.success("Logged in successfully");
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    },
    [mutate, navigate]
  );

  useEffect(() => {
    const verificationCode = searchParams.get("code");
    if (verificationCode && !user) {
      setIsLoading(true);
      searchParams.set("code", "");
      verifyAndLogUser(verificationCode);
    }
  }, [searchParams, verifyAndLogUser, user]);

  return (
    <div className="border-sub border-2  rounded-md hover:bg-black transition-all cursor-pointer">
      <button
        className={`flex p-4 justify-center items-center  ${isLoading ? "animate-pulse" : ""}  transition-all`}
        onClick={googleAuth}
      >
        <p className="text-main">Continue with Google</p>
      </button>
    </div>
  );
};
