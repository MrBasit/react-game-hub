// import useData from "./useData";
import { useQuery } from "@tanstack/react-query";
import Genres from "../data/Genres";
import APIClinet from "../services/api-client.service";
import type { DataResponse } from "./useData";
import type { Genre } from "../entities/Genre";

let apiClient = new APIClinet<Genre>('/genre')
// let useGeners = () => useData<Genre>('/genres');
// let useGeners = () => { return { data: Genres, error: '', isLoading: false } };

let useGeners = () => {
  let queryGenre = useQuery({
    queryKey: ['Genres'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 60 * 100,
    initialData: { count: Genres.length, results: Genres, next: null }
  })
  return queryGenre
}

export default useGeners;