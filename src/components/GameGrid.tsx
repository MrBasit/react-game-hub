import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../hooks/useGames";
import queryStore from "../stores/queryStore";
import DynamicHeading from "./DynamicHeading";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

function GameGrid() {
  let querystore = queryStore();
  let query = {
    GenreId: querystore.GenreId,
    PlatformId: querystore.PlatformId,
    Sort: querystore.Sort || null,
    SearchText: querystore.SearchText || "",
  };
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
  return (
    <>
      {error && <Text>{error.message}</Text>}
      {!error && <DynamicHeading></DynamicHeading>}
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
