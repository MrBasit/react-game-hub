import { Card, Flex, HStack, Image } from "@chakra-ui/react";
import type { Game } from "../hooks/useGames";
import PlatformIcons from "./PlatformIcons";
import GameScore from "./GameScore";
import { GetOptimizedImageUrl } from "../services/optimized-images.service";

interface Prop {
  game: Game;
}

export default function GameCard({ game }: Prop) {
  return (
    <Card.Root overflow="hidden" marginX={{ sm: "auto" }}>
      <Image src={GetOptimizedImageUrl(game.background_image)} />
      <Card.Body gap="2">
        <Card.Title>{game.name}</Card.Title>
      </Card.Body>
      <Card.Footer gap="2">
        <Flex width={"100%"} justifyContent="space-between">
          <PlatformIcons platforms={game.parent_platforms}></PlatformIcons>

          <GameScore score={game.metacritic}></GameScore>
        </Flex>
      </Card.Footer>
    </Card.Root>
  );
}
