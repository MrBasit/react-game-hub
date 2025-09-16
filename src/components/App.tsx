import { Grid, GridItem } from "@chakra-ui/react";
import { useColorModeValue } from "./ui/color-mode";
import AppHeader from "./app-header";
import AppSider from "./app-sider";
import AppMain from "./app-main";
function App() {
  let bg = useColorModeValue("gray.100", "gray.800");
  let color = useColorModeValue("gray.800", "gray.100");

  return (
    <>
      <Grid
        gridTemplateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        gap={2}
      >
        <GridItem area={"nav"}>
          <AppHeader />
        </GridItem>
        <GridItem
          hideBelow={"lg"}
          area={"aside"}
          // backgroundColor={bg}
          // color={color}
        >
          <AppSider></AppSider>
        </GridItem>
        <GridItem area={"main"}>
          <AppMain></AppMain>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
