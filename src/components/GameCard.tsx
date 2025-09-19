import { Box, Card, Flex, Image } from "@chakra-ui/react";
import type { Game } from "../hooks/useGames";
import PlatformIcons from "./PlatformIcons";
import GameScore from "./GameScore";
import { GetOptimizedImageUrl } from "../services/optimized-images.service";
import { IoStar, IoStarOutline } from "react-icons/io5";

interface Prop {
  game: Game;
}

export default function GameCard({ game }: Prop) {
  return (
    <Card.Root overflow="hidden" marginX={{ sm: "auto" }}>
      <Image src={GetOptimizedImageUrl(game.background_image)} />
      <Card.Body gap="2">
        <Flex width={"100%"} justifyContent="space-between">
          <PlatformIcons platforms={game.parent_platforms}></PlatformIcons>

          <GameScore score={game.metacritic}></GameScore>
        </Flex>
        <Box marginY={"8px"}>
          <Flex>
            {Array.from({ length: game.rating_top }, () => (
              <IoStar></IoStar>
            ))}
            {Array.from({ length: 5 - game.rating_top }, () => (
              <IoStarOutline></IoStarOutline>
            ))}
          </Flex>
        </Box>
        <Card.Title fontSize={"xl"}>{game.name}</Card.Title>
      </Card.Body>
    </Card.Root>
  );
}
