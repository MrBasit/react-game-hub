import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from '../services/api-client.service'
interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

function useGames() {
  let [games, setGames] = useState<Game[]>([]);
  let [error, setError] = useState<string>("");

  useEffect(() => {
    let controller = new AbortController();
    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((response) => {
        console.log("response -> ", response);
        setGames(response.data.results);
      })
      .catch((e) => {
        if (e instanceof CanceledError) return;
        setError(e.message);
      });

    return () => controller.abort();
  }, []);

  return { games, error };
}

export default useGames;