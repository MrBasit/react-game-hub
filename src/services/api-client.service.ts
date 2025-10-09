import axios, { type AxiosRequestConfig } from "axios";
import { type DataResponse } from "../hooks/useData";

const Axios = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "cf9b9ec940bf485584f5cbc821f3ec8b",
  },
});

class APIClient<T> {
  EndPoint: string;
  constructor(endpoint: string) {
    this.EndPoint = endpoint;
  }

  getAll = (config?: AxiosRequestConfig) => {
    return Axios.get<DataResponse<T>>(this.EndPoint, config).then(response => response.data);
  }

  get = (id?: string | number) => {
    let callEndPoint = this.EndPoint + (id ? `/${id}` : '');
    return Axios.get<T>(callEndPoint).then(response => response.data);
  }
}

export default APIClient;