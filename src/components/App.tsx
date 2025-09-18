import { Grid, GridItem } from "@chakra-ui/react";
import AppHeader from "./app-header";
import GenresList from "./GenresList";
import GameGrid from "./GameGrid";
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
          <GameGrid></GameGrid>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
