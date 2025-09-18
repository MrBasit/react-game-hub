import type { QueryObject } from "../components/App";
import useData from "./useData";
import type { Genre } from "./useGeners";

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
  metacritic: number
}

function useGames(query: QueryObject) {
  return useData<Game>('/games', [query], { params: { genres: query?.Genre?.id, parent_platforms: query?.Platform?.id } });
}

export default useGames;