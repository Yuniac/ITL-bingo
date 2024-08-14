// @ts-nocheck
import { Navigate } from "react-router-dom";
import { useSWRConfig } from "swr";

interface AtiraRouteProps {
  component?: React.ReactNode;
  redirect?: string;
}

export const NonLoggedInRoute: React.FC<AtiraRouteProps> = ({
  component,
  redirect,
}) => {
  const { cache } = useSWRConfig();
  const { data: user } = cache.get("user");

  if (user) {
    return <Navigate to={"/home"} replace />;
  }

  return component;
};
