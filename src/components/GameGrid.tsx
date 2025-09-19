import { Text, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import type { QueryObject } from "./App";
import DynamicHeading from "./DynamicHeading";

interface Prop {
  query: QueryObject;
}

function GameGrid({ query }: Prop) {
  let { data, error, isLoading } = useGames(query);
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      {error && <Text>{error}</Text>}
      {!error && <DynamicHeading query={query}></DynamicHeading>}
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
