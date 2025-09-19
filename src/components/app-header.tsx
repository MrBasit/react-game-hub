import {
  Box,
  Button,
  Center,
  Flex,
  IconButton,
  Image,
  Input,
  InputGroup,
} from "@chakra-ui/react";
import { FaMoon, FaSearch, FaSun } from "react-icons/fa";
import { useColorMode } from "./ui/color-mode";
import logo from "./../assets/gaming-hub.png";
import { useRef } from "react";

interface Props {
  onSearchChange: (searchText: string) => void;
}

function AppHeader({ onSearchChange }: Props) {
  let { colorMode, toggleColorMode } = useColorMode();
  let searchRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <Box>
        <Flex
          justify={"space-between"}
          alignItems={"Center"}
          padding={"8px 16px"}
        >
          <Image
            width={"50px"}
            height={"50px"}
            display="block"
            src={logo}
          ></Image>

          <InputGroup flex="1" marginX={"8px"} startElement={<FaSearch />}>
            <Input
              placeholder="Search Movies"
              ref={searchRef}
              onChange={() =>
                onSearchChange(searchRef.current ? searchRef.current.value : "")
              }
            />
          </InputGroup>

          <Box width={"140px"}>
            <Button margin={2}>Sign up</Button>
            <IconButton
              aria-label="Toggle color mode"
              onClick={toggleColorMode}
            >
              {colorMode === "light" ? <FaMoon /> : <FaSun />}
            </IconButton>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default AppHeader;
