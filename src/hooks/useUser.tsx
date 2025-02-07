import { useStore } from "@nanostores/react";
import { useLocalStorage } from "usehooks-ts";
import { authToken } from "../store/user.atom";

export default function useUser() {
  const token = useStore(authToken);
  const [user, setUser] = useLocalStorage<any>("sknuser", null);

  return {
    user,
    setUser,
    token,
  };
}
