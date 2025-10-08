import { useParams } from "react-router";
import useGame from "../hooks/useGame";
import { Box, Heading, Text } from "@chakra-ui/react";

let GameDetailPage = () => {
  let { slug } = useParams();
  let { data: Game } = useGame(slug!);
  console.log(Game);
  return (
    <Box padding={5}>
      <Heading>{Game?.name}</Heading>
      <Text>{Game?.description_raw}</Text>
    </Box>
  );
};

export default GameDetailPage;
