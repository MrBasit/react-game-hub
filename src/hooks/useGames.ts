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

function useGames(selectedGenre: Genre | null) {
  return useData<Game>('/games', [selectedGenre], { params: { genres: selectedGenre?.id } });
}

export default useGames;