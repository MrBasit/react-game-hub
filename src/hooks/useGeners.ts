// import useData from "./useData";
import { useQuery } from "@tanstack/react-query";
import Genres from "../data/Genres";
import apiClient from "../services/api-client.service";
import type { DataResponse } from "./useData";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// let useGeners = () => useData<Genre>('/genres');
// let useGeners = () => { return { data: Genres, error: '', isLoading: false } };

let useGeners = () => {
  let queryGenre = useQuery({
    queryKey: ['Genres'],
    queryFn: () => {
      return apiClient.get<DataResponse<Genre>>('/genres').then(response => response.data)
    },
    staleTime: 24 * 60 * 60 * 60 * 100,
    initialData: { count: Genres.length, results: Genres }
  })
  return queryGenre
}

export default useGeners;