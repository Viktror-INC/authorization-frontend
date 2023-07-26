import axios from "axios";

export const api = axios.create({
  withCredentials: true,
  baseURL: process.env.NEXT_LOCAL_API_URL || process.env.NEXT_PUBLIC_API_URL,
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const response = error.response;

    try {
      if (
        response.status == 401 &&
        response.config &&
        !response.config._isRetry
      ) {
        error.response.config._isRetry = true;

        // set cookie if user have refresh token
       await axios.get(
          `${
            process.env.NEXT_LOCAL_API_URL || process.env.NEXT_PUBLIC_API_URL
          }/refresh`,
          {
            withCredentials: true,
          }
        );


        return api.request(response.config);
      }

      return Promise.reject(error);
    } catch {
      return Promise.reject(error);
    }
  }
);
