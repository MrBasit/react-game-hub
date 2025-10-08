import { Box, Card, Flex, Image } from "@chakra-ui/react";
import type { Game } from "../entities/Game";
import PlatformIcons from "./PlatformIcons";
import GameScore from "./GameScore";
import { GetOptimizedImageUrl } from "../services/optimized-images.service";
import { IoStar, IoStarOutline } from "react-icons/io5";
import { Link } from "react-router";

interface Prop {
  game: Game;
}

export default function GameCard({ game }: Prop) {
  return (
    <Card.Root
      _hover={{ transform: "scale(1.02)" }}
      transition={"transform 0.15s ease-in"}
      overflow="hidden"
      marginX={{ sm: "auto" }}
    >
      <Link to={"game/" + game.slug}>
        <Image src={GetOptimizedImageUrl(game.background_image)} />
        <Card.Body gap="2">
          <Flex width={"100%"} justifyContent="space-between">
            <PlatformIcons platforms={game.parent_platforms}></PlatformIcons>

            <GameScore score={game.metacritic}></GameScore>
          </Flex>
          <Box marginY={"8px"}>
            <Flex>
              {Array.from({ length: game.rating_top }, (a, index) => (
                <IoStar key={index}></IoStar>
              ))}
              {Array.from({ length: 5 - game.rating_top }, (a, index) => (
                <IoStarOutline key={index}></IoStarOutline>
              ))}
            </Flex>
          </Box>
          <Card.Title fontSize={"xl"}>{game.name}</Card.Title>
        </Card.Body>
      </Link>
    </Card.Root>
  );
}
