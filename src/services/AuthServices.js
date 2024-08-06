import requests from "./httpServices";

const AuthServices = {
    loginAdmin: async (payload) => {
      return  requests.post(`/jwt-auth/v1/token`, payload);
    },
};

export default AuthServices;
