import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from '../services/api-client.service'

export interface DataResponse<T> {
  count: number;
  results: T[];
}

function useData<T>(endpoint: string) {
  let [data, setData] = useState<T[]>([]);
  let [error, setError] = useState<string>("");
  let [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    let controller = new AbortController();
    apiClient
      .get<DataResponse<T>>(endpoint, { signal: controller.signal })
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
  }, []);

  return { data, error, isLoading };
}

export default useData;