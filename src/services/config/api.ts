import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  HeadersDefaults,
  ResponseType,
} from "axios";

import { APP_API_URL } from "../../helper/constant";

//_________Config axios instance ___________

const config: AxiosRequestConfig<any> = {
  baseURL: APP_API_URL,
  headers: {},
};

const API = axios.create(config);
const { get, post, put, delete: remove } = API;

export type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  HeadersDefaults,
  ResponseType,
};

export { get, post, remove, put };
export default API;
