import { Text, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

function GameGrid() {
  let { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 2, xl: 3 }} gap="40px">
        {games.map((g) => {
          return <GameCard key={g.id} game={g}></GameCard>;
        })}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
