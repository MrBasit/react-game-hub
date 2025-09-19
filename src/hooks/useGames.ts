import type { QueryObject } from "../components/App";
import useData from "./useData";

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
  return useData<Game>('/games', [query],
    {
      params: {
        genres: query?.Genre?.id,
        parent_platforms: query?.Platform?.id,
        ordering: query?.Sort?.value,
        search: query.SearchText
      }
    });
}

export default useGames;