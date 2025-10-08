import { Grid, GridItem, Flex, Box } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GenresList from "../components/GenresList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

let HomePage = () => {
  return (
    <>
      <Grid
        gridTemplateAreas={{
          base: `"main"`,
          lg: `"aside main"`,
        }}
        gridTemplateColumns={{
          base: "1fr",
          lg: "300px 1fr",
        }}
        gap={1}
      >
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
};

export default HomePage;
