import { Text, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import type { Genre } from "../hooks/useGeners";

interface Prop {
  selectedGenre: Genre | null;
}

function GameGrid({ selectedGenre }: Prop) {
  let { data, error, isLoading } = useGames(selectedGenre);
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 2, xl: 3 }} gap="16px">
        {isLoading &&
          skeleton.map((s) => {
            return <GameCardSkeleton key={s} />;
          })}
        {data.map((g) => {
          return <GameCard key={g.id} game={g}></GameCard>;
        })}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
