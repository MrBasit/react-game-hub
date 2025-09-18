import { Text, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

function GameGrid() {
  let { games, error, isLoading } = useGames();
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 2, xl: 3 }} gap="16px">
        {isLoading &&
          skeleton.map((s) => {
            return <GameCardSkeleton key={s} />;
          })}
        {games.map((g) => {
          return <GameCard key={g.id} game={g}></GameCard>;
        })}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
