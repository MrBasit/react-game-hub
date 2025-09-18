import { Grid, GridItem } from "@chakra-ui/react";
import AppHeader from "./app-header";
import GenresList from "./GenresList";
import GameGrid from "./GameGrid";
import { useState } from "react";
import type { Genre } from "../hooks/useGeners";
function App() {
  let [selectedGenre, SetSelectedGenre] = useState<Genre | null>(null);
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
          <GenresList
            onGenreClick={(genre: Genre) => SetSelectedGenre(genre)}
          ></GenresList>
        </GridItem>
        <GridItem area={"main"} padding={"16px"}>
          <GameGrid selectedGenre={selectedGenre}></GameGrid>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
