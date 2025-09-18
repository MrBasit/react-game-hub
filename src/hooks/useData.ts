import { CanceledError, type AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import apiClient from '../services/api-client.service'

export interface DataResponse<T> {
  count: number;
  results: T[];
}

function useData<T>(endpoint: string, deps?: any[], requestConfig?: AxiosRequestConfig) {
  let [data, setData] = useState<T[]>([]);
  let [error, setError] = useState<string>("");
  let [isLoading, setLoading] = useState(false);

  console.log(endpoint, deps, requestConfig)

  useEffect(() => {
    setLoading(true);
    let controller = new AbortController();
    apiClient
      .get<DataResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
      .then((response) => {
        setLoading(false);
        console.log("response -> ", response);
        setData(response.data.results);
      })
      .catch((e) => {
        if (e instanceof CanceledError) return;
        setLoading(false);
        setError(e.message);
      });

    return () => controller.abort();
  }, deps ? deps : []);

  return { data, error, isLoading };
}

export default useData;