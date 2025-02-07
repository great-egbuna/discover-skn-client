import { toast } from "react-toastify";
import { authToken } from "../store/user.atom";

export const requestInterceptor = async (config: any) => {
  try {
    if (config.method !== "get" && config.method !== "delete") {
      if (config.data) {
        config.data = { ...(config?.data ?? {}) };
      }
      // @ts-ignore
      config.body = config.data;
    }

    if (["get", "head"].includes(config.method.toLowerCase())) {
      Reflect.deleteProperty(config, "body");
    }

    if (!config.headers["authorization"]) {
      if (config.headers.set) {
        config.headers.set("Authorization", "Bearer " + authToken.get()?.token);
      } else {
        config.headers["authorization"] = `Bearer ${authToken.get()?.token}`;
      }
    }
  } catch (e) {
    console.table({ error: e, code: "Interceptor handler" });
  }
  return config;
};

export const responseErrorInterceptor = async (axiosResponse: any) => {
  const resp = axiosResponse?.response ?? axiosResponse;

  if (!resp?.status && !resp?.config.signal.aborted) {
    //For intentionally canceled requests
    toast.error("Seems you are experiencing problems with connectivity");
  }
  throw axiosResponse;
};
