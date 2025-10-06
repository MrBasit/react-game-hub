import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import AppHeader from "./app-header";
import GameGrid from "./GameGrid";
import GenresList from "./GenresList";
import PlatformSelector from "./PlatformSelector";
import SortSelector from "./SortSelector";

function App() {
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
          <AppHeader />
        </GridItem>
        <GridItem hideBelow={"lg"} area={"aside"} padding={"8px 16px"}>
          <GenresList></GenresList>
        </GridItem>
        <GridItem area={"main"} padding={"16px"}>
          <Flex>
            <Box marginRight={"16px"}>
              <PlatformSelector></PlatformSelector>
            </Box>
            <SortSelector></SortSelector>
          </Flex>
          <GameGrid></GameGrid>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
