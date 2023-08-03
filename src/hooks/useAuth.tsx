import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Configuration,
  FrontendApi,
  LoginFlow,
  RegistrationFlow,
  Session,
} from "@ory/client";

const ory = new FrontendApi(
  new Configuration({
    basePath: "https://app.coreup.io/kratos",
    baseOptions: {
      // Ensures we send cookies in the CORS requests.
      withCredentials: true,
    },
  }),
);
const AuthContext = createContext<{
  user: null | Session;
  getRegistrationFlow: () => Promise<RegistrationFlow>;
  register: (id: string, params: any) => Promise<void>;
  getLoginFlow: () => Promise<LoginFlow>;
  login: (id: string, params: any) => Promise<void>;
  logout: () => Promise<void>;
}>({} as any);

export const AuthProvider = ({ children }: { children: any }) => {
  const [user, setUser] = useState<Session | null>(null);
  const navigate = useNavigate();

  const getUser = async () => {
    try {
      const { data } = await ory.toSession();
      setUser(data as any);
    } catch (error) {
      setUser(null);
    }
  };

  const getLoginFlow = async () => {
    const { data } = await ory.createBrowserLoginFlow();
    return data;
  };

  const login = async (id: string, params: any) => {
    try {
      const response = await ory.updateLoginFlow({
        flow: id,
        updateLoginFlowBody: { ...params },
      });
    } catch (error: any) {
      if (error.response?.data?.redirect_browser_to) {
        window.location.href = error.response?.data?.redirect_browser_to;
      }
      console.error(error);
    }

    getUser();
  };

  const getRegistrationFlow = async () => {
    const { data } = await ory.createBrowserRegistrationFlow();
    return data;
  };

  const register = async (id: string, params: any) => {
    try {
      const response = await ory.updateRegistrationFlow({
        flow: id,
        updateRegistrationFlowBody: { ...params },
      });
    } catch (error: any) {
      if (error.response?.data?.redirect_browser_to) {
        window.location.href = error.response?.data?.redirect_browser_to;
      }
      console.error(error);
    }

    getUser();
  };

  useEffect(() => {
    getUser();
  }, []);

  const logout = async () => {
    if (user !== null && user.id) {
      const { data } = await ory.createBrowserLogoutFlow({
        // id: user?.id,
      });
      await ory.updateLogoutFlow({
        token: data.logout_token,
      });
    }
    setUser(null);
    navigate("/", { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      getRegistrationFlow,
      register,
      getLoginFlow,
      login,
      logout,
    }),
    [user],
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
