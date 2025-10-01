import { Text, SimpleGrid, Spinner } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import type { QueryObject } from "./App";
import DynamicHeading from "./DynamicHeading";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface Prop {
  query: QueryObject;
}

function GameGrid({ query }: Prop) {
  let {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(query);
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8];
  let dataLength =
    data?.pages.reduce((acc, page) => (acc = acc + page.results.length), 0) ||
    0;
  console.log(dataLength);
  return (
    <>
      {error && <Text>{error.message}</Text>}
      {!error && <DynamicHeading query={query}></DynamicHeading>}
      <InfiniteScroll
        dataLength={dataLength}
        loader={<Spinner></Spinner>}
        hasMore={hasNextPage}
        next={fetchNextPage}
      >
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 2, xl: 3 }} gap="16px">
          {isLoading &&
            skeleton.map((s) => {
              return <GameCardSkeleton key={s} />;
            })}
          {data?.pages.map((game, index) => {
            return (
              <React.Fragment key={index}>
                {game?.results.map((g) => {
                  return <GameCard key={g.id} game={g}></GameCard>;
                })}
              </React.Fragment>
            );
          })}
        </SimpleGrid>
      </InfiniteScroll>
    </>
  );
}

export default GameGrid;
