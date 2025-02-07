import { persistentMap } from "@nanostores/persistent";

//@ts-ignore

export const userAtomMap = persistentMap("@sknusermap", null);

export const authToken = persistentMap("@discover-skn-token", null as any);

export const saveUser = (user: any) => {
  if (!user) {
    localStorage.removeItem("sknuser");
    return userAtomMap.set(null as any);
  }
  localStorage.setItem("sknuser", JSON.stringify(user));
  userAtomMap.set(user);
};

export const logout = () => {
  authToken.set({});
  saveUser({});
};
