import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

function GameGrid() {
  let { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((g) => {
          return <li key={g.id}>{g.name}</li>;
        })}
      </ul>
    </>
  );
}

export default GameGrid;
