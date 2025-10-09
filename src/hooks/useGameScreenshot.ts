import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client.service";
import type { DataResponse } from "./useData";
import type { Screenshot } from "../entities/Screenshot";

let useGameScreenshots = (slug: string) => {
  let apiClient = new APIClient<Screenshot>(`/games/${slug}/screenshots`);
  let gameTrailerQuery = useQuery<DataResponse<Screenshot>, Error>({
    queryKey: ["GameScreenshots", slug],
    queryFn: () => apiClient.getAll()
  });
  return gameTrailerQuery;
}

export default useGameScreenshots;