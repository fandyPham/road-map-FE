import axios, { AxiosRequestConfig, AxiosInstance } from "axios";

import { LocalStorageService } from "../";
import { LocalStorageUserKey } from "@utils/common";

declare module "axios" {
  export interface AxiosRequestConfig {
    throwAccessDenied?: boolean; // is true if you want to self handle access denied exception
  }
}

export const createService = (
  baseURL?: string,
  contentType: string = "application/json"
): AxiosInstance => {
  return interceptAuth(baseConfig(baseURL, contentType));
};

export const downloadFileService = (
  baseURL?: string,
  contentType: string = "application/json"
): AxiosInstance => {
  const config: AxiosRequestConfig = baseConfig(baseURL, contentType);
  config.responseType = "blob";
  return interceptAuth(config);
};

const baseConfig = (
  baseURL?: string,
  contentType: string = "application/json"
) => {
  return {
    baseURL,
    headers: {
      "Accept-Language": "vi",
      "Content-Type": contentType,
    },
  };
};

const interceptAuth = (config: AxiosRequestConfig) => {
  const instance = axios.create(config);
  instance.interceptors.request.use((cf) => {
    const { access_token: token } = JSON.parse(
      LocalStorageService.get(LocalStorageUserKey) || "{}"
    );

    if (token && cf?.headers) {
      cf.headers["Authorization"] = "Bearer " + token;
    }
    return cf;
  });
  instance.interceptors.response.use(
    (response) => {
      // Do something with response data
      return response;
    },
    async (error) => {
      const refreshToken = LocalStorageService.get(
        LocalStorageService.REFRESH_TOKEN
      );
      if (error.response.status === 401) {
        // return await exchangeToken((refreshToken || "") as string)
        // .then(async (response: any) => {
        //   const originalRequest = error.config;
        //   originalRequest.headers["Authorization"] =
        //     "Bearer " + response.data.accessToken;
        //   LocalStorageService.set(
        //     LocalStorageService.OAUTH_TOKEN,
        //     response.data.accessToken
        //   );
        //   LocalStorageService.set(
        //     LocalStorageService.REFRESH_TOKEN,
        //     response.data.refreshToken
        //   );
        //   return await axios(originalRequest);
        // })
        // .catch(async (error: any) => {
        LocalStorageService.removeAllItem();
        return Promise.reject(error);
        // });
      } else {
        // Do something with response error
        return Promise.reject(error);
      }
    }
  );
  return instance;
};

export const createServiceNoToken = (baseURL?: string): AxiosInstance => {
  const instance = axios.create({
    baseURL: baseURL || process.env.REACT_APP_API_ENDPOINT,
    headers: {
      "Accept-Language": "vi",
      "Content-Type": "application/json",
    },
  });
  instance.interceptors.request.use((config) => {
    return config;
  });
  return instance;
};

export const instance = createServiceNoToken(
  process.env.NEXT_PUBLIC_API_ENDPOINT
);
export const instance_token = createService(process.env.NEXT);

export const formDataInstance = createService(
  process.env.REACT_APP_API_ENDPOINT,
  "multipart/form-data"
);
