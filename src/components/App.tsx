import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import AppHeader from "./app-header";
import GenresList from "./GenresList";
import GameGrid from "./GameGrid";
import { useState } from "react";
import type { Genre } from "../hooks/useGeners";
import PlatformSelector from "./PlatformSelector";
import { type Platform } from "../hooks/useGames";
import SortSelector, { type SortItem } from "./SortSelector";

export interface QueryObject {
  Genre: Genre | null;
  Platform: Platform | null;
  Sort: SortItem | null;
  SearchText: String;
}
function App() {
  let [queryObject, setQuery] = useState<QueryObject>({} as QueryObject);
  return (
    <>
      <Grid
        gridTemplateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        gridTemplateColumns={{
          base: "1fr",
          lg: "300px 1fr",
        }}
        gap={1}
      >
        <GridItem area={"nav"}>
          <AppHeader
            onSearchChange={(searchText) =>
              setQuery({ ...queryObject, SearchText: searchText })
            }
          />
        </GridItem>
        <GridItem hideBelow={"lg"} area={"aside"} padding={"8px 16px"}>
          <GenresList
            onGenreClick={(genre: Genre) =>
              setQuery({ ...queryObject, Genre: genre })
            }
            query={queryObject}
          ></GenresList>
        </GridItem>
        <GridItem area={"main"} padding={"16px"}>
          <Flex>
            <Box marginRight={"16px"}>
              <PlatformSelector
                query={queryObject}
                onPlatformSelection={(platform: Platform) =>
                  setQuery({ ...queryObject, Platform: platform })
                }
              ></PlatformSelector>
            </Box>

            <SortSelector
              onSortSelection={(sortItem: SortItem) =>
                setQuery({ ...queryObject, Sort: sortItem })
              }
              selectedSort={queryObject.Sort}
            ></SortSelector>
          </Flex>
          <GameGrid query={queryObject}></GameGrid>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
