import $http from "./$http";

class AuthService {
  public async signUp(payload: any) {
    try {
      const res = await $http.post("/v1/api/auth/signup", payload);

      return res.data;
    } catch (error) {
      return new Error("Request failed");
    }
  }

  public async login(payload: any) {
    try {
      const res = await $http.post("/v1/api/auth/login", payload);

      return res.data;
    } catch (error) {
      return new Error("Request failed");
    }
  }

  public async me() {
    try {
      const res = await $http.get("/v1/api/auth/me");

      return res.data;
    } catch (error) {
      return new Error("Request failed");
    }
  }
}

export const authService = new AuthService();
