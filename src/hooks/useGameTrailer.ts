import { useQuery } from "@tanstack/react-query";
import type { Trailer } from "../entities/Trailer";
import APIClient from "../services/api-client.service";
import type { DataResponse } from "./useData";

let useGameTrailer = (slug: string) => {
  let apiClient = new APIClient<Trailer>(`/games/${slug}/movies`);
  let gameTrailerQuery = useQuery<DataResponse<Trailer>, Error>({
    queryKey: ["GameTrailer", slug],
    queryFn: () => apiClient.getAll()
  });
  return gameTrailerQuery;
}

export default useGameTrailer;