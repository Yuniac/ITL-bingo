// @ts-nocheck
import { Navigate } from "react-router-dom";
import { useSWRConfig } from "swr";

interface AtiraRouteProps {
  component?: React.ReactNode;
  redirect?: string;
}

/** Makes sure only logged-in users can go to props.component */
export const LoggedInRoute: React.FC<AtiraRouteProps> = ({
  component,
  redirect,
}) => {
  const { cache } = useSWRConfig();
  const user = cache.get("user");

  if (!user) {
    return <Navigate to={"/register"} replace />;
  }

  if (redirect) {
    return <Navigate to={redirect} replace />;
  }

  return component;
};
