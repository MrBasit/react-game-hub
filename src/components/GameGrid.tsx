import { useEffect, useState } from "react";
import { AxiosError } from "axios";
import axios from "./../services/api-client.service";
import { Text } from "@chakra-ui/react";
interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

function GameGrid() {
  let [games, setGames] = useState<Game[]>([]);
  let [error, setError] = useState<AxiosError>();

  useEffect(() => {
    axios
      .get<FetchGamesResponse>("/games")
      .then((response) => {
        console.log("response -> ", response);
        setGames(response.data.results);
      })
      .catch((e) => {
        setError(e);
      });
  }, []);

  return (
    <>
      {error && <Text>{error.message}</Text>}
      <ul>
        {games.map((g) => {
          return <li key={g.id}>{g.name}</li>;
        })}
      </ul>
    </>
  );
}

export default GameGrid;
