import { Button, Flex, IconButton, Image } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useColorMode } from "./ui/color-mode";
import logo from "/vite.svg";

function AppHeader() {
  let { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Flex justify={"space-between"} padding={"8px 16px"}>
        <Image src={logo}></Image>
        <div>
          <Button margin={2}>Sign up</Button>
          <IconButton aria-label="Toggle color mode" onClick={toggleColorMode}>
            {colorMode === "light" ? <FaMoon /> : <FaSun />}
          </IconButton>
        </div>
      </Flex>
    </>
  );
}

export default AppHeader;
