import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client.service";
import type { DataResponse } from "./useData";
import type { Game } from "../entities/Game";

let useGame = (slug: string) => {
  let apiClient = new APIClient<Game>("/games");
  let GameQuery = useQuery<Game, Error>({
    queryKey: ["game", slug],
    queryFn: () => apiClient.get(slug!),
    staleTime: 24 * 60 * 60 * 1000
  });

  return GameQuery;
}

export default useGame;