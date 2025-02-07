import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { useLocation } from "react-router-dom";
import { isObjectEmpty } from "../utils/utils";
import useUser from "../hooks/useUser";
import { isTokenExpired } from "../utils/user";
import { logout } from "../store/user.atom";
import { authService } from "../services/auth.service";
import { User } from "../dto/user.dto";

interface AuthContextType {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  authenticatedUser: User;
  setAuthenticatedUser: Dispatch<SetStateAction<User>>;
  loading?: boolean;
  setLoading?: Dispatch<SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }: { children: ReactNode }) {
  const { user, token, setUser } = useUser();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const { pathname } = useLocation();
  const [authenticatedUser, setAuthenticatedUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const checkLogin = async () => {
    if ((user && !isObjectEmpty(user)) || !isObjectEmpty(token)) {
      const expiredToken = isTokenExpired(token?.expiresAt as string);
      if (expiredToken) {
        logout();
        setIsLoggedIn(false);
        return;
      }
    }
  };

  useEffect(() => {
    checkLogin();
  }, [pathname, token, user]);

  useEffect(() => {
    (async () => {
      try {
        const me: User = await authService.me();
        // console.log("me: ", me)

        setUser(me ?? {});
        setAuthenticatedUser(me);
        setIsLoggedIn(true);
        setLoading(false);
      } catch (error) {
        setLoading(false);

        throw error;
      }
    })();
  }, []);

  const values = {
    isLoggedIn,
    setIsLoggedIn,
    authenticatedUser,
    setAuthenticatedUser,
    loading,
    setLoading,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}
