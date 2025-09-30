import { useQuery } from "@tanstack/react-query";
import type { QueryObject } from "../components/App";
import useData, { type DataResponse } from "./useData";
import apiClient from "../services/api-client.service";

export interface Platform {
  id: number;
  slug: string;
  name: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number,
  rating_top: number
}

function useGames(query: QueryObject) {
  let queryGames = useQuery<DataResponse<Game>, Error>({
    queryKey: ['games', query],
    queryFn: () => apiClient.get('/games', {
      params: {
        genres: query?.Genre?.id,
        parent_platforms: query?.Platform?.id,
        ordering: query?.Sort?.value,
        search: query.SearchText
      }
    }).then(response => response.data)
  })

  return queryGames;

  // return useData<Game>('/games', [query],
  //   {
  //     params: {
  //       genres: query?.Genre?.id,
  //       parent_platforms: query?.Platform?.id,
  //       ordering: query?.Sort?.value,
  //       search: query.SearchText
  //     }
  //   });

}

export default useGames;